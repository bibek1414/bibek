"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="border-t border-[#E8E6E1] bg-[#1C1A17] text-[#FAF9F6] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Narrative */}
        <div className="md:col-span-3 space-y-6">
          <Link href="/" className="font-serif text-2xl font-bold text-white hover:opacity-80 transition-opacity">
            Bibek
          </Link>
          <p className="text-xs text-stone-400 leading-relaxed font-sans max-w-sm">
            I operate at the intersection of high-performance system backends and clean frontends, seeking simple code form, structural integrity, and digital silence.
          </p>
          <div className="text-[10px] font-mono text-stone-400 tracking-widest">
            Established 2018 © Bibek Bhattarai
          </div>
        </div>

        {/* General Navigation */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-mono text-xs tracking-widest text-[#FAF9F6] font-bold">
            General Navigation
          </h4>
          <div className="flex flex-col space-y-2 text-xs text-stone-400 font-mono tracking-[0.08em]">
            <Link href="/about" className="hover:text-white transition-colors">About Me</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects Showcase</Link>
            <Link href="/skills" className="hover:text-white transition-colors">Skills & Expertise</Link>
            <Link href="/experience" className="hover:text-white transition-colors">Work Experience</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services Offered</Link>
            <Link href="/certificates" className="hover:text-white transition-colors">Certifications</Link>
            <Link href="/faq" className="hover:text-white transition-colors">Help & FAQ</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Desk</Link>
          </div>
        </div>

        {/* Portals & Compliance */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-mono text-xs tracking-widest text-[#FAF9F6] font-bold">
            Portals & Compliance
          </h4>
          <div className="flex flex-col space-y-2 text-xs text-stone-400 font-mono tracking-[0.08em]">
            <Link href="/gallery" className="hover:text-white transition-colors">Studio Gallery</Link>
            <Link href="/testimonials" className="hover:text-white transition-colors">Client Testimonials</Link>
            <Link href="/resume" className="hover:text-white transition-colors">Interactive Resume</Link>
            <Link href="/newsletter" className="hover:text-white transition-colors">Newsletter Dispatch</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Social Navigation */}
        <div className="md:col-span-3 space-y-4">
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
            <div className="pt-2 text-stone-500 font-sans">
              <p>Sankhamul, Lalitpur</p>
              <p>Nepal, 44700</p>
              <p className="text-[10px] mt-1">
                Tel: {profileData.phone}
              </p>
            </div>
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
