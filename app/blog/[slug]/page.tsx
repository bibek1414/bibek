import React from "react";
import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: `https://bibekbhattarai14.com.np/blog/${slug}`,
      publishedTime: blog.date,
      authors: ["Bibek Bhattarai"],
    },
    twitter: {
      title: blog.title,
      description: blog.excerpt,
    }
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>

        <div className="space-y-6">
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

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-brand-blue pl-6">
            {blog.excerpt}
          </p>
        </div>

        <div className="mt-12 prose prose-invert prose-brand max-w-none">
          <div 
            className="space-y-6 text-muted-foreground leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        <div className="mt-16 pt-12 border-t border-white/10 space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-24 h-24 rounded-full bg-brand-blue/20 flex items-center justify-center text-3xl font-bold text-brand-blue">
              BB
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h4 className="text-xl font-bold text-white">Bibek Bhattarai</h4>
              <p className="text-muted-foreground">
                A versatile full-stack developer passionate about building high-performance web applications 
                and exploring the latest trends in technology, from Next.js to AI/ML.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 py-8">
            <h5 className="text-sm font-semibold text-muted-foreground">Share this article</h5>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                <button
                  key={platform}
                  className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
