import Script from "next/script";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export function JsonLd({ id, data }: { id: string; data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PortfolioJsonLd() {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        jobTitle: siteConfig.jobTitle,
        worksFor: {
          "@type": "Organization",
          name: siteConfig.company,
        },
        description: siteConfig.description,
        image: absoluteUrl(siteConfig.profileImage),
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.country,
        },
        sameAs: [
          siteConfig.social.github,
          siteConfig.social.linkedin,
          siteConfig.social.instagram,
          siteConfig.social.facebook,
        ].filter(Boolean),
        knowsAbout: siteConfig.knowsAbout,
      },
    ],
  };

  return <JsonLd id="portfolio-jsonld" data={graph} />;
}

export function BreadcrumbJsonLd({ items }: { items: { label: string; href: string }[] }) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": absoluteUrl(item.href),
      })),
    ],
  };

  return <JsonLd id="breadcrumb-jsonld" data={breadcrumbList} />;
}

export function BlogJsonLd({ 
  title, 
  description, 
  date, 
  slug, 
  image 
}: { 
  title: string; 
  description: string; 
  date: string; 
  slug: string; 
  image?: string;
}) {
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": date,
    "author": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.url,
    },
    "publisher": {
      "@type": "Person",
      "name": siteConfig.name,
    },
    "image": image || absoluteUrl(siteConfig.ogImage),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${slug}`)
    }
  };

  return <JsonLd id={`blog-jsonld-${slug}`} data={blogPosting} />;
}

export function ProjectJsonLd({ 
  title, 
  description, 
  image, 
  url,
  technologies
}: { 
  title: string; 
  description: string; 
  image?: string; 
  url?: string;
  technologies?: string[];
}) {
  const project = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": title,
    "description": description,
    "image": image ? absoluteUrl(image) : undefined,
    "url": url,
    "author": {
      "@type": "Person",
      "name": siteConfig.name
    },
    "keywords": technologies?.join(", ")
  };

  return <JsonLd id={`project-jsonld-${title.toLowerCase().replace(/\s+/g, '-')}`} data={project} />;
}

export function ProjectListJsonLd({ projects }: { projects: { title: string; description: string; url: string }[] }) {
  const projectList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": project.url
      }
    }))
  };

  return <JsonLd id="projects-list-jsonld" data={projectList} />;
}

export function ServiceJsonLd({ services }: { services: { name: string; description: string }[] }) {
  const serviceList = services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Person",
      "name": siteConfig.name
    }
  }));

  return <JsonLd id="services-jsonld" data={serviceList} />;
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <JsonLd id="faq-jsonld" data={faqPage} />;
}
