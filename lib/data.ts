export const profileData = {
  name: "Bibek Bhattarai",
  role: "Frontend Developer",
  tagline: "Passionate and detail-oriented Frontend Developer with hands-on experience in building dynamic, user-friendly, and scalable web applications. Adept at transforming ideas into seamless digital experiences.",
  email: "bbhattarai770@gmail.com",
  phone: "+977 9860425440",
  nationality: "Nepali",
  languages: ["English", "Nepali"],
  socials: [
    { name: "GitHub", url: "https://github.com/bibek1414", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bibek-bhattarai-292b90342/", icon: "Linkedin" },
    { name: "Facebook", url: "https://www.facebook.com/bibek.bhattarai.3133719", icon: "Facebook" },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science and Information Technology (BSc.CSIT)",
      institution: "Hetauda City College",
      period: "2019 – 2024",
    },
    {
      degree: "Higher Secondary Education – Science (Physics, Mathematics)",
      institution: "Makwanpur Multiple Campus",
      period: "2017 – 2019",
    },
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Baliyo Ventures",
      period: "May 2025 – Present",
      description: "Developing and maintaining responsive web applications using React, Next.js, and TailwindCSS. Collaborating with cross-functional teams to design and implement interactive user interfaces. Contributing to Nepdora, a no-code website builder that allows users to drag and drop UI components to create fully functional websites. Built reusable and customizable components using Next.js and TailwindCSS. Implemented dynamic rendering of JSON-based UI configurations for a modular builder experience. Worked on real-time site preview, page management, and subdomain-based site deployment.",
    },
  ],
  stats: [
    { label: "Experience", value: "May 2025 - Present" },
    { label: "Location", value: "New Baneshwor, Kathmandu" },
    { label: "Availability", value: "Ready for Work" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", color: "blue" },
      { name: "Next.js", color: "green" },
      { name: "TailwindCSS", color: "blue" },
      { name: "JavaScript", color: "yellow" },
      { name: "TypeScript", color: "blue" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", color: "green" },
      { name: "Django", color: "green" },
      { name: "REST APIs", color: "teal" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", color: "green" },
      { name: "PostgreSQL", color: "blue" },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "Git", color: "orange" },
      { name: "GitHub", color: "black" },
      { name: "AWS (S3)", color: "orange" },
      { name: "Vercel", color: "white" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Responsive Design", color: "purple" },
      { name: "State Management", color: "pink" },
      { name: "Performance Optimization", color: "teal" },
    ],
  },
];

export const projects = [
  {
    title: "Hamro Pasal",
    description: "Full-stack e-commerce platform developed with Next.js (frontend + backend). Integrated Stripe for payment processing and implemented user authentication, product filtering, and shopping cart features. Used MongoDB for database management and AWS S3 for secure storage. Deployed on Vercel for optimal performance and scalability.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "AWS", "Stripe"],
    liveLink: "",
    githubLink: "https://github.com/bibek1414/ecommerce-frontend-backend",
    image: "/images/hamro-pasal2.png",
    id: "01",
    category: "Web App",
    year: "2025",
    location: "Personal Project",
    materials: ["Next.js", "Tailwind CSS", "MongoDB", "AWS S3", "Stripe API"],
    details: [
      "Integrated Stripe for payment processing.",
      "Implemented user authentication and product filtering.",
      "Used MongoDB for database management.",
      "Deployed on Vercel with AWS S3 secure storage."
    ]
  },
  {
    title: "Book My Problem",
    description: "Built with Next.js for both frontend and backend, offering users a platform to book problem-solving services. Real-time updates and notifications for both users and service providers. Categories include tech, legal, and repair services. Core booking and service features implemented; payment integration under development.",
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    liveLink: "",
    githubLink: "https://github.com/bibek1414/bookmyproblem",
    image: "/images/bookmyproblem.png",
    id: "02",
    category: "Web App",
    year: "2025",
    location: "Personal Project",
    materials: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
    details: [
      "Built offering platform to book problem-solving services.",
      "Configured real-time updates and notifications.",
      "Categories cover tech, legal, and repair services.",
      "Core booking services implemented."
    ]
  },
  {
    title: "Aakar Education",
    description: "Designed and developed a responsive and modern educational website for Aakar Education using Next.js and TailwindCSS. The platform highlights Aakar’s mission to empower students through creativity and collaboration, featuring sections like Our Story, Programs, and Community. Focused on clean UI design, mobile responsiveness, and optimized performance for a seamless user experience.",
    technologies: ["Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/bibek1414/aakar-education",
    image: "/images/aakareducation.png",
    id: "03",
    category: "Web Site",
    year: "2024",
    location: "Client Website",
    materials: ["Next.js", "Tailwind CSS", "Framer Motion"],
    details: [
      "Highlights Aakar's mission to empower students.",
      "Features Our Story, Programs, and Community.",
      "Focused on clean UI, mobile responsiveness, and performance optimization."
    ]
    }
    ];

    export const certificates = [
    {
    title: "Internship Certificate",
    organization: "WorldLink Communications Ltd",
    period: "March 14, 2024 – June 14, 2024",
    field: "Technical Department (Networking & Technical)",
    description: "Successfully completed a three-month internship program at the Hetauda Branch, gaining hands-on knowledge in networking and technical operations.",
    image: "/certificate/worldlinks.jpeg",
    },
    {
    title: "Python & Django Training",
    organization: "Broadway Infosys",
    period: "Dec 17, 2024 – March 4, 2025",
    field: "Software Development",
    description: "Completed 113 hours of professional Python & Django training, focusing on backend development, REST APIs, and database management.",
    image: "/certificate/broadway-infosys.jpeg",
    },
    {
    title: "Front End Developer Internship",
    organization: "Baliyo Ventures Pvt Ltd",
    period: "May 13, 2025 – Aug 20, 2025",
    field: "Frontend Development",
    description: "Successfully completed a frontend development internship, focusing on building responsive and interactive user interfaces under professional guidance.",
    image: "/certificate/baliyo-ventures.jpeg",
    },
    ];

    export const blogs = [
  {
    title: "Mastering Next.js 15: What's New?",
    excerpt: "Exploring the latest features in Next.js 15, from improved caching to React 19 integration and the new Compiler.",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Development",
    slug: "mastering-nextjs-15",
    content: `
      <h2>The Evolution of Next.js</h2>
      <p>Next.js 15 marks a significant milestone in the evolution of React frameworks. With the stable release of the Next.js Compiler and deep integration with React 19, developers now have more power and better performance out of the box.</p>
      
      <h3>Key Features in Next.js 15</h3>
      <ul>
        <li><strong>React 19 Support:</strong> Full compatibility with the latest React features including Actions and the new Use hook.</li>
        <li><strong>Next.js Compiler (Turbo):</strong> Significant improvements in build times and development refresh rates.</li>
        <li><strong>Enhanced Caching:</strong> More granular control over data fetching and client-side navigation caching.</li>
        <li><strong>Server Actions Security:</strong> New security layers for server-side functions to prevent unauthorized access.</li>
      </ul>

      <h3>Why It Matters for Developers</h3>
      <p>The focus of this version is developer experience and application performance. By reducing the overhead of manual optimizations, Next.js 15 allows engineers to focus on building features rather than wrestling with configuration.</p>
      
      <p>In the following sections, we'll dive deep into how you can migrate your existing projects and leverage these new tools to build faster, more secure web applications.</p>
    `
  },
  {
    title: "The Future of AI in Web Development",
    excerpt: "How machine learning models and LLMs are reshaping the way we build, test, and interact with the modern web.",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "AI & ML",
    slug: "future-of-ai-web",
    content: `
      <h2>The AI Revolution</h2>
      <p>Artificial Intelligence is no longer just a buzzword; it's a fundamental shift in how software is developed. From GitHub Copilot to Vercel's v0, AI tools are becoming integral to the developer workflow.</p>
      
      <h3>Transforming the User Experience</h3>
      <p>AI isn't just helping us write code; it's changing what we build. Personalized content recommendations, intelligent search, and generative UI are becoming standard expectations for modern users.</p>

      <h3>Building with LLMs</h3>
      <p>Integrating Large Language Models (LLMs) into web apps requires new architectural patterns. We're seeing a rise in "Vector Databases" and "RAG" (Retrieval-Augmented Generation) setups to provide context-aware AI interactions.</p>
      
      <p>As we move forward, the line between 'developer' and 'AI orchestrator' will continue to blur. Mastering these tools today is essential for any software engineer looking to stay relevant in the coming decade.</p>
    `
  },
  {
    title: "DevOps Best Practices for Startups",
    excerpt: "A comprehensive guide to implementing robust CI/CD pipelines, containerization, and cloud infrastructure on a budget.",
    date: "March 10, 2026",
    readTime: "12 min read",
    category: "DevOps",
    slug: "devops-best-practices",
    content: `
      <h2>Scalable Infrastructure from Day One</h2>
      <p>For startups, DevOps is often an afterthought. However, setting up a solid foundation early can save hundreds of hours of technical debt later.</p>
      
      <h3>The Pillars of Modern DevOps</h3>
      <ol>
        <li><strong>Continuous Integration/Continuous Deployment (CI/CD):</strong> Automate your testing and deployment to ensure code quality and speed.</li>
        <li><strong>Infrastructure as Code (IaC):</strong> Use tools like Terraform or Pulumi to manage your cloud resources reliably.</li>
        <li><strong>Observability:</strong> Implement logging and monitoring early to catch bugs before your users do.</li>
      </ol>

      <h3>Cost-Effective Cloud Strategies</h3>
      <p>You don't need a massive AWS bill to run a startup. Leveraging serverless functions, spot instances, and open-source tools can significantly reduce your operational costs while maintaining high availability.</p>
    `
  },
  {
    title: "Modern CSS Techniques in 2026",
    excerpt: "Mastering Container Queries, Subgrid, and CSS Nesting to create truly responsive and maintainable layouts.",
    date: "March 05, 2026",
    readTime: "6 min read",
    category: "Design",
    slug: "modern-css-2026",
    content: `
      <h2>Beyond Flexbox and Grid</h2>
      <p>CSS has evolved more in the last two years than in the previous decade. We now have native tools that were once only possible with complex JavaScript or pre-processors.</p>
      
      <h3>The Power of Container Queries</h3>
      <p>Container queries allow us to style elements based on the size of their parent container rather than the viewport. This is a game-changer for truly modular component design.</p>

      <h3>Nesting and Scoping</h3>
      <p>Native CSS nesting is now supported in all major browsers. Combined with @scope, we can write cleaner, more encapsulated styles without the need for Sass or PostCSS in many cases.</p>
      
      <p>In this article, we'll explore practical examples of how these features can simplify your codebase and improve layout performance.</p>
    `
  },
  {
    title: "State Management in Modern React",
    excerpt: "Choosing between Redux, Zustand, Recoil, and Context API for your next enterprise-level React application in 2026.",
    date: "March 01, 2026",
    readTime: "12 min read",
    category: "Architecture",
    slug: "state-management-2026",
    content: `
      <h2>The State Management Landscape in 2026</h2>
      <p>Over the last decade, state management in React has evolved from complex, monolithic architectures to highly specialized, modular tools. In 2026, the question is no longer simply "Redux or Context?", but rather "Which tool fits my state's lifecycle, size, and frequency of updates?"</p>
      <p>With the widespread adoption of React Server Components (RSC) and server-side data fetching libraries (such as React Query or SWR), much of the state that used to live on the client—like API response caching and data fetching state—has shifted back to the server. Consequently, modern client-side state management is lighter, focusing primarily on UI state, transient interactions, and localized complex workflows.</p>

      <h2>1. React Context API: For Dependency Injection, Not High-Frequency State</h2>
      <p>The native React Context API is a built-in feature that allows passing data down the component tree without manually drilling props through every level. However, it is often misunderstood as a complete "state management tool."</p>
      <p><strong>When to use Context:</strong> Context is perfect for low-frequency updates or static global configuration, such as:</p>
      <ul>
        <li>User authentication sessions (current logged-in user profile).</li>
        <li>Theme configuration (switching between Dark Mode and Light Mode).</li>
        <li>Localization and language settings (switching between English and Nepali).</li>
      </ul>
      <p><strong>When to avoid Context:</strong> Avoid using Context for high-frequency state updates or complex nested state objects. When a Context value changes, all components consuming that context will re-render, which can lead to severe performance bottlenecks in larger applications. To optimize Context, you have to split contexts, memoize consumers, or use complex workarounds.</p>

      <h2>2. Zustand: The Modern Standard for Global State</h2>
      <p>Zustand has emerged as the go-to state manager for general React applications. It is a lightweight, hook-based library that addresses the performance issues of Context without the verbosity of Redux.</p>
      <p><strong>Key Advantages of Zustand:</strong></p>
      <ul>
        <li><strong>Minimal Boilerplate:</strong> You can define a store and its actions in just a few lines of code without configuration files or providers.</li>
        <li><strong>High Performance:</strong> It uses selectors to ensure components only re-render when the specific slice of state they are subscribed to actually changes.</li>
        <li><strong>No Provider Required:</strong> Unlike Context or Redux, you don't need to wrap your application in a provider component. It's clean and imports directly where needed.</li>
      </ul>
      <p>Here is a practical example of a basic Zustand store:</p>
      <pre style="background: #E8E6E1; padding: 12px; font-family: monospace; font-size: 13px; border-radius: 4px; overflow-x: auto; color: #1C1A17;"><code>import { create } from 'zustand';

interface CartStore {
  items: string[];
  addItem: (item: string) => void;
  clearCart: () => void;
}

export const useCartStore = create&lt;CartStore&gt;((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  clearCart: () => set({ items: [] }),
}));</code></pre>

      <h2>3. Jotai & Recoil: Atomic State for Granular UI</h2>
      <p>Atomic state libraries like Jotai treat state as a collection of independent, granular units called "atoms." This is highly effective for building interactive canvases, drawing tools, collaborative boards, or complex forms where individual components need to manage and share discrete pieces of state.</p>
      <p>By connecting atoms together dynamically, you can build complex, reactive graphs of state without causing global layout re-renders. It combines the simplicity of React's useState with the performance of selective subscriptions.</p>

      <h2>4. Redux Toolkit (RTK): The Enterprise Heavyweight</h2>
      <p>While often criticized for its initial setup complexity, Redux remains the industry standard for large, enterprise-grade applications. Redux Toolkit (RTK) has significantly simplified writing Redux code, and it provides unmatched developer tooling (Redux DevTools) for debugging complex state transitions, action logging, and time-travel debugging.</p>
      <p><strong>When to use Redux:</strong> Use Redux when working with a very large development team, where strict architectural patterns are required, or when the application depends on complex, multi-step asynchronous transactions that need absolute traceability and middle-ware logic.</p>

      <h2>Summary: Decision Guide for Choosing Your State Library</h2>
      <p>To help you choose the right tool for your next project, consider the following decision guide:</p>
      <table border="1" cellpadding="10" style="border-collapse: collapse; margin-top: 15px; width: 100%; border: 1px solid #E8E6E1;">
        <thead>
          <tr style="background-color: #E8E6E1; text-align: left;">
            <th style="padding: 10px;">Tool</th>
            <th style="padding: 10px;">Type</th>
            <th style="padding: 10px;">Best For</th>
            <th style="padding: 10px;">Performance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px;"><strong>React Context</strong></td>
            <td style="padding: 10px;">Built-in Injection</td>
            <td style="padding: 10px;">Low-frequency static settings (Theme, Auth)</td>
            <td style="padding: 10px;">Low (triggers full subtree re-renders)</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><strong>Zustand</strong></td>
            <td style="padding: 10px;">Flux-like Store</td>
            <td style="padding: 10px;">General global UI state, simple to medium apps</td>
            <td style="padding: 10px;">High (selective renders via hooks)</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><strong>Jotai</strong></td>
            <td style="padding: 10px;">Atomic State</td>
            <td style="padding: 10px;">Granular UI components, canvas/dashboard interfaces</td>
            <td style="padding: 10px;">Very High (atomic updates)</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><strong>Redux Toolkit</strong></td>
            <td style="padding: 10px;">Centralized Store</td>
            <td style="padding: 10px;">Large enterprise apps with complex state pipelines</td>
            <td style="padding: 10px;">High (requires selectors)</td>
          </tr>
        </tbody>
      </table>
      
      <p style="margin-top: 20px;">By aligning your state management choice with your specific application requirements, you can optimize your development speed, codebase maintainability, and client-side performance.</p>
    `
  },
  {
    title: "React Server Components (RSC) and the Future of Next.js SEO",
    excerpt: "How React Server Components (RSC) improve SEO by delivering pre-rendered HTML to search engines and enhancing Core Web Vitals.",
    date: "March 24, 2026",
    readTime: "7 min read",
    category: "SEO & React",
    slug: "react-server-components-seo",
    content: `
      <h2>The SEO Challenge with Single Page Applications</h2>
      <p>Traditional React Single Page Applications (SPAs) rely on client-side rendering (CSR). When a search engine crawler visits a CSR site, it initially receives an empty HTML shell and has to wait for JavaScript to execute before seeing any content. While Googlebot can execute JavaScript, other search engines (like Bing, DuckDuckGo, and Yandex) and social media scrapers often do not. This can result in poor search rankings and broken social previews.</p>

      <h2>How React Server Components (RSC) Solve This</h2>
      <p>React Server Components, popularized by Next.js, change the paradigm by rendering components on the server before sending the response to the client. This means search engines receive a fully formed, content-rich HTML document on the very first HTTP request.</p>

      <h3>Key SEO Benefits of RSC:</h3>
      <ul>
        <li><strong>Zero Client-Side JavaScript for Static Parts:</strong> Static components render exclusively on the server, reducing the JavaScript bundle size and improving page load speed.</li>
        <li><strong>Faster First Contentful Paint (FCP):</strong> Users and crawlers see the page layout and content immediately, resulting in lower bounce rates.</li>
        <li><strong>Better Core Web Vitals:</strong> Faster rendering and smaller bundles directly improve metrics like LCP (Largest Contentful Paint) and INP (Interaction to Next Paint), which are official ranking factors.</li>
      </ul>

      <h2>Metadata and JSON-LD Integration</h2>
      <p>With Next.js, managing page-specific metadata is straightforward using the built-in Metadata API. By exporting static or dynamic metadata objects from server components, search engines can easily scrape the page title, description, keywords, and Open Graph tags without waiting for client-side hydration.</p>
    `
  },
  {
    title: "The Rise of Full-Stack Developers in Nepal: Trends and Technical Skills",
    excerpt: "Analyzing the increasing demand for Full-Stack Developers in Kathmandu and across Nepal, the core tech stacks in demand, and how to succeed in 2026.",
    date: "March 28, 2026",
    readTime: "8 min read",
    category: "Career",
    slug: "full-stack-developer-nepal",
    content: `
      <h2>The Evolution of the Nepali Tech Industry</h2>
      <p>The tech ecosystem in Nepal has experienced massive growth over the past few years. Startups and international companies are increasingly establishing engineering hubs in Kathmandu, Lalitpur, and Hetauda. Consequently, the demand for versatile engineers who can handle both frontend and backend development—known as Full-Stack Developers—has reached an all-time high.</p>

      <h2>In-Demand Tech Stacks in Nepal</h2>
      <p>Nepali tech companies and remote employers generally prioritize JavaScript/TypeScript frameworks due to their speed of development and unified language ecosystem. The most sought-after technologies include:</p>
      <ul>
        <li><strong>Next.js & React:</strong> The gold standard for building modern, high-performance web frontends and e-commerce websites.</li>
        <li><strong>Node.js (NestJS/Express):</strong> Widely used for building scalable, real-time microservices and RESTful/GraphQL APIs.</li>
        <li><strong>Python & Django:</strong> Frequently chosen for data-intensive applications, SaaS backends, and AI/ML integrations.</li>
        <li><strong>PostgreSQL & MongoDB:</strong> The dominant choices for relational and document-based databases.</li>
      </ul>

      <h2>How to Rank as a Developer in the Local Market</h2>
      <p>For developers looking to get hired or work as freelancers in Nepal, having a high-performing digital portfolio is crucial. Search engine optimization (SEO) helps your portfolio rank when local businesses search for terms like "Hire Web Developer in Kathmandu" or "Best React Developer Nepal." Implementing correct metadata, structuring your projects, and writing tech insights are key methods to build your authority and secure opportunities.</p>
    `
  }
];
