import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
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
    <main className="pt-32 pb-24 px-6">
      <Script
        id="projects-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="All Projects" 
          subtitle="A comprehensive list of my work, featuring web development, machine learning, and real-time communication systems."
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              variant="compact"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
