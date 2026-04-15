import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { highlights } from "@/data/portfolio";

export function About() {
  return (
    <AnimatedSection id="about" className="bg-background px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="Backend-focused engineer with business analytics judgement."
          description="I bring software engineering delivery experience, data-backed problem solving and stakeholder fluency into one practical profile."
        />
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-7 shadow-soft">
            <p className="text-lg leading-8 text-text-dark">
              I am a Business Analytics graduate and early-career software engineer targeting Java Junior Software Engineer, backend developer and full-stack graduate roles in Ireland. My experience sits at the intersection of backend services, REST APIs, relational databases, secure workflows, frontend-connected modules and structured SDLC delivery.
            </p>
            <p className="mt-5 text-base leading-8 text-secondary">
              In practice, I have worked on enterprise workflow modules, API-driven automation, PostgreSQL data models, authentication and RBAC logic, debugging, testing, Docker-supported environments and Agile collaboration. I am Java-oriented in my engineering direction, with hands-on backend delivery experience and enough frontend exposure to collaborate confidently across the application layer.
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
