import React from "react";
import { blogs } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, articles, and technical deep-dives by Bibek Bhattarai on web development and software engineering.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "https://bibekbhattarai14.com.np/blog",
    title: "Tech Blog | Bibek Bhattarai",
    description: "Read my latest thoughts on React, Next.js, and modern tech trends.",
  },
  twitter: {
    title: "Tech Blog | Bibek Bhattarai",
    description: "Technical articles and development insights.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Bibek Bhattarai's Blog",
  "description": "Insights and articles on web development and modern tech.",
  "publisher": {
    "@type": "Person",
    "name": "Bibek Bhattarai"
  },
  "blogPost": blogs.map((blog) => ({
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "datePublished": blog.date,
    "url": `https://bibekbhattarai14.com.np/blog/${blog.slug}`
  }))
};

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Insights & Articles"
          subtitle="Thoughts on technology, software engineering, and the future of digital innovation."
          align="left"
        />

        <div className="grid grid-cols-1 gap-8 mt-16">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="glass-card flex flex-col md:flex-row gap-8 items-start border border-white/5"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-brand-blue">
                  <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock size={14} />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white transition-colors">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-white font-semibold transition-all"
                  >
                    Read Article
                    <ChevronRight size={18} className="text-brand-blue" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
