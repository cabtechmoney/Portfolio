import { BriefcaseBusiness, Globe, MapPin, Sparkles } from "@/components/ui/icons";

const BADGES = [
  { label: "Available for freelance", icon: BriefcaseBusiness },
  { label: "Based in Nigeria", icon: MapPin },
  { label: "Global remote work", icon: Globe },
  { label: "Modern web specialist", icon: Sparkles },
] as const;

export default function HeroBadges() {
  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Professional highlights">
      {BADGES.map(({ label, icon: Icon }) => (
        <li key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-sm">
          <Icon className="size-4 text-cyan-500" /> {label}
        </li>
      ))}
    </ul>
  );
}
