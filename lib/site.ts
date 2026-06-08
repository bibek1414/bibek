import { absoluteUrl, SITE_URL, SITE_NAME } from "./seo";

export const siteConfig = {
  name: SITE_NAME,
  title: "Bibek Bhattarai | React & Next.js Developer",
  description: "Portfolio of Bibek Bhattarai, a frontend developer specializing in React, Next.js, and modern web development. Based in Nepal.",
  url: SITE_URL,
  ogImage: "/og-image.png",
  profileImage: "/images/profile.png",
  email: "bbhattarai770@gmail.com",
  phone: "+977 9860425440",
  jobTitle: "Software Developer",
  company: "Baliyo Technologies",
  location: {
    locality: "Sankhamul",
    region: "Lalitpur",
    country: "NP",
    display: "Sankhamul, Lalitpur, Nepal"
  },
  social: {
    github: "https://github.com/bibek1414",
    linkedin: "https://www.linkedin.com/in/bibek-bhattarai-292b90342/",
    facebook: "https://www.facebook.com/bibek.bhattarai.3133719",
    instagram: "https://www.instagram.com/bibek.bhattarai.14/", // Added based on snippet expectation
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Django",
    "Machine Learning",
    "DevOps",
    "MERN stack",
    "TanStack Query"
  ]
};

export type SiteConfig = typeof siteConfig;
