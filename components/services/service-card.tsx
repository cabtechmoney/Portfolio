import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 inline-flex rounded-xl bg-blue-600/10 p-3 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-semibold">
        {service.title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {service.description}
      </p>
    </article>
  );
}

