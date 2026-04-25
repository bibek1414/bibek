"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-12 rounded-full bg-white/20 mt-6",
        align === "center" ? "mx-auto" : "mr-auto"
      )} />
    </motion.div>
  );
};
