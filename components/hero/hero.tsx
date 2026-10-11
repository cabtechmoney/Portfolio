import Container from "@/components/ui/container";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import HeroBackground from "./hero-background";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24">
      <HeroBackground />
      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
