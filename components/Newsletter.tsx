"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bell } from "lucide-react";
import { createNewsletter, ApiError } from "@/lib/api";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await createNewsletter({ email });
      setStatus("success");
      setEmail("");
      toast.success("Subscribed successfully!");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      const apiError = error as ApiError;
      setStatus("idle");
      toast.error(apiError.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-16 rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden text-center space-y-8"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px] -z-10" />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-blue">
              <Bell size={32} />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Stay in the <span className="text-brand-blue">Loop.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Subscribe to my newsletter for insights on modern web development, 
              AI experiments, and technical deep-dives.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="relative max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
            />
            <button
              disabled={status === "loading"}
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : status === "success" ? (
                "Subscribed!"
              ) : (
                <>
                  Join Now
                  <Send size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
            No spam. Just pure technical value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
