import { About as AboutComponent } from "@/components/About";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Bibek Bhattarai, a passionate Software Developer specialized in React, Next.js, and modern web technologies.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://bibekbhattarai14.com.np/about",
    title: "About Bibek Bhattarai | Software Developer",
    description: "Detailed background, skills, and professional overview of Bibek Bhattarai.",
  },
  twitter: {
    title: "About Bibek Bhattarai | Software Developer",
    description: "Learn more about my journey and technical expertise.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Person",
    "name": "Bibek Bhattarai",
    "description": "Software Developer specialized in React, Next.js, and modern web tech.",
    "jobTitle": "Software Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hetauda",
      "addressCountry": "NP"
    }
  }
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutComponent />
    </main>
  );
}
