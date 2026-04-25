import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { FAB } from "@/components/FAB";
import { CursorGlow } from "@/components/CursorGlow";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bibek Bhattarai | React & Next.js Developer",
    template: "%s | Bibek Bhattarai"
  },
  description: "Portfolio of Bibek Bhattarai, a frontend developer specializing in React, Next.js, and modern web development. Based in Nepal.",
  keywords: [
    "Bibek Bhattarai",
    "Frontend Developer Nepal",
    "React Developer Portfolio",
    "Next.js Developer",
    "Full Stack Developer Nepal",
    "React developer portfolio in Nepal",
    "Web Developer Kathmandu"
  ],
  authors: [{ name: "Bibek Bhattarai" }],
  creator: "Bibek Bhattarai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bibekbhattarai14.com.np",
    siteName: "Bibek Bhattarai Portfolio",
    title: "Bibek Bhattarai | React & Next.js Developer",
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
    title: "Bibek Bhattarai | React & Next.js Developer",
    description: "Frontend Developer using React & Next.js to build premium digital experiences.",
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
  url: "https://bibekbhattarai14.com.np",
  sameAs: [
    "https://github.com/bibekbhattarai14",
    "https://linkedin.com/in/bibekbhattarai14"
  ],
  jobTitle: "Frontend Developer",
  description: "React and Next.js developer building modern web applications.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-brand-blue/30 selection:text-foreground relative">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
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
