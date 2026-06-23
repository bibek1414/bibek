import { Experience as ExperienceComponent } from "@/components/Experience";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Experience | Bibek Bhattarai - Career & Education",
  description: "Professional journey, career history, and educational background of Bibek Bhattarai. Review my professional history and educational milestones.",
  path: "/experience",
  ogLabel: "Professional Journey",
});

export default function ExperiencePage() {
  const experienceSchema = {
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
        "name": "Experience",
        "item": absoluteUrl("/experience"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="experience-schema" data={experienceSchema} />
      <JsonLd id="experience-breadcrumb" data={breadcrumbSchema} />
      
      <BreadcrumbJsonLd items={[{ label: "Experience", href: "/experience" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Experience", href: "/experience" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] mb-8 font-medium">
          Professional Experience
        </h1>
      </div>

      <ExperienceComponent />
    </main>
  );
}
