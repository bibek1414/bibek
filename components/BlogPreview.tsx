"use client";
import React from "react";
import { motion } from "framer-motion";
import { blogs } from "@/lib/data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const BlogPreview = () => {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section id="blog" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#6B6661]">
              11 / Written Records
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17]">
              Latest Insights
            </h2>
          </div>
          <p className="text-[#6B6661] text-sm max-w-md font-sans leading-relaxed">
            Exploring backend engineering patterns, Next.js optimization strategies, and systematic API pipelines.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="group bg-[#FAF9F6] border border-[#E8E6E1] overflow-hidden flex flex-col justify-between hover:border-[#1C1A17] transition-colors duration-300 h-full block"
              >
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] text-[#1C1A17] bg-[#E8E6E1] px-2.5 py-0.5 w-fit block">
                      {blog.category}
                    </span>
                    
                    <h3 className="font-serif text-xl font-medium text-[#1C1A17] group-hover:text-stone-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-xs text-[#6B6661] leading-relaxed font-sans line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#E8E6E1] flex items-center justify-between">
                    <div className="flex space-x-3 text-[10px] font-mono text-[#6B6661]">
                      <span>{blog.date}</span>
                      <span>&bull;</span>
                      <span>{blog.readTime}</span>
                    </div>
                    
                    <span className="text-[#1C1A17] group-hover:translate-x-1 transition-transform flex items-center">
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link 
            href="/blog"
            className="px-8 py-4 border border-[#1C1A17] text-[#1C1A17] text-xs font-mono font-medium hover:bg-[#1C1A17] hover:text-[#FAF9F6] transition-all flex items-center gap-2"
          >
            View all articles
            <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

