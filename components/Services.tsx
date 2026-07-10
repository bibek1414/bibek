"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  duration: string;
}

const SERVICES: Service[] = [
  {
    id: "fullstack",
    title: "Full Stack Web Development",
    short: "Building responsive frontends and scalable backend APIs.",
    description: "Custom Next.js applications, server-side rendering, and responsive, interactive interfaces. Designed for high performance and clean, maintainable code.",
    deliverables: ["Custom Next.js Systems", "State Management", "Responsive Design", "REST & WebSocket Endpoints"],
    duration: "1 to 3 months",
  },
  {
    id: "systems",
    title: "Systems & AI Integration",
    short: "Integrating analytics, artificial intelligence, and databases.",
    description: "Building data pipelines, integrating AI models, and structured databases to help make data-driven decisions.",
    deliverables: ["Data Pipelines", "AI Model Integration", "Database Schema Design", "Python Scripts"],
    duration: "1 to 2 months",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    short: "Setting up secure deployments and automated workflows.",
    description: "Configuring CI/CD pipelines, Docker, AWS infrastructure, Vercel deployments, and secure domain routing.",
    deliverables: ["Docker Configurations", "CI/CD Pipelines", "Cloud Infrastructure Maps", "Security Hardening Setups"],
    duration: "2 to 4 weeks",
  },
];

export const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>("fullstack");

  return (
    <section id="services" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column - Image */}
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] relative w-full overflow-hidden bg-[#E8E6E1] border border-[#E8E6E1]">
            <Image 
              src="/photos/IMG_1404.jpg" 
              alt="Bibek Bhattarai workspace setup" 
              width={480}
              height={640}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700"
            />
            {/* Fine metrics overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-[#1C1A17]/35 backdrop-blur-sm p-4 text-white flex justify-between text-[9px] font-mono">
              <span>WORK STATION // KATHMANDU</span>
              <span>DEV FRAMEWORK // 2026</span>
            </div>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#6B6661]">
              02 / Services Offered
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17]">
              Services Offered
            </h2>
            <p className="text-[#6B6661] text-sm leading-relaxed max-w-xl font-sans">
              Click on each service below to view description details, estimated timelines, and key deliverables.
            </p>
          </div>

          <div className="space-y-4 border-t border-[#E8E6E1] pt-4">
            {SERVICES.map((serv) => {
              const isExpanded = expandedService === serv.id;
              return (
                <div 
                  key={serv.id} 
                  className={`border-b border-[#E8E6E1] pb-5 transition-all duration-300 ${isExpanded ? "bg-[#FAF9F6]" : ""}`}
                >
                  <button
                    onClick={() => setExpandedService(isExpanded ? null : serv.id)}
                    className="w-full flex items-center justify-between text-left py-3 group cursor-pointer"
                    aria-expanded={isExpanded}
                    aria-controls={`service-panel-${serv.id}`}
                    id={`service-btn-${serv.id}`}
                  >
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1C1A17] tracking-normal group-hover:text-[#1C1A17] transition-all">
                        {serv.title}
                      </h3>
                      <p className="text-xs font-mono text-[#6B6661] group-hover:text-[#1C1A17] transition-all">
                        {serv.short}
                      </p>
                    </div>
                    <div className="p-1 px-1.5 border border-[#1C1A17]/10 rounded-full shrink-0">
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-[#1C1A17]" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#6B6661]" />
                      )}
                    </div>
                  </button>

                  <motion.div
                    id={`service-panel-${serv.id}`}
                    role="region"
                    aria-labelledby={`service-btn-${serv.id}`}
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2 space-y-5">
                      <p className="text-xs text-[#6B6661] leading-relaxed font-sans max-w-2xl">
                        {serv.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <span className="font-mono text-[9px] text-[#1C1A17] block font-bold mb-2">
                            Key Deliverables:
                          </span>
                          <div className="space-y-1.5">
                            {serv.deliverables.map((del, i) => (
                              <div key={i} className="text-[11px] text-[#6B6661] font-mono flex items-center">
                                <span className="w-1.5 h-[1px] bg-[#6B6661]/40 mr-2 shrink-0"></span>
                                {del}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="font-mono text-[9px] text-[#1C1A17] block font-bold mb-2">
                            Estimated Timeline:
                          </span>
                          <div className="p-3 bg-[#1C1A17]/5 border border-[#1C1A17]/10 font-mono text-[11px] text-[#1C1A17]">
                            <p className="mb-1">Est: {serv.duration}</p>
                            <p className="text-[#6B6661] leading-snug">Depends on project scope and requirements.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Specialized Hiring Roles */}
      <div className="max-w-7xl mx-auto px-6 pb-12 pt-12 border-t border-[#E8E6E1]">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#6B6661]">
              03 / Hiring & Commissioning
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#1C1A17]">
              Hire Specialized Technical Roles
            </h3>
            <p className="text-xs text-[#6B6661] max-w-2xl leading-relaxed">
              Looking for dedicated engineering capability or contract work? Explore services and frameworks by role:
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "Next.js Developer", slug: "nextjs-developer" },
              { name: "React Developer", slug: "react-developer" },
              { name: "Full Stack Developer", slug: "full-stack-developer" },
              { name: "Python Developer", slug: "python-developer" },
              { name: "DevOps Engineer", slug: "devops-engineer" },
              { name: "Freelance Web Developer", slug: "freelance-web-developer" },
            ].map((role) => (
              <Link
                key={role.slug}
                href={`/hire/${role.slug}`}
                className="font-mono text-[10px] text-[#6B6661] border border-[#E8E6E1] hover:border-[#1C1A17] hover:text-[#1C1A17] p-2.5 flex items-center justify-center gap-1.5 transition-all bg-white font-semibold"
              >
                {role.name}
                <ChevronRight size={10} className="shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 pt-12 border-t border-[#E8E6E1]">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#6B6661]">
              04 / Programmatic Local SEO
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#1C1A17]">
              Local Web Development Services
            </h3>
            <p className="text-xs text-[#6B6661] max-w-2xl leading-relaxed">
              I build tailored web solutions for businesses in major cities across Nepal. Select your location to learn about custom local payment setups, SEO strategies, and portfolio examples:
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: "Kathmandu", slug: "kathmandu" },
              { name: "Pokhara", slug: "pokhara" },
              { name: "Lalitpur", slug: "lalitpur" },
              { name: "Bharatpur", slug: "bharatpur" },
              { name: "Biratnagar", slug: "biratnagar" },
              { name: "Birgunj", slug: "birgunj" },
              { name: "Dharan", slug: "dharan" },
              { name: "Itahari", slug: "itahari" },
              { name: "Butwal", slug: "butwal" },
              { name: "Hetauda", slug: "hetauda" },
              { name: "Janakpur", slug: "janakpur" },
              { name: "Nepalgunj", slug: "nepalgunj" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/services/website-developer/${city.slug}`}
                className="font-mono text-[10px] text-[#6B6661] border border-[#E8E6E1] hover:border-[#1C1A17] hover:text-[#1C1A17] p-2.5 text-center transition-all bg-white"
              >
                Developer in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
