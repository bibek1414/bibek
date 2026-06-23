import { Testimonials as TestimonialsComponent } from "@/components/Testimonials";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Client Testimonials | Bibek Bhattarai - Software Developer",
  description:
    "Read direct client dialogues and testimonials from tech founders and product leads about Bibek Bhattarai's software engineering services.",
  path: "/testimonials",
  ogLabel: "Client Testimonials",
});

export default function TestimonialsPage() {
  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Bibek Bhattarai - Testimonials",
    "description": "Direct feedback and reviews from partners and clients of Bibek Bhattarai.",
    "url": absoluteUrl("/testimonials"),
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
        "name": "Testimonials",
        "item": absoluteUrl("/testimonials"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="testimonials-schema" data={testimonialsSchema} />
      <JsonLd id="testimonials-breadcrumb" data={breadcrumbSchema} />
      <BreadcrumbJsonLd items={[{ label: "Testimonials", href: "/testimonials" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium mb-8">
          Client Testimonials
        </h1>
      </div>

      <TestimonialsComponent hideHeader={true} />
    </main>
  );
}
