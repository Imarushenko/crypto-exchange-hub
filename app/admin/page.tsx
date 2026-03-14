"use client";

import { useEffect, useState } from "react";

type StatsResponse = {
  totalClicks: number;
  clicksByExchange: {
    _id: string;
    clicks: number;
  }[];
  clicksByCountry: {
    _id: string;
    clicks: number;
  }[];
  recentClicks: {
    _id: string;
    exchange: string;
    country: string;
    timestamp: number;
    createdAt: string;
  }[];
  error?: string;
};

function formatDate(value: string) {
  return new Date(value).toLocaleString();
}

export default function AdminPage() {
  const [stats, setStats] = useState<StatsResponse>({
    totalClicks: 0,
    clicksByExchange: [],
    clicksByCountry: [],
    recentClicks: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await fetch("/api/stats", {
          cache: "no-store",
        });

        const data = await response.json();

        setStats({
          totalClicks: typeof data.totalClicks === "number" ? data.totalClicks : 0,
          clicksByExchange: Array.isArray(data.clicksByExchange)
            ? data.clicksByExchange
            : [],
          clicksByCountry: Array.isArray(data.clicksByCountry)
            ? data.clicksByCountry
            : [],
          recentClicks: Array.isArray(data.recentClicks) ? data.recentClicks : [],
          error: data.error,
        });
      } catch (error) {
        console.error("failed to load stats", error);
        setStats({
          totalClicks: 0,
          clicksByExchange: [],
          clicksByCountry: [],
          recentClicks: [],
          error: "failed to load stats",
        });
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold">Loading dashboard...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Admin
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Referral Click Dashboard
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Track referral activity, country distribution, and recent click
            events from one place.
          </p>

          <a
            href="/"
            className="mt-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10"
          >
            Back to homepage
          </a>
        </div>

        {stats.error && (
          <div className="mb-8 rounded-3xl border border-red-400/20 bg-red-400/10 p-5 text-red-300">
            Warning: {stats.error}
          </div>
        )}

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm text-zinc-400">Total clicks</p>
            <p className="mt-3 text-4xl font-semibold">{stats.totalClicks}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm text-zinc-400">Tracked exchanges</p>
            <p className="mt-3 text-4xl font-semibold">
              {stats.clicksByExchange.length}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm text-zinc-400">Tracked countries</p>
            <p className="mt-3 text-4xl font-semibold">
              {stats.clicksByCountry.length}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold">Clicks by exchange</h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                      Exchange
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                      Clicks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stats.clicksByExchange.map((row) => (
                    <tr key={row._id} className="border-t border-white/10">
                      <td className="px-5 py-4">{row._id}</td>
                      <td className="px-5 py-4">{row.clicks}</td>
                    </tr>
                  ))}

                  {stats.clicksByExchange.length === 0 && (
                    <tr>
                      <td
                        colSpan={2}
                        className="px-5 py-6 text-center text-zinc-500"
                      >
                        No exchange data yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold">Clicks by country</h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                      Country
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                      Clicks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stats.clicksByCountry.map((row) => (
                    <tr key={row._id} className="border-t border-white/10">
                      <td className="px-5 py-4">{row._id || "UNKNOWN"}</td>
                      <td className="px-5 py-4">{row.clicks}</td>
                    </tr>
                  ))}

                  {stats.clicksByCountry.length === 0 && (
                    <tr>
                      <td
                        colSpan={2}
                        className="px-5 py-6 text-center text-zinc-500"
                      >
                        No country data yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">Recent clicks</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                    Exchange
                  </th>
                  <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                    Country
                  </th>
                  <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.recentClicks.map((row) => (
                  <tr key={row._id} className="border-t border-white/10">
                    <td className="px-5 py-4">{row.exchange}</td>
                    <td className="px-5 py-4">{row.country || "UNKNOWN"}</td>
                    <td className="px-5 py-4">{formatDate(row.createdAt)}</td>
                  </tr>
                ))}

                {stats.recentClicks.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-5 py-6 text-center text-zinc-500"
                    >
                      No recent clicks yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}