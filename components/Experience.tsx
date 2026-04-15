import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="bg-onyx px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Industry delivery across engineering, systems and analysis."
          description="Role cards focus on impact, delivery context and the work patterns recruiters look for in software and analyst roles."
        />
        <div className="mt-12 space-y-6">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <article key={`${item.company}-${item.role}`} className="rounded-xl2 border border-gunmetal bg-shadow p-6 shadow-card transition hover:-translate-y-1 hover:bg-carbon hover:shadow-lift sm:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gunmetal bg-carbon text-cloud">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-whiteish">{item.role}</h3>
                      <p className="mt-1 font-semibold text-cloud">{item.company}</p>
                      <p className="mt-1 text-sm text-mist">{item.location}</p>
                    </div>
                  </div>
                  <p className="rounded-lg border border-gunmetal bg-onyx px-4 py-2 font-mono text-xs font-medium text-cloud">
                    {item.dates}
                  </p>
                </div>
                <p className="mt-6 max-w-5xl text-base leading-8 text-cloud">{item.summary}</p>
                {"groups" in item && item.groups ? (
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {item.groups.map((group) => (
                      <div key={group.title} className="rounded-lg border border-gunmetal bg-carbon p-5">
                        <h4 className="text-sm font-semibold uppercase text-whiteish">{group.title}</h4>
                        <ul className="mt-4 space-y-3">
                          {group.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm leading-6 text-cloud">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mist" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : "bullets" in item ? (
                  <ul className="mt-6 grid gap-3 lg:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-cloud">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mist" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-gunmetal bg-onyx px-3 py-2 font-mono text-xs text-cloud">
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
