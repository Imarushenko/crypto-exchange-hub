type SeoPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
  ctaText?: string;
  ctaHref?: string;
};

const relatedPages = [
  {
    title: "Best Crypto Exchange in Israel",
    href: "/best-crypto-exchange-israel",
  },
  {
    title: "Bybit Referral for Israel",
    href: "/bybit-referral-israel",
  },
  {
    title: "Crypto Trading in Israel",
    href: "/crypto-trading-israel",
  },
];

export function SeoPageLayout({
  eyebrow,
  title,
  description,
  sections,
  ctaText = "Open Bybit",
  ctaHref = process.env.NEXT_PUBLIC_BYBIT_REFERRAL_LINK ||
    "https://www.bybit.com/invite?ref=XVJJ2QN",
}: SeoPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10"
        >
          Back to homepage
        </a>

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          {eyebrow}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          {description}
        </p>

        <div className="mt-8">
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
          >
            {ctaText}
          </a>
        </div>

        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-4 leading-8 text-zinc-300">{section.content}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white">Related pages</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {relatedPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                {page.title}
              </a>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-6 text-zinc-300">
          This page is currently intended for users in Israel and may contain
          referral links.
        </div>
      </div>
    </main>
  );
}
