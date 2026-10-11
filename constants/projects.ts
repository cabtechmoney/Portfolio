import type { Project } from "@/types/project";

export const PROJECTS: readonly Project[] = [
  {
    id: "Vendor Core",
    title: "Vendor Core",
    slug: "Vendor Core",
    description:
      "Vendor Core is a multi-vendor marketplace that gives sellers branded storefronts and customers a simple way to discover products, manage a cart, choose delivery options, and place orders through WhatsApp. The platform also includes vendor dashboards and admin tools, with separate services supporting its marketplace and product data.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "Fastapi",
      "Go",
      "Go-fibre",
      "PostgreSQL",
    ],
    image: "/images/projects/offline-logistics.png",
    githubUrl: "https://github.com/cabtechmoney/vendor-core",
    demoUrl: "https://vendor-core-ten.vercel.app",
    featured: true,
  },
  {
    id: "Caleb CRM",
    title: "Caleb CRM",
    slug: "Caleb CRM",
    description:
      "Customer relationship management platform with analytics and automation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "Supabase",
    ],
    image: "/images/projects/crm.png",
    githubUrl: "https://github.com/cabtechmoney/calebcrmproject",
    demoUrl: "https://calebcrmproject1.vercel.app",
    featured: true,
  },
] as const;