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
      "Bibek Bhattarai Developer",
      "Bibek Bhattarai Portfolio",
      "Bibek Bhattarai Software Engineer",
      "Bibek Bhattarai Full Stack Developer",
      "Bibek Bhattarai Nepal",
      "Bibek Bhattarai Next.js Developer",
      "Bibek Bhattarai React Developer",
      "Full Stack Developer",
      "Software Engineer",
      "React Developer",
      "Next.js Portfolio",
      "Nepal Developer",
      "React Developer Nepal",
      "Next.js Developer Nepal",
      "Full Stack Developer Nepal",
      "Frontend Developer Nepal",
      "Backend Developer Nepal",
      "JavaScript Developer Nepal",
      "TypeScript Developer Nepal",
      "Node.js Developer Nepal",
      "Django Developer Nepal",
      "Python Developer Nepal",
      "AI Developer Nepal",
      "Machine Learning Developer Nepal",
      "LLM Developer Nepal",
      "Ollama Developer",
      "Local AI Developer",
      "Docker Developer Nepal",
      "Kubernetes Developer Nepal",
      "DevOps Engineer Nepal",
      "CI/CD Developer Nepal",
      "Terraform Developer Nepal",
      "Hire Next.js Developer",
      "Hire React Developer",
      "Hire Full Stack Developer",
      "Freelance Web Developer Nepal",
      "Custom Web Application Developer",
      "SaaS Developer Nepal",
      "MERN Stack Developer Nepal",
      "E-commerce Website Developer Nepal",
      "React Portfolio",
      "Django Portfolio",
      "FastAPI Portfolio",
      "Tailwind CSS Developer",
      "MongoDB Developer",
      "PostgreSQL Developer",
      "REST API Developer",
      "AWS Developer Nepal",
      "Vercel Deployment Expert",
      "Web Developer Kathmandu",
      "Software Engineer Kathmandu",
      "Full Stack Developer Kathmandu",
      "React Developer Kathmandu",
      "Next.js Developer Kathmandu",
      "Nepal Software Developer",
      "Freelance Developer Nepal",
      "Best Web Developer Nepal",
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
