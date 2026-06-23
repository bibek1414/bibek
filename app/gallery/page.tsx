import { Gallery as GalleryComponent } from "@/components/Gallery";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Studio Gallery | Bibek Bhattarai - Visual Archive",
  description:
    "Explore the visual archive and studio gallery of Bibek Bhattarai, showcasing development setups, minimal design layouts, and technical inspirations.",
  path: "/gallery",
  ogLabel: "Studio Gallery",
});

export default function GalleryPage() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Bibek Bhattarai - Studio Gallery",
    "description": "Visual documentation of workspace configurations, architecture studies, and design inspirations.",
    "url": absoluteUrl("/gallery"),
    "creator": {
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
        "name": "Gallery",
        "item": absoluteUrl("/gallery"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="gallery-schema" data={gallerySchema} />
      <JsonLd id="gallery-breadcrumb" data={breadcrumbSchema} />
      <BreadcrumbJsonLd items={[{ label: "Gallery", href: "/gallery" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Gallery", href: "/gallery" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium mb-8">
          Studio Gallery
        </h1>
      </div>

      <GalleryComponent hideHeader={true} />
    </main>
  );
}
