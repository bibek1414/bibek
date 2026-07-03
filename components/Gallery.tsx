"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PHOTOS = [
  {
    src: "/images/aakareducation.png",
    title: "Aakar Education Portal",
    category: "EdTech",
    date: "May 2026",
  },
  {
    src: "/images/anjandhakal.png",
    title: "Anjan Dhakal Portfolio",
    category: "Identity",
    date: "Apr 2026",
  },
  {
    src: "/images/expense-tracker.png",
    title: "Personal Expense Tracker",
    category: "FinTech",
    date: "Mar 2026",
  },
  {
    src: "/images/jarvis-voice-assistant.png",
    title: "Jarvis AI Voice Assistant",
    category: "AI & Speech",
    date: "Feb 2026",
  },
  {
    src: "/images/hamro-pasal2.png",
    title: "Hamro Pasal 2.0",
    category: "E-Commerce",
    date: "Jan 2026",
  },
  {
    src: "/images/task-manager.png",
    title: "SaaS Task Manager",
    category: "Productivity",
    date: "Dec 2025",
  },
  {
    src: "/images/tweeter-bar.png",
    title: "Tweeter Bar Metrics",
    category: "Social Utility",
    date: "Nov 2025",
  },
  {
    src: "/images/youtube-analysis.png",
    title: "YouTube Content Analyzer",
    category: "Data Dashboard",
    date: "Oct 2025",
  },
  {
    src: "/images/weather-app.png",
    title: "Weather Geo-Tracker",
    category: "Utility",
    date: "Sep 2025",
  },
  {
    src: "/images/quiz-app.png",
    title: "Interactive Quiz Engine",
    category: "EdTech",
    date: "Aug 2025",
  },
  {
    src: "/images/faceauth.png",
    title: "Face Authentication Module",
    category: "Security",
    date: "Jul 2025",
  },
  {
    src: "/images/todo1.png",
    title: "Minimalist Task Kanban",
    category: "Productivity",
    date: "Jun 2025",
  },
];

export const Gallery = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  return (
    <section id="gallery" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className={`max-w-7xl mx-auto px-6 ${hideHeader ? "pb-24 md:pb-32 pt-4" : "py-24 md:py-32"}`}>
        
        {/* Header */}
        {!hideHeader && (
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
        )}

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
              <Image
                src={photo.src}
                alt={photo.title}
                width={500}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
