import { Certificates as CertificatesComponent } from "@/components/Certificates";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Certificates | Bibek Bhattarai - Achievements",
  description: "Professional certifications, internship completions, and training achievements of Bibek Bhattarai.",
  path: "/certificates",
  ogLabel: "Achievements",
});

export default function CertificatesPage() {
  const certificatesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Certificates - Bibek Bhattarai",
    "description": "Professional certifications and achievements of Bibek Bhattarai.",
    "mainEntity": {
      "@type": "Person",
      "name": "Bibek Bhattarai"
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
        "name": "Certificates",
        "item": absoluteUrl("/certificates"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="certificates-schema" data={certificatesSchema} />
      <JsonLd id="certificates-breadcrumb" data={breadcrumbSchema} />
      
      <BreadcrumbJsonLd items={[{ label: "Certificates", href: "/certificates" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Certificates", href: "/certificates" }]} />
      </div>

      <CertificatesComponent />
    </main>
  );
}
