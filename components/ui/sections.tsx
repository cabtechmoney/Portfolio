import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Container from "./container";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24", className)}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            {title}
          </h2>

          {subtitle ? (
            <p className="mt-4 text-lg text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-16">
          {children}
        </div>
      </Container>
    </section>
  );
}








