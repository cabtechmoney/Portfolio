import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navigation";
import Logo from "./logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl shadow-[0_10px_30px_rgba(14,116,144,0.12)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={`${item.href}-${index}`}
              href={item.href}
              className="text-sm font-medium text-slate-200/80 transition-colors duration-300 hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-full border border-cyan-400/40 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.35)] transition duration-300 hover:scale-[1.02] hover:brightness-110"
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
}