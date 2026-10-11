import type { Service } from "@/types/service";
import {
  Globe,
  Server,
  Database,
  Brain,
  Mail,
  Shield,
} from "@/components/ui/icons";

export const SERVICES: readonly Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building modern, fast, and responsive web applications with Next.js and React.",
    icon: Globe,
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Designing secure APIs and scalable backend systems with Next.js, Go, Django, and FastAPI.",
    icon: Server,
  },
  {
    id: "database-design",
    title: "Database Design",
    description:
      "Creating efficient relational database structures using PostgreSQL and Prisma.",
    icon: Database,
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Integrating AI features into applications to improve automation and user experience.",
    icon: Brain,
  },
  {
    id: "Email Marketing",
    title: "Email Marketing",
    description:
      "Creating email campaigns, automation workflows, and customer engagement strategies.",
    icon: Mail,
  },
  {
    id: "Application Security",
    title: "Application Security",
    description:
      "Applying secure coding practices and authentication to build safer applications.",
    icon: Shield,
  },
] as const;
