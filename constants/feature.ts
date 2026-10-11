import {
  ShieldCheck,
  Zap,
  Code2,
  Cpu,
  Rocket,
  Users,
} from "@/components/ui/icons";

import type { Feature } from "@/types/feature";

export const FEATURES: readonly Feature[] = [
  {
    id: "performance",
    title: "High Performance",
    description:
      "Applications optimized for speed, scalability, and reliability.",
    icon: Zap,
  },
  {
    id: "security",
    title: "Security First",
    description:
      "Built with authentication, authorization, and secure coding practices.",
    icon: ShieldCheck,
  },
  {
    id: "clean-code",
    title: "Clean Architecture",
    description:
      "Maintainable codebases using modern engineering principles.",
    icon: Code2,
  },
  {
    id: "modern-stack",
    title: "Modern Technologies",
    description:
      "Next.js, TypeScript, Go, Python, PostgreSQL, and cloud-native tooling.",
    icon: Cpu,
  },
  {
    id: "scalable",
    title: "Built to Scale",
    description:
      "Designed for growth with reusable components and modular architecture.",
    icon: Rocket,
  },
  {
    id: "collaboration",
    title: "Client Focused",
    description:
      "Clear communication, thoughtful planning, and dependable delivery.",
    icon: Users,
  },
] as const;
