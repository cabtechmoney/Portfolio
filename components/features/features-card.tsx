import type { Feature } from "@/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="mb-5 inline-flex rounded-xl bg-blue-600/10 p-3 text-blue-600">
        <Icon className="size-6" />
      </div>

      <h3 className="text-xl font-semibold">
        {feature.title}
      </h3>

      <p className="mt-3 text-muted-foreground">
        {feature.description}
      </p>
    </article>
  );
}