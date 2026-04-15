import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-gunmetal bg-shadow px-5 py-10 text-whiteish sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="mt-2 text-sm text-mist">{profile.shortRole}</p>
          <p className="mt-3 text-xs text-dim">
            © 2026 All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-mist transition hover:text-whiteish">
              {link.label}
            </a>
          ))}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-mist transition hover:text-whiteish">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-mist transition hover:text-whiteish">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
