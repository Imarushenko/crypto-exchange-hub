"use client";

import type { Exchange } from "@/data/exchanges";

type ExchangeCardProps = {
  exchange: Exchange;
  status: string;
  available: boolean;
  currentCountry: string;
};

export function ExchangeCard({
  exchange,
  status,
  available,
  currentCountry,
}: ExchangeCardProps) {
  function handleClick() {
    window.open(exchange.href, "_blank", "noopener,noreferrer");

    fetch("/api/click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        exchange: exchange.id,
        country: currentCountry,
        timestamp: Date.now(),
      }),
    }).catch((error) => {
      console.error("failed to track click", error);
    });
  }

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-sm font-semibold tracking-wide text-white">
            {exchange.logoText}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">{exchange.name}</h3>
            <p className="mt-1 text-sm text-zinc-400">{exchange.bestFor}</p>
          </div>
        </div>

        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          {exchange.badge}
        </span>
      </div>

      <p className="min-h-[84px] text-zinc-300">{exchange.description}</p>

      <div className="mt-4">
        {exchange.id === "bybit" && available && (
          <p className="text-xs font-medium text-emerald-300">
            Israel referral link active
          </p>
        )}
      </div>

      <div className="mt-6 grid gap-3">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Best for
          </p>
          <p className="mt-2 text-sm text-zinc-200">{exchange.bestFor}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Status
          </p>
          <p className="mt-2 text-sm text-zinc-200">{status}</p>
        </div>
      </div>

      <div className="mt-8">
        {available ? (
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02]"
          >
            Visit {exchange.name}
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-zinc-500"
          >
            Not available in your region
          </button>
        )}
      </div>
    </article>
  );
}