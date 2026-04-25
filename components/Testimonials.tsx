"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Smriti Sharma",
    content: "Working with Bibek was a game-changer for our platform. His attention to detail in the frontend and robust backend architecture significantly improved our user retention.",
    image: "https://i.pravatar.cc/150?u=rajesh"
  },
  {
    name: "Sarah Johnson",
    content: "Bibek is an exceptional developer who truly understands modern web standards. He delivered a complex Next.js application ahead of schedule with flawless execution.",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Sushmita Thapa",
    content: "A versatile engineer who isn't afraid of complex challenges. Bibek's ability to integrate machine learning with web apps is quite impressive.",
    image: "https://i.pravatar.cc/150?u=anil"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24 ">
      <SectionHeader
        title="Kind Words"
        subtitle="Feedback from clients and colleagues I've had the pleasure of working with."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-between space-y-8 hover:border-brand-blue/30 transition-all duration-300 relative group cursor-pointer"
          >
            <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-brand-blue/10 transition-colors" size={60} />

            <p className="text-lg text-white/80 leading-relaxed italic relative z-10">
              &ldquo;{t.content}&rdquo;
            </p>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-blue/20 relative">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
