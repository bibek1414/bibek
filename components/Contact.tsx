"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { profileData } from "@/lib/data";
import { createContact } from "@/lib/api";
import { toast } from "sonner";

interface ProposalFormData {
  name: string;
  email: string;
  type: string;
  budget: number;
  goals: string;
  website?: string; // honeypot
}

type SubmissionStep = "idle" | "verifying" | "caching" | "completed";

export const Contact = () => {
  const [formData, setFormData] = useState<ProposalFormData>({
    name: "",
    email: "",
    type: "Digital Systems",
    budget: 5000,
    goals: "",
    website: "",
  });

  const [submissionStep, setSubmissionStep] = useState<SubmissionStep>("idle");
  const [submittedData, setSubmittedData] = useState<ProposalFormData & { timestamp: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      // Honeypot spam filter
      return;
    }

    setSubmissionStep("verifying");

    // Simulate editorial security validation sequence
    setTimeout(async () => {
      setSubmissionStep("caching");

      try {
        // Construct the message detail for the backend API
        const richMessage = `[Commission Typology]: ${formData.type}
[Allocated Budget Limit]: $${formData.budget.toLocaleString()} USD

[Design Scope & Intent]:
${formData.goals}`;

        // Call the real backend API
        await createContact({
          name: formData.name,
          email: formData.email,
          phone_number: "",
          message: richMessage,
        });

        setTimeout(() => {
          setSubmittedData({
            ...formData,
            timestamp: new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          });
          setSubmissionStep("completed");
          toast.success("Proposal queued successfully!");
        }, 1200);

      } catch (error) {
        toast.error("Failed to submit proposal. Please try again.");
        setSubmissionStep("idle");
      }
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      type: "Digital Systems",
      budget: 5000,
      goals: "",
      website: "",
    });
    setSubmissionStep("idle");
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Side - Info Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-xs tracking-[0.25em] text-[#6B6661]">
              13 / Start a Project
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] tracking-wide leading-tight">
              Get in Touch
            </h2>
            <p className="text-[#6B6661] text-sm leading-relaxed font-sans">
              Ready to bring your ideas to life? Use the form on the right to share your project details and get started.
            </p>
          </div>

          <div className="space-y-6 border-t border-[#E8E6E1] pt-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 border border-[#E8E6E1]/80 rounded-none bg-white">
                <Mail className="w-5 h-5 text-stone-700" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#6B6661] block">
                  Email Address
                </span>
                <a href={`mailto:${profileData.email}`} className="font-serif text-base text-[#1C1A17] hover:underline">
                  {profileData.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 border border-[#E8E6E1]/80 rounded-none bg-white">
                <MapPin className="w-5 h-5 text-stone-700" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#6B6661] block">
                  Location
                </span>
                <address className="not-italic font-serif text-base text-[#1C1A17]">
                  Sankhamul, Lalitpur,<br />
                  Nepal
                </address>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 border border-[#E8E6E1]/80 rounded-none bg-white">
                <Clock className="w-5 h-5 text-stone-700" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#6B6661] block">
                  Working Hours
                </span>
                <div className="font-serif text-base text-[#1C1A17]">
                  09:00 — 17:00 NST<br />
                  <span className="font-mono text-[11px] text-[#6B6661]">Monday to Friday</span>
                </div>
              </div>
            </div>
          </div>

          {/* Warning disclaimer */}
          <div className="p-4 bg-stone-100 border border-[#E8E6E1] text-[11px] font-mono text-[#6B6661] tracking-wide leading-relaxed">
            * By submitting this form, your request will be sent to my inbox for review. I typically respond within 48 business hours.
          </div>
        </div>

        {/* Right Side - Form & Steps */}
        <div className="lg:col-span-7 bg-white border border-[#E8E6E1] p-8 md:p-12">
          
          {submissionStep === "idle" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot spam filter */}
              <div className="hidden">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="client-name" className="font-mono text-[10px] tracking-widest text-[#1C1A17] block font-bold mb-2">
                  Your Name *
                </label>
                <input 
                  id="client-name"
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="E.g., Marcus Aurelier"
                  className="w-full bg-[#FAF9F6] border border-[#E8E6E1] text-sm text-[#1C1A17] px-4 py-3 focus:outline-none focus:border-[#1C1A17] rounded-none font-sans"
                />
              </div>

              <div>
                <label htmlFor="client-email" className="font-mono text-[10px] tracking-widest text-[#1C1A17] block font-bold mb-2">
                  Email Address *
                </label>
                <input 
                  id="client-email"
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="E.g., marcus@aurelier-partners.com"
                  className="w-full bg-[#FAF9F6] border border-[#E8E6E1] text-sm text-[#1C1A17] px-4 py-3 focus:outline-none focus:border-[#1C1A17] rounded-none font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="commission-type" className="font-mono text-[10px] tracking-widest text-[#1C1A17] block font-bold mb-2">
                    Project Category
                  </label>
                  <select 
                    id="commission-type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-[#E8E6E1] text-sm text-[#1C1A17] px-4 py-3 focus:outline-none focus:border-[#1C1A17] select-none rounded-none font-sans"
                  >
                    <option value="Digital Systems">Software Development</option>
                    <option value="Fullstack Application">Full Stack Web Apps</option>
                    <option value="AI Integration">AI & Data Solutions</option>
                    <option value="Consulting">Consulting & Strategy</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label htmlFor="budget-slider" className="font-mono text-[10px] tracking-widest text-[#1C1A17] block font-semibold">
                      Estimated Budget
                    </label>
                    <span className="font-mono text-xs text-[#1C1A17] font-bold">
                      ${formData.budget.toLocaleString()}
                    </span>
                  </div>
                  <input 
                    id="budget-slider"
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="1000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                    className="w-full h-1 bg-[#E8E6E1] rounded-none outline-none accent-[#1C1A17] cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-[#6B6661] mt-1.5">
                    <span>$1k</span>
                    <span>$25k</span>
                    <span>$50k+</span>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="project-goals" className="font-mono text-[10px] tracking-widest text-[#1C1A17] block font-bold mb-2">
                  Project Details
                </label>
                <textarea 
                  id="project-goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  placeholder="Describe your project, goals, and what you would like to build..."
                  className="w-full bg-[#FAF9F6] border border-[#E8E6E1] text-sm text-[#1C1A17] px-4 py-3 focus:outline-none focus:border-[#1C1A17] resize-none rounded-none font-sans"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1C1A17] text-[#FAF9F6] py-4 text-xs font-mono tracking-widest hover:bg-[#1c1a17]/90 transition-colors font-semibold cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}

          {submissionStep === "verifying" && (
            <div className="h-96 flex flex-col items-center justify-center space-y-6">
              <div className="w-12 h-12 border-2 border-stone-100 border-t-stone-800 rounded-full animate-spin"></div>
              <div className="text-center space-y-1">
                <p className="font-mono text-xs tracking-widest font-bold">Verifying Details</p>
                <p className="text-[11px] font-mono text-[#6B6661]">Checking input fields...</p>
              </div>
            </div>
          )}

          {submissionStep === "caching" && (
            <div className="h-96 flex flex-col items-center justify-center space-y-6">
              <div className="w-12 h-12 border-2 border-stone-100 border-t-stone-800 rounded-full animate-spin"></div>
              <div className="text-center space-y-1">
                <p className="font-mono text-xs tracking-widest font-bold">Sending Message</p>
                <p className="text-[11px] font-mono text-[#6B6661]">Delivering your message...</p>
              </div>
            </div>
          )}

          {submissionStep === "completed" && submittedData && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-stone-900 p-3 text-[#FAF9F6]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl tracking-wide font-medium text-[#1C1A17]">
                    Message Sent!
                  </h3>
                  <p className="font-mono text-[10px] text-[#6B6661]">
                    Sent at {submittedData.timestamp}
                  </p>
                </div>
              </div>

              <div className="border border-[#E8E6E1]/80 p-6 bg-[#FAF9F6]/50 space-y-4">
                <p className="text-sm text-[#6B6661] leading-relaxed font-sans">
                  Thank you <strong className="text-[#1C1A17]">{submittedData.name}</strong>. Your inquiry has been successfully sent. I will review the details and get back to you soon:
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-[#E8E6E1] pt-4 font-mono text-[11px]">
                  <div>
                    <span className="text-[#6B6661] block">Project Category</span>
                    <strong className="text-[#1C1A17]">{submittedData.type}</strong>
                  </div>
                  <div>
                    <span className="text-[#6B6661] block">Estimated Budget</span>
                    <strong className="text-[#1C1A17]">${submittedData.budget.toLocaleString()} USD</strong>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-[#E8E6E1]/50">
                    <span className="text-[#6B6661] block">Email Address</span>
                    <strong className="text-[#1C1A17] text-xs font-semibold">{submittedData.email}</strong>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-stone-100 border border-[#E8E6E1] text-xs leading-relaxed text-[#6B6661] font-mono">
                I will review your message and reply via email to discuss the next steps.
              </div>

              <button 
                onClick={resetForm}
                className="px-6 py-3 border border-[#1C1A17] text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#FAF9F6] text-xs font-mono tracking-widest transition-all rounded-none cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};