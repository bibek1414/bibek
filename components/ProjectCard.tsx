"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  id: string;
  className?: string;
  variant?: "default" | "compact";
  /** Pass the card's index in the grid for staggered entry */
  index?: number;
}

// ─── Badge ────────────────────────────────────────────────────────────────────

const TechBadge = ({
  tech,
  index,
  inView,
  isCompact,
  cardHovered,
}: {
  tech: string;
  index: number;
  inView: boolean;
  isCompact: boolean;
  cardHovered: boolean;
}) => (
  <motion.span
    className={cn(
      "font-bold uppercase tracking-wider rounded-lg bg-white/5 border border-white/10 text-muted-foreground transition-colors duration-300",
      cardHovered
        ? "bg-brand-blue/10 text-brand-blue border-brand-blue/20"
        : "",
      isCompact ? "px-2 py-0.5 text-[8px]" : "px-3 py-1 text-[10px]"
    )}
    initial={{ opacity: 0, scale: 0.7, y: 6 }}
    animate={
      inView
        ? { opacity: 1, scale: 1, y: 0 }
        : { opacity: 0, scale: 0.7, y: 6 }
    }
    whileHover={{ y: -2, scale: 1.06 }}
    transition={{
      default: { duration: 0.35, delay: 0.3 + index * 0.05, ease: [0.16, 1, 0.3, 1] },
      y: { duration: 0.15 },
      scale: { duration: 0.15 },
    }}
  >
    {tech}
  </motion.span>
);

// ─── Border trace overlay ─────────────────────────────────────────────────────
// A pseudo-border glow that appears on hover using a conic-gradient mask trick.

const BorderTrace = ({ hovered }: { hovered: boolean }) => (
  <motion.div
    className="absolute inset-0 rounded-2xl pointer-events-none z-20"
    style={{
      background:
        "conic-gradient(from 0deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.6) 20%, rgba(139,92,246,0.4) 40%, rgba(59,130,246,0) 60%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      padding: "1px",
    }}
    initial={{ opacity: 0, rotate: 0 }}
    animate={
      hovered
        ? { opacity: 1, rotate: 360 }
        : { opacity: 0, rotate: 0 }
    }
    transition={
      hovered
        ? { opacity: { duration: 0.2 }, rotate: { duration: 2.5, ease: "linear", repeat: Infinity } }
        : { opacity: { duration: 0.3 }, rotate: { duration: 0 } }
    }
  />
);

// ─── Shimmer glare ────────────────────────────────────────────────────────────

const ShimmerGlare = ({ hovered }: { hovered: boolean }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none z-10 rounded-xl"
    style={{
      background:
        "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.12) 50%, transparent 80%)",
    }}
    initial={{ x: "-100%" }}
    animate={hovered ? { x: "150%" } : { x: "-100%" }}
    transition={
      hovered
        ? { duration: 0.55, ease: "easeInOut" }
        : { duration: 0 }
    }
  />
);

// ─── ProjectCard ──────────────────────────────────────────────────────────────

export const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  liveLink,
  githubLink,
  id,
  className,
  variant = "default",
  index = 0,
}: ProjectCardProps) => {
  const isCompact = variant === "compact";
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 28, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300",
        hovered ? "border-transparent bg-white/8" : "",
        isCompact ? "p-3" : "p-0",
        className
      )}
    >
      {/* Rotating border trace */}
      <BorderTrace hovered={hovered} />

      {/* Hover gradient fill */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={
          hovered
            ? { opacity: 1 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.4 }}
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.04) 50%, transparent 80%)",
        }}
      />

      {/* Large background number */}
      {!isCompact && (
        <motion.span
          className="absolute top-6 left-6 text-6xl font-black select-none z-0"
          animate={{
            opacity: hovered ? 0.12 : 0.05,
            x: hovered ? 6 : 0,
            color: hovered ? "#3b82f6" : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
        >
          {id}
        </motion.span>
      )}

      {/* Image container */}
      <div
        className={cn(
          "relative overflow-hidden z-10 rounded-xl",
          isCompact ? "aspect-4/3" : "aspect-video"
        )}
      >
        <motion.div
          className="w-full h-full"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            style={{ filter: hovered ? "brightness(1.08)" : "brightness(1)" }}
          />
        </motion.div>

        {/* Shimmer glare sweep */}
        <ShimmerGlare hovered={hovered} />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none" />
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col grow relative z-10",
          isCompact ? "p-2 pt-4" : "p-8"
        )}
      >
        {/* Title */}
        <motion.h3
          className={cn(
            "font-bold text-white",
            isCompact ? "text-lg mb-2" : "text-2xl mb-3"
          )}
          animate={{ color: hovered ? "rgb(59,130,246)" : "rgb(255,255,255)" }}
          transition={{ duration: 0.25 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p
          className={cn(
            "text-muted-foreground text-sm leading-relaxed grow",
            isCompact ? "line-clamp-2 mb-4" : "line-clamp-3 mb-6"
          )}
        >
          {description}
        </p>

        {/* Tech badges — staggered entry */}
        <div className={cn("flex flex-wrap gap-1.5", isCompact ? "mb-4" : "mb-8")}>
          {technologies.map((tech, i) => (
            <TechBadge
              key={tech}
              tech={tech}
              index={i}
              inView={inView}
              isCompact={isCompact}
              cardHovered={hovered}
            />
          ))}
        </div>

        {/* Links */}
        <div
          className={cn(
            "flex items-center gap-4 pt-4 border-t border-white/10",
            isCompact ? "justify-between" : ""
          )}
        >
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-1.5 text-sm font-semibold text-white hover:text-brand-blue transition-colors duration-200"
            >
              {isCompact ? "Live" : "Live Project"}
              <motion.span
                animate={hovered ? { x: 2, y: -2 } : { x: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight size={isCompact ? 14 : 16} />
              </motion.span>
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-white transition-colors p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30"
              aria-label="GitHub"
            >
              <motion.span
                animate={hovered ? { rotate: 15 } : { rotate: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ display: "block" }}
              >
                <FaGithub size={isCompact ? 18 : 20} />
              </motion.span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};