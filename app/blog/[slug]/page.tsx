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
    <main className="pt-32 pb-24 px-6 min-h-screen bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#6B6661] hover:text-[#1C1A17] transition-colors mb-8 group font-mono text-xs"
        >
          <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-xs">
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

          <h1 className="font-serif text-3xl sm:text-5xl text-[#1C1A17] leading-tight">
            {blog.title}
          </h1>

          <p className="font-serif text-lg text-stone-700 leading-relaxed italic border-l-2 border-[#1C1A17] pl-6">
            {blog.excerpt}
          </p>
        </div>

        <div className="mt-12 prose prose-stone max-w-none">
          <div 
            className="space-y-6 text-[#1C1A17] leading-relaxed text-base"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        <div className="mt-16 pt-12 border-t border-[#E8E6E1] space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 border border-[#E8E6E1] bg-white">
            <div className="w-16 h-16 bg-[#1C1A17] text-[#FAF9F6] flex items-center justify-center text-xl font-serif font-bold">
              BB
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h4 className="font-serif text-lg font-medium text-[#1C1A17]">Bibek Bhattarai</h4>
              <p className="text-xs text-[#6B6661] font-sans leading-relaxed">
                A versatile full-stack developer passionate about building high-performance web applications 
                and exploring the latest trends in technology, from Next.js to AI/ML.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 py-8">
            <h5 className="font-mono text-[10px] text-[#6B6661] font-bold">Share this article</h5>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                <button
                  key={platform}
                  className="px-6 py-2 border border-[#E8E6E1] text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#FAF9F6] text-xs font-mono transition-colors cursor-pointer"
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
