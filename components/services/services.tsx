import Section from "@/components/ui/sections";
import { SERVICES } from "@/constants/service";
import ServiceCard from "./service-card";

export default function Services() {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Helping businesses and individuals build reliable, scalable, and modern software solutions."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </Section>
  );
}

