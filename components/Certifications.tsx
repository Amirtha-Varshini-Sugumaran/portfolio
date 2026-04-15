import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { certificationIcon, certifications } from "@/data/portfolio";

export function Certifications() {
  const Icon = certificationIcon;

  return (
    <AnimatedSection id="certifications" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications across analytics, business analysis and precision."
          description="Additional learning that supports data analysis, business understanding and detail-focused delivery."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification) => (
            <article key={certification} className="flex gap-4 rounded-lg border border-primary/10 bg-background/50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                <Icon size={19} />
              </div>
              <p className="text-sm font-semibold leading-6 text-text-dark">{certification}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
