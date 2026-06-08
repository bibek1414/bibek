import { About as AboutComponent } from "@/components/About";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "About Me | Bibek Bhattarai - Software Developer",
  description: "Learn more about Bibek Bhattarai, a passionate Software Developer specialized in React, Next.js, and modern web technologies. Detailed background, skills, and professional overview.",
  path: "/about",
  ogLabel: "Identity / Profile",
});

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Bibek Bhattarai",
      "description": "Software Developer specialized in React, Next.js, and modern web tech.",
      "jobTitle": "Software Developer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sankhamul, Lalitpur",
        "addressCountry": "NP"
      }
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
        "name": "About",
        "item": absoluteUrl("/about"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="about-schema" data={aboutSchema} />
      <JsonLd id="about-breadcrumb" data={breadcrumbSchema} />
      
      <BreadcrumbJsonLd items={[{ label: "About", href: "/about" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      </div>

      <AboutComponent />
    </main>
  );
}
