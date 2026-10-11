"use client";

import Link from "next/link";
import { motion } from "@/components/ui/motion";
import { ArrowRight } from "@/components/ui/icons";

import Container from "@/components/ui/container";
import { PROJECTS } from "@/data/projects";

import ProjectCard from "@/components/projects/projects-card";

export default function Projects() {
  const featuredProjects = PROJECTS.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          right-0
          top-20
          h-80
          w-80
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
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
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Featured
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A selection of projects that demonstrate my passion for
            building modern, secure, scalable, and user-focused
            software solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-border
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:bg-accent
              hover:gap-3
            "
          >
            View All Projects

            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
