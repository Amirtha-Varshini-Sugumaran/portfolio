import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-onyx px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Engineering-first skill system with analyst depth."
          description="Software engineering comes first, supported by database, security, analytics and business analysis capability."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="rounded-xl2 border border-gunmetal bg-shadow p-6 shadow-card transition hover:-translate-y-1 hover:bg-carbon hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gunmetal bg-carbon text-cloud">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-whiteish">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={skill === "Java" ? "rounded-lg bg-whiteish px-3 py-2 font-mono text-xs font-medium text-onyx" : "rounded-lg border border-gunmetal bg-onyx px-3 py-2 font-mono text-xs font-medium text-cloud"}
                    >
                      {skill}
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
