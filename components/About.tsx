"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";
import { profileData } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const slideInVariant: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ─── Counting Number ──────────────────────────────────────────────────────────

const CountingNumber = ({
  target,
  suffix = "",
  inView,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  inView: boolean;
  delay?: number;
}) => {
  const [display, setDisplay] = useState(target); // Initialize with target for SSR
  const [mounted, setMounted] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !inView || hasRun.current) return;
    hasRun.current = true;

    const timeout = setTimeout(() => {
      const controls = animate(0, target, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, target, delay, mounted]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

// ─── Stat Card ────────────────────────────────────────────────────────────────

const StatCard = ({
  label,
  value,
  isNumeric,
  numericTarget,
  suffix,
  color,
  inView,
  delay,
  index,
}: {
  label: string;
  value: string;
  isNumeric?: boolean;
  numericTarget?: number;
  suffix?: string;
  color: string;
  inView: boolean;
  delay: number;
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={fadeUpVariant}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    className="relative space-y-2 p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden group"
  >
    {/* Hover glow */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
      style={{
        background: `radial-gradient(ellipse at 50% 120%, ${color === "blue"
          ? "rgba(59,130,246,0.08)"
          : color === "purple"
            ? "rgba(139,92,246,0.08)"
            : color === "pink"
              ? "rgba(236,72,153,0.08)"
              : "rgba(74,222,128,0.08)"
          } 0%, transparent 70%)`,
      }}
    />

    <div className="flex items-center gap-2">
      <p
        className={`font-bold text-xs ${color === "blue"
          ? "text-brand-blue"
          : color === "purple"
            ? "text-brand-purple"
            : color === "pink"
              ? "text-brand-pink"
              : "text-green-400"
          }`}
      >
        {label}
      </p>
    </div>

    <p className="text-white text-xl font-semibold">
      {isNumeric && numericTarget !== undefined ? (
        <CountingNumber target={numericTarget} suffix={suffix} inView={inView} delay={delay * 300} />
      ) : (
        value
      )}
    </p>
  </motion.div>
);

// ─── Animated Photo Frame ─────────────────────────────────────────────────────

const PhotoFrame = ({ name }: { name: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setRevealed(true), 200);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative aspect-square max-w-md mx-auto lg:mx-0">
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 bg-brand-blue/20 rounded-3xl blur-3xl -z-10"
        animate={inView ? { opacity: [0.2, 0.5, 0.2] } : { opacity: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating dashed ring */}
      <motion.div
        className="absolute -inset-4 rounded-[2.5rem] border border-dashed border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -inset-8 rounded-[3rem] border border-dashed border-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />


      {/* Image with scan-line reveal */}
      <motion.div
        className="relative h-full w-full rounded-3xl border border-white/10 overflow-hidden"
        style={{ clipPath: "inset(0 0 100% 0)" }}
        animate={revealed ? { clipPath: "inset(0 0 0% 0)" } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Scan line effect */}
        {revealed && (
          <motion.div
            className="absolute inset-x-0 h-[2px] bg-brand-blue/60 z-20 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" />

        <Image
          src="/images/profile.png"
          alt={name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
        />
      </motion.div>

      {/* Corner accent blobs */}
      <motion.div
        className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-2xl -z-10"
        animate={inView ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] } : {}}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute -top-6 -left-6 w-24 h-24 bg-brand-pink/20 rounded-full blur-2xl -z-10"
        animate={inView ? { scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Status badge */}
      <motion.div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-xs font-bold text-white/70 whitespace-nowrap">
          Open to opportunities
        </div>
      </motion.div>
    </div>
  );
};

// ─── Decorative diagonal line ─────────────────────────────────────────────────

const DiagonalAccent = ({ inView }: { inView: boolean }) => (
  <svg
    className="absolute right-0 top-0 w-64 h-64 opacity-[0.04] pointer-events-none"
    viewBox="0 0 256 256"
  >
    <motion.line
      x1="0"
      y1="256"
      x2="256"
      y2="0"
      stroke="white"
      strokeWidth="1"
      pathLength="0"
      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
    />
    <motion.line
      x1="40"
      y1="256"
      x2="256"
      y2="40"
      stroke="white"
      strokeWidth="1"
      pathLength="0"
      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.line
      x1="80"
      y1="256"
      x2="256"
      y2="80"
      stroke="white"
      strokeWidth="1"
      pathLength="0"
      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.7 }}
    />
  </svg>
);

// ─── About ────────────────────────────────────────────────────────────────────

export const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const textInView = useInView(textRef, { once: true, margin: "-60px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const stats = profileData.stats.map((stat, i) => ({
    label: stat.label,
    value: stat.value,
    isNumeric: typeof stat.value === "number",
    numericTarget: typeof stat.value === "number" ? stat.value : undefined,
    suffix: stat.label === "Experience" ? "+ Yrs" : "",
    color: i === 0 ? "blue" : i === 1 ? "purple" : i === 2 ? "pink" : "green",
    delay: i,
  }));

  const paragraphs = [
    `I am ${profileData.name}, a ${profileData.role} dedicated to building scalable and efficient digital solutions. With a strong foundation in both frontend and backend technologies, I thrive on solving complex problems and turning innovative ideas into reality.`,
    `Based in ${profileData.nationality}, I have spent the last few years mastering the art of web development, from conceptualizing designs to deploying robust production-ready applications. My approach focuses on clean code, performance optimization, and creating meaningful user interactions.`,
  ];

  return (
    <section ref={sectionRef} id="about" className="relative container mx-auto px-6 py-24 overflow-hidden">
      {/* Decorative diagonal lines */}
      <DiagonalAccent inView={sectionInView} />

      {/* Ambient background */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
        animate={sectionInView ? { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About My Craft"
          subtitle="Bridging the gap between complex backend logic and intuitive frontend experiences."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
          {/* Photo */}
          <PhotoFrame name={profileData.name} />

          {/* Text content */}
          <div ref={textRef} className="space-y-8">
            {/* Heading */}
            <motion.h3
              className="text-3xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={textInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Passionate about{" "}
              <motion.span
                className="text-brand-blue inline-block"
                animate={
                  textInView
                    ? {
                      textShadow: [
                        "0 0 0px transparent",
                        "0 0 20px rgba(59,130,246,0.6)",
                        "0 0 0px transparent",
                      ],
                    }
                    : {}
                }
                transition={{ duration: 3, delay: 0.8, repeat: Infinity }}
              >
                Innovation
              </motion.span>{" "}
              &{" "}
              <motion.span
                className="text-brand-purple inline-block"
                animate={
                  textInView
                    ? {
                      textShadow: [
                        "0 0 0px transparent",
                        "0 0 20px rgba(139,92,246,0.6)",
                        "0 0 0px transparent",
                      ],
                    }
                    : {}
                }
                transition={{ duration: 3, delay: 1.4, repeat: Infinity }}
              >
                User Experience
              </motion.span>
            </motion.h3>

            {/* Paragraphs — line by line */}
            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-muted-foreground text-lg leading-relaxed"
                  custom={i}
                  variants={slideInVariant}
                  initial="hidden"
                  animate={textInView ? "visible" : "hidden"}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Divider line that draws in */}
            <div className="relative h-[1px] overflow-hidden">
              <div className="absolute inset-0 bg-white/5" />
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-blue via-brand-purple to-transparent"
                initial={{ width: "0%" }}
                animate={textInView ? { width: "60%" } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((stat, i) => (
                <StatCard
                  key={i}
                  index={i}
                  label={stat.label}
                  value={stat.value}
                  isNumeric={stat.isNumeric}
                  numericTarget={stat.numericTarget}
                  suffix={stat.suffix}
                  color={stat.color}
                  inView={statsInView}
                  delay={stat.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};