type HeroProps = {
  currentCountry: string;
};

export function Hero({ currentCountry }: HeroProps) {
  const isIsrael = currentCountry === "IL";

  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-16 md:pb-20 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_right,rgba(6,182,212,0.10),transparent_25%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Israel-focused crypto referrals
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-[1.05]">
            Crypto exchange offers for users in Israel
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            This page is currently tailored for users in Israel. We only display
            referral options that are relevant to the supported region.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#exchanges"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
            >
              Explore exchanges
            </a>

            <a
              href="#region"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Region details
            </a>
          </div>

          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            {isIsrael ? "Supported region: Israel" : `Detected region: ${currentCountry}`}
          </div>
        </div>
      </div>
    </section>
  );
}