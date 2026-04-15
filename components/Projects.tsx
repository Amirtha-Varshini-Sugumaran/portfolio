"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-shadow px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured proof of engineering and analytical delivery."
          description="Project cards are intentionally concise: problem, implementation signal, impact highlights, and stack."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} priority={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, priority }: { project: Project; priority: number }) {
  const [open, setOpen] = useState(project.featured);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={project.featured ? "rounded-xl2 border border-gunmetal bg-carbon p-6 shadow-card lg:col-span-2 lg:p-8" : "rounded-xl2 border border-gunmetal bg-carbon p-6 shadow-card"}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-medium uppercase text-mist">{project.label}</p>
          <h3 className={project.featured ? "mt-3 text-3xl font-bold text-whiteish" : "mt-3 text-2xl font-bold text-whiteish"}>
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border border-gunmetal bg-onyx px-3 py-1 font-mono text-xs text-mist">
          0{priority + 1}
        </span>
      </div>
      <p className="mt-5 max-w-3xl text-base leading-8 text-cloud">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span key={tag} className="rounded-lg border border-gunmetal bg-onyx px-3 py-2 font-mono text-xs text-cloud">
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gunmetal bg-shadow px-4 py-2 text-sm font-semibold text-whiteish transition hover:bg-graphite"
      >
        {open ? "Hide Details" : "View Details"}
        <ChevronDown size={16} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      <div className={open ? "grid grid-rows-[1fr] transition-all duration-300" : "grid grid-rows-[0fr] transition-all duration-300"}>
        <div className="overflow-hidden">
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-6 text-cloud">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mist" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
