import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { Marquee } from "@/components/Marquee";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";
import { BlogPreview } from "@/components/BlogPreview";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { ResumeSection } from "@/components/ResumeSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibek Bhattarai | Full Stack Developer & Software Engineer Portfolio",
  description: "Explore the professional portfolio of Bibek Bhattarai, a versatile Full Stack Developer specializing in React, Next.js, Node.js, and modern web architectures. Transforming ideas into high-performance digital solutions.",
  keywords: ["Bibek Bhattarai", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js Portfolio", "Nepal Developer"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bibek Bhattarai Portfolio",
  "url": "https://bibekbhattarai14.com.np",
  "author": {
    "@type": "Person",
    "name": "Bibek Bhattarai"
  },
  "description": "Explore the professional portfolio of Bibek Bhattarai, a versatile Full Stack Developer specializing in React, Next.js, Node.js, and modern web architectures."
};

export default function Home() {
  return (
    <div className="flex flex-col pb-24">
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero section */}
      <Hero />

      {/* Marquee practice bar */}
      <Marquee />
      
      <About />

      <Services />
      
      <ProjectsShowcase limit={3} />
      
      <div className="flex justify-center bg-[#FAF9F6] pb-24 border-b border-[#E8E6E1]">
        <Link 
          href="/projects" 
          className="px-8 py-4 border border-[#1C1A17] text-[#1C1A17] text-xs font-mono font-medium hover:bg-[#1C1A17] hover:text-[#FAF9F6] transition-all flex items-center gap-2"
        >
          Review All Projects 
          <ChevronRight size={14} />
        </Link>
      </div>

      <ResumeSection />

      <Testimonials />

      <Skills />
      
      <Experience />

      <BlogPreview />

      <Newsletter />

      <FAQ />

      <Contact />
    </div>
  );
}
