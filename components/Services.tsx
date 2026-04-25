"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Code2, Cpu, Layout, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description: "Building scalable, high-performance web applications using React, Next.js, and robust backend systems.",
    icon: Code2,
    color: "blue",
  },
  {
    title: "AI & Machine Learning",
    description: "Integrating intelligent models and LLMs to create predictive systems and automated workflows.",
    icon: Cpu,
    color: "purple",
  },
  {
    title: "Cloud & DevOps",
    description: "Optimizing infrastructure with Docker, Kubernetes, and automated CI/CD pipelines for seamless scaling.",
    icon: ShieldCheck,
    color: "green",
  },
  {
    title: "UI/UX Architecture",
    description: "Designing intuitive, motion-rich user interfaces that prioritize engagement and accessibility.",
    icon: Layout,
    color: "pink",
  },
];

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const Services = () => {
  return (
    <section id="services" className="py-24 container mx-auto px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Exceptional Services"
          subtitle="Specialized solutions tailored to transform complex challenges into elegant digital realities."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={serviceVariants}
              className="group relative p-8 rounded-3xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div 
                className={`absolute -bottom-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full bg-brand-${service.color}`} 
              />

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-brand-${service.color}/10 border border-brand-${service.color}/20 text-brand-${service.color} group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className="mt-8 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-linear-to-r from-brand-blue to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
