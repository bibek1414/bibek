"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, History, BookOpen, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Experience", href: "/experience", icon: History },
  { name: "Certificates", href: "/certificates", icon: Award },
  { name: "Blog", href: "/blog", icon: BookOpen },
];

export const MobileNav = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    // Basic logic to determine active tab based on pathname and hash
    const handleHashChange = () => {
      const hash = window.location.hash;
      const currentItem = navItems.find(item => 
        (item.href.includes("#") && item.href.endsWith(hash)) || 
        (!item.href.includes("#") && pathname === item.href)
      );
      if (currentItem) setActiveTab(currentItem.name);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-background/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center max-w-lg mx-auto relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative flex items-center justify-center p-2 rounded-full transition-all duration-300",
                isActive ? "text-brand-blue bg-white/5" : "text-muted-foreground hover:text-white"
              )}
              onClick={() => setActiveTab(item.name)}
            >
              <Icon size={22} className={cn("transition-all duration-300", isActive && "scale-110")} />
              
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute -bottom-1 w-1 h-1 bg-brand-blue rounded-full"
                  // Note: motion is not imported here, I need to add it or use CSS.
                  // Wait, I should import motion.
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
