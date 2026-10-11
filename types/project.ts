export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  technologies: readonly string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}