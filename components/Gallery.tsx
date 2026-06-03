"use client";

import React from "react";
import { motion } from "framer-motion";

const PHOTOS = [
  {
    src: "/photos/IMG_1404.jpg",
    title: "Development Station Setup",
    category: "Workspace",
    date: "Feb 2026",
  },
  {
    src: "/photos/IMG20260523135703.jpg",
    title: "Outdoor Studio Process",
    category: "Inspiration",
    date: "May 2026",
  },
  {
    src: "/photos/IMG-20251005-WA0402.jpg",
    title: "Focused Development Session",
    category: "Session",
    date: "Oct 2025",
  },
  {
    src: "/photos/IMG-20251030-WA0031.jpg",
    title: "Quiet Workspace Setup",
    category: "Environment",
    date: "Oct 2025",
  },
  {
    src: "/photos/IMG20260502074315.jpg",
    title: "Architectural Backdrop",
    category: "Aesthetic",
    date: "May 2026",
  },
  {
    src: "/photos/IMG-20250621-WA0044.jpg",
    title: "Engineering Coordinates",
    category: "Details",
    date: "Jun 2025",
  },
  {
    src: "/photos/IMG_4758.jpg",
    title: "Design Research Notebook",
    category: "Research",
    date: "Jan 2026",
  },
  {
    src: "/photos/IMG_4860.jpg",
    title: "Minimal Layout Geometry",
    category: "Structure",
    date: "Dec 2025",
  },
  {
    src: "/photos/20230617_181732.jpg",
    title: "Legacy Project Archives",
    category: "Legacy",
    date: "Jun 2023",
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#6B6661]">
              04 / Visual Artifacts
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17]">
              Studio Gallery
            </h2>
          </div>
          <p className="text-[#6B6661] text-sm max-w-md font-sans leading-relaxed">
            A visual documentation of workspace configurations, architecture studies, and design inspirations.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] w-full">
          {PHOTOS.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="break-inside-avoid group relative overflow-hidden bg-[#E8E6E1] border border-[#E8E6E1] mb-8 inline-block w-full"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-mono text-[9px] text-[#FAF9F6]/80 mb-1">
                  {photo.category} &bull; {photo.date}
                </span>
                <h3 className="font-serif text-lg font-medium text-[#FAF9F6]">
                  {photo.title}
                </h3>
              </div>

              {/* Minimal caption visible on mobile/default */}
              <div className="absolute bottom-4 right-4 bg-[#1C1A17]/80 backdrop-blur-xs text-[#FAF9F6] px-2 py-1 text-[8px] font-mono pointer-events-none group-hover:opacity-0 transition-opacity">
                {photo.category}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
