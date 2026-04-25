"use client";

import React, { useState, useEffect } from "react";

import { motion, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import { profileData } from "@/lib/data";
import Link from "next/link";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
} from "react-icons/si";

// ─── Data ────────────────────────────────────────────────────────────────────

const techLogos = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiFramer, name: "Framer" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiPostgresql, name: "Postgres" },
];

const roles = ["Full Stack Developer", "AI Enthusiast", "DevOps Practitioner", "Problem Solver"];

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// Letter-by-letter split
const letterContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.2 } },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Particles ────────────────────────────────────────────────────────────────

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const ParticleField = () => {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.4, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ─── Morphing Orbs ────────────────────────────────────────────────────────────

const MorphingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    {/* Blue orb — top left */}
    <motion.div
      className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
      }}
      animate={{
        scale: [1, 1.15, 0.95, 1.08, 1],
        x: [0, 40, -20, 10, 0],
        y: [0, -20, 30, -10, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Purple orb — bottom right */}
    <motion.div
      className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
      }}
      animate={{
        scale: [1, 0.9, 1.12, 0.98, 1],
        x: [0, -30, 20, -15, 0],
        y: [0, 25, -15, 10, 0],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    />
    {/* Cyan accent — center */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
      }}
      animate={{
        scale: [1, 1.4, 0.8, 1.2, 1],
        opacity: [0.5, 1, 0.3, 0.8, 0.5],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 6 }}
    />
  </div>
);

// ─── Animated grid lines ──────────────────────────────────────────────────────

const GridLines = () => (
  <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-[0.03]">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  </div>
);

// ─── Typewriter ───────────────────────────────────────────────────────────────

const Typewriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[roleIndex];
      const isFinishingType = !isDeleting && displayText === currentRole;
      const isFinishingDelete = isDeleting && displayText === "";

      if (isFinishingType) {
        setSpeed(2000);
        setIsDeleting(true);
      } else if (isFinishingDelete) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setSpeed(500);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
        setSpeed(isDeleting ? 40 : 120);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, speed]);

  return (
    <span className="relative text-brand-blue">
      {displayText}
      <motion.span
        className="inline-block w-[2px] h-[0.85em] bg-brand-blue ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};

// ─── Split text heading ───────────────────────────────────────────────────────

const SplitHeading = ({ children, className }: { children: string; className?: string }) => {
  const words = children.split(" ");
  return (
    <motion.span
      className={className}
      variants={letterContainerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block", perspective: "800px" }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.3em" }}>
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              variants={letterVariants}
              style={{ display: "inline-block", transformOrigin: "top center" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// ─── Shimmer Button ───────────────────────────────────────────────────────────

const ShimmerButton = ({
  href,
  download,
  children,
  variant = "primary",
}: {
  href: string;
  download?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) => {
  const [hovered, setHovered] = useState(false);

  const base =
    "relative group px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 overflow-hidden active:scale-95";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm";

  const content = (
    <>
      {/* Shimmer sweep */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
          transform: "translateX(-100%)",
        }}
        animate={hovered ? { transform: "translateX(200%)" } : { transform: "translateX(-100%)" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      {children}
    </>
  );

  if (download) {
    return (
      <a
        href={href}
        download
        className={`${base} ${styles}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </Link>
  );
};

// ─── Floating Tech Logo ───────────────────────────────────────────────────────

const FloatingLogo = ({
  tech,
  idx,
  total,
}: {
  tech: (typeof techLogos)[0];
  idx: number;
  total: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const floatDelay = (idx / total) * 3;
  const floatDuration = 3 + (idx % 3) * 0.8;

  return (
    <motion.div
      className="relative flex flex-col items-center gap-2 cursor-default"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2 + idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={
            hovered
              ? { scale: 1.3, filter: "drop-shadow(0 0 12px rgba(59,130,246,0.8))" }
              : { scale: 1, filter: "drop-shadow(0 0 0px transparent)" }
          }
          transition={{ duration: 0.2 }}
        >
          <tech.icon
            size={28}
            className={`transition-colors duration-200 ${hovered ? "text-brand-blue" : "text-white/40"
              }`}
          />
        </motion.div>
      </motion.div>

      <motion.span
        className="text-[10px] font-bold text-brand-blue tracking-wider whitespace-nowrap"
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.15 }}
      >
        {tech.name}
      </motion.span>
    </motion.div>
  );
};

// ─── Scroll indicator ─────────────────────────────────────────────────────────



// ─── Hero ─────────────────────────────────────────────────────────────────────

export const Hero = () => {
  // Cursor parallax on headline block
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-4, 4]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:pt-32 md:pb-20 md:px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background layers */}
      <GridLines />
      <MorphingOrbs />
      <ParticleField />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full mx-auto text-center space-y-12"
      >
        {/* Headline with cursor parallax */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="space-y-5"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUpVariants} className="flex justify-center">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/50 backdrop-blur-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Available for work
            </motion.span>
          </motion.div>

          {/* Main headline — letter split */}
          <h1
            className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
            style={{ perspective: "1000px" }}
          >
            <SplitHeading>Crafting</SplitHeading>{" "}
            <motion.span
              className="text-gradient inline-block"
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              style={{ display: "inline-block", perspective: "800px" }}
            >
              {"Digital".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  style={{ display: "inline-block" }}
                  animate={{
                    textShadow: [
                      "0 0 0px transparent",
                      "0 0 30px rgba(59,130,246,0.5)",
                      "0 0 0px transparent",
                    ],
                  }}
                  transition={{
                    textShadow: { duration: 3, delay: 1.5 + i * 0.1, repeat: Infinity },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <SplitHeading>Experiences.</SplitHeading>
          </h1>

          {/* Typewriter role */}
          <motion.div
            variants={fadeUpVariants}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/80"
          >
            I am a <Typewriter />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUpVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {profileData.tagline}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <ShimmerButton href="#projects" variant="primary">
            Explore My Work
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight size={18} />
            </motion.span>
          </ShimmerButton>

          <ShimmerButton href="/files/cv.pdf" download variant="ghost">
            <Download size={18} />
            Get My Resume
          </ShimmerButton>
        </motion.div>

        {/* Tech Logos */}
        <motion.div
          variants={fadeUpVariants}
          className="pt-20 border-t border-white/5 max-w-4xl mx-auto"
        >
          <motion.p
            className="text-xs font-medium text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Trusted by Modern Technologies
          </motion.p>

          <div className="flex flex-wrap items-end justify-center gap-10 md:gap-14">
            {techLogos.map((tech, idx) => (
              <FloatingLogo key={idx} tech={tech} idx={idx} total={techLogos.length} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
    </section>
  );
};