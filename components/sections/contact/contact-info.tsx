"use client";

import Link from "next/link";
import { motion } from "@/components/ui/motion";
import {
  Briefcase,
  Github,
  Globe,
  Mail,
  MapPin,
  Send,
} from "@/components/ui/icons";

interface ContactItem {
  readonly title: string;
  readonly value: string;
  readonly href?: string;
  readonly icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const CONTACT_ITEMS: readonly ContactItem[] = [
  {
    title: "Location",
    value: "Abeokuta, Ogun State, Nigeria",
    icon: MapPin,
  },
  {
    title: "Email",
    value: "cabtechmoney@gmail.com",
    href: "mailto:cabtechmoney@gmail.com",
    icon: Mail,
  },
  {
    title: "Availability",
    value: "Available for Freelance & Full-Time",
    icon: Briefcase,
  },
  {
    title: "GitHub",
    value: "github.com/cabtechmoney",
    href: "https://github.com/cabtechmoney",
    icon: Github,
  },
  {
    title: "X / Twitter",
    value: "x.com/CabTechHub",
    href: "https://x.com/CabTechHub",
    icon: Globe,
  },
  {
    title: "Telegram",
    value: "t.me/Cabtech_hub",
    href: "https://t.me/Cabtech_hub",
    icon: Send,
  },
] as const;

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold"
      >
        Get In Touch
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground leading-8"
      >
        Whether you have a new project, a collaboration opportunity,
        or just want to connect, feel free to reach out.
      </motion.p>

      <div className="space-y-4">
        {CONTACT_ITEMS.map((item, index) => {
          const Icon = item.icon;

          const content = (
            <div
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-border
                bg-background/60
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/40
                hover:shadow-lg
                hover:shadow-cyan-500/10
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-500/10
                  text-cyan-400
                "
              >
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  {item.title}
                </p>

                <p className="font-semibold break-all">
                  {item.value}
                </p>
              </div>
            </div>
          );

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              {item.href ? (
                <Link
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
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
