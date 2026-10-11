export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly technologies: readonly string[];
  readonly githubUrl: string;
  readonly demoUrl: string;
  readonly featured: boolean;
}

export const PROJECTS: readonly Project[] = [
  {
    id: "cabtech-hub",
    slug: "cabtech-hub",
    title: "CabTech Hub",
    description:
      "A modern software engineering platform showcasing full-stack development, scalable architecture, and innovative digital solutions.",
    image: "/images/projects/cabtech-hub.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/cabtechmoney/cabtech-hub",
    demoUrl: "https://cabtech-hub.vercel.app",
    featured: true,
  },
  {
    id: "Hera Palace | Full-Stack E-Commerce Website",
    slug: "Hera Palace | Full-Stack E-Commerce Website",
    title: "Hera Palace | Full-Stack E-Commerce Website",
    description: "Hera Palace is a luxury-inspired online storefront built with React, TypeScript, and Django REST Framework. It brings together a polished shopping experience and practical commerce features, including product browsing, cart and wishlist management, JWT-based authentication, customer reviews, and order tracking. Checkout is simulated, making the project suitable as a demo without processing real payments.",
    image: "/images/projects/offline-logistics.png",
    technologies: [
      "React",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
    ],
    githubUrl: "https://github.com/cabtechmoney/my-website",
    demoUrl: "https://hera-palace.vercel.app",
    featured: true,
  },
  {
    id: "Vendor Core",
    slug: "Vendor Core",
    title: "Vendor Core",
    description:
"Vendor Core is a multi-vendor marketplace that gives sellers branded storefronts and customers a simple way to discover products, manage a cart, choose delivery options, and place orders through WhatsApp. The platform also includes vendor dashboards and admin tools, with separate services supporting its marketplace and product data.",
image: "/images/projects/ecommerce.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Go",
      "FastApi"
    ],
    githubUrl: "https://github.com/cabtechmoney/vendor-core",
    demoUrl: "https://vendor-core-ten.vercel.app",
    featured: true,
  },
  {
    id: "Caleb CRM",
    slug: "Caleb CRM",
    title: "Caleb CRM",
    description:
      "Caleb CRM is a full-stack CRM for managing client relationships, project pipelines, and payment records in one workspace. It combines a live dashboard with pipeline analytics and a Gemini-powered assistant that answers questions using project stages, budgets, and deadlines. The app is built with Next.js and TypeScript, backed by an Express REST API and Supabase.",
    image: "/images/projects/CalebCRM.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Express",
      "Supabase",
      "Gemini API"
    ],
    githubUrl: "https://github.com/cabtechmoney/calebcrmproject",
    demoUrl: "https://calebcrmproject1.vercel.app",
    featured: true,
  },
] as const;
