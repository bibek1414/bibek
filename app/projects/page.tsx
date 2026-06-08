import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { projects } from "@/lib/data";
import { buildMarketingMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";

export const metadata = buildMarketingMetadata({
  title: "Projects | Bibek Bhattarai - Software Engineering Portfolio",
  description: "Explore my portfolio of software engineering projects, web applications, and architectural work. Showcase of modern web development and full-stack implementations.",
  path: "/projects",
  ogLabel: "Selected Works",
});

export default function ProjectsPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects by Bibek Bhattarai",
    "description": "A collection of web development and software engineering projects.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.description,
          "url": project.liveLink || project.githubLink
        }
      }))
    }
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
        "name": "Projects",
        "item": absoluteUrl("/projects"),
      },
    ],
  };

  return (
    <main className="pt-24 bg-[#FAF9F6] min-h-screen">
      <JsonLd id="projects-schema" data={projectSchema} />
      <JsonLd id="projects-breadcrumb" data={breadcrumbSchema} />
      
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />
      </div>

      <ProjectsShowcase />
    </main>
  );
}
