import { Experience as ExperienceComponent } from "@/components/Experience";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional journey, career history, and educational background of Bibek Bhattarai.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    type: "website",
    url: "https://bibekbhattarai14.com.np/experience",
    title: "Work Experience | Bibek Bhattarai",
    description: "Review my professional history and educational milestones.",
  },
  twitter: {
    title: "Work Experience | Bibek Bhattarai",
    description: "Professional career summary of Bibek Bhattarai.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Experience - Bibek Bhattarai",
  "description": "Professional experience and education of Bibek Bhattarai.",
  "mainEntity": {
    "@type": "Person",
    "name": "Bibek Bhattarai",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "educationalLevel": "Bachelor's",
        "about": "Computer Science"
      }
    ]
  }
};

export default function ExperiencePage() {
  return (
    <main className="pt-20">
      <Script
        id="experience-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExperienceComponent />
    </main>
  );
}
