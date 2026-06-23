import { FAQ as FAQSection } from "@/components/FAQ";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "FAQ | Bibek Bhattarai - Full Stack Developer",
  description: "Find answers to common questions about my development services, project timelines, and technical approach. Everything you need to know before starting a project.",
  path: "/faq",
  ogLabel: "Inquiries & Clarifications",
});

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I specialize in full-stack web development, creating high-performance applications with React, Next.js, and Node.js. My services also include machine learning integration, DevOps automation, and UI/UX design focusing on premium digital experiences."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline depends on the complexity of the project. A standard business website might take 2-4 weeks, while a complex full-stack application could take 8-12 weeks. I prioritize quality and performance in every project I undertake."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups and international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I have extensive experience working with startups and collaborating with international clients across different time zones. I use modern communication and project management tools to ensure smooth collaboration."
        }
      },
      {
        "@type": "Question",
        "name": "What is your approach to SEO and Performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I build websites with a performance-first mindset, ensuring fast load times and excellent Core Web Vitals. I implement technical SEO best practices, including semantic HTML, meta-tag optimization, and structured data (JSON-LD) for better search engine visibility."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": absoluteUrl(),
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": absoluteUrl("/faq"),
      },
    ],
  };

  return (
    <main className="pt-24 min-h-screen bg-[#FAF9F6]">
      <JsonLd id="faq-schema" data={faqSchema} />
      <JsonLd id="faq-breadcrumb" data={breadcrumbSchema} />
      
      <FaqJsonLd 
        faqs={[
          {
            question: "What services do you provide?",
            answer: "I specialize in full-stack web development, creating high-performance applications with React, Next.js, and Node.js. My services also include machine learning integration, DevOps automation, and UI/UX design focusing on premium digital experiences."
          },
          {
            question: "How long does a typical project take?",
            answer: "The timeline depends on the complexity of the project. A standard business website might take 2-4 weeks, while a complex full-stack application could take 8-12 weeks. I prioritize quality and performance in every project I undertake."
          },
          {
            question: "Do you work with startups and international clients?",
            answer: "Yes, I have extensive experience working with startups and collaborating with international clients across different time zones. I use modern communication and project management tools to ensure smooth collaboration."
          },
          {
            question: "What is your approach to SEO and Performance?",
            answer: "I build websites with a performance-first mindset, ensuring fast load times and excellent Core Web Vitals. I implement technical SEO best practices, including semantic HTML, meta-tag optimization, and structured data (JSON-LD) for better search engine visibility."
          }
        ]}
      />
      <BreadcrumbJsonLd items={[{ label: "FAQ", href: "/faq" }]} />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] mb-8 font-medium">
          Frequently Asked Questions
        </h1>
      </div>

      <FAQSection />
    </main>
  );
}
