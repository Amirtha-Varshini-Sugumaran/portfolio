import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { education, educationIcon } from "@/data/portfolio";

export function Education() {
  const Icon = educationIcon;

  return (
    <AnimatedSection id="education" className="bg-onyx px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation for analytical engineering work."
          description="Compact education cards, focused only on the areas that support software, data and business systems roles."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="rounded-xl2 border border-gunmetal bg-shadow p-7 shadow-card transition hover:-translate-y-1 hover:bg-carbon hover:shadow-lift">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gunmetal bg-carbon text-cloud">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-whiteish">{item.degree}</h3>
                  <p className="mt-2 font-semibold text-cloud">{item.institution}</p>
                  <p className="mt-1 font-mono text-xs text-mist">{item.dates}</p>
                  <p className="mt-3 inline-flex rounded-lg border border-gunmetal bg-onyx px-3 py-2 text-sm font-semibold text-cloud">
                    {item.result}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.focus.map((focus) => (
                  <span key={focus} className="rounded-lg border border-gunmetal bg-carbon px-3 py-2 text-sm text-cloud">
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
