export const profileData = {
  name: "Bibek Bhattarai",
  role: "Versatile Full Stack Developer",
  tagline: "Blending frontend creativity with backend efficiency and DevOps practices!",
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
      description: "Developing and maintaining web applications using modern stacks, focusing on performance and scalability.",
    },
  ],
  stats: [
    { label: "Projects Completed", value: 20 },
    { label: "Technologies Mastered", value: 10 },
    { label: "Git Repositories", value: 40 },
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
    excerpt: "Exploring the latest features in Next.js 15, from improved caching to React 19 integration.",
    date: "March 20, 2024",
    readTime: "5 min read",
    category: "Development",
    slug: "mastering-nextjs-15",
  },
  {
    title: "The Future of AI in Web Development",
    excerpt: "How machine learning models are reshaping the way we build and interact with the web.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & ML",
    slug: "future-of-ai-web",
  },
  {
    title: "DevOps Best Practices for Startups",
    excerpt: "A guide to implementing robust CI/CD pipelines and cloud infrastructure on a budget.",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "DevOps",
    slug: "devops-best-practices",
  },
];
