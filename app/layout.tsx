import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Crypto Exchange Offers for Israel | Crypto Exchange Hub",
  description:
    "Explore crypto exchange referral offers currently intended for users in Israel.",
  keywords: [
    "best crypto exchange",
    "crypto exchange referral",
    "bybit referral",
    "crypto trading platforms",
    "crypto exchanges by country",
  ],
  openGraph: {
    title: "Crypto Exchange Hub",
    description:
      "Find crypto exchanges that actually work in your region.",
    url: siteConfig.url,
    siteName: "Crypto Exchange Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Exchange Hub",
    description:
      "Find crypto exchanges that actually work in your region.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}