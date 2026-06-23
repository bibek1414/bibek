"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/lib/data";

export const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-8 sm:py-16 lg:py-24  ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Story Illustration image */}
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] relative w-full overflow-hidden bg-[#E8E6E1] border border-[#E8E6E1]">
            <Image 
              src="/photos/IMG-20251005-WA0402.jpg" 
              alt="Quiet architectural landscape" 
              width={500}
              height={625}
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-[1.02] transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-4 text-white font-mono text-[9px] tracking-widest bg-[#1C1A17]/60 px-2 py-1">
              ACTA COMPUTER SCIENCE
            </div>
          </div>
          {/* Accent border */}
          <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 border border-[#E8E6E1] hidden md:block"></div>
        </div>

        {/* Story details */}
        <div className="lg:col-span-6 space-y-8">
          <div className="font-mono text-xs tracking-[0.25em] text-[#6B6661]">
            01 / Philosophical Stance
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] tracking-wide leading-tight font-medium">
            A philosophy of clean and reliable execution.
          </h2>

          <div className="space-y-6 text-base text-[#6B6661] leading-relaxed font-sans">
            <p>
              I believe today’s software landscape suffers from an excess of bloat and unnecessary dependencies. Whether in cloud infrastructures or mobile screens, apps are frequently overloaded with non-essential layers that add friction for users.
            </p>
            <p>
              My practice acts as a filter. I return to clean typing structures, relational databases, responsive geometries, and minimal load times. I build systems where performance is prioritized and code is given space to grow.
            </p>
            <p>
              I do not write code to make it complex; I engineer it to remain clear, maintainable, and robust.
            </p>
          </div>

          <div className="pt-4 flex items-center space-x-12">
            <div>
              <span className="font-serif text-lg italic text-[#1C1A17] block">
                &ldquo;Simplicity is the ultimate structural integrity in software.&rdquo;
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#6B6661] mt-2 block">
                &mdash; {profileData.name}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};