import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { education, educationIcon } from "@/data/portfolio";

export function Education() {
  const Icon = educationIcon;

  return (
    <AnimatedSection id="education" className="bg-background px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="Business analytics education supporting technical problem solving."
          description="Academic work strengthened predictive analytics, data modelling, research methods and business insight generation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="rounded-lg border border-primary/10 bg-white p-7 shadow-soft">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-dark">{item.degree}</h3>
                  <p className="mt-2 font-semibold text-secondary">{item.institution}</p>
                  <p className="mt-1 font-mono text-xs text-primary">{item.dates}</p>
                  <p className="mt-3 inline-flex rounded-lg bg-background px-3 py-2 text-sm font-semibold text-primary">
                    {item.result}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.focus.map((focus) => (
                  <span key={focus} className="rounded-lg border border-primary/10 px-3 py-2 text-sm text-secondary">
                    {focus}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
