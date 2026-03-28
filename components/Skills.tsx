"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

// ─── Variants ─────────────────────────────────────────────────────────────────

const columnVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, rotateX: -60, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

// ─── Magnetic Pill ────────────────────────────────────────────────────────────

const MagneticPill = ({
  name,
  globalIndex,
}: {
  name: string;
  globalIndex: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Pull toward cursor — capped at ±6px
    x.set(Math.max(-6, Math.min(6, (e.clientX - cx) * 0.35)));
    y.set(Math.max(-5, Math.min(5, (e.clientY - cy) * 0.35)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  // Slow idle breath — unique phase per pill so they don't all sync
  const idleDelay = (globalIndex * 0.37) % 3;

  return (
    <motion.span
      ref={ref}
      variants={pillVariants}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-default"
    >
      {/* Idle breath wrapper */}
      <motion.span
        className="block"
        animate={{ scale: [1, 1.016, 1] }}
        transition={{
          duration: 3.5,
          delay: idleDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner glow — fires on hover entry */}
        <motion.span
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: [0, 1, 0.4] } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.25) 0%, transparent 70%)",
          }}
        />

        <motion.span
          className="relative px-4 py-2 rounded-xl border text-sm font-medium backdrop-blur-sm block"
          animate={
            hovered
              ? {
                backgroundColor: "rgba(59,130,246,0.12)",
                borderColor: "rgba(59,130,246,0.45)",
                color: "rgba(255,255,255,1)",
                boxShadow: "0 0 16px rgba(59,130,246,0.2)",
              }
              : {
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
                color: "rgba(160,160,180,1)",
                boxShadow: "0 0 0px transparent",
              }
          }
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.span>
      </motion.span>
    </motion.span>
  );
};

// ─── Column Line ──────────────────────────────────────────────────────────────
// Traces down from the header border as items load in.

const ColumnLine = ({ inView, itemCount }: { inView: boolean; itemCount: number }) => {
  // Approximate height: header (~36px) + gap (24px) + pills (~40px * rows estimate)
  const estimatedRows = Math.ceil(itemCount / 3);
  const lineHeight = 36 + 24 + estimatedRows * 52;

  return (
    <div
      className="absolute left-0 top-0 w-[2px] overflow-hidden"
      style={{ height: lineHeight }}
    >
      {/* Base track */}
      <div className="absolute inset-0 bg-white/5" />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-blue via-brand-purple to-transparent"
        initial={{ height: "0%" }}
        animate={inView ? { height: "100%" } : { height: "0%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      />
    </div>
  );
};

// ─── Category Column ──────────────────────────────────────────────────────────

const CategoryColumn = ({
  category,
  categoryIndex,
  globalOffset,
}: {
  category: { category: string; items: { name: string }[] };
  categoryIndex: number;
  globalOffset: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={columnVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative space-y-6 pl-6"
    >
      {/* Traced vertical line */}
      <ColumnLine inView={inView} itemCount={category.items.length} />

      {/* Category title */}
      <motion.h3
        className="text-xl font-bold text-white"
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        {category.category}
      </motion.h3>

      {/* Pills */}
      <div className="flex flex-wrap gap-3" style={{ perspective: "600px" }}>
        {category.items.map((skill, sIdx) => (
          <MagneticPill
            key={sIdx}
            name={skill.name}
            globalIndex={globalOffset + sIdx}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export const Skills = () => {
  // Compute global pill index offsets so idle breath phases are unique across all columns
  const offsets: number[] = [];
  let running = 0;
  for (const cat of skills) {
    offsets.push(running);
    running += cat.items.length;
  }

  return (
    <section id="skills" className="container mx-auto px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="The tools and technologies I use to bring ideas to life."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
          {skills.map((category, idx) => (
            <CategoryColumn
              key={idx}
              category={category}
              categoryIndex={idx}
              globalOffset={offsets[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};