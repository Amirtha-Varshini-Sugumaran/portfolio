import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { contactItems } from "@/data/portfolio";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="bg-onyx px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-xl2 border border-gunmetal bg-shadow p-7 shadow-lift sm:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect."
          description="Open to opportunities in Software Engineering, Backend Development, Business Analysis, and Data Analysis roles in Ireland."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-lg border border-gunmetal bg-carbon p-5 transition hover:-translate-y-1 hover:bg-graphite hover:shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gunmetal bg-onyx text-cloud transition group-hover:text-whiteish">
                  <Icon size={20} />
                </div>
                <p className="mt-5 font-mono text-xs uppercase text-mist">{item.label}</p>
                <p className="mt-2 break-words text-sm font-semibold leading-6 text-whiteish">{item.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
