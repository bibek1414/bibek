import { Skills as SkillsComponent } from "@/components/Skills";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Skills",
  description: "Detailed overview of the technical skills and technologies mastered by Bibek Bhattarai, including React, Node.js, and Machine Learning.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    type: "website",
    url: "https://bibekbhattarai14.com.np/skills",
    title: "Technical Skills | Bibek Bhattarai",
    description: "Explore the technologies I use to build high-performance web applications.",
  },
  twitter: {
    title: "Technical Skills | Bibek Bhattarai",
    description: "A comprehensive look at my tech stack and expertise.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Skills - Bibek Bhattarai",
  "description": "Technical skills and technologies mastered by Bibek Bhattarai.",
  "mainEntity": {
    "@type": "Person",
    "name": "Bibek Bhattarai",
    "knowsAbout": ["React", "Next.js", "TypeScript", "Node.js", "Python", "Django", "AWS", "Docker"]
  }
};

export default function SkillsPage() {
  return (
    <main className="pt-20">
      <Script
        id="skills-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkillsComponent />
    </main>
  );
}
