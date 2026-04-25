"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-white/5 tracking-tighter">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white tracking-tight">Lost in Space?</h2>
          </div>
        </motion.div>
        
        <p className="text-muted-foreground text-lg">
          The page you are looking for doesn&apos;t exist or has been moved to a new universe.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-3 bg-white text-background rounded-full font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 group"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            Report Issue
            <ChevronRight size={18} className="text-brand-blue" />
          </Link>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      </div>
    </div>
  );
}
