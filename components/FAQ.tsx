"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "What services do you provide?",
    answer: "I specialize in full-stack web development, creating high-performance applications with React, Next.js, and Node.js. My services also include machine learning integration, DevOps automation, and UI/UX design focusing on premium digital experiences.",
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline depends on the complexity of the project. A standard business website might take 2-4 weeks, while a complex full-stack application could take 8-12 weeks. I prioritize quality and performance in every project I undertake.",
  },
  {
    question: "Do you work with startups and international clients?",
    answer: "Yes, I have extensive experience working with startups and collaborating with international clients across different time zones. I use modern communication and project management tools to ensure smooth collaboration.",
  },
  {
    question: "What is your approach to SEO and Performance?",
    answer: "I build websites with a performance-first mindset, ensuring fast load times and excellent Core Web Vitals. I implement technical SEO best practices, including semantic HTML, meta-tag optimization, and structured data (JSON-LD) for better search engine visibility.",
  },
];

export const FAQ = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-4 h-fit">
          <span className="font-mono text-xs tracking-[0.25em] text-[#6B6661]">
            11 / Clarifications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] tracking-wide">
            Inquiries
          </h2>
          <p className="text-[#6B6661] text-xs leading-relaxed font-sans max-w-sm">
            I appreciate meticulous clients that query engineering and systematic choices. Below are solutions to structural, financial, and timing coordinates.
          </p>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFAQIndex === idx;
            return (
              <div key={idx} className="border-b border-[#E8E6E1] pb-4">
                <button
                  onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-3 group cursor-pointer"
                >
                  <span className="font-serif text-lg font-medium tracking-wide text-[#1C1A17] group-hover:text-stone-600 transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-stone-400 font-mono text-sm shrink-0 ml-4">
                    {isOpen ? "[-]" : "[+]"}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed font-sans pt-2 pb-4">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
