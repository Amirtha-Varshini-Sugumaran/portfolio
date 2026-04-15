import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical and analytical skills for engineering and analyst roles."
          description="A focused toolkit across programming, databases, frontend integration, engineering practices, security, analytics and business analysis."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="rounded-lg border border-primary/10 bg-background/50 p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-text-dark">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={skill === "Java" ? "rounded-lg bg-primary px-3 py-2 font-mono text-xs font-medium text-white" : "rounded-lg bg-white px-3 py-2 font-mono text-xs font-medium text-primary"}
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
