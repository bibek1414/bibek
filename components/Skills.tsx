"use client";

import React from "react";
import { Code2, Cpu, Database, Server } from "lucide-react";

export const Skills = () => {
  return (
    <section id="skills" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[#6B6661]">
              04 / Systematic Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] leading-tight">
              Design & Tech Frameworks
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[#6B6661] text-sm leading-relaxed font-sans max-w-xl">
              I synthesize modern engineering paradigms with clean, pixel-perfect user interfaces to deliver robust and performant software solutions. Every API, layout grid, and deployment container follows strict standards.
            </p>
          </div>
        </div>

        {/* Grid Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Box 1 - Frontend */}
          <div className="border border-[#E8E6E1] p-8 space-y-6 flex flex-col justify-between bg-white">
            <div className="space-y-6">
              <div className="w-10 h-10 border border-[#1C1A17]/10 flex items-center justify-center bg-[#FAF9F6]">
                <Code2 className="w-5 h-5 text-stone-700" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1A17] font-medium">
                Frontend Craft
              </h3>
              <p className="text-xs text-[#6B6661] leading-relaxed">
                Responsive interface engineering, advanced layouts, performance-focused client routing, typography rendering, and fluid animations.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8E6E1]/50">
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">React.js</span>
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">Next.js 15</span>
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">Tailwind CSS</span>
            </div>
          </div>

          {/* Box 2 - Backend */}
          <div className="border border-[#E8E6E1] p-8 space-y-6 flex flex-col justify-between bg-white">
            <div className="space-y-6">
              <div className="w-10 h-10 border border-[#1C1A17]/10 flex items-center justify-center bg-[#FAF9F6]">
                <Database className="w-5 h-5 text-stone-700" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1A17] font-medium">
                Systems & APIs
              </h3>
              <p className="text-xs text-[#6B6661] leading-relaxed">
                Scalable HTTP/REST API endpoints, real-time WebRTC communication layers, structured schemas, relational logic, and cache pipelines.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8E6E1]/50">
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">Node.js</span>
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">PostgreSQL</span>
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">MongoDB</span>
            </div>
          </div>

          {/* Box 3 - DevOps */}
          <div className="border border-[#E8E6E1] p-8 space-y-6 flex flex-col justify-between bg-white">
            <div className="space-y-6">
              <div className="w-10 h-10 border border-[#1C1A17]/10 flex items-center justify-center bg-[#FAF9F6]">
                <Server className="w-5 h-5 text-stone-700" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1A17] font-medium">
                DevOps & Cloud
              </h3>
              <p className="text-xs text-[#6B6661] leading-relaxed">
                Container management pipelines, local science deployments, cloud services automation, security certificates configuration, and Linux server commands.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8E6E1]/50">
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">AWS</span>
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">Docker</span>
              <span className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5">Vercel</span>
            </div>
          </div>

          {/* Box 4 - Dark Accent - AI */}
          <div className="border border-[#E8E6E1] p-8 space-y-6 flex flex-col justify-between bg-[#1C1A17] text-[#FAF9F6]">
            <div className="space-y-6">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center bg-stone-850">
                <Cpu className="w-5 h-5 text-stone-200" />
              </div>
              <h3 className="font-serif text-xl text-white font-medium">
                AI & Analytics
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Sentiment analysis computation on user comments databases, vector models management, relational dataset processing, and custom script automation.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              <span className="font-mono text-[9px] text-[#FAF9F6] bg-white/10 px-2 py-0.5">Python</span>
              <span className="font-mono text-[9px] text-[#FAF9F6] bg-white/10 px-2 py-0.5">TensorFlow</span>
              <span className="font-mono text-[9px] text-[#FAF9F6] bg-white/10 px-2 py-0.5">Scikit-learn</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};