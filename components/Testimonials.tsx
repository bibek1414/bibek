"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Working with Bibek was a game-changer for our platform. His attention to detail in the frontend and robust backend architecture significantly improved our user retention.",
    author: "Smriti Sharma",
    role: "Co-Founder",
    firm: "Baliyo Tech",
  },
  {
    quote: "Bibek is an exceptional developer who truly understands modern web standards. He delivered a complex Next.js application ahead of schedule with flawless execution.",
    author: "Sarah Johnson",
    role: "Product Lead",
    firm: "SaaS Systems",
  },
  {
    quote: "A versatile engineer who isn't afraid of complex challenges. Bibek's ability to integrate machine learning with web apps is quite impressive.",
    author: "Sushmita Thapa",
    role: "Engineering Lead",
    firm: "HCC Labs",
  },
];

export const Testimonials = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className={`max-w-7xl mx-auto px-6 ${hideHeader ? "pb-24 md:pb-32 pt-4" : "py-24 md:py-32"}`}>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {!hideHeader && (
            <div className="text-center space-y-2">
              <span className="font-mono text-xs text-[#6B6661]">
                05 / Direct Feedback
              </span>
              <h2 className="font-serif text-3xl text-[#1C1A17] font-medium">
                Client Dialogues
              </h2>
            </div>
          )}

          {/* Slider frame */}
          <div className="border border-[#E8E6E1] p-8 md:p-16 relative bg-[#FAF9F6] bg-white">
            {/* Giant Serif opening quote mark */}
            <div className="absolute top-4 left-6 text-[#E8E6E1]/50 text-7xl font-serif font-bold pointer-events-none">
              &ldquo;
            </div>
            
            <div className="grid grid-cols-1 grid-rows-1 relative">
              {TESTIMONIALS.map((testimonial, idx) => {
                const isActive = index === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : (index > idx ? -20 : 20),
                    }}
                    style={{
                      gridColumn: "1",
                      gridRow: "1",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 relative w-full"
                  >
                    <p className="font-serif text-xl sm:text-2xl text-[#1C1A17] leading-relaxed italic text-center text-stone-700">
                      {testimonial.quote}
                    </p>

                    <div className="text-center pt-4 border-t border-[#E8E6E1] max-w-xs mx-auto">
                      <div className="font-serif text-base font-medium text-[#1C1A17]">
                        {testimonial.author}
                      </div>
                      <div className="font-mono text-[10px] text-[#6B6661] mt-1">
                        {testimonial.role} / {testimonial.firm}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Slider tools */}
            <div className="flex justify-between items-center mt-12 md:mt-8 pt-4 border-t border-[#E8E6E1]">
              <span className="font-mono text-xs text-[#6B6661]">
                {index + 1} / {TESTIMONIALS.length}
              </span>
              <div className="flex space-x-3">
                <button 
                  onClick={handlePrev}
                  className="p-3 border border-[#E8E6E1] hover:bg-[#1C1A17] hover:text-[#FAF9F6] text-[#1C1A17] transition-all rounded-none cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-3 border border-[#E8E6E1] hover:bg-[#1C1A17] hover:text-[#FAF9F6] text-[#1C1A17] transition-all rounded-none cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
