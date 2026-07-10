import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { FAB } from "@/components/FAB";
import { CursorGlow } from "@/components/CursorGlow";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { PortfolioJsonLd, JsonLd } from "@/components/shared/json-ld";
import { SITE_URL } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bibek Bhattarai | Full Stack Developer & Next.js Expert",
  description: "Portfolio of Bibek Bhattarai, a Full Stack Developer, Next.js Expert, and DevOps Engineer based in Kathmandu, Nepal. Specializing in React, Python, AI, and cloud architectures.",
  keywords: [
    "Bibek Bhattarai",
    "Bibek Bhattarai Portfolio",
    "Bibek Bhattarai Developer",
    "Full Stack Developer Nepal",
    "Next.js Developer Nepal",
    "React Developer Nepal",
    "Python Developer Nepal",
    "AI Developer Nepal",
    "DevOps Engineer Nepal",
    "Freelance Web Developer Nepal",
    "Web Developer Kathmandu",
    "Software Engineer Kathmandu",
    "React & Next.js Developer",
  ],
  authors: [{ name: "Bibek Bhattarai" }],
  creator: "Bibek Bhattarai",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: SITE_URL,
    siteName: "Bibek Bhattarai Portfolio",
    title: "Bibek Bhattarai | Full Stack Developer & Next.js Expert",
    description: "Modern web developer portfolio showcasing React and Next.js projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bibek Bhattarai Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibek Bhattarai | Full Stack Developer & Next.js Expert",
    description: "Full Stack Developer & Next.js Expert based in Kathmandu, Nepal building premium digital experiences.",
    images: ["/og-image.png"],
    creator: "@bibekbhattarai14",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bibek Bhattarai",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.png`,
  sameAs: [
    "https://github.com/bibek1414",
    "https://linkedin.com/in/bibek-bhattarai-292b90342/",
    "https://www.facebook.com/bibek.bhattarai.3133719"
  ],
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Baliyo Technologies"
  },
  description: "React and Next.js developer building modern web applications with a focus on frontend creativity and backend efficiency.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sankhamul, Lalitpur",
    addressCountry: "NP"
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Django",
    "Machine Learning",
    "DevOps"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1C1A17] selection:bg-[#1C1A17] selection:text-[#FAF9F6] relative">
        <JsonLd id="main-person-schema" data={jsonLd} />
        <PortfolioJsonLd />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        <Toaster position="top-right" theme="dark" richColors />

        <CursorGlow />
        
        <main className="flex-1">
          {children}
          {/* Spacer for bottom nav on mobile/tablet */}
          <div className="h-20 lg:hidden" />
        </main>

        <Footer />

        {/* Mobile/Tablet App Navigation */}
        <div className="lg:hidden">
          <MobileNav />
          <FAB />
        </div>
      </body>
    </html>
  );
}
