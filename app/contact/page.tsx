import { Contact as ContactComponent } from "@/components/Contact";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bibek Bhattarai for collaborations, professional inquiries, and project discussions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://bibekbhattarai14.com.np/contact",
    title: "Contact Bibek Bhattarai",
    description: "Reach out for project collaboration or software development opportunities.",
  },
  twitter: {
    title: "Contact Bibek Bhattarai",
    description: "Let's connect and build something amazing together.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Bibek Bhattarai",
  "description": "Contact information for Bibek Bhattarai, Software Developer.",
  "mainEntity": {
    "@type": "Person",
    "name": "Bibek Bhattarai",
    "email": "bbhattarai770@gmail.com",
    "telephone": "+977 9860425440"
  }
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactComponent />
    </main>
  );
}
