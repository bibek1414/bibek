import { ProfileContent } from "@/components/ProfileContent";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Profile | Bibek Bhattarai - Digital Identity",
  description: "Detailed professional profile of Bibek Bhattarai, including academic background, technical skills, and personal details. Experienced in architecting modern web applications.",
  path: "/profile",
  ogLabel: "Digital Identity",
});

export default function ProfilePage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bibek Bhattarai",
    "jobTitle": "Full Stack Developer",
    "description": "Experienced in architecting modern web applications and machine learning pipelines.",
    "url": absoluteUrl("/profile"),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
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
        "name": "Profile",
        "item": absoluteUrl("/profile"),
      },
    ],
  };

  return (
    <main className="pt-24 pb-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="profile-schema" data={profileSchema} />
      <JsonLd id="profile-breadcrumb" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Profile", href: "/profile" }]} />
        
        <SectionHeader 
          title="Digital Identity" 
          subtitle="Experienced in architecting modern web applications and machine learning pipelines."
          align="left"
        />

        <ProfileContent />
      </div>
    </main>
  );
}
