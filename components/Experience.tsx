"use client";

import React from "react";

const CHRONOLOGY = [
  {
    period: "2025 — PRES",
    title: "Software Developer",
    institution: "Baliyo Technologies",
    type: "Work",
    location: "Hetauda, NP",
    description: "Leading the development of complex web applications using Next.js and Node.js. Focused on optimizing performance, implementing robust backend systems with PostgreSQL, and ensuring seamless deployment using Docker and AWS.",
  },
  {
    period: "2019 — 2025",
    title: "BSc Computer Science & IT",
    institution: "Hetauda City College",
    type: "Education",
    location: "HCC, NP",
    description: "Rigorous academic study of computational systems, relational databases, software engineering methodologies, and algorithms.",
  },
  {
    period: "2017 — 2019",
    title: "+2 Science Graduate",
    institution: "Makwanpur Multiple Campus",
    type: "Education",
    location: "MMC, NP",
    description: "In-depth foundational studies in mathematics, physics, and chemistry.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Stick Column */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28 h-fit">
          <span className="font-mono text-xs tracking-[0.25em] text-[#6B6661]">
            07 / Historic Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] tracking-wide">
            Chronology
          </h2>
          <p className="text-[#6B6661] text-sm leading-relaxed font-sans max-w-sm">
            A linear progression of professional engagements and academic milestones defining my engineering path.
          </p>
        </div>

        {/* Right timeline List */}
        <div className="lg:col-span-8 space-y-12">
          {CHRONOLOGY.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row items-baseline border-b border-[#E8E6E1] pb-8 gap-4 sm:gap-12 hover:border-[#1C1A17] transition-colors duration-300 group"
            >
              <div className="font-mono text-lg font-semibold text-stone-500 sm:w-36 shrink-0 tracking-wider">
                {item.period}
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1C1A17] tracking-wide">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[9px] tracking-widest text-[#1C1A17] bg-[#E8E6E1] px-2.5 py-0.5">
                    {item.type}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-[#6B6661] border border-[#E8E6E1] px-2.5 py-0.5">
                    {item.location}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-[#6B6661]">
                  {item.institution}
                </p>
                <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed max-w-2xl font-sans group-hover:text-[#1C1A17] transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};