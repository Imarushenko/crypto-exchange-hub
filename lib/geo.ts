import type { Exchange } from "@/data/exchanges";

export function normalizeCountryCode(country?: string | null): string {
  if (!country) return "UNKNOWN";
  return country.trim().toUpperCase();
}

export function isExchangeAvailableInCountry(
  exchange: Exchange,
  country?: string | null
): boolean {
  const normalizedCountry = normalizeCountryCode(country);

  if (!exchange.isActive) {
    return false;
  }

  if (exchange.regionMode === "global") {
    return true;
  }

  if (exchange.regionMode === "allowlist") {
    return !!exchange.allowedCountries?.includes(normalizedCountry);
  }

  if (exchange.regionMode === "blocklist") {
    return !exchange.blockedCountries?.includes(normalizedCountry);
  }

  return false;
}

export function getExchangeStatusLabel(
  exchange: Exchange,
  country?: string | null
): string {
  if (!exchange.isActive) {
    return "Coming Soon";
  }

  return isExchangeAvailableInCountry(exchange, country)
    ? "Available in your region"
    : "Not available in your region";
}