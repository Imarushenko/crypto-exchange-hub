export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Crypto Exchange Hub
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#exchanges" className="transition hover:text-white">
            Exchanges
          </a>
          <a href="#region" className="transition hover:text-white">
            Region
          </a>
          <a href="#disclosure" className="transition hover:text-white">
            Disclosure
          </a>
        </nav>
      </div>
    </header>
  );
}