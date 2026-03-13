import { exchanges } from "@/data/exchanges";

export function ComparisonTable() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Comparison
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Quick platform overview
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            A simple high-level comparison designed for users in Israel.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                  Exchange
                </th>
                <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                  Best for
                </th>
                <th className="px-5 py-4 text-left text-sm font-medium text-zinc-300">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {exchanges.map((exchange) => (
                <tr key={exchange.id} className="border-t border-white/10">
                  <td className="px-5 py-4 text-white">{exchange.name}</td>
                  <td className="px-5 py-4 text-zinc-300">{exchange.bestFor}</td>
                  <td className="px-5 py-4 text-zinc-300">{exchange.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}