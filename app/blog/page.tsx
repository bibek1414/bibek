import React from "react";
import { blogs } from "@/lib/data";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Blog | Bibek Bhattarai - Tech Insights & Articles",
  description: "Insights, articles, and technical deep-dives by Bibek Bhattarai on web development, software engineering, and modern tech trends.",
  path: "/blog",
  ogLabel: "Written Records",
});

export default function BlogPage() {
  const blogSchema = {
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
      "url": absoluteUrl(`/blog/${blog.slug}`)
    }))
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
        "name": "Blog",
        "item": absoluteUrl("/blog"),
      },
    ],
  };

  return (
    <main className="pt-24 pb-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="blog-schema" data={blogSchema} />
      <JsonLd id="blog-breadcrumb" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-12">
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

                <h2 className="font-serif text-2xl font-medium text-[#1C1A17]">
                  {blog.title}
                </h2>

                <p className="text-sm text-[#6B6661] leading-relaxed font-sans max-w-3xl">
                  {blog.excerpt}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/blog/${blog.slug}`}
                    aria-label={`Read article: ${blog.title}`}
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
