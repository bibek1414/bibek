import React from "react";
import { notFound } from "next/navigation";
import { hireRoles, HIRE_ROLE_DETAILS } from "@/lib/hire-roles";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ChevronLeft, ArrowUpRight, MessageSquare, Send } from "lucide-react";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Contact } from "@/components/Contact";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ role: string }>;
}

export const dynamic = "force-static";
export const dynamicParams = true;
export const revalidate = 86400; // Cache for 24 hours

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { role } = await params;
  if (!hireRoles.includes(role)) {
    notFound();
  }
  const details = HIRE_ROLE_DETAILS[role];
  return buildMarketingMetadata({
    title: details.metaTitle,
    description: details.metaDescription,
    path: `/hire/${role}`,
    keywords: [
      `hire ${details.title.toLowerCase()}`,
      `${details.title.toLowerCase()} developer`,
      `freelance ${details.title.toLowerCase()}`,
      `senior ${details.title.toLowerCase()}`,
    ],
  });
}

export async function generateStaticParams() {
  return hireRoles.map((role) => ({
    role,
  }));
}

export default async function HireRolePage({ params }: Props) {
  const { role } = await params;
  if (!hireRoles.includes(role)) {
    notFound();
  }

  const details = HIRE_ROLE_DETAILS[role];

  // Filter relevant projects
  const relevantProjects = projects.filter((p) => {
    const titleLower = p.title.toLowerCase();
    const descLower = p.description.toLowerCase();

    if (role === "nextjs-developer" || role === "react-developer" || role === "freelance-web-developer") {
      return titleLower.includes("ecommerce") || titleLower.includes("builder") || descLower.includes("web") || descLower.includes("nextjs") || descLower.includes("react");
    }
    if (role === "python-developer" || role === "devops-engineer") {
      return titleLower.includes("comment") || descLower.includes("python") || descLower.includes("django") || descLower.includes("ai") || descLower.includes("automation");
    }
    return true;
  }).slice(0, 2);

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
        "name": "Hire",
        "item": absoluteUrl(`/hire/${role}`),
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": details.title,
        "item": absoluteUrl(`/hire/${role}`),
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(`Hi Bibek, I am interested in hiring you as a ${details.title.toLowerCase()} for my project.`);
  const whatsappUrl = `https://wa.me/9779860425440?text=${whatsappMessage}`;

  return (
    <main className="pt-24 pb-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="hire-breadcrumb-jsonld" data={breadcrumbSchema} />
      
      <BreadcrumbJsonLd 
        items={[
          { label: "Hire", href: `/hire/${role}` },
          { label: details.title, href: `/hire/${role}` }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs 
          items={[
            { label: "Hire", href: `/hire/${role}` },
            { label: details.title, href: `/hire/${role}` }
          ]} 
        />

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6B6661] hover:text-[#1C1A17] transition-colors mb-8 group font-mono text-xs"
        >
          <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-6">
          <span className="font-mono text-[10px] text-[#1C1A17] bg-[#E8E6E1] px-2.5 py-1 uppercase tracking-wider">
            Available for Hire / Contract
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium leading-tight">
            {details.headline}
          </h1>
          <p className="text-[#6B6661] text-lg leading-relaxed font-sans">
            {details.subheadline}
          </p>
        </div>

        {/* Action Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2 space-y-8">
            <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
              Technical Core & Delivery Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {details.features.map((feature, idx) => (
                <div key={idx} className="border border-[#E8E6E1] bg-white p-6 space-y-2 hover:border-[#1C1A17] transition-all">
                  <h3 className="font-mono text-xs font-bold text-[#1C1A17] uppercase tracking-wider">{feature.title}</h3>
                  <p className="text-xs text-[#6B6661] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Core Competencies Box */}
            <div className="bg-[#FAF9F6] border border-[#E8E6E1] p-6 space-y-4">
              <h3 className="font-serif text-lg font-medium text-[#1C1A17]">Professional Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {details.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] text-[#1C1A17] bg-white border border-[#E8E6E1] px-3 py-1 hover:border-[#1C1A17] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hiring CTA Card */}
          <div className="bg-white border border-[#E8E6E1] p-8 flex flex-col justify-between h-fit space-y-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#1C1A17]">Need to hire a specialist?</h3>
              <p className="text-xs text-[#6B6661] leading-relaxed">
                Let's discuss your product milestones, timeline coordinates, and budget scopes.
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1C1A17] text-white hover:bg-stone-800 p-3 text-xs font-mono font-medium transition-all"
              >
                <MessageSquare size={14} /> WhatsApp Inquiry
              </a>
              <a
                href="#hire-form"
                className="w-full flex items-center justify-center gap-2 border border-[#E8E6E1] hover:border-[#1C1A17] text-[#1C1A17] p-3 text-xs font-mono font-medium transition-all"
              >
                <Send size={14} /> Send Proposal Request
              </a>
            </div>
          </div>
        </div>

        {/* Case Studies Showcase */}
        <div className="mb-20 space-y-8">
          <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
            Featured Projects & Verification
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
        <div className="border-t border-[#E8E6E1] pt-12 mb-20 space-y-8">
          <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
            Hiring FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {details.faqs.map((faq, idx) => (
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

        {/* Proposal / Contact Form */}
        <div id="hire-form" className="scroll-mt-24 border-t border-[#E8E6E1] pt-16">
          <Contact initialCategory={details.category} />
        </div>
      </div>
    </main>
  );
}
