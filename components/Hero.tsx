"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { highlights, outcomes, profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary text-text-light">
      <div className="absolute inset-x-0 top-0 h-px bg-warm/50" />
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="font-mono text-xs font-semibold uppercase text-warm">
            Dublin-based software engineer
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-white sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Building scalable backend systems and data-driven solutions by combining software engineering with structured analysis and business understanding.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-primary shadow-soft transition hover:-translate-y-0.5 hover:bg-warm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-warm hover:text-warm"
            >
              Contact Me
            </a>
            <a
              href={profile.cv}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-warm/45 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Download size={17} />
              Resume
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/75">
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-warm" />
              {profile.location} | Open to Software Engineering and Analyst roles
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-warm">
              <Mail size={17} className="text-warm" />
              {profile.email}
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/15 p-3 text-white transition hover:border-warm hover:text-warm"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-white/15 p-3 text-white transition hover:border-warm hover:text-warm"
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
          <div className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.25)] backdrop-blur">
            <div className="rounded-lg border border-white/10 bg-[#1a1a2e] p-5 font-mono text-sm text-white/90">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-warm" />
                <span className="h-3 w-3 rounded-full bg-accent" />
                <span className="h-3 w-3 rounded-full bg-white/40" />
              </div>
              <p className="text-warm">engineer.profile()</p>
              <div className="mt-4 space-y-3 text-white/75">
                {highlights.map((item) => (
                  <p key={item}>
                    <span className="text-warm">{"// "}</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {outcomes.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/10 p-4">
                  <p className="text-2xl font-extrabold text-white">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
