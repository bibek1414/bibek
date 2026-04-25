export const profileData = {
  name: "Bibek Bhattarai",
  role: "Versatile Full Stack Developer & Software Engineer",
  tagline: "Specializing in React, Next.js, and modern web architectures. Blending frontend creativity with backend efficiency and DevOps practices to build high-performance digital experiences.",
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
      degree: "Bachelor's in Computer Science and Information Technology (BSc CSIT)",
      institution: "Hetauda City College",
      period: "2019 - 2024",
    },
    {
      degree: "+2 in Science",
      institution: "Makwanpur Multiple Campus",
      period: "2017 - 2019",
    },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "Baliyo Technologies",
      period: "May 13, 2024 - Present",
      description: "Leading the development of complex web applications using Next.js and Node.js. Focused on optimizing performance, implementing robust backend systems with PostgreSQL, and ensuring seamless deployment using Docker and AWS.",
    },
  ],
  stats: [
    { label: "Experience", value: "5+ Yrs" },
    { label: "Nationality", value: "Nepali" },
    { label: "Languages", value: "English, Nepali" },
    { label: "Availability", value: "Ready for Work" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JavaScript", color: "yellow" },
      { name: "React.js", color: "blue" },
      { name: "Next.js", color: "green" },
      { name: "Tailwind CSS", color: "blue" },
      { name: "GSAP", color: "purple" },
      { name: "Framer Motion", color: "pink" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", color: "green" },
      { name: "Python", color: "blue" },
      { name: "Django", color: "green" },
      { name: "FastAPI", color: "teal" },
      { name: "NumPy", color: "blue" },
      { name: "Pandas", color: "blue" },
      { name: "Scikit-learn", color: "orange" },
      { name: "TensorFlow", color: "yellow" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", color: "green" },
      { name: "PostgreSQL", color: "blue" },
      { name: "MySQL", color: "blue" },
      { name: "Redis", color: "red" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", color: "orange" },
      { name: "Docker", color: "blue" },
      { name: "Kubernetes", color: "blue" },
      { name: "Vercel", color: "white" },
      { name: "Linux", color: "yellow" },
    ],
  },
];

export const projects = [
  {
    title: "Hamro Pasal",
    description: "A simple e-commerce web application built with Next.js, Tailwind CSS, MongoDB, AWS, Google Console, and Stripe.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "AWS", "Stripe"],
    liveLink: "https://ecommerce-front-nine-mu.vercel.app/",
    githubLink: "https://github.com/bibek1414/ecommerce-frontend-backend",
    image: "/images/hamro-pasal2.png",
    id: "01",
  },
  {
    title: "YouTube Comment Analyzer",
    description: "A comprehensive analytics platform using sentiment analysis and trends to analyze YouTube comments, featuring a Chrome extension.",
    technologies: ["Python", "MLflow", "Flask", "Docker", "Chrome Extension"],
    liveLink: "",
    githubLink: "https://github.com/bibek1414/youtube-comment-analyzer",
    image: "/images/youtube-analysis.png",
    id: "02",
  },
  {
    title: "BookMyProblem",
    description: "A platform for booking problem-solving services with real-time updates and notifications.",
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    liveLink: "",
    githubLink: "https://github.com/bibek1414/bookmyproblems",
    image: "/images/bookmyproblem.png",
    id: "03",
  },
  {
    title: "ChatApp",
    description: "Real-time chat with text, audio, and video call support using Django Channels and WebRTC.",
    technologies: ["Django", "WebRTC", "Redis", "Tailwind CSS"],
    liveLink: "https://chatapp-cuvv.onrender.com/",
    githubLink: "https://github.com/bibek1414/chatapp",
    image: "/images/chat-app.png",
    id: "04",
  },
];

export const blogs = [
  {
    title: "Mastering Next.js 15: What's New?",
    excerpt: "Exploring the latest features in Next.js 15, from improved caching to React 19 integration and the new Compiler.",
    date: "March 20, 2024",
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
    date: "March 15, 2024",
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
    date: "March 10, 2024",
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
    title: "Modern CSS Techniques in 2024",
    excerpt: "Mastering Container Queries, Subgrid, and CSS Nesting to create truly responsive and maintainable layouts.",
    date: "March 05, 2024",
    readTime: "6 min read",
    category: "Design",
    slug: "modern-css-2024",
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
    excerpt: "Choosing between Redux, Zustand, Recoil, and Context API for your next enterprise-level React application.",
    date: "March 01, 2024",
    readTime: "10 min read",
    category: "Architecture",
    slug: "state-management-2024",
    content: `
      <h2>The State Management Dilemma</h2>
      <p>With so many options available, choosing a state management library for React has never been harder—or easier, depending on your needs.</p>
      
      <h3>Zustand: The Lightweight Hero</h3>
      <p>Zustand has quickly become the favorite for many developers due to its simplicity and lack of boilerplate. It's perfect for most applications that need a centralized store without the complexity of Redux.</p>

      <h3>The Role of React Context</h3>
      <p>React Context is still powerful for dependency injection and simple global state. However, for high-frequency updates, external stores like Zustand or Valtio often perform better.</p>
      
      <h3>When to still use Redux?</h3>
      <p>Redux Toolkit remains a solid choice for large-scale enterprise apps with complex state logic and many developers. Its ecosystem and devtools are still unmatched for debugging complex state transitions.</p>
    `
  }
];
