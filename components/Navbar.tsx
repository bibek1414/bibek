"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-[#FAF9F6]/85 backdrop-blur-md border-[#E8E6E1] py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-xl font-semibold text-[#1C1A17] hover:opacity-80 transition-opacity"
        >
          Bibek
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-[11px] font-mono text-[#6B6661]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "hover:text-[#1C1A17] transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-[#1C1A17] after:transition-all duration-300",
                pathname === link.href && "text-[#1C1A17] after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2.5 border border-[#1C1A17] text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#FAF9F6] transition-all rounded-none font-medium flex items-center gap-1.5"
          >
            Initiate Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1C1A17] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#FAF9F6] border-b border-[#E8E6E1] overflow-hidden"
          >
            <div className="flex flex-col space-y-6 px-6 py-8 text-xs font-mono text-[#6B6661]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "hover:text-[#1C1A17] transition-colors",
                    pathname === link.href && "text-[#1C1A17]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="w-full text-center px-4 py-3 border border-[#1C1A17] text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#FAF9F6] transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Initiate Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
