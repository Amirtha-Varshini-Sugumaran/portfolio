import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { highlights } from "@/data/portfolio";

export function About() {
  return (
    <AnimatedSection id="about" className="bg-background px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Software engineering capability with structured business analysis."
          description="Software Engineer with a strong academic foundation in Business Analytics and hands-on experience across backend development, data analysis and business systems."
        />
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-7 shadow-soft">
            <p className="text-lg leading-8 text-text-dark">
              Experienced in designing APIs, optimising database systems and translating business requirements into structured technical solutions. Demonstrates strong capability in SQL-driven analysis, KPI reporting, debugging and system-level problem solving within Agile environments.
            </p>
            <p className="mt-5 text-base leading-8 text-secondary">
              Combines backend engineering with analytical thinking to deliver scalable applications, reliable reporting systems and data-informed business insights.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-lg border border-primary/10 bg-white/70 p-5">
                <p className="text-sm leading-6 text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
