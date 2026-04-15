import { valueSnapshot } from "@/data/portfolio";

export function ValueStrip() {
  return (
    <section className="border-y border-gunmetal bg-shadow px-5 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {valueSnapshot.map((item) => {
          const Icon = item.icon;
          return (
            <div key={`${item.value}-${item.label}`} className="group rounded-lg border border-gunmetal bg-carbon p-4 shadow-card transition hover:-translate-y-1 hover:bg-graphite hover:shadow-lift">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gunmetal bg-shadow text-cloud">
                  <Icon size={19} />
                </div>
                <div>
                  <p className="text-lg font-bold text-whiteish">{item.value}</p>
                  <p className="mt-1 text-sm leading-5 text-mist">{item.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
