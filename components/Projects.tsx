"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-background px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Backend, Java and analytics projects with practical delivery focus."
          description="A curated set of software engineering and analysis projects covering APIs, Java fundamentals, dashboards and business insight generation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className={index === 0 ? "rounded-lg border border-primary/10 bg-white p-6 shadow-soft lg:col-span-2 lg:p-8" : "rounded-lg border border-primary/10 bg-white p-6 shadow-soft"}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase text-secondary">{project.label}</p>
                  <h3 className="mt-3 text-2xl font-bold text-text-dark">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  <a href={project.links.github} aria-label={`${project.title} GitHub`} className="rounded-lg border border-primary/10 p-2 text-primary transition hover:bg-primary hover:text-white">
                    <Github size={18} />
                  </a>
                  <a href={project.links.demo} aria-label={`${project.title} demo`} className="rounded-lg border border-primary/10 p-2 text-primary transition hover:bg-primary hover:text-white">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold leading-6 text-primary">{project.problem}</p>
              <p className="mt-4 text-base leading-8 text-secondary">{project.description}</p>
              <p className="mt-4 rounded-lg bg-background p-4 text-sm leading-6 text-text-dark">
                {project.impact}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-lg bg-primary/10 px-3 py-2 font-mono text-xs text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
