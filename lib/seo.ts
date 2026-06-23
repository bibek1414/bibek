import { Metadata } from "next";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  `https://${process.env.NEXT_PUBLIC_BASE_DOMAIN || "www.bibekbhattarai14.com.np"}`;

export const SITE_URL = rawSiteUrl.replace(/\/$/, "");
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`; // Fallback image
export const SITE_NAME = "Bibek Bhattarai";

export function absoluteUrl(path = "") {
  // 1. Handle root/empty path
  if (!path || path === "/" || path === "") {
    return SITE_URL;
  }

  // 2. Clean the path: remove leading/trailing slashes
  const cleanedPath = path.replace(/^\/+/, "").replace(/\/+$/, "");
  
  // 3. Re-verify if empty after cleaning
  if (cleanedPath === "") {
    return SITE_URL;
  }

  // 4. Return joined URL (SITE_URL has no trailing slash)
  return `${SITE_URL}/${cleanedPath}`;
}

export function getDynamicOgUrl({
  title,
  subtitle,
  label,
  theme = "dark",
}: {
  title: string;
  subtitle: string;
  label?: string;
  theme?: "dark" | "light" | "primary";
}) {
  const params = new URLSearchParams();
  params.set("title", title);
  params.set("subtitle", subtitle);
  if (label) params.set("label", label);
  params.set("theme", theme);
  params.set("brand", SITE_NAME);
  params.set("domain", "bibekbhattarai14.com.np");
  params.set("slogan", "Full Stack Developer & Software Engineer");

  return `${SITE_URL}/api/og?${params.toString()}`;
}

export function buildMarketingMetadata({
  title,
  description,
  path,
  image,
  ogTitle,
  ogSubtitle,
  ogLabel,
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description?: string;
  path: string;
  image?: string;
  ogTitle?: string;
  ogSubtitle?: string;
  ogLabel?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const finalDescription =
    description ||
    "Explore the professional portfolio of Bibek Bhattarai, a versatile Full Stack Developer specializing in React, Next.js, Node.js, and modern web architectures.";

  // Smart OG extraction
  const displayTitle = ogTitle || title.split(/ [|:-] /)[0].trim();

  // Subtitle usually works best as a concise version of description
  const displaySubtitle =
    ogSubtitle ||
    (finalDescription.length > 120
      ? finalDescription.slice(0, 117) + "..."
      : finalDescription);

  const finalImage = image || getDynamicOgUrl({
    title: displayTitle,
    subtitle: displaySubtitle,
    label: ogLabel || "Portfolio",
  });

  return {
    title,
    description: finalDescription,
    keywords: [
      ...keywords,
      "Bibek Bhattarai",
      "Full Stack Developer",
      "Software Engineer",
      "React Developer",
      "Next.js Portfolio",
      "Nepal Developer",
      "React Developer Nepal",
      "Next.js Developer Nepal",
      "Full Stack Developer Nepal",
      "Web Developer Kathmandu",
      "Software Engineer Kathmandu",
      "Freelance Web Developer Nepal",
      "Hire Web Developer Nepal",
      "Next.js Freelancer",
      "React Freelancer Nepal",
      "TypeScript Developer Kathmandu",
      "Frontend Developer Kathmandu",
      "JavaScript Developer Nepal",
      "Best Web Developer Nepal",
      "Python Django Developer Nepal",
      "MERN Stack Developer Nepal",
      "Hire Remote React Developer",
      "Remote Next.js Developer",
      "Next.js 15 Web Developer",
      "Kathmandu Web Development Services",
      "Creative Frontend Developer",
      "Modern Web App Developer",
      "BSc CSIT Software Engineer",
      "Freelance Django Developer",
      "Full Stack Engineer Kathmandu",
      "React and Node Developer",
      "TypeScript Expert Nepal",
      "Professional Nextjs Developer",
    ],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: displayTitle,
      description: displaySubtitle,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_NP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: displaySubtitle,
      images: [finalImage],
    },
  };
}
