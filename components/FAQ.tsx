"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "I specialize in full-stack web development, creating high-performance applications with React, Next.js, and Node.js. My services also include machine learning integration, DevOps automation, and UI/UX design focusing on premium digital experiences."
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline depends on the complexity of the project. A standard business website might take 2-4 weeks, while a complex full-stack application could take 8-12 weeks. I prioritize quality and performance in every project I undertake."
  },
  {
    question: "Do you work with startups and international clients?",
    answer: "Yes, I have extensive experience working with startups and collaborating with international clients across different time zones. I use modern communication and project management tools to ensure smooth collaboration."
  },
  {
    question: "What is your approach to SEO and Performance?",
    answer: "I build websites with a performance-first mindset, ensuring fast load times and excellent Core Web Vitals. I implement technical SEO best practices, including semantic HTML, meta-tag optimization, and structured data (JSON-LD) for better search engine visibility."
  }
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg md:text-xl font-medium text-white group-hover:text-brand-blue transition-colors">
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-brand-blue border-brand-blue' : 'bg-white/5'}`}>
          {isOpen ? <Minus size={18} className="text-white" /> : <Plus size={18} className="text-white" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-muted-foreground leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="container mx-auto px-6 py-24">
      <SectionHeader
        title="Common Questions"
        subtitle="Answers to some of the most frequent inquiries about my development process and services."
        align="center"
      />
      
      <div className="max-w-4xl mx-auto mt-16">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} {...faq} index={idx} />
        ))}
      </div>
    </section>
  );
};
