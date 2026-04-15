"use client";

import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/96 text-text-light backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-bold uppercase">
          AVS
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-warm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cv}
            className="inline-flex items-center gap-2 rounded-lg border border-warm/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-warm hover:bg-white/10"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/15 p-2 text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div
        className={cn(
          "grid border-t border-white/10 bg-primary transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-warm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cv}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-warm px-4 py-3 text-sm font-bold text-primary transition hover:bg-white"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
