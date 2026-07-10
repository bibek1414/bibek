import React from "react";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ChevronLeft, CheckCircle2, ArrowUpRight, Award, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  // Generate target keywords based on project details
  const projectKeywords = [
    project.title,
    `${project.title} E-commerce`,
    `${project.title} Website Builder`,
    "Nepal Website Builder",
    "Drag and Drop Website Builder",
    "Local AI Developer",
    "Ollama Developer",
    "Interactive Quiz App",
    "Quiz App Nepal",
    "AI Business Name Generator",
    "Full Stack Developer Nepal",
    "Next.js Portfolio",
    "React Portfolio",
  ];

  return buildMarketingMetadata({
    title: `${project.title} | Bibek Bhattarai Portfolio`,
    description: project.description,
    path: `/projects/${slug}`,
    ogLabel: project.category,
    keywords: projectKeywords,
  });
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": project.category === "AI/ML" || project.category === "Web App" ? "DeveloperApplication" : "WebApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Bibek Bhattarai"
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
        "name": "Projects",
        "item": absoluteUrl("/projects"),
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": absoluteUrl(`/projects/${slug}`),
      },
    ],
  };

  return (
    <main className="pt-24 pb-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="project-detail-jsonld" data={softwareSchema} />
      <JsonLd id="project-breadcrumb-jsonld" data={breadcrumbSchema} />
      
      <BreadcrumbJsonLd 
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${slug}` }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs 
          items={[
            { label: "Projects", href: "/projects" },
            { label: project.title, href: `/projects/${slug}` }
          ]} 
        />

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[#6B6661] hover:text-[#1C1A17] transition-colors mb-8 group font-mono text-xs"
        >
          <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Media & Meta Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border border-[#E8E6E1] bg-white p-6 shadow-sm overflow-hidden aspect-[4/3] relative flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-2 hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Quick Meta Card */}
            <div className="border border-[#E8E6E1] bg-white p-8 space-y-6">
              <h3 className="font-serif text-lg font-medium text-[#1C1A17] border-b border-[#E8E6E1] pb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-stone-600" />
                Project Metadata
              </h3>
              <div className="grid grid-cols-2 gap-6 text-xs">
                <div className="space-y-1">
                  <span className="font-mono text-[#6B6661] block">DEVELOPMENT CATEGORY</span>
                  <span className="font-medium text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5 font-mono">{project.category}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[#6B6661] block">COMPLETION YEAR</span>
                  <span className="font-medium text-[#1C1A17] flex items-center gap-1 font-mono">
                    <Calendar size={13} className="text-[#6B6661]" />
                    {project.year}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[#6B6661] block">PROJECT CONTEXT</span>
                  <span className="font-medium text-[#1C1A17] flex items-center gap-1 font-mono">
                    <MapPin size={13} className="text-[#6B6661]" />
                    {project.location}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[#6B6661] block">ROLE TYPE</span>
                  <span className="font-medium text-[#1C1A17] flex items-center gap-1 font-mono">
                    <Award size={13} className="text-[#6B6661]" />
                    Full Stack Architect
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Tech Stack, Long Description, Highlights, CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-medium leading-tight">
                {project.title}
              </h1>
              <p className="font-mono text-xs text-[#6B6661]">
                Portfolio Project Case Study &bull; Built by Bibek Bhattarai
              </p>
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="text-[#1C1A17] leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs text-[#1C1A17] font-bold tracking-wider uppercase">
                Technologies & Tools Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs text-[#1C1A17] bg-white border border-[#E8E6E1] px-3 py-1 rounded-none hover:border-[#1C1A17] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4 border-t border-[#E8E6E1] pt-6">
              <h3 className="font-mono text-xs text-[#1C1A17] font-bold tracking-wider uppercase">
                Key Technical Highlights:
              </h3>
              <div className="space-y-3">
                {project.details.map((detail, index) => (
                  <div key={index} className="flex space-x-3 items-start text-sm text-stone-700 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-stone-800 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 border-t border-[#E8E6E1] flex flex-wrap gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-[#1C1A17] text-[#FAF9F6] text-xs font-mono font-medium hover:bg-stone-850 transition-colors flex items-center gap-2"
                >
                  Visit Live Site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 border border-[#1C1A17] text-[#1C1A17] text-xs font-mono font-medium hover:bg-[#1C1A17] hover:text-[#FAF9F6] transition-colors flex items-center gap-2"
                >
                  View Source Code
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
