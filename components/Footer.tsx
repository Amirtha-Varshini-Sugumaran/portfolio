import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-primary px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="mt-2 text-sm text-white/70">{profile.shortRole}</p>
          <p className="mt-3 text-xs text-white/60">
            Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white/70 transition hover:text-warm">
              {link.label}
            </a>
          ))}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-white/70 transition hover:text-warm">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-white/70 transition hover:text-warm">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
