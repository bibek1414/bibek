import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Terms of Service | Bibek Bhattarai - Software Developer",
  description:
    "Terms of Service governing the use of Bibek Bhattarai's portfolio site, content usage permissions, and professional engagement guidelines.",
  path: "/terms",
  ogLabel: "Terms of Service",
});

export default function TermsOfServicePage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Bibek Bhattarai",
    "description": "Standard terms and conditions governing usage of Bibek Bhattarai's portfolio.",
    "url": absoluteUrl("/terms"),
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
        "name": "Terms of Service",
        "item": absoluteUrl("/terms"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6] pb-24">
      <JsonLd id="terms-schema" data={termsSchema} />
      <JsonLd id="terms-breadcrumb" data={breadcrumbSchema} />
      <BreadcrumbJsonLd items={[{ label: "Terms of Service", href: "/terms" }]} />

      <div className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium mb-12">
          Terms of Service
        </h1>

        <div className="space-y-10 text-sm font-sans text-[#6B6661] leading-relaxed">
          <p className="text-base text-stone-700">
            Last Updated: June 23, 2026
          </p>

          <p>
            Welcome to my professional developer portfolio. By accessing or using this website, you agree to comply with and 
            be bound by the following terms and conditions. Please read these terms carefully before using this site.
          </p>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or using this site, you acknowledge that you have read, understood, and agreed to be 
              bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree to 
              these terms, you must not use this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              2. Intellectual Property Rights
            </h2>
            <p>
              All content displayed on this website—including but not limited to source code snippets, design templates, layouts, 
              written blog articles, graphics, and logos—is the intellectual property of Bibek Bhattarai unless explicitly 
              credited otherwise. 
            </p>
            <p>
              You may view and download pages for caching or personal reference. However, you must not republish, distribute, 
              or duplicate my work, project images, or codebase archives for commercial gain without my explicit written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              3. Disclaimer of Warranties
            </h2>
            <p>
              This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranty 
              of any kind, either express or implied. I do not warrant that the site will operate uninterrupted, secure, or free from 
              errors or viruses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              4. External Links
            </h2>
            <p>
              This website contains links to external, third-party sites (such as GitHub, LinkedIn, and external project deployments). 
              I am not responsible for the availability, accuracy, or content of these external resources, nor do I endorse or assume liability 
              for their individual privacy practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of Nepal, without giving effect to any principles 
              of conflicts of law. Any legal actions or proceedings arising from this site shall be brought exclusively in competent courts 
              located in Kathmandu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              6. Modifications to Terms
            </h2>
            <p>
              I reserve the right to modify these Terms of Service at any time without prior notice. Your continued use of the site 
              after updates are posted constitutes your binding acceptance of the modified terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
