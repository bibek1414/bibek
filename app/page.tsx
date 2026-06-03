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

const websiteJsonLd = {
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I specialize in full-stack web development, creating high-performance applications with React, Next.js, and Node.js. My services also include machine learning integration, DevOps automation, and UI/UX design focusing on premium digital experiences."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline depends on the complexity of the project. A standard business website might take 2-4 weeks, while a complex full-stack application could take 8-12 weeks. I prioritize quality and performance in every project I undertake."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with startups and international clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I have extensive experience working with startups and collaborating with international clients across different time zones. I use modern communication and project management tools to ensure smooth collaboration."
      }
    },
    {
      "@type": "Question",
      "name": "What is your approach to SEO and Performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I build websites with a performance-first mindset, ensuring fast load times and excellent Core Web Vitals. I implement technical SEO best practices, including semantic HTML, meta-tag optimization, and structured data (JSON-LD) for better search engine visibility."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col pb-24">
      <Script
        id="home-website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="home-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
