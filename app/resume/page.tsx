import { ResumeSection as ResumeComponent } from "@/components/ResumeSection";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Professional Resume | Bibek Bhattarai - Software Developer",
  description:
    "Explore the interactive resume of Bibek Bhattarai, listing work history, key project milestones, academic background, and tech stacks.",
  path: "/resume",
  ogLabel: "Professional Resume",
});

export default function ResumePage() {
  const resumeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Bibek Bhattarai - Resume",
    "description": "Interactive online resume of software developer Bibek Bhattarai.",
    "url": absoluteUrl("/resume"),
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
        "name": "Resume",
        "item": absoluteUrl("/resume"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="resume-schema" data={resumeSchema} />
      <JsonLd id="resume-breadcrumb" data={breadcrumbSchema} />
      <BreadcrumbJsonLd items={[{ label: "Resume", href: "/resume" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Resume", href: "/resume" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium mb-8">
          Interactive Resume
        </h1>
      </div>

      <ResumeComponent hideHeader={true} />
    </main>
  );
}
