import React from "react";
import { profileData } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-gradient mb-2 tracking-tighter">BB.</p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
          {profileData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
