"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div className="relative">
          <h1 className="text-9xl font-bold text-black tracking-tighter">
            404
          </h1>
        </motion.div>

        <p className="text-gray-600 text-lg">
          The page you are looking for doesn&apos;t exist or has been moved to a
          new universe.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-3 bg-white text-background rounded-full font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 group"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      </div>
    </div>
  );
}
