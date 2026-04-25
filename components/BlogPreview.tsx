"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogs } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const BlogPreview = () => {
  const latestBlogs = blogs.slice(0, 3);
  const router = useRouter();

  return (
    <section id="blog-preview" className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeader
        title="Latest Insights"
        subtitle="Exploring the frontiers of web development, AI, and software engineering through deep-dives and tutorials."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {latestBlogs.map((blog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-4xl overflow-hidden hover:border-brand-blue/30 transition-all duration-300 cursor-pointer"
            onClick={() => router.push(`/blog/${blog.slug}`)}
          >
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-blue">
                <span>{blog.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors line-clamp-2">
                <Link href={`/blog/${blog.slug}`}>
                  {blog.title}
                </Link>
              </h3>
              
              <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                {blog.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {blog.readTime}
                  </span>
                </div>
                
                <Link 
                  href={`/blog/${blog.slug}`}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-blue transition-all"
                >
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link 
          href="/blog"
          className="text-sm font-bold text-white/60 hover:text-white flex items-center gap-2 transition-colors group"
        >
          View all articles
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
