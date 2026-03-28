"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 100); // 100 is half of the width
      mouseY.set(e.clientY - 100); // 100 is half of the height
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        zIndex: -1,
      }}
    >
      <motion.div
        className="h-50 w-50 rounded-full bg-brand-blue/20 blur-[100px]"
        style={{
          x: cursorX,
          y: cursorY,
          position: "absolute",
        }}
      />
    </motion.div>
  );
};
