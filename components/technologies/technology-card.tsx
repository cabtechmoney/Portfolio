import type { Technology } from "@/types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({
  technology,
}: TechnologyCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
        {technology.category}
      </p>

      <h3 className="mt-3 text-lg font-bold">
        {technology.name}
      </h3>
    </article>
  );
}