import React from "react";
import { notFound } from "next/navigation";
import { industries, cities, INDUSTRY_LABELS, getIndustryContent, MAJOR_CITIES } from "@/lib/seo-services";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ChevronLeft, ArrowUpRight, CheckCircle2, MessageSquare, Send } from "lucide-react";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ industry: string; city: string }>;
}

export const dynamic = "force-static";
export const dynamicParams = true;
export const revalidate = 86400; // Cache for 24 hours

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry, city } = await params;
  const cityLower = city.toLowerCase();

  if (!industries.includes(industry) || !cities.includes(cityLower)) {
    notFound();
  }

  const label = INDUSTRY_LABELS[industry] || industry;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return buildMarketingMetadata({
    title: `Best ${label} Web Design & Development in ${cityName} | Bibek Bhattarai`,
    description: `Need a professional ${label.toLowerCase()} website in ${cityName}? I build custom, responsive, SEO-friendly websites in ${cityName} with local support and payment gateway integrations.`,
    path: `/services/${industry}/${cityLower}`,
    keywords: [
      `${label} website ${cityName}`,
      `web development in ${cityName}`,
      `hire nextjs developer ${cityName}`,
      `best website developer ${cityName}`,
    ],
  });
}

// Statically pre-render top combinations to optimize build time
export async function generateStaticParams() {
  const { MAJOR_CITIES } = await import("@/lib/seo-services");
  const paths = [];
  for (const industry of industries) {
    for (const city of MAJOR_CITIES) {
      if (city !== "nepal") {
        paths.push({
          industry,
          city: city.toLowerCase(),
        });
      }
    }
  }
  return paths;
}

export default async function LocalizedServicePage({ params }: Props) {
  const { industry, city } = await params;
  const cityLower = city.toLowerCase();

  if (!industries.includes(industry) || !cities.includes(cityLower)) {
    notFound();
  }

  const label = INDUSTRY_LABELS[industry] || industry;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const content = getIndustryContent(industry, cityLower);

  // Filter relevant case studies based on keywords/tech
  const relevantProjects = projects.filter((p) => {
    const titleLower = p.title.toLowerCase();
    const descLower = p.description.toLowerCase();

    if (industry === "ecommerce-website" || industry === "clothing-website" || industry === "grocery-website") {
      return titleLower.includes("ecommerce") || titleLower.includes("pasal") || descLower.includes("shop") || descLower.includes("ecommerce") || descLower.includes("stripe");
    }
    if (industry === "school-college-website" || industry === "educational-consultancy-website") {
      return titleLower.includes("education") || descLower.includes("school") || descLower.includes("learn");
    }
    if (industry === "website-developer") {
      return true; // Show all for generic developer
    }
    return false;
  }).slice(0, 2);

  // Fallback to top 2 projects if none found
  const displayProjects = relevantProjects.length > 0 ? relevantProjects : projects.slice(0, 2);

  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${label} Web Development in ${cityName}`,
    "description": `Professional, high-performance web development solutions built with Next.js for local businesses in ${cityName}, Nepal.`,
    "areaServed": {
      "@type": "City",
      "name": cityName,
    },
    "provider": {
      "@type": "Person",
      "name": "Bibek Bhattarai",
      "url": absoluteUrl(),
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
        "name": "Services",
        "item": absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": label,
        "item": absoluteUrl(`/services/${industry}`),
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": cityName,
        "item": absoluteUrl(`/services/${industry}/${cityLower}`),
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(`Hi Bibek, I would like to inquire about building a ${label.toLowerCase()} for my business in ${cityName}.`);
  const whatsappUrl = `https://wa.me/9779860425440?text=${whatsappMessage}`;

  return (
    <main className="pt-24 pb-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="local-service-jsonld" data={localServiceSchema} />
      <JsonLd id="local-breadcrumb-jsonld" data={breadcrumbSchema} />
      
      <ServiceJsonLd
        services={[
          {
            name: `${label} Web Design in ${cityName}`,
            description: `Fast, custom-coded web design optimized for local ${cityName} clients.`
          }
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { label: "Services", href: "/services" },
          { label: label, href: `/services/${industry}` },
          { label: cityName, href: `/services/${industry}/${cityLower}` }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs 
          items={[
            { label: "Services", href: "/services" },
            { label: label, href: `/services/${industry}` },
            { label: cityName, href: `/services/${industry}/${cityLower}` }
          ]} 
        />

        <Link
          href={`/services/${industry}`}
          className="inline-flex items-center gap-2 text-[#6B6661] hover:text-[#1C1A17] transition-colors mb-8 group font-mono text-xs"
        >
          <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to {label} Services
        </Link>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-6 animate-fade-in">
          <span className="font-mono text-[10px] text-[#1C1A17] bg-[#E8E6E1] px-2.5 py-1">
            Local Service &bull; {cityName}, Nepal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium leading-tight">
            Professional {label} Design & Development in {cityName}
          </h1>
          <p className="text-[#6B6661] text-lg leading-relaxed font-sans">
            {content.description}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2 space-y-8">
            <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
              Service Specifications for {cityName} Businesses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.features.map((feature, idx) => (
                <div key={idx} className="border border-[#E8E6E1] bg-white p-6 space-y-2 hover:border-[#1C1A17] transition-all">
                  <h3 className="font-mono text-xs font-bold text-[#1C1A17] uppercase tracking-wider">{feature.title}</h3>
                  <p className="text-xs text-[#6B6661] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Local Advantage Section */}
            <div className="bg-[#FAF9F6] border border-[#E8E6E1] p-6 space-y-4">
              <h3 className="font-serif text-lg font-medium text-[#1C1A17]">Local Advantage & Integrations</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6B6661]">
                {content.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <CheckCircle2 size={14} className="text-[#1C1A17] shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Local Contact CTA Card */}
          <div className="bg-white border border-[#E8E6E1] p-8 flex flex-col justify-between h-fit space-y-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#1C1A17]">Hire a Developer in {cityName}</h3>
              <p className="text-xs text-[#6B6661] leading-relaxed">
                Skip standard builders and get a hand-crafted, high-performing Next.js website. I provide support, fast loading times, and SEO setup.
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1C1A17] text-white hover:bg-stone-800 p-3 text-xs font-mono font-medium transition-all"
              >
                <MessageSquare size={14} /> Talk on WhatsApp
              </a>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 border border-[#E8E6E1] hover:border-[#1C1A17] text-[#1C1A17] p-3 text-xs font-mono font-medium transition-all"
              >
                <Send size={14} /> Send an Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Case Studies Showcase */}
        <div className="mb-20 space-y-8">
          <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
            Featured Projects & Capabilities
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

        {/* FAQs Accordion */}
        <div className="border-t border-[#E8E6E1] pt-12 space-y-8">
          <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-serif text-base font-medium text-[#1C1A17] flex gap-2 items-start">
                  <span className="font-mono text-xs text-[#6B6661] mt-1">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-sm text-[#6B6661] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Locations Section */}
        <div className="border-t border-[#E8E6E1] mt-16 pt-12 space-y-6">
          <h2 className="font-serif text-xl font-medium text-[#1C1A17]">
            Other Service Locations in Nepal
          </h2>
          <p className="text-xs text-[#6B6661] font-mono">
            Explore web development solutions, payment options, and SEO strategies for other cities:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {MAJOR_CITIES.filter((c) => c !== "nepal" && c !== cityLower).map((otherCity) => (
              <Link
                key={otherCity}
                href={`/services/${industry}/${otherCity}`}
                className="font-mono text-[10px] text-[#6B6661] bg-white border border-[#E8E6E1] hover:border-[#1C1A17] hover:text-[#1C1A17] p-2.5 text-center transition-all capitalize"
              >
                {label} in {otherCity}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
