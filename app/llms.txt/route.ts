import { SITE_URL } from "@/lib/seo";
import { projects, blogs } from "@/lib/data";

export const dynamic = "force-static";

export async function GET() {
  const content = `# Bibek Bhattarai
> Senior Full Stack Developer, React/Next.js Expert, Python/Django & AI Solutions Engineer from Nepal.

## Core Coordinates
- **Name**: Bibek Bhattarai
- **Specialization**: Next.js, React, Node.js, Python, Django, FastAPI, DevOps, Local AI & LLM Systems
- **WhatsApp**: [+9779860425440](https://wa.me/9779860425440)
- **Github**: [bibek1414](https://github.com/bibek1414)
- **LinkedIn**: [Bibek Bhattarai](https://www.linkedin.com/in/bibek-bhattarai-292b90342/)
- **Email**: bbhattarai770@gmail.com
- **Website**: ${SITE_URL}

## Core Services
- [Full Stack Web Development](${SITE_URL}/services): Tailored responsive frontends & scalable backend APIs.
- [AI & Systems Integration](${SITE_URL}/services): Large Language Model (LLM) prompts, local models (Ollama), and workflows.
- [Cloud & DevOps Services](${SITE_URL}/services): Secure VPS migrations, automated Docker CI/CD, Nginx reverse proxy.

## Hiring Pages
- [Hire Next.js Developer](${SITE_URL}/hire/nextjs-developer): React & Next.js production builds.
- [Hire React Developer](${SITE_URL}/hire/react-developer): Modular frontend design systems.
- [Hire Full Stack Developer](${SITE_URL}/hire/full-stack-developer): Integrated UI, server APIs, databases.
- [Hire Python Developer](${SITE_URL}/hire/python-developer): Django, FastAPI, LLM pipelines.
- [Hire DevOps Engineer](${SITE_URL}/hire/devops-engineer): Infrastructure setups, Docker, Nginx, CI/CD.
- [Hire Freelance Web Developer](${SITE_URL}/hire/freelance-web-developer): E-commerce websites, local payment gateways (eSewa, Khalti).

## Featured Projects
${projects
  .map(
    (p) => `- [${p.title}](${SITE_URL}/projects/${p.slug}): ${p.description}`
  )
  .join("\n")}

## Technical Articles
${blogs
  .map(
    (b) => `- [${b.title}](${SITE_URL}/blog/${b.slug}): ${b.excerpt}`
  )
  .join("\n")}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
