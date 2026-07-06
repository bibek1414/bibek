"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronRight, Maximize2, CheckCircle2, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  category: string;
  year: string;
  location: string;
  materials: string[];
  details: string[];
}

export const ProjectsShowcase = ({ limit }: { limit?: number }) => {
  const [activeFilter, setActiveFilter] = useState<"All" | "Web App" | "AI/ML">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects = limit ? projects.slice(0, limit) : projects;
  const isVisible = (p: { category: string }) =>
    activeFilter === "All" || p.category === activeFilter;

  return (
    <section id="projects" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#6B6661]">
              03 / Selected Projects
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17]">
              Selected Works
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 md:pt-0 border-b border-t md:border-t-0 md:border-b-0 py-3 md:py-0 border-[#E8E6E1]">
            {(["All", "Web App", "AI/ML"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                aria-label={`Filter projects by ${filter}`}
                className={`px-5 py-2 text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#1C1A17] text-[#FAF9F6]"
                    : "text-[#6B6661] hover:text-[#1C1A17] hover:bg-[#FAF9F6]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: isVisible(project) ? undefined : "none" }}
              className="group bg-[#FAF9F6] border border-[#E8E6E1] overflow-hidden flex flex-col justify-between"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#E8E6E1]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[9px] bg-[#1C1A17] text-[#FAF9F6] px-2.5 py-1">
                    {project.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(project as Project)}
                  className="absolute bottom-4 right-4 p-2 bg-[#FAF9F6]/90 backdrop-blur-sm border border-[#E8E6E1] text-[#1C1A17] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1C1A17] hover:text-[#FAF9F6] cursor-pointer"
                  aria-label={`View ${project.title} details`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#6B6661] mb-2">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1C1A17] mb-3 group-hover:text-stone-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#6B6661] leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E6E1] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.materials.slice(0, 2).map((mat, i) => (
                      <span key={i} className="font-mono text-[9px] text-[#6B6661] bg-[#1C1A17]/5 px-1.5 py-0.5 rounded-none">
                        {mat}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project as Project)}
                    aria-label={`View ${project.title} details`}
                    className="font-mono text-[10px] text-[#1C1A17] flex items-center hover:translate-x-1 transition-transform font-medium cursor-pointer"
                  >
                    View Details
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#1C1A17]/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-[#FAF9F6] max-w-4xl w-full border border-[#E8E6E1] overflow-hidden flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-[#1C1A17] text-[#FAF9F6] border border-transparent hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column Image */}
              <div className="md:w-1/2 bg-stone-50 relative flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#E8E6E1] min-h-[300px] md:min-h-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={500}
                  height={380}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto max-h-[380px] object-contain shadow-xs border border-[#E8E6E1]"
                />
                <div className="absolute bottom-4 left-4 bg-[#1C1A17] text-[#FAF9F6] px-3 py-1 text-[10px] font-mono">
                  {selectedProject.category} &mdash; {selectedProject.year}
                </div>
              </div>

              {/* Right Column Details */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#6B6661] block mb-1">
                      {selectedProject.location}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#1C1A17]">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#6B6661] leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-3">
                    <span className="font-mono text-[11px] text-[#1C1A17] block font-bold">
                      Technologies Used:
                    </span>
                    <ul className="space-y-1">
                      {selectedProject.materials.map((material, i) => (
                        <li key={i} className="text-[#6B6661] text-xs font-mono flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#6B6661]/50 rounded-full mr-2"></span>
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-[11px] text-[#1C1A17] block font-bold">
                      Key Highlights:
                    </span>
                    <div className="space-y-2">
                      {selectedProject.details.map((detail, index) => (
                        <div key={index} className="flex space-x-2.5 items-start text-xs text-[#6B6661] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E8E6E1] flex items-center justify-between gap-4">
                  <div className="flex gap-4">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${selectedProject.title} live demo`}
                        className="px-4 py-2 bg-[#1C1A17] text-[#FAF9F6] text-[10px] font-mono hover:bg-stone-850 transition-colors flex items-center gap-1"
                      >
                        Live Link
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${selectedProject.title} on GitHub`}
                        className="px-4 py-2 border border-[#1C1A17] text-[#1C1A17] text-[10px] font-mono hover:bg-[#1C1A17] hover:text-[#FAF9F6] transition-colors flex items-center gap-1"
                      >
                        GitHub Code
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <span className="font-mono text-[9px] text-[#6B6661] shrink-0">
                    ID: {selectedProject.id}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
