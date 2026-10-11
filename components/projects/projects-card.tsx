import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex aspect-video items-end bg-gradient-to-br from-blue-700 via-cyan-600 to-sky-400 p-6">
        <span className="text-lg font-bold text-white">{project.title}</span>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-accent px-3 py-1 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href={project.demoUrl}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Live Demo
          </Link>

          <Link
            href={project.githubUrl}
            className="rounded-lg border border-border px-4 py-2 hover:bg-accent"
          >
            GitHub
          </Link>
        </div>
      </div>
    </article>
  );
}
