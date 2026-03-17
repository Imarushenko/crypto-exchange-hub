import { headers } from "next/headers";
import { exchanges } from "@/data/exchanges";
import { ComparisonTable } from "@/components/comparison-table";
import { CtaSection } from "@/components/cta-section";
import { ExchangeCard } from "@/components/exchange-card";
import { Features } from "@/components/features";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { RegionNotice } from "@/components/region-notice";
import { GuidesSection } from "@/components/guides-section";
import {
  getExchangeStatusLabel,
  isExchangeAvailableInCountry,
  normalizeCountryCode,
} from "@/lib/geo";


const SUPPORTED_COUNTRY = "IL";

async function detectCountry() {
  const headersList = await headers();

  const country =
    headersList.get("x-vercel-ip-country") ||
    headersList.get("cf-ipcountry") ||
    "IL";

  return normalizeCountryCode(country);
}

export default async function HomePage() {
  const currentCountry = await detectCountry();
  const isSupportedRegion = currentCountry === SUPPORTED_COUNTRY;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {!isSupportedRegion && (
        <div className="border-b border-red-400/20 bg-red-400/10 px-6 py-3 text-sm text-red-300">
          <div className="mx-auto max-w-6xl">
            This site currently provides referral offers for users in Israel
            only. Your detected region: {currentCountry}
          </div>
        </div>
      )}

      <Hero currentCountry={currentCountry} />

      <section id="exchanges" className="px-6 pb-8 pt-2 md:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Exchange list
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Compare available trading platforms
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-300">
              Start with one platform today, then expand the comparison later as
              more referral links and geo rules are added.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {exchanges.map((exchange) => {
              const available =
                isSupportedRegion &&
                isExchangeAvailableInCountry(exchange, currentCountry);

              const status = getExchangeStatusLabel(exchange, currentCountry);

              return (
                <ExchangeCard
                  key={exchange.id}
                  exchange={exchange}
                  available={available}
                  status={status}
                  currentCountry={currentCountry}
                />
              );
            })}
          </div>
        </div>
      </section>

      <ComparisonTable />
      <GuidesSection />
      <Features />
      <RegionNotice currentCountry={currentCountry} />
      <FAQ />
      <CtaSection />
      <Footer />

    </main>
  );
}