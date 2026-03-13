export function CtaSection() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-emerald-400/10 via-white/5 to-cyan-400/10 p-8 backdrop-blur-xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Start here
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Explore crypto exchange offers designed for users in Israel
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          Begin with a simple, region-aware comparison and access the currently
          active referral option directly from the homepage.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#exchanges"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
          >
            View exchanges
          </a>

          <a
            href="/admin"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Open admin dashboard
          </a>
        </div>
      </div>
    </section>
  );
}