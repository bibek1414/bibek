import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="All Projects" 
          subtitle="A comprehensive list of my work, featuring web development, machine learning, and real-time communication systems."
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project} 
              variant="compact"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
