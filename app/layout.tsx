import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Crypto Exchange Offers for Israel | CryptoEntry",
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
    title: "Crypto Exchange Offers for Israel | CryptoEntry",
    description:
      "Explore crypto exchange referral offers currently intended for users in Israel.",
    url: siteConfig.url,
    siteName: "CryptoStartIL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Exchange Offers for Israel | CryptoEntry",
    description:
      "Explore crypto exchange referral offers currently intended for users in Israel.",
  },

  alternates: {
    canonical: "https://www.cryptoentry.io",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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