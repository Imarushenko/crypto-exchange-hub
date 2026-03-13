type RegionNoticeProps = {
  currentCountry: string;
};

export function RegionNotice({ currentCountry }: RegionNoticeProps) {
  const isIsrael = currentCountry === "IL";

  return (
    <section id="region" className="px-6 py-6 md:py-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-6 backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Region notice
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-white">
          This site currently supports Israel only
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-300">
          Referral offers and exchange availability on this site are currently
          intended for users in Israel. Additional regions may be added later.
        </p>

        <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          {isIsrael ? "Detected region: Israel" : `Detected region: ${currentCountry}`}
        </div>
      </div>
    </section>
  );
}