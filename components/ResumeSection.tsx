"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, GraduationCap, Briefcase, Award, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { profileData, skills, projects } from "@/lib/data";

export const ResumeSection = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  return (
    <section id="profile" className={`${hideHeader ? "pb-16 md:pb-32 pt-4" : "py-16 md:py-32"} border-b border-[#E8E6E1] bg-[#FAF9F6] scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E6E1] mb-16">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#6B6661]">
                04 / Professional Profile
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1C1A17]">
                Interactive Resume
              </h2>
            </div>
            <p className="text-[#6B6661] text-sm max-w-md font-sans leading-relaxed">
              A comprehensive overview of my experience, projects, skills, and academic background in software engineering.
            </p>
          </div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          
          {/* Left Column: Personal Card & Skills */}
          <div className="lg:col-span-4 space-y-10">
            {/* Contact Card */}
            <div className="bg-white border border-[#E8E6E1] p-8 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">{profileData.name}</h3>
                <p className="font-mono text-[11px] text-[#6B6661] mt-1">{profileData.role}</p>
              </div>

              <div className="space-y-3.5 text-xs text-[#6B6661] font-sans">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#1C1A17] shrink-0" />
                  <span>New Baneshwor, Kathmandu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#1C1A17] shrink-0" />
                  <a href={`mailto:${profileData.email}`} className="hover:text-[#1C1A17] underline decoration-[#E8E6E1] hover:decoration-[#1C1A17] transition-all">
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub size={16} className="text-[#1C1A17] shrink-0" />
                  <a href="https://github.com/bibek1414" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1A17] underline decoration-[#E8E6E1] hover:decoration-[#1C1A17] transition-all">
                    github.com/bibek1414
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E6E1] space-y-3">
                <h4 className="font-serif text-sm font-semibold text-[#1C1A17]">Professional Summary</h4>
                <p className="text-xs text-[#6B6661] leading-relaxed font-sans">
                  {profileData.tagline}
                </p>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white border border-[#E8E6E1] p-8 space-y-6">
              <h4 className="font-serif text-lg font-bold text-[#1C1A17] flex items-center gap-2 pb-3 border-b border-[#E8E6E1]">
                <Code2 size={18} className="text-[#1C1A17]" />
                Technical Skills
              </h4>
              <div className="space-y-5">
                {skills.map((cat) => (
                  <div key={cat.category} className="space-y-2">
                    <span className="font-mono text-[10px] text-[#6B6661] block">{cat.category}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span key={item.name} className="px-2.5 py-1 bg-[#FAF9F6] border border-[#E8E6E1] text-[10px] font-mono text-[#1C1A17]">
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Work Experience, Projects, Education */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Work Experience */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#1C1A17] flex items-center gap-2 pb-3 border-b border-[#E8E6E1]">
                <Briefcase size={20} className="text-[#1C1A17]" />
                Work Experience
              </h3>
              {profileData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif text-lg font-semibold text-[#1C1A17]">
                      {exp.role} <span className="font-sans text-xs font-normal text-[#6B6661]">at {exp.company}</span>
                    </h4>
                    <span className="font-mono text-[10px] text-[#6B6661]">{exp.period}</span>
                  </div>
                  <ul className="list-none space-y-2 text-xs text-[#6B6661] font-sans leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#1C1A17] mt-1.5 shrink-0 w-1.5 h-1.5 bg-[#1C1A17]" />
                      <span>Developing and maintaining responsive web applications using React, Next.js, and TailwindCSS.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1C1A17] mt-1.5 shrink-0 w-1.5 h-1.5 bg-[#1C1A17]" />
                      <span>Collaborating with cross-functional teams to design and implement interactive user interfaces.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#1C1A17] mt-1.5 shrink-0 w-1.5 h-1.5 bg-[#1C1A17]" />
                      <div>
                        <span>Contributing to <strong>Nepdora</strong>, a no-code website builder that allows users to drag and drop UI components to create fully functional websites.</span>
                        <ul className="mt-2 pl-5 space-y-1.5 list-disc list-outside text-[#6B6661]">
                          <li>Built reusable and customizable components using Next.js and TailwindCSS.</li>
                          <li>Implemented dynamic rendering of JSON-based UI configurations for a modular builder experience.</li>
                          <li>Worked on real-time site preview, page management, and subdomain-based site deployment.</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Projects */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#1C1A17] flex items-center gap-2 pb-3 border-b border-[#E8E6E1]">
                <Award size={20} className="text-[#1C1A17]" />
                Key Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj) => (
                  <div key={proj.title} className="bg-white border border-[#E8E6E1] p-6 flex flex-col justify-between space-y-4 hover:border-[#1C1A17] transition-all duration-300">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-serif text-base font-bold text-[#1C1A17]">{proj.title}</h4>
                        <span className="font-mono text-[9px] text-[#6B6661] shrink-0">{proj.year}</span>
                      </div>
                      <p className="text-xs text-[#6B6661] leading-relaxed font-sans">
                        {proj.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.map((tech) => (
                          <span key={tech} className="px-1.5 py-0.5 bg-[#FAF9F6] text-[9px] font-mono text-[#6B6661]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 text-xs font-mono pt-2 border-t border-[#E8E6E1]">
                        {proj.githubLink && (
                          <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#1C1A17] transition-colors text-[#6B6661]">
                            GitHub <ExternalLink size={10} />
                          </a>
                        )}
                        {proj.liveLink && (
                          <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#1C1A17] transition-colors text-[#6B6661]">
                            Live <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#1C1A17] flex items-center gap-2 pb-3 border-b border-[#E8E6E1]">
                  <GraduationCap size={20} className="text-[#1C1A17]" />
                  Education
                </h3>
                <div className="space-y-6">
                  {profileData.education.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="font-mono text-[9px] text-[#6B6661]">{edu.period}</span>
                      <h4 className="font-serif text-sm font-semibold text-[#1C1A17] leading-snug">{edu.degree}</h4>
                      <p className="text-xs text-[#6B6661] font-sans">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#1C1A17] flex items-center gap-2 pb-3 border-b border-[#E8E6E1]">
                  <Award size={20} className="text-[#1C1A17]" />
                  Training
                </h3>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-[#6B6661]">2025</span>
                  <h4 className="font-serif text-sm font-semibold text-[#1C1A17]">Python & Django</h4>
                  <p className="text-xs text-[#6B6661] font-sans">Broadway Infosys</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
