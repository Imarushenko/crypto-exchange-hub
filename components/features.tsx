const features = [
  {
    title: "Israel-focused",
    description:
      "This site currently targets users in Israel and only shows supported referral options for that audience.",
  },
  {
    title: "Built for expansion",
    description:
      "The project structure already supports adding more exchanges, geo rules, and future referral campaigns.",
  },
  {
    title: "Clean comparison flow",
    description:
      "Visitors can quickly understand what is available without being overwhelmed by too many choices.",
  },
];

export function Features() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Why this site
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            A clean, focused crypto referral landing page
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-zinc-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}