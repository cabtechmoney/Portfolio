import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import Technologies from "@/components/technologies/technologies";
import Services from "@/components/services/services";
import Features from "@/components/features/features";
import Projects from "@/components/sections/projects/projects";
import Contact from "@/components/sections/contact/contact";
import Footer from "@/components/layout/footer/footer";
export default function Home() {
  return (
    <main className="luxury-shell relative min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="relative">
        <Hero />
        <Technologies />
        <Services />
        <Features />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
