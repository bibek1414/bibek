import { Newsletter as NewsletterComponent } from "@/components/Newsletter";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Newsletter | Bibek Bhattarai - Software Developer",
  description:
    "Subscribe to Bibek Bhattarai's newsletter to receive insights on frontend development, Next.js optimization, and cloud engineering.",
  path: "/newsletter",
  ogLabel: "Newsletter",
});

export default function NewsletterPage() {
  const newsletterSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bibek Bhattarai - Newsletter",
    "description": "Subscribe to tech newsletter by Bibek Bhattarai.",
    "url": absoluteUrl("/newsletter"),
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
        "name": "Newsletter",
        "item": absoluteUrl("/newsletter"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="newsletter-schema" data={newsletterSchema} />
      <JsonLd id="newsletter-breadcrumb" data={breadcrumbSchema} />
      <BreadcrumbJsonLd items={[{ label: "Newsletter", href: "/newsletter" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Newsletter", href: "/newsletter" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium mb-8">
          Newsletter Dispatch
        </h1>
      </div>

      <NewsletterComponent hideHeader={true} />
    </main>
  );
}
