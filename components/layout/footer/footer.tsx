"use client";

import Link from "next/link";
import {
  ArrowUp,
  Code2,
  Github,
  Globe,
  Mail,
  Send,
} from "@/components/ui/icons";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/cabtechmoney",
    icon: Github,
  },
  {
    label: "X",
    href: "https://x.com/CabTechHub",
    icon: Globe,
  },
  {
    label: "Telegram",
    href: "https://t.me/Cabtech_hub",
    icon: Send,
  },
  {
    label: "Email",
    href: "mailto:cabtechmoney@gmail.com",
    icon: Mail,
  },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-600
                  via-cyan-500
                  to-sky-500
                  text-white
                "
              >
                <Code2 className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  CabTech Hub
                </h3>

                <p className="text-sm text-muted-foreground">
                  Software Engineering
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
              Building secure, scalable, and modern software
              solutions with clean architecture, performance,
              and exceptional user experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    text-muted-foreground
                    transition-colors
                    hover:text-cyan-400
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold">
              Connect
            </h4>

            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={item.label}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-border
                      bg-background/60
                      transition-all
                      duration-300
                      hover:border-cyan-500/40
                      hover:bg-cyan-500/10
                      hover:text-cyan-400
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>

            <Link
              href="#home"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-border
                px-5
                py-3
                text-sm
                font-semibold
                transition-colors
                hover:bg-accent
              "
            >
              Back to Top

              <ArrowUp className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-border
            pt-8
            text-sm
            text-muted-foreground
            md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} CabTech Hub.
            All rights reserved.
          </p>

          <p>
            Designed & Built with ❤️ using Next.js,
            TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
