"use client";

import React from "react";
import { profileData } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="border-t border-[#E8E6E1] bg-[#1C1A17] text-[#FAF9F6] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Narrative */}
        <div className="md:col-span-4 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-white">
            Bibek
          </h3>
          <p className="text-xs text-stone-400 leading-relaxed font-sans max-w-sm">
            I operate at the intersection of high-performance system backends and clean frontends, seeking simple code form, structural integrity, and digital silence.
          </p>
          <div className="text-[10px] font-mono text-stone-400 tracking-widest">
            Established 2018 © Bibek Bhattarai
          </div>
        </div>

        {/* Space Coordinates */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-mono text-xs tracking-widest text-[#FAF9F6] font-bold">
            Workspace Coordinates
          </h4>
          <div className="space-y-2 text-xs text-stone-400 font-sans">
            <p>Hetauda, Bagmati Province</p>
            <p>Nepal, 44107</p>
            <p className="font-mono text-[10px] text-stone-400">
              Tel: {profileData.phone}
            </p>
          </div>
        </div>

        {/* Social Navigation */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-mono text-xs tracking-widest text-[#FAF9F6] font-bold">
            Direct Narratives
          </h4>
          <div className="flex flex-col space-y-2 text-xs text-stone-400 font-mono tracking-[0.08em]">
            {profileData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
            <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors">
              Intake Desk
            </a>
          </div>
        </div>

      </div>

      {/* Alignment footer stamp */}
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-stone-500 tracking-widest gap-4">
        <div>
          Built with strict typographic alignment and material honesty.
        </div>
        <div className="flex items-center space-x-2">
          <span>CURRENT DATE:</span>
          <span className="text-stone-300">
            {new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}
          </span>
        </div>
      </div>
    </footer>
  );
};
