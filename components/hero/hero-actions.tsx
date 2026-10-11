import Link from "next/link";
import { ArrowRight, Download } from "@/components/ui/icons";

export default function HeroActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Link href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
        Let&apos;s work together <ArrowRight className="size-4" />
      </Link>
      <Link href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold transition hover:bg-accent">
        View projects <Download className="size-4" />
      </Link>
    </div>
  );
}
