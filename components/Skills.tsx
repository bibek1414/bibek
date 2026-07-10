import React from "react";
import { Code2, Cpu, Database, Server, Globe, Layers, Terminal, Cloud } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Responsive interface engineering, advanced layouts, performance-focused client routing, typography rendering, and fluid animations. Specialized in building pixel-perfect UIs with clean component architecture.",
    skills: [
      "React.js", "Next.js 15", "TypeScript", "JavaScript (ES2024)",
      "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Sass/SCSS",
    ],
  },
  {
    icon: Database,
    title: "Systems & APIs",
    description:
      "Scalable HTTP/REST API endpoints, real-time WebSocket communication layers, structured schemas, relational logic, and cache pipelines. Experienced with high-traffic backend architectures and clean API design.",
    skills: [
      "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM",
      "REST APIs", "GraphQL", "Redis", "JWT Authentication",
    ],
  },
  {
    icon: Server,
    title: "DevOps & Cloud Infrastructure",
    description:
      "Container management pipelines, cloud services automation, security certificate configuration, Linux server administration, and CI/CD workflow automation for rapid and reliable deployments.",
    skills: [
      "AWS (EC2, S3, CloudFront)", "Docker", "Docker Compose", "Vercel",
      "Nginx", "Linux / Ubuntu", "GitHub Actions", "CI/CD Pipelines",
    ],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Sentiment analysis computation on large datasets, vector model management, relational dataset processing, custom automation scripts, and integration of AI/ML models into production web applications.",
    skills: [
      "Python", "Django", "TensorFlow", "Scikit-learn",
      "Pandas", "NumPy", "OpenAI API", "Langchain",
    ],
  },
  {
    icon: Layers,
    title: "UI/UX & Design Systems",
    description:
      "Component-driven design, atomic design methodologies, design token systems, accessibility-first markup, and cross-browser compatibility. Building consistent, maintainable design systems at scale.",
    skills: [
      "Figma", "shadcn/ui", "Radix UI", "Headless UI",
      "WCAG Accessibility", "Responsive Design", "Design Tokens",
    ],
  },
  {
    icon: Terminal,
    title: "Tools & Workflow",
    description:
      "Modern development workflows with version control, package management, code quality enforcement, and collaborative engineering practices for clean, maintainable codebases.",
    skills: [
      "Git & GitHub", "pnpm / npm / yarn", "ESLint", "Prettier",
      "VS Code", "Postman", "Turborepo", "Zod (Schema Validation)",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="border-t border-[#E8E6E1] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[#6B6661]">
              08 / Systematic Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] leading-tight">
              Skills &amp; Tech Stack
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[#6B6661] text-sm leading-relaxed font-sans max-w-xl">
              Full-stack engineer proficient across the entire web development lifecycle — from designing
              responsive React frontends to architecting scalable Node.js backends, deploying on AWS/Docker,
              and integrating AI/ML systems into production applications.
            </p>
            {/* SEO-rich keyword list rendered as accessible inline tags */}
            <p className="sr-only">
              Technologies: React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js,
              PostgreSQL, MongoDB, Python, Django, AWS, Docker, Vercel, Git, Framer Motion, GraphQL,
              Redis, TensorFlow, Scikit-learn, Figma, Prisma ORM, Nginx, Linux, CI/CD, REST APIs,
              WebSocket, OpenAI API, Langchain, shadcn/ui, Radix UI, Turborepo, Zod.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="border border-[#E8E6E1] p-8 space-y-6 flex flex-col bg-white hover:border-[#1C1A17] transition-colors duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 border border-[#1C1A17]/10 flex items-center justify-center bg-[#FAF9F6] group-hover:bg-[#1C1A17] group-hover:border-[#1C1A17] transition-all duration-300">
                  <cat.icon className="w-5 h-5 text-stone-700 group-hover:text-[#FAF9F6] transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-[#1C1A17] font-medium">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#6B6661] leading-relaxed font-sans">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8E6E1]/50">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[9px] text-[#1C1A17] bg-[#1C1A17]/5 px-2 py-0.5 group-hover:bg-[#1C1A17]/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full flat tech list — visible and indexable */}
        <div className="mt-16 border-t border-[#E8E6E1] pt-12">
          <p className="font-mono text-[10px] text-[#6B6661] tracking-widest mb-6">
            COMPLETE TECHNOLOGY INDEX
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
              "HTML5", "CSS3", "Framer Motion", "Node.js", "Express.js",
              "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs", "GraphQL",
              "Redis", "JWT", "Python", "Django", "TensorFlow", "Scikit-learn",
              "Pandas", "NumPy", "OpenAI API", "AWS EC2", "AWS S3", "Docker",
              "Docker Compose", "Vercel", "Nginx", "Linux", "GitHub Actions",
              "CI/CD", "Figma", "shadcn/ui", "Radix UI", "Zod", "Git",
              "pnpm", "Turborepo", "WebSocket",
            ].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] text-[#6B6661] border border-[#E8E6E1] px-3 py-1 hover:border-[#1C1A17] hover:text-[#1C1A17] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};