"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const FAB = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link
          href="/contact"
          className="flex items-center justify-center w-14 h-14 bg-brand-blue text-white rounded-full shadow-[0_8px_24px_rgba(59,130,246,0.4)] border border-white/20 transition-all hover:bg-brand-blue/90"
          aria-label="Hire Me"
        >
          <MessageSquare size={24} />
        </Link>
      </motion.div>
    </div>
  );
};
