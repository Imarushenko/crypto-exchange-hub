export type Exchange = {
  id: string;
  name: string;
  description: string;
  href: string;
  badge: string;
  bestFor: string;
  logoText: string;
  regionMode: "global" | "allowlist" | "blocklist";
  allowedCountries?: string[];
  blockedCountries?: string[];
  isActive: boolean;
};

export const exchanges: Exchange[] = [
  {
    id: "bybit",
    name: "Bybit",
    description:
      "Fast and modern crypto trading platform with a smooth onboarding flow and a polished trading experience.",
    href:
      process.env.NEXT_PUBLIC_BYBIT_REFERRAL_LINK || "https://www.bybit.com/",
    badge: "Live",
    bestFor: "Active traders",
    logoText: "BY",
    regionMode: "allowlist",
    allowedCountries: ["IL"],
    isActive: true,
  },
  {
    id: "binance",
    name: "Binance",
    description:
      "Large global exchange with broad market coverage, strong brand recognition, and future expansion potential for this site.",
    href:
      process.env.NEXT_PUBLIC_BINANCE_REFERRAL_LINK ||
      "https://www.binance.com/",
    badge: "Soon",
    bestFor: "Global users",
    logoText: "BN",
    regionMode: "allowlist",
    allowedCountries: ["IL"],
    isActive: false,
  },
  {
    id: "gate",
    name: "Gate.io",
    description:
      "Crypto exchange known for broad altcoin access and a large asset catalog for users who want more market variety.",
    href: process.env.NEXT_PUBLIC_GATE_REFERRAL_LINK || "https://www.gate.io/",
    badge: "Soon",
    bestFor: "Altcoin access",
    logoText: "GT",
    regionMode: "allowlist",
    allowedCountries: ["IL"],
    isActive: false,
  },
];