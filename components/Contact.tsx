import { Send } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { contactItems, profile } from "@/data/portfolio";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="bg-background px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect."
            description="Open to opportunities in Software Engineering, Backend Development, and Data/Business Analysis roles."
          />
          <div className="mt-8 grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-secondary">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-text-dark">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <form className="rounded-lg bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-text-dark">Name</span>
              <input className="mt-2 w-full rounded-lg border border-primary/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-text-dark">Email</span>
              <input type="email" className="mt-2 w-full rounded-lg border border-primary/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-semibold text-text-dark">Role or opportunity</span>
            <input className="mt-2 w-full rounded-lg border border-primary/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Software Engineer or Analyst role" />
          </label>
          <label className="mt-5 block">
            <span className="text-sm font-semibold text-text-dark">Message</span>
            <textarea className="mt-2 min-h-36 w-full resize-y rounded-lg border border-primary/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-primary" placeholder="Tell me about the team, role or interview process." />
          </label>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
          >
            <Send size={17} />
            Send Email
          </a>
        </form>
      </div>
    </AnimatedSection>
  );
}
