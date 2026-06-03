import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { projects } from "@/lib/data";
import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of software engineering projects, web applications, and architectural work by Bibek Bhattarai.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "https://bibekbhattarai14.com.np/projects",
    title: "Project Portfolio | Bibek Bhattarai",
    description: "Showcase of modern web development and full-stack projects.",
  },
  twitter: {
    title: "Project Portfolio | Bibek Bhattarai",
    description: "Explore my latest work and technical implementations.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Projects by Bibek Bhattarai",
  "description": "A collection of web development and software engineering projects.",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": project.liveLink || project.githubLink
      }
    }))
  }
};

export default function ProjectsPage() {
  return (
    <main className="pt-20 bg-[#FAF9F6] min-h-screen">
      <Script
        id="projects-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsShowcase />
    </main>
  );
}
