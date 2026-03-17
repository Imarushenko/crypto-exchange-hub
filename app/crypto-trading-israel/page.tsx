import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo-page-layout";

export const metadata: Metadata = {
  title: "Crypto Trading Israel | Crypto Exchange Hub",
  description:
    "A simple starting point for users in Israel looking into crypto trading platforms and referral offers.",
};

export default function CryptoTradingIsraelPage() {
  return (
    <SeoPageLayout
      eyebrow="Crypto trading"
      title="Crypto Trading in Israel"
      description="This page is a simple entry point for users in Israel who want to explore crypto trading platforms and current referral offers."
      sections={[
        {
          title: "Why a region-focused approach matters",
          content:
            "Crypto platform availability can vary by jurisdiction, so a region-focused site helps users avoid irrelevant offers and unsupported flows.",
        },
        {
          title: "Why this project uses referral tracking",
          content:
            "The site is built not only as a landing page, but also as a measurable system. Click tracking and analytics make it possible to understand which offers are performing best.",
        },
        {
          title: "What users can expect later",
          content:
            "Over time, this project can grow into a broader content and comparison hub, with more exchange pages, more search intent coverage, and better user targeting.",
        },
      ]}
      ctaText="Start with Bybit"
    />
  );
}