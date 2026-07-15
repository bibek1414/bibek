import React from "react";
import { notFound } from "next/navigation";
import { industries, INDUSTRY_LABELS, MAJOR_CITIES, getIndustryContent } from "@/lib/seo-services";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ChevronLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ industry: string }>;
}

export const dynamic = "force-static";
export const dynamicParams = true;
export const revalidate = 86400; // Cache for 24 hours

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  if (!industries.includes(industry)) {
    notFound();
  }
  const label = INDUSTRY_LABELS[industry] || industry;
  return buildMarketingMetadata({
    title: `Best ${label} Web Design & Development Nepal | Bibek Bhattarai`,
    description: `Need a custom, fast, and SEO-optimized ${label.toLowerCase()} website in Nepal? I build premium Next.js & React solutions with native local payment integrations.`,
    path: `/services/${industry}`,
    keywords: [
      `${label} website Nepal`,
      `create ${label.toLowerCase()} website`,
      `website developer Nepal`,
      `best website builder Nepal`,
    ],
  });
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    industry,
  }));
}

export default async function IndustryServicePage({ params }: Props) {
  const { industry } = await params;
  if (!industries.includes(industry)) {
    notFound();
  }

  const label = INDUSTRY_LABELS[industry] || industry;
  const content = getIndustryContent(industry, "Nepal");

  // Filter relevant case studies based on keywords/tech
  const relevantProjects = projects.filter((p) => {
    const titleLower = p.title.toLowerCase();
    const descLower = p.description.toLowerCase();

    if (industry === "ecommerce" || industry === "clothing" || industry === "grocery") {
      return titleLower.includes("ecommerce") || titleLower.includes("pasal") || descLower.includes("shop") || descLower.includes("ecommerce") || descLower.includes("stripe");
    }
    if (industry === "school-college" || industry === "educational-consultancy") {
      return titleLower.includes("education") || descLower.includes("school") || descLower.includes("learn");
    }
    if (industry === "website-developer") {
      return true; // Show all for generic developer
    }
    return false;
  }).slice(0, 2);

  // Fallback to top 2 projects if none found
  const displayProjects = relevantProjects.length > 0 ? relevantProjects : projects.slice(0, 2);

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
        "name": "Services",
        "item": absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": label,
        "item": absoluteUrl(`/services/${industry}`),
      },
    ],
  };

  return (
    <main className="pt-24 pb-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="industry-breadcrumb-jsonld" data={breadcrumbSchema} />
      
      <BreadcrumbJsonLd 
        items={[
          { label: "Services", href: "/services" },
          { label: label, href: `/services/${industry}` }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs 
          items={[
            { label: "Services", href: "/services" },
            { label: label, href: `/services/${industry}` }
          ]} 
        />

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[#6B6661] hover:text-[#1C1A17] transition-colors mb-8 group font-mono text-xs"
        >
          <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium leading-tight">
            {label} Web Design & Development in Nepal
          </h1>
          <p className="text-[#6B6661] text-lg leading-relaxed font-sans">
            {content.description}
          </p>
        </div>

        {/* Dynamic Features & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
              Key Service Features
            </h2>
            <div className="space-y-6">
              {content.features.map((feature, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-[#1C1A17] pl-4">
                  <h3 className="font-mono text-sm font-bold text-[#1C1A17]">{feature.title}</h3>
                  <p className="text-sm text-[#6B6661] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 bg-white border border-[#E8E6E1] p-8">
            <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
              Why Work With Me?
            </h2>
            <div className="space-y-4">
              {content.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 items-start text-sm text-[#6B6661] leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-[#1C1A17] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Relevant Case Studies */}
        <div className="mb-20 space-y-8">
          <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
            Related Portfolio Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayProjects.map((project, idx) => (
              <div key={idx} className="border border-[#E8E6E1] bg-white p-6 flex flex-col justify-between space-y-6 hover:border-[#1C1A17] transition-all">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#6B6661]">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1C1A17]">{project.title}</h3>
                  <p className="text-xs text-[#6B6661] leading-relaxed line-clamp-3">{project.description}</p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-mono text-xs text-[#1C1A17] hover:underline flex items-center gap-1 mt-auto"
                >
                  Read Case Study <ArrowUpRight size={14} className="ml-1 inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Localized SEO Cities Section */}
        <div className="border-t border-[#E8E6E1] pt-12 space-y-6">
          <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
            Available Locations in Nepal
          </h2>
          <p className="text-sm text-[#6B6661] font-mono">
            Choose your city to see local integrations (e.g. eSewa/Khalti setups), pricing, and local SEO plans:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {MAJOR_CITIES.filter(c => c !== "nepal").map((city) => (
              <Link
                key={city}
                href={`/services/${industry}/${city}`}
                className="font-mono text-xs text-[#6B6661] bg-white border border-[#E8E6E1] hover:border-[#1C1A17] hover:text-[#1C1A17] p-3 text-center transition-all capitalize animate-fade-in"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
