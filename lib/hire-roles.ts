export const hireRoles = [
  "nextjs-developer",
  "react-developer",
  "full-stack-developer",
  "python-developer",
  "devops-engineer",
  "freelance-web-developer",
];

export interface RoleContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  category: string;
  skills: string[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const HIRE_ROLE_DETAILS: Record<string, RoleContent> = {
  "nextjs-developer": {
    title: "Next.js Developer",
    metaTitle: "Hire Senior Next.js Developer | Next.js & React Expert Nepal",
    metaDescription: "Looking to hire a professional Next.js developer in Nepal? I build secure, SEO-optimized, blazing-fast web applications with Next.js 15, App Router, and Server Actions.",
    headline: "Hire a Specialist Next.js & React Developer",
    subheadline: "Accelerate your product delivery with clean component architecture, optimized core web vitals, and modern state management.",
    category: "Fullstack Application",
    skills: ["Next.js 15 (App Router)", "React Server Components (RSC)", "Server Actions & Middleware", "SEO & Core Web Vitals", "Turborepo & Monorepos", "TypeScript"],
    features: [
      {
        title: "SEO-First Architecture",
        description: "Static generation, metadata optimizations, and JSON-LD schemas generated out-of-the-box for top Google rankings.",
      },
      {
        title: "Optimized Load Speeds",
        description: "Zero-lag loads leveraging image optimization, code splitting, dynamic imports, and streaming server-rendered pages.",
      },
      {
        title: "Robust State & Data Flow",
        description: "Clean data mutation using Next.js Server Actions, optimistic UI updates, and type-safe schema validations.",
      },
    ],
    faqs: [
      {
        question: "What version of Next.js do you use?",
        answer: "I work with the latest Next.js 15 release, utilizing standard paradigms like the App Router, Server Components, and Server Actions.",
      },
      {
        question: "Can you optimize an existing Next.js site's performance?",
        answer: "Yes. I analyze bundle size, network waterfalls, render blocks, and configure Vercel CDN routing to achieve green Lighthouse & Core Web Vitals scores.",
      },
    ],
  },
  "react-developer": {
    title: "React Developer",
    metaTitle: "Hire Professional React Developer | React.js Frontend Expert",
    metaDescription: "Looking to hire a React developer for interactive UI/UX? I design pixel-perfect, highly responsive React.js applications with modular component architecture.",
    headline: "Hire an Expert React.js Frontend Developer",
    subheadline: "Crafting beautiful, accessible, and high-performance interactive interfaces tailored to your exact brand guidelines.",
    category: "Fullstack Application",
    skills: ["React.js (v18/v19)", "Tailwind CSS", "Framer Motion Animations", "State Management (Redux/Zustand)", "TypeScript & ES6+", "REST & GraphQL Client"],
    features: [
      {
        title: "Pixel-Perfect Layouts",
        description: "Handcrafted responsive CSS and custom animation timelines that feel fluid, responsive, and modern.",
      },
      {
        title: "State Management & Caching",
        description: "Efficient local and global caching utilizing TanStack Query (React Query) to reduce server requests and provide zero-latency feel.",
      },
      {
        title: "Modular Design Systems",
        description: "Re-usable component libraries built with custom Tailwind structures and Radix primitives (similar to shadcn/ui).",
      },
    ],
    faqs: [
      {
        question: "Do you build custom styling or use pre-made themes?",
        answer: "I build fully bespoke styling using Vanilla CSS and Tailwind CSS, tailored directly to your Figma designs, avoiding bloated visual pre-mades.",
      },
      {
        question: "How do you handle responsive screens?",
        answer: "I follow a mobile-first responsive grid system, verifying UI alignment across multiple real devices (mobile, tablets, laptops, widescreen monitors).",
      },
    ],
  },
  "full-stack-developer": {
    title: "Full Stack Developer",
    metaTitle: "Hire Full Stack Web Developer | Next.js, Node.js & React Nepal",
    metaDescription: "Hire a senior full-stack developer in Nepal. End-to-end web engineering from responsive frontends to secure database APIs and server deployments.",
    headline: "Hire an End-to-End Full Stack Software Developer",
    subheadline: "One developer to manage your entire stack—from database design and server APIs to responsive interfaces and cloud deployments.",
    category: "Fullstack Application",
    skills: ["Next.js & React", "Node.js (Express)", "PostgreSQL & MongoDB", "Prisma ORM", "Docker & Nginx", "RESTful & WebSocket APIs"],
    features: [
      {
        title: "Secure API Gateways",
        description: "Secure user authentication (JWT, Session tokens), middleware route protection, and sanitization of input payloads.",
      },
      {
        title: "Relational Schema Designs",
        description: "Structured database models built with PostgreSQL, optimized indexes, and type-safe prisma models for lightning-fast queries.",
      },
      {
        title: "CI/CD & Deployments",
        description: "Containerized application workflows using Docker and automatic deployment pipelines using GitHub Actions.",
      },
    ],
    faqs: [
      {
        question: "Do you write unit and integration tests?",
        answer: "Yes, I write tests for backend APIs (using Jest/Supertest) and frontend components to ensure code stability and prevent regression bugs.",
      },
      {
        question: "Which database do you recommend?",
        answer: "I recommend PostgreSQL for relational, transactional business data, and MongoDB for flexible, unstructured document storage.",
      },
    ],
  },
  "python-developer": {
    title: "Python Developer",
    metaTitle: "Hire Python & Django Developer | Backend & AI Expert Nepal",
    metaDescription: "Looking to hire a Python developer? I specialize in Django REST Framework APIs, web automation scripting, and artificial intelligence integration.",
    headline: "Hire a Backend Python & AI Solutions Developer",
    subheadline: "Building backend APIs, automated data scraper scripts, and integrating vector/LLM AI models into your system.",
    category: "AI Integration",
    skills: ["Python 3", "Django & Django REST Framework", "FastAPI", "AI/ML (TensorFlow, Scikit-learn)", "Data Processing (Pandas, NumPy)", "SQLAlchemy & Django ORM"],
    features: [
      {
        title: "High Performance APIs",
        description: "Lightweight, async endpoints using FastAPI, or structured corporate backend applications leveraging Django.",
      },
      {
        title: "Data Pipelines & Automation",
        description: "Automated cron scripts, background task processing using Celery, and custom ETL pipelines for parsing raw files.",
      },
      {
        title: "AI & LLM Integrations",
        description: "Integrating OpenAI, local LLMs (Ollama), and vector databases to build smart semantic search or chat features.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate Python scripts into my existing Next.js web application?",
        answer: "Absolutely. I often build Next.js frontends that communicate seamlessly with a Python microservice (FastAPI/Django) backend.",
      },
      {
        question: "Do you have experience with data scraping?",
        answer: "Yes, I write custom parsers and scrapers using BeautifulSoup and Selenium, respecting rate-limits and robots.txt rules.",
      },
    ],
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    metaTitle: "Hire DevOps Engineer Nepal | Docker, AWS & Deployment Expert",
    metaDescription: "Looking for DevOps engineering services in Nepal? I build automated CI/CD pipelines, Docker container set ups, Nginx routing, and AWS configurations.",
    headline: "Hire a DevOps & Infrastructure Automation Engineer",
    subheadline: "Automate your workflows, secure server endpoints, configure Nginx load balancing, and set up continuous integration.",
    category: "Digital Systems",
    skills: ["Docker & Docker Compose", "AWS (EC2, S3, CloudFront)", "GitHub Actions / CI-CD", "Nginx Config & SSL setup", "Linux Server Hardening", "Domain & DNS Routing"],
    features: [
      {
        title: "Containerized Workflows",
        description: "Dockerizing applications to ensure consistency between local development and production cloud environments.",
      },
      {
        title: "SSL & Reverse Proxies",
        description: "Securing systems with Let's Encrypt SSL, setting up Nginx reverse proxy mappings, and preventing common server exploits.",
      },
      {
        title: "CI/CD Deployment Pipelines",
        description: "Automating tests and release triggers so your code compiles, tests, and deploys to production on every git push.",
      },
    ],
    faqs: [
      {
        question: "Can you move my site from shared hosting to a secure VPS?",
        answer: "Yes. I specialize in migrating applications onto cloud VPS platforms (AWS EC2, DigitalOcean, Hetzner) behind Nginx reverse proxies with automated SSL updates.",
      },
      {
        question: "How do you handle backups?",
        answer: "I set up daily automated database dumps and media backups uploaded securely to offsite cloud storage (AWS S3) with retention policies.",
      },
    ],
  },
  "freelance-web-developer": {
    title: "Freelance Web Developer",
    metaTitle: "Hire Freelance Web Developer Nepal | Custom SaaS & Web Apps",
    metaDescription: "Need a freelance web developer in Nepal? I build high-converting landing pages, custom SaaS applications, and e-commerce websites with local support.",
    headline: "Hire a Professional Freelance Web Developer",
    subheadline: "Get agency-grade technical execution at a direct freelance rate. Clean communication, clear scoping, and on-time delivery.",
    category: "Fullstack Application",
    skills: ["Next.js & React", "eSewa & Khalti Payments", "Responsive UI/UX Layouts", "SEO Optimization", "SaaS Multi-tenant Setups", "Ongoing Support & Maintenance"],
    features: [
      {
        title: "Direct & Transparent Scope",
        description: "No corporate layers. Direct communication to outline milestones, delivery specs, and budget items.",
      },
      {
        title: "Local Payment Integrations",
        description: "Seamlessly integrate Nepalese payment systems (eSewa, Khalti, Fonepay, IME Pay) for digital business models.",
      },
      {
        title: "Handover & Documentation",
        description: "Receive full access to GitHub repositories, custom hosting configurations, and guides on how to manage the content.",
      },
    ],
    faqs: [
      {
        question: "Do you charge by the hour or by project scope?",
        answer: "I prefer project-based pricing with clear milestones, as it aligns our goals to deliver the best product without arbitrary hourly caps.",
      },
      {
        question: "Do you offer post-launch support?",
        answer: "Yes, I offer monthly retainer support packages for hosting maintenance, security audits, and minor features updates.",
      },
    ],
  },
};
