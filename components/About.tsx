import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutFacts, aboutSummary } from "@/data/portfolio";

export function About() {
  return (
    <AnimatedSection id="about" className="bg-shadow px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Engineering discipline with business context built in."
          description="A concise profile for software engineering, business analyst and data analyst opportunities in Ireland."
        />
        <div className="space-y-6">
          <div className="rounded-xl2 border border-gunmetal bg-carbon p-7 shadow-card">
            <p className="text-lg leading-8 text-cloud">{aboutSummary}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutFacts.map((item) => (
              <div key={item} className="rounded-lg border border-gunmetal bg-onyx p-5">
                <p className="text-sm leading-6 text-cloud">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
