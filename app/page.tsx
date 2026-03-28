import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibek Bhattarai | React & Next.js Developer Portfolio",
  description: "Explore the portfolio of Bibek Bhattarai, a frontend developer specializing in modern web experiences, React, and Next.js.",
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col pb-24">
      {/* Hero section */}
      <Hero />
      
      <About />
      
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeader 
          title="Featured Craftsmanship" 
          subtitle="A selection of my recent works ranging from full-stack platforms to machine learning experiments."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Link 
            href="/projects" 
            className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white hover:text-background transition-all hover:scale-105 active:scale-95"
          >
            Review All Projects 
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Skills />
      
      <Experience />

      <Contact />
    </div>
  );
}
