import React from "react";
import { blogs } from "@/lib/data";
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
    <main className="pt-32 pb-24 px-6 min-h-screen bg-[#FAF9F6]">
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <span className="font-mono text-xs text-[#6B6661]">
            07 / Written Records
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17]">
            Insights & Articles
          </h1>
          <p className="text-[#6B6661] text-sm max-w-xl font-sans leading-relaxed">
            Thoughts on technology, backend system architecture, and clean engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white border border-[#E8E6E1] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start hover:border-[#1C1A17] transition-colors duration-300"
            >
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <span className="font-mono text-[9px] text-[#1C1A17] bg-[#E8E6E1] px-2.5 py-0.5">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#6B6661]">
                    <Calendar size={12} />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#6B6661]">
                    <Clock size={12} />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#1C1A17]">
                  {blog.title}
                </h3>

                <p className="text-sm text-[#6B6661] leading-relaxed font-sans max-w-3xl">
                  {blog.excerpt}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 border border-[#1C1A17] text-[#1C1A17] text-xs font-mono px-4 py-2 hover:bg-[#1C1A17] hover:text-[#FAF9F6] transition-colors"
                  >
                    Read Article
                    <ChevronRight size={14} />
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
