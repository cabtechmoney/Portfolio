import HeroActions from "./hero-actions";

export default function HeroContent() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
        Welcome to CabTech Hub
      </p>

      <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
        Building Secure & Scalable Software Solutions
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        I am Caleb Olayiwola Olaniran, a Software Engineer,
        Full-Stack Developer, and Email Marketing Expert.
        I build modern applications using Next.js,
        TypeScript, Python, Go, and cloud technologies.
      </p>

      <HeroActions />
    </>
  );
}