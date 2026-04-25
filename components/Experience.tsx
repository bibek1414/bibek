"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profileData } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Calendar, Briefcase } from "lucide-react";

// ─── Animated timeline line ───────────────────────────────────────────────────

const TimelineLine = ({
  inView,
  itemCount,
}: {
  inView: boolean;
  itemCount: number;
}) => {
  // Approximate: 12px gap + ~140px per entry
  const estimatedHeight = itemCount * 148 + 24;
  const stroke = "rgba(255,255,255,0.3)";
  const track = "rgba(255,255,255,0.05)";

  return (
    <div
      className="absolute left-0 top-0 w-[1px] overflow-visible"
      style={{ height: estimatedHeight }}
    >
      {/* Track */}
      <div className="absolute inset-0" style={{ background: track }} />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-0 w-full"
        style={{ background: stroke }}
        initial={{ height: "0%" }}
        animate={inView ? { height: "100%" } : { height: "0%" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </div>
  );
};

// ─── Sonar ping dot ───────────────────────────────────────────────────────────

const SonarDot = ({
  inView,
  delay,
  hovered,
}: {
  inView: boolean;
  delay: number;
  hovered: boolean;
}) => {
  return (
    <div className="absolute -left-6.5 top-0 z-10">
      {/* Ping rings — 2 staggered */}
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ border: `1px solid rgba(255,255,255,0.2)` }}
          initial={{ scale: 1, opacity: 0 }}
          animate={
            inView
              ? {
                scale: [1, hovered ? 2.8 : 2.2],
                opacity: [0.7, 0],
              }
              : {}
          }
          transition={{
            duration: hovered ? 1.0 : 1.6,
            delay: delay + i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
            repeatDelay: 0.8,
          }}
        />
      ))}

      {/* Core dot */}
      <motion.div
        className="relative w-4 h-4 rounded-full bg-white border-4 border-background shadow-[0_0_12px_rgba(255,255,255,0.2)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ scale: 1.4 }}
      />
    </div>
  );
};

// ─── Timeline entry ───────────────────────────────────────────────────────────

const TimelineEntry = ({
  children,
  index,
  inView,
}: {
  children: React.ReactNode;
  index: number;
  inView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const delay = 0.3 + index * 0.18;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SonarDot inView={inView} delay={delay} hovered={hovered} />

      {/* Card reveal — clip-path wipe */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        animate={
          inView
            ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
            : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
        }
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Hover glow card background */}
        <motion.div
          className="relative rounded-xl p-4 -mx-4 transition-colors"
          animate={
            hovered
              ? {
                backgroundColor: "rgba(255,255,255,0.04)",
              }
              : { backgroundColor: "rgba(0,0,0,0)" }
          }
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

// ─── Column header ────────────────────────────────────────────────────────────

const ColumnHeader = ({
  icon: Icon,
  label,
  inView,
}: {
  icon: React.ElementType;
  label: string;
  inView: boolean;
}) => {
  const bg = "bg-white/10";
  const text = "text-white/70";
  const glow = "0 0 24px rgba(255,255,255,0.2)";

  return (
    <motion.div
      className="flex items-center gap-4 mb-8"
      initial={{ opacity: 0, y: -16, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center ${text}`}
        animate={
          inView
            ? {
              boxShadow: [
                "0 0 0px transparent",
                glow,
                "0 0 0px transparent",
              ],
            }
            : {}
        }
        transition={{ duration: 2.5, delay: 0.4, repeat: Infinity }}
        whileHover={{ scale: 1.15, rotate: 8 }}
      >
        <Icon size={20} />
      </motion.div>
      <h3 className="text-2xl font-bold text-white">{label}</h3>
    </motion.div>
  );
};

// ─── Work column ──────────────────────────────────────────────────────────────

const WorkColumn = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const items = profileData.experience ?? [];

  return (
    <div ref={ref} className="space-y-10">
      <ColumnHeader icon={Briefcase} label="Work Experience" inView={inView} />

      <div className="relative pl-8 space-y-12">
        <TimelineLine inView={inView} itemCount={items.length} />

        {items.map((item, idx) => (
          <TimelineEntry key={idx} index={idx} inView={inView}>
            <div className="space-y-3">
              {/* Date */}
              <motion.div
                className="flex items-center gap-2 text-xs text-muted-foreground font-medium"
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.18 }}
              >
                <motion.span
                  animate={inView ? { rotate: [-10, 0] } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.18, ease: "backOut" }}
                >
                  <Calendar size={12} />
                </motion.span>
                {item.period}
              </motion.div>

              <h4 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-brand-blue">
                {item.role}
              </h4>
              <p className="text-lg text-white/90 font-semibold">{item.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          </TimelineEntry>
        ))}
      </div>
    </div>
  );
};

// ─── Education column ─────────────────────────────────────────────────────────

const EducationColumn = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const items = profileData.education;

  return (
    <div ref={ref} className="space-y-10">
      <ColumnHeader icon={GraduationCap} label="Education" inView={inView} />

      <div className="relative pl-8 space-y-12">
        <TimelineLine inView={inView} itemCount={items.length} />

        {items.map((item, idx) => (
          <TimelineEntry key={idx} index={idx} inView={inView}>
            <div className="space-y-3">
              {/* Date */}
              <motion.div
                className="flex items-center gap-2 text-xs text-muted-foreground font-medium"
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.18 }}
              >
                <motion.span
                  animate={inView ? { rotate: [-10, 0] } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.18, ease: "backOut" }}
                >
                  <Calendar size={12} />
                </motion.span>
                {item.period}
              </motion.div>

              <h4 className="text-xl font-bold text-white">{item.degree}</h4>
              <p className="text-lg text-white/90 font-semibold">{item.institution}</p>
            </div>
          </TimelineEntry>
        ))}
      </div>
    </div>
  );
};

// ─── Experience ───────────────────────────────────────────────────────────────

export const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Professional Journey"
          subtitle="My career path and academic foundations."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          <WorkColumn />
          <EducationColumn />
        </div>
      </div>
    </section>
  );
};