"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gunmetal bg-onyx/95 text-whiteish backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-bold uppercase text-whiteish">
          AVS
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cloud transition hover:text-whiteish"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="rounded-lg border border-gunmetal bg-carbon px-4 py-2 text-sm font-semibold text-whiteish transition hover:bg-graphite">
            Let&apos;s connect
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-gunmetal bg-carbon p-2 text-whiteish lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div
        className={cn(
          "grid border-t border-gunmetal bg-shadow transition-all duration-300 lg:hidden",
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
                className="rounded-lg px-3 py-3 text-sm font-medium text-cloud transition hover:bg-carbon hover:text-whiteish"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-lg bg-whiteish px-4 py-3 text-sm font-bold text-onyx transition hover:bg-cloud">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
