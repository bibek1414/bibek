"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Smartphone, 
  Cpu, 
  Cloud 
} from "lucide-react";

const icons = [
  { Icon: Code2, color: "#60A5FA", delay: 0 },
  { Icon: Database, color: "#818CF8", delay: 2 },
  { Icon: Globe, color: "#F472B6", delay: 4 },
  { Icon: Layout, color: "#34D399", delay: 6 },
  { Icon: Smartphone, color: "#FBBF24", delay: 8 },
  { Icon: Cpu, color: "#A78BFA", delay: 10 },
  { Icon: Cloud, color: "#FB7185", delay: 12 },
  { Icon: Layers, color: "#F87171", delay: 14 },
];

export const TechOrbit = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden py-24">
      {/* Background Rings */}
      <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />
      <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full" />
      <div className="absolute w-[200px] h-[200px] border border-white/20 rounded-full" />

      {/* Profile Center */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 12, stiffness: 100 }}
        className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full p-1 bg-gradient-premium shadow-2xl shadow-brand-blue/20 overflow-hidden"
      >
        <Image
          src="/images/profile.png"
          alt="Bibek Bhattarai"
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
      </motion.div>

      {/* Orbiting Icons */}
      {icons.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: -item.delay,
          }}
          style={{ width: "350px", height: "350px" }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl transition-all hover:scale-125 hover:bg-white/10"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: -item.delay,
            }}
          >
            <item.Icon size={24} style={{ color: item.color }} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
