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
    <section className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-16 border border-[#E8E6E1] bg-[#FAF9F6] bg-white text-center space-y-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-14 h-14 border border-[#E8E6E1] flex items-center justify-center text-stone-700 bg-[#FAF9F6]">
                <Bell size={24} />
              </div>
            </motion.div>

            <div className="space-y-4">
              <span className="font-mono text-xs text-[#6B6661]">
                07 / Dispatch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17]">
                Stay in the Loop
              </h2>
              <p className="text-[#6B6661] text-sm max-w-xl mx-auto font-sans leading-relaxed">
                Subscribe to my newsletter for insights on modern web development, 
                AI pipelines, and clean technical execution notes.
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
                className="flex-1 px-4 py-3 bg-[#FAF9F6] border border-[#E8E6E1] text-[#1C1A17] placeholder:text-[#6B6661]/60 focus:outline-none focus:border-[#1C1A17] font-sans text-sm rounded-none"
              />
              <button
                disabled={status === "loading"}
                className="px-6 py-3 bg-[#1C1A17] text-[#FAF9F6] text-xs font-mono hover:bg-stone-800 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer rounded-none"
              >
                {status === "loading" ? (
                  "Subscribing..."
                ) : status === "success" ? (
                  "Subscribed!"
                ) : (
                  <>
                    Join Now
                    <Send size={12} />
                  </>
                )}
              </button>
            </form>

            <p className="text-[10px] text-[#6B6661] font-mono">
              No spam. Just pure technical value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
