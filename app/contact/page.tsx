import { Contact as ContactComponent } from "@/components/Contact";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Contact | Bibek Bhattarai - Software Developer",
  description: "Get in touch with Bibek Bhattarai for collaborations, professional inquiries, and project discussions. Reach out for project collaboration or software development opportunities.",
  path: "/contact",
  ogLabel: "Initiate Project",
});

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Bibek Bhattarai",
    "description": "Contact information for Bibek Bhattarai, Software Developer.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Bibek Bhattarai Portfolio",
      "telephone": "+977 9860425440",
      "email": "bbhattarai770@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressCountry": "NP",
      },
    },
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
        "name": "Contact",
        "item": absoluteUrl("/contact"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="contact-schema" data={contactSchema} />
      <JsonLd id="contact-breadcrumb" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      </div>

      <ContactComponent />
    </main>
  );
}
