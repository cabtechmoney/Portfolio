import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="CabTech Hub Home"
      className="flex items-center gap-2"
    >
      <span className="text-2xl font-extrabold tracking-tight text-blue-600">
        CabTech
      </span>

      <span className="text-2xl font-light text-foreground">
        Hub
      </span>
    </Link>
  );
}
