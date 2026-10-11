import Section from "@/components/ui/sections";
import { FEATURES } from "@/constants/feature";
import FeatureCard from "./features-card";

export default function Features() {
  return (
    <Section
      id="about"
      title="Why Choose CabTech Hub"
      subtitle="Engineering modern software with performance, security, and long-term maintainability in mind."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
          />
        ))}
      </div>
    </Section>
  );
}
