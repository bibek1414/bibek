"use client";
import React from "react";
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from "lucide-react";

const CHRONOLOGY = [
  {
    period: "May 2025 — Present",
    title: "Software Developer",
    institution: "Baliyo Technologies (Nepdora)",
    type: "Work",
    typeIcon: Briefcase,
    location: "Sankhamul, Lalitpur, Nepal",
    description:
      "Leading the development of complex web applications using Next.js 15, React, and Node.js. Focused on optimizing Core Web Vitals performance, implementing robust backend systems with PostgreSQL and Prisma ORM, and ensuring seamless deployments using Docker and Vercel. Contributing to Nepdora — a no-code website builder that allows clients to drag-and-drop UI components to create fully functional, production-ready websites.",
    highlights: [
      "Built 50+ reusable, customizable components with Next.js and Tailwind CSS",
      "Implemented dynamic rendering of JSON-based UI configurations for modular builder",
      "Worked on real-time site preview, page management, and subdomain-based deployment",
      "Developed checkout, hero, and product showcase flows for e-commerce clients",
    ],
    technologies: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Vercel"],
  },
  {
    period: "2019 — 2025",
    title: "Bachelor of Computer Science & Information Technology",
    institution: "Hetauda City College — BSc CSIT",
    type: "Education",
    typeIcon: GraduationCap,
    location: "Hetauda, Makwanpur, Nepal",
    description:
      "Rigorous 4-year academic program covering computational systems, relational databases, software engineering methodologies, algorithms, data structures, operating systems, computer networks, and machine learning fundamentals. Graduated with a strong foundation in both theoretical computer science and applied software engineering.",
    highlights: [
      "Specialized in full-stack web development and database design",
      "Final year project: AI-powered sentiment analysis system for social media data",
      "Coursework: Data Structures, Algorithms, DBMS, OS, Computer Networks, ML",
    ],
    technologies: ["Java", "C", "Python", "SQL", "Data Structures", "Algorithms", "Machine Learning"],
  },
  {
    period: "2025",
    title: "Python & Django Full-Stack Training",
    institution: "Broadway Infosys",
    type: "Training",
    typeIcon: Award,
    location: "Kathmandu, Nepal",
    description:
      "Intensive professional training in Python backend development using the Django framework. Covered REST API development, database integration with PostgreSQL, authentication systems, deployment workflows, and building production-grade web applications from scratch.",
    highlights: [
      "Built full REST API backend using Django REST Framework",
      "Deployed production applications on Linux servers with Nginx",
      "Integrated PostgreSQL databases with Django ORM",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Nginx", "Linux"],
  },
  {
    period: "2017 — 2019",
    title: "+2 Science (Higher Secondary)",
    institution: "Makwanpur Multiple Campus",
    type: "Education",
    typeIcon: GraduationCap,
    location: "Makwanpur, Nepal",
    description:
      "Higher Secondary Education with Physics, Mathematics, and Chemistry as core subjects. Built strong analytical and problem-solving foundations that directly inform current engineering and system-design work.",
    highlights: [
      "Core subjects: Physics, Mathematics, Chemistry, Computer Science",
      "Developed strong analytical thinking and mathematical reasoning skills",
    ],
    technologies: ["Mathematics", "Physics", "Chemistry", "Basic Computing"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

        {/* Left Stick Column */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28 h-fit">
          <span className="font-mono text-xs tracking-[0.25em] text-[#6B6661]">
            08 / Historic Milestones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] tracking-wide">
            Experience &amp; Education
          </h2>
          <p className="text-[#6B6661] text-sm leading-relaxed font-sans max-w-sm">
            A full chronological record of professional work experience, academic qualifications,
            and specialized technical training. Based in Kathmandu, Nepal — available for remote work worldwide.
          </p>
          <p className="text-[#6B6661] text-xs leading-relaxed font-sans max-w-sm pt-2">
            Bibek Bhattarai is a Full Stack Developer with experience at Baliyo Technologies,
            specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, Docker, and AWS.
            BSc CSIT graduate from Hetauda City College, Nepal.
          </p>
        </div>

        {/* Right timeline List */}
        <div className="lg:col-span-8 space-y-12">
          {CHRONOLOGY.map((item, index) => (
            <article
              key={index}
              className="border-b border-[#E8E6E1] pb-10 group hover:border-[#1C1A17] transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row items-baseline gap-4 sm:gap-8 mb-4">
                <div className="font-mono text-sm font-semibold text-stone-400 sm:w-44 shrink-0 flex items-center gap-2">
                  <Calendar size={12} className="shrink-0" />
                  {item.period}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1C1A17] tracking-wide">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[9px] tracking-widest text-[#1C1A17] bg-[#E8E6E1] px-2.5 py-0.5 flex items-center gap-1">
                      <item.typeIcon size={10} />
                      {item.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[#6B6661]">
                    <span className="font-semibold text-[#1C1A17]">{item.institution}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={10} />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-0 sm:pl-52 space-y-4">
                <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed font-sans group-hover:text-[#1C1A17] transition-colors duration-300">
                  {item.description}
                </p>

                <ul className="space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#6B6661] font-sans">
                      <span className="w-1 h-1 bg-[#6B6661] rounded-full mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-[9px] text-[#6B6661] bg-[#1C1A17]/5 border border-[#E8E6E1] px-2 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};