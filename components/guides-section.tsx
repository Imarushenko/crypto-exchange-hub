const guides = [
  {
    title: "Best Crypto Exchange in Israel",
    description:
      "A focused overview for users in Israel who want a simple starting point for choosing a crypto exchange.",
    href: "/best-crypto-exchange-israel",
    cta: "Read guide",
  },
  {
    title: "Bybit Referral for Israel",
    description:
      "A dedicated page for the currently active Bybit referral offer available on this site.",
    href: "/bybit-referral-israel",
    cta: "View Bybit page",
  },
  {
    title: "Crypto Trading in Israel",
    description:
      "A broader introduction for users in Israel exploring crypto trading platforms and referral-based access points.",
    href: "/crypto-trading-israel",
    cta: "Explore topic",
  },
];

export function GuidesSection() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Guides
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Explore more crypto guides for Israel
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            These pages help users understand the current offer, the broader
            crypto exchange context, and the direction of the project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/15 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-semibold text-white">
                {guide.title}
              </h3>

              <p className="mt-4 min-h-[96px] leading-7 text-zinc-300">
                {guide.description}
              </p>

              <div className="mt-6">
                <a
                  href={guide.href}
                  className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  {guide.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
