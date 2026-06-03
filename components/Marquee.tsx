"use client";

import React from "react";

export const Marquee = () => {
  const items = [
    "Full Stack Development",
    "Systems Architecture",
    "DevOps Operations",
    "Machine Learning",
    "API Engineering",
    "Interaction UI",
    "Database Systems",
  ];

  return (
    <div className="border-y border-[#E8E6E1] py-6 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs font-mono text-[#6B6661]">
        <span className="text-[#1C1A17] font-bold">Practice &mdash;</span>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span>{item}</span>
            {idx < items.length - 1 && <span className="text-[#E8E6E1]">&bull;</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
