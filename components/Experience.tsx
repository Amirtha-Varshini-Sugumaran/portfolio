import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Backend systems, data workflows and business-facing delivery."
          description="Experience across software engineering, reporting systems, requirement analysis and enterprise process automation."
        />
        <div className="mt-12 space-y-7">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <article key={`${item.company}-${item.role}`} className="rounded-lg border border-primary/10 bg-background/60 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-dark">{item.role}</h3>
                      <p className="mt-1 font-semibold text-secondary">{item.company}</p>
                      <p className="mt-1 text-sm text-secondary">{item.location}</p>
                    </div>
                  </div>
                  <p className="rounded-lg bg-white px-4 py-2 font-mono text-xs font-medium text-primary">
                    {item.dates}
                  </p>
                </div>
                <p className="mt-6 max-w-5xl text-base leading-8 text-secondary">{item.summary}</p>
                <ul className="mt-6 grid gap-3 lg:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-text-dark">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {"clusters" in item && item.clusters ? (
                  <div className="mt-7 grid gap-4 lg:grid-cols-3">
                    {item.clusters.map((cluster) => (
                      <div key={cluster.title} className="rounded-lg border border-primary/10 bg-white p-5">
                        <h4 className="font-semibold text-primary">{cluster.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-secondary">{cluster.description}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-lg bg-primary/10 px-3 py-2 font-mono text-xs text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
