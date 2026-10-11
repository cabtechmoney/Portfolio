import type { Technology } from "@/types/technology";

export const TECHNOLOGIES: readonly Technology[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
  },
  {
    id: "python",
    name: "Python",
    category: "Language",
  },
  {
    id: "go",
    name: "Go",
    category: "Backend",
  },
  {
    id: "django",
    name: "Django",
    category: "Backend",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
  },
  {
    id: "docker",
    name: "Docker",
    category: "Tools",
  },
] as const;