import { Services as ServicesSection } from "@/components/Services";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, ServiceJsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Services | Bibek Bhattarai - Full Stack & Software Engineering",
  description: "Professional software development services including Full Stack Web Development, Systems & AI Integration, and Cloud & DevOps. High-performance solutions built for the modern web.",
  path: "/services",
  ogLabel: "Services Offered",
});

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Development Services",
    "provider": {
      "@type": "Person",
      "name": "Bibek Bhattarai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Web Development",
            "description": "Building responsive frontends and scalable backend APIs using Next.js."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Systems & AI Integration",
            "description": "Integrating analytics, artificial intelligence, and databases."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & DevOps",
            "description": "Setting up secure deployments and automated workflows."
          }
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
        "name": "Services",
        "item": absoluteUrl("/services"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="services-schema" data={servicesSchema} />
      <JsonLd id="services-breadcrumb" data={breadcrumbSchema} />
      
      <ServiceJsonLd 
        services={[
          { name: "Full Stack Web Development", description: "Building responsive frontends and scalable backend APIs using Next.js." },
          { name: "Systems & AI Integration", description: "Integrating analytics, artificial intelligence, and databases." },
          { name: "Cloud & DevOps", description: "Setting up secure deployments and automated workflows." }
        ]}
      />
      <BreadcrumbJsonLd items={[{ label: "Services", href: "/services" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] mb-8 font-medium">
          Services Offered
        </h1>
      </div>

      <ServicesSection />
    </main>
  );
}
