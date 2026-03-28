import React from "react";
import { blogs } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Bibek Bhattarai",
  description: "Read articles and insights by Bibek Bhattarai on web development, React, Next.js, and modern technology.",
};

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
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
              className="glass-card group flex flex-col md:flex-row gap-8 items-start hover:bg-white/10 transition-all border border-white/5"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-brand-blue uppercase tracking-widest">
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

                <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all"
                  >
                    Read Article
                    <ArrowRight size={18} className="text-brand-blue" />
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
