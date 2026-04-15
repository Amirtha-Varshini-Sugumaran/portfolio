import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { certificationIcon, certifications } from "@/data/portfolio";

export function Certifications() {
  const Icon = certificationIcon;

  return (
    <AnimatedSection id="certifications" className="bg-shadow px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Focused learning signals."
          description="Compact credentials across analytics, business analysis and precision."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification) => (
            <article key={certification} className="flex gap-4 rounded-lg border border-gunmetal bg-carbon p-5 shadow-card transition hover:-translate-y-1 hover:bg-graphite">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gunmetal bg-onyx text-cloud">
                <Icon size={19} />
              </div>
              <p className="text-sm font-semibold leading-6 text-cloud">{certification}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
