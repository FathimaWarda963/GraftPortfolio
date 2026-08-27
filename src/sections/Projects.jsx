import { caseStudies } from "../data/caseStudies";
import LeafMark from "../components/LeafMark";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-forest/[0.03]">
      <div className="max-w-5xl mx-auto">
        <LeafMark className="w-7 h-7 text-bark mb-4" />
        <p className="uppercase tracking-widest text-sm text-sage font-semibold mb-2">
          Strongest Evidence
        </p>
        <h2 className="font-display text-4xl text-forest mb-12">Projects</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {caseStudies.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}