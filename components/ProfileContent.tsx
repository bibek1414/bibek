"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
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
      <div className="lg:col-span-1 space-y-2">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id as Section)}
            className={cn(
              "w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group",
              activeSection === item.id 
                ? "bg-white text-background shadow-xl scale-105" 
                : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
            )}
          >
            <div className="flex items-center gap-4">
              <item.icon size={20} />
              <span className="font-semibold">{item.label}</span>
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
            className="glass-card min-h-[500px]"
          >
            {activeSection === "education" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <GraduationCap className="text-brand-blue" />
                  Academic Background
                </h3>
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-white/10 space-y-2">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="text-sm font-bold text-brand-blue">{edu.period}</span>
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "skills" && (
              <div className="space-y-12">
                {skills.map((category) => (
                  <div key={category.category} className="space-y-6">
                    <h3 className="text-sm font-black text-muted-foreground/50 border-b border-white/5 pb-2">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {category.items.map((skill) => (
                        <div 
                          key={skill.name}
                          className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all text-center"
                        >
                          <span className="text-sm font-semibold text-white/80 group-hover:text-brand-blue transition-colors">
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
                 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <User className="text-brand-purple" />
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
                    <div key={info.label} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="p-3 rounded-xl bg-white/5 text-brand-blue">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground mb-1">{info.label}</p>
                        <p className="text-lg text-white font-medium">{info.value}</p>
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
