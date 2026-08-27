import { useState } from "react";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-sage/40 rounded-2xl p-6 bg-paper hover:border-sage transition-colors duration-200 flex flex-col">
      <h3 className="font-display text-2xl text-forest mb-2">{project.title}</h3>
      <p className="text-ink/70 italic mb-4">{project.tagline}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs uppercase tracking-wide bg-sage/20 text-forest px-2.5 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {expanded && (
        <div className="space-y-4 text-sm text-ink/80 leading-relaxed mb-4">
          <div>
            <p className="font-semibold text-bark mb-1">The Problem</p>
            <p>{project.problem}</p>
          </div>
          <div>
            <p className="font-semibold text-bark mb-1">What I Did</p>
            <p>{project.whatIDid}</p>
          </div>
          <div>
            <p className="font-semibold text-bark mb-1">The Outcome</p>
            <p>{project.outcome}</p>
          </div>
          <div>
            <p className="font-semibold text-bark mb-1">The Bridge</p>
            <p className="italic">{project.bridge}</p>
          </div>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-forest font-medium text-sm hover:text-rose transition-colors duration-200"
        >
          {expanded ? "Show less ↑" : "Read the case study ↓"}
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sage hover:text-forest transition-colors duration-200"
          >
            View code →
          </a>
        )}
      </div>
    </div>
  );
}