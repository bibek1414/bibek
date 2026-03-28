"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { profileData } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Ready to collaborate? Let's discuss your next project or just say hello."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-white tracking-tight">Collaboration <br /> Starts Here.</h3>
            
            <div className="space-y-8">
              {[
                { label: "Email", value: profileData.email, icon: Mail, color: "text-brand-blue" },
                { label: "Phone", value: profileData.phone, icon: Phone, color: "text-brand-purple" },
                { label: "Location", value: "Hetauda, Nepal", icon: MapPin, color: "text-brand-pink" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className={cn("p-4 rounded-2xl bg-white/5 border border-white/5 transition-all group-hover:scale-110", item.color)}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links Badge */}
            <div className="p-8 rounded-3xl bg-gradient-premium/5 border border-white/5 backdrop-blur-md">
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Social Ecosystem</h4>
              <div className="flex flex-wrap gap-4">
                {profileData.socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/5 text-sm font-semibold text-white hover:bg-white/10 hover:border-brand-blue transition-all"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-4">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-blue font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-white font-semibold">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground ml-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Bibek Bhattarai"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-brand-blue focus:bg-white/10 outline-none transition-all placeholder:text-muted-foreground/30"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="bbhattarai770@gmail.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-brand-blue focus:bg-white/10 outline-none transition-all placeholder:text-muted-foreground/30"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground ml-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-brand-blue focus:bg-white/10 outline-none transition-all placeholder:text-muted-foreground/30"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground ml-1">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-brand-blue focus:bg-white/10 outline-none transition-all placeholder:text-muted-foreground/30 resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-white text-background font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-background/30 border-t-background rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
