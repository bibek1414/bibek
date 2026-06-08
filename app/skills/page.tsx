import { Skills as SkillsComponent } from "@/components/Skills";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Skills | Bibek Bhattarai - Tech Stack & Expertise",
  description: "Detailed overview of the technical skills and technologies mastered by Bibek Bhattarai. Explore the tech stack including React, Next.js, Node.js, and Machine Learning.",
  path: "/skills",
  ogLabel: "Competencies",
});

export default function SkillsPage() {
  const skillsSchema = {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": absoluteUrl(),
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Skills",
        "item": absoluteUrl("/skills"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="skills-schema" data={skillsSchema} />
      <JsonLd id="skills-breadcrumb" data={breadcrumbSchema} />
      
      <BreadcrumbJsonLd items={[{ label: "Skills", href: "/skills" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Skills", href: "/skills" }]} />
      </div>

      <SkillsComponent />
    </main>
  );
}
