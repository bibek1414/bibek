"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData, skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import { 
  GraduationCap, 
  Code2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  ChevronRight 
} from "lucide-react";

type Section = "education" | "skills" | "about";

export function ProfileContent() {
  const [activeSection, setActiveSection] = useState<Section>("skills");

  const sidebarItems = [
    { id: "skills", label: "Professional Skills", icon: Code2 },
    { id: "education", label: "Education Path", icon: GraduationCap },
    { id: "about", label: "About Me", icon: User },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-16">
      {/* Sidebar */}
      <div className="lg:col-span-1 space-y-3">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id as Section)}
            className={cn(
              "w-full flex items-center justify-between px-6 py-4 rounded-none transition-all duration-300 group cursor-pointer",
              activeSection === item.id 
                ? "bg-[#1C1A17] text-[#FAF9F6] shadow-md scale-[1.02]" 
                : "bg-white text-[#6B6661] border border-[#E8E6E1] hover:border-[#1C1A17] hover:text-[#1C1A17]"
            )}
          >
            <div className="flex items-center gap-4">
              <item.icon size={20} />
              <span className="font-semibold text-xs font-mono tracking-wider uppercase">{item.label}</span>
            </div>
            <ChevronRight 
              size={18} 
              className={cn(
                "transition-transform",
                activeSection === item.id ? "rotate-90" : "group-hover:translate-x-1"
              )} 
            />
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#E8E6E1] p-8 md:p-12 min-h-[500px] flex flex-col justify-start"
          >
            {activeSection === "education" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-serif text-[#1C1A17] mb-8 flex items-center gap-3">
                  <GraduationCap className="text-[#1C1A17]" />
                  Academic Background
                </h3>
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-[#E8E6E1] space-y-2">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#1C1A17]" />
                    <span className="text-xs font-mono font-bold text-stone-500">{edu.period}</span>
                    <h4 className="text-xl font-serif text-[#1C1A17]">{edu.degree}</h4>
                    <p className="text-sm text-[#6B6661] font-sans">{edu.institution}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "skills" && (
              <div className="space-y-12">
                {skills.map((category) => (
                  <div key={category.category} className="space-y-6">
                    <h3 className="text-xs font-mono tracking-widest text-[#6B6661]/60 uppercase border-b border-[#E8E6E1] pb-2 font-bold">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {category.items.map((skill) => (
                        <div 
                          key={skill.name}
                          className="group p-4 bg-[#FAF9F6] border border-[#E8E6E1] hover:border-[#1C1A17] hover:bg-white transition-all text-center"
                        >
                          <span className="text-xs font-mono text-[#1C1A17] group-hover:text-[#6B6661] transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "about" && (
              <div className="space-y-8">
                 <h3 className="text-2xl font-serif text-[#1C1A17] mb-8 flex items-center gap-3">
                  <User className="text-[#1C1A17]" />
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: "Full Name", value: profileData.name, icon: User },
                    { label: "Email Address", value: profileData.email, icon: Mail },
                    { label: "Phone Number", value: profileData.phone, icon: Phone },
                    { label: "Nationality", value: profileData.nationality, icon: Globe },
                    { label: "Languages", value: profileData.languages.join(", "), icon: Globe },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-[#E8E6E1]">
                      <div className="p-3 bg-white text-[#1C1A17] border border-[#E8E6E1]">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-[#6B6661] font-bold mb-1">{info.label}</p>
                        <p className="text-base font-serif text-[#1C1A17] font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
