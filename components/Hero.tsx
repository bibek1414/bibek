"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { profileData } from "@/lib/data";

export const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 pt-24 md:pt-40 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
    >
      {/* Hero Text */}
      <div className="lg:col-span-7 space-y-8">
        <div className="inline-flex items-center space-x-2.5 text-xs font-mono tracking-[0.2em] text-[#6B6661]">
          <span className="px-2">Available for Digital Commissions</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#1C1A17] tracking-normal leading-[1.05] font-medium">
          Designing calm, <br />
          <span className="italic font-normal text-stone-500 font-serif">
            considered
          </span>{" "}
          software.
        </h1>

        <p className="text-base sm:text-lg text-[#6B6661] max-w-xl font-sans leading-relaxed">
          {profileData.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-between sm:justify-center px-6 py-4 bg-[#1C1A17] text-[#FAF9F6] text-xs tracking-widest font-mono font-medium hover:bg-stone-850 transition-colors group"
          >
            Explore Selected Craft
            <ArrowUpRight className="w-4 h-4 ml-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-between sm:justify-center px-6 py-4 border border-[#1C1A17]/25 hover:border-[#1C1A17] text-xs tracking-widest font-mono font-medium text-[#1C1A17] transition-all"
          >
            Initiate Proposal
            <ChevronRight className="w-4 h-4 ml-6" />
          </a>
        </div>
      </div>

      {/* Hero Image Block - Asymmetric Minimal layout */}
      <div className="lg:col-span-5 relative mt-6 lg:mt-0">
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden bg-[#E8E6E1] border border-[#E8E6E1]">
          <Image
            src="/photos/IMG-20251030-WA0031.jpg"
            alt="Portrait of Bibek Bhattarai"
            width={400}
            height={500}
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 hover:scale-[1.02] transition-all duration-1000 ease-out"
          />
          {/* Fine print overlay */}
          <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white tracking-widest bg-[#1C1A17]/85 backdrop-blur-sm px-2.5 py-1.5">
            REF. 2026 // KATHMANDU PORTRAIT
          </div>
        </div>
        {/* Accent square decoration */}
        <div className="absolute -z-10 -bottom-8 -left-8 w-44 h-44 border border-[#E8E6E1] hidden md:block"></div>
      </div>
    </section>
  );
};
