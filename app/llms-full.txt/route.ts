import { SITE_URL } from "@/lib/seo";
import { projects, blogs, profileData, skills } from "@/lib/data";
import { HIRE_ROLE_DETAILS } from "@/lib/hire-roles";

export const dynamic = "force-static";

export async function GET() {
  const projectsContent = projects
    .map(
      (p) => `### ${p.title}
- **Category**: ${p.category}
- **Year**: ${p.year}
- **Role/Location**: ${p.location}
- **Tech Stack**: ${p.materials.join(", ")}
- **Overview**: ${p.description}
- **Details**:
${p.details.map((d) => `  - ${d}`).join("\n")}
- **GitHub**: ${p.githubLink || "N/A"}
- **Live URL**: ${p.liveLink || "N/A"}`
    )
    .join("\n\n");

  const rolesContent = Object.entries(HIRE_ROLE_DETAILS)
    .map(
      ([slug, details]) => `### ${details.headline} (${details.title})
- **Role Category**: ${details.category}
- **Typical Skills**: ${details.skills.join(", ")}
- **Capabilities & Deliverables**:
${details.features.map((f) => `  - **${f.title}**: ${f.description}`).join("\n")}
- **Hiring FAQs**:
${details.faqs.map((faq) => `  - *Q: ${faq.question}*\n    *A: ${faq.answer}*`).join("\n")}`
    )
    .join("\n\n");

  const skillsContent = skills
    .map((s) => `- **${s.category}**: ${s.items.map((i) => i.name).join(", ")}`)
    .join("\n");

  const experienceContent = profileData.experience
    .map(
      (e) => `### ${e.role} at ${e.company}
- **Period**: ${e.period}
- **Description**: ${e.description}`
    )
    .join("\n\n");

  const educationContent = profileData.education
    .map(
      (edu) => `- **${edu.degree}** — ${edu.institution} (${edu.period})`
    )
    .join("\n");

  const content = `# Bibek Bhattarai - Full Technical Profile & Context
> Senior Full Stack Developer, React/Next.js Expert, Python/Django & AI Solutions Engineer from Nepal.

## Coordinates
- **Name**: Bibek Bhattarai
- **Current Location**: New Baneshwor, Kathmandu, Nepal
- **Phone**: ${profileData.phone}
- **Email**: ${profileData.email}
- **GitHub**: https://github.com/bibek1414
- **LinkedIn**: https://www.linkedin.com/in/bibek-bhattarai-292b90342/
- **Website**: ${SITE_URL}

---

## Technical Stack & Expertise
${skillsContent}

---

## Professional Milestones & Work Experience
${experienceContent}

---

## Academic Credentials
${educationContent}

---

## Commercial Roles & Deliverable Specifications
${rolesContent}

---

## Detailed Project Catalog
${projectsContent}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
