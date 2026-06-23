import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Privacy Policy | Bibek Bhattarai - Software Developer",
  description:
    "Privacy Policy for Bibek Bhattarai's professional portfolio. Learn how user data, newsletter submissions, and inquiry details are protected.",
  path: "/privacy",
  ogLabel: "Privacy Policy",
});

export default function PrivacyPolicyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Bibek Bhattarai",
    "description": "Information about data protection and privacy policy of Bibek Bhattarai's portfolio.",
    "url": absoluteUrl("/privacy"),
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
        "name": "Privacy Policy",
        "item": absoluteUrl("/privacy"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6] pb-24">
      <JsonLd id="privacy-schema" data={privacySchema} />
      <JsonLd id="privacy-breadcrumb" data={breadcrumbSchema} />
      <BreadcrumbJsonLd items={[{ label: "Privacy Policy", href: "/privacy" }]} />

      <div className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-sm font-sans text-[#6B6661] leading-relaxed">
          <p className="text-base text-stone-700">
            Last Updated: June 23, 2026
          </p>

          <p>
            Your privacy is highly important to me. This Privacy Policy document outlines the types of personal 
            information received and collected when you visit my professional portfolio website, and how that information 
            is used and protected.
          </p>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              1. Information Collection
            </h2>
            <p>
              I only collect personal information that you voluntarily submit to me. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Newsletter Subscription:</strong> When subscribing to the dispatch newsletter, I collect your email address 
                to deliver technical updates and engineering logs.
              </li>
              <li>
                <strong>Project Inquiry / Contact Form:</strong> When initiating a project or submitting an inquiry, I collect your 
                name, email address, and any project details or message contents you supply.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              2. Use of Information
            </h2>
            <p>
              Any information collected from you is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond directly to your project queries and professional outreach.</li>
              <li>Deliver newsletter updates if you opted in to join the list.</li>
              <li>Analyze web traffic metrics to optimize site performance and loading speeds.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              3. Data Protection & Security
            </h2>
            <p>
              I implement proper technical safeguards and secure backend structures to protect your personal details from unauthorized 
              access, alteration, disclosure, or destruction. I never sell, lease, or distribute your email addresses or contact information 
              to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              4. Cookies
            </h2>
            <p>
              This website may use cookies (small text files saved on your computer) to remember user preferences and analyze anonymous 
              aggregated traffic using lightweight web metrics utilities. You can control or disable cookies through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A17] font-bold">
              5. Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding this privacy statement, please feel free to reach out directly:
            </p>
            <p className="font-mono text-xs text-[#1C1A17]">
              Email: bbhattarai770@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
