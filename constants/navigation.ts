import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Insights",
    href: "#insights",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;