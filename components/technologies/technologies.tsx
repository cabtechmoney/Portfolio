import Container from "@/components/ui/container";
import { TECHNOLOGIES } from "@/constants/technologies";
import TechnologyCard from "./technology-card";

export default function Technologies() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            Tech Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Technologies I Use
          </h2>

          <p className="mt-4 text-muted-foreground">
            Modern tools and technologies used to build secure,
            scalable, and high-performance applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNOLOGIES.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}