"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-onyx text-whiteish">
      <div className="absolute inset-x-0 top-0 h-px bg-gunmetal" />
      <div className="absolute right-0 top-20 hidden h-72 w-72 rounded-full border border-gunmetal/60 opacity-40 lg:block" />
      <div className="absolute bottom-16 left-8 hidden h-40 w-40 rounded-full border border-steel/40 opacity-30 lg:block" />
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="inline-flex rounded-full border border-gunmetal bg-shadow px-4 py-2 font-mono text-xs font-medium uppercase text-mist">
            Dublin-based software engineer
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.04] text-whiteish sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-cloud sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg">
            {profile.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whiteish px-5 py-3 text-sm font-bold text-onyx shadow-soft transition hover:-translate-y-0.5 hover:bg-cloud"
            >
              View Projects
              <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-gunmetal bg-shadow px-5 py-3 text-sm font-bold text-whiteish transition hover:-translate-y-0.5 hover:bg-carbon"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-mist">
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-cloud" />
              {profile.availability}
            </span>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-gunmetal bg-shadow p-3 text-cloud transition hover:-translate-y-0.5 hover:bg-carbon hover:text-whiteish"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-gunmetal bg-shadow p-3 text-cloud transition hover:-translate-y-0.5 hover:bg-carbon hover:text-whiteish"
            >
              <Github size={19} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="relative"
        >
          <div className="rounded-xl2 border border-gunmetal bg-shadow p-5 shadow-lift">
            <div className="rounded-lg border border-gunmetal bg-carbon p-5 font-mono text-sm text-cloud">
              <div className="mb-6 flex items-center justify-between border-b border-gunmetal pb-4">
                <span className="text-mist">portfolio.system</span>
                <span className="rounded-full border border-gunmetal px-3 py-1 text-[11px] text-mist">active</span>
              </div>
              <div className="space-y-4">
                <p><span className="text-whiteish">role:</span> Software Engineer</p>
                <p><span className="text-whiteish">systems:</span> APIs / Databases / Workflows</p>
                <p><span className="text-whiteish">analysis:</span> SQL / KPI Reporting / Requirements</p>
                <p><span className="text-whiteish">delivery:</span> Agile / SDLC / Debugging</p>
              </div>
            </div>
            <div className="mt-5 rounded-lg border border-gunmetal bg-onyx p-5">
              <p className="font-mono text-xs uppercase text-mist">Portfolio signal</p>
              <p className="mt-3 text-2xl font-bold leading-snug text-whiteish">
                Engineering first. Analysis sharp. Business context built in.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
