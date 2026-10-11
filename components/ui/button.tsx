import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-border hover:bg-accent"
      )}
    >
      {children}
    </Link>
  );
}