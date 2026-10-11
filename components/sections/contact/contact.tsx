"use client";

import { motion } from "@/components/ui/motion";

import Container from "@/components/ui/container";

import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-cyan-400
            "
          >
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Let's Build Something
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              {" "}Great Together
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have an idea, project, or opportunity? I'd love to hear from you.
            Let's discuss how we can build secure, scalable, and modern software
            together.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
