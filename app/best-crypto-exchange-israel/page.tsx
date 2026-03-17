import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo-page-layout";

export const metadata: Metadata = {
  title: "Best Crypto Exchange in Israel | Crypto Exchange Hub",
  description:
    "Explore crypto exchange options for users in Israel and compare the current referral offer available on this site.",
};

export default function BestCryptoExchangeIsraelPage() {
  return (
    <SeoPageLayout
      eyebrow="Israel crypto guide"
      title="Best Crypto Exchange in Israel"
      description="This page helps users in Israel explore crypto exchange options with a simple, focused starting point. Right now, the active referral setup on this site highlights Bybit."
      sections={[
        {
          title: "What makes a crypto exchange useful in Israel?",
          content:
            "Users in Israel usually care about platform access, smooth onboarding, trading experience, and whether the offer is actually relevant to their region. A simple landing page with region-aware logic helps reduce confusion.",
        },
        {
          title: "Why this site currently focuses on one active platform",
          content:
            "At this stage, only one referral setup is active and verified on the site. That keeps the user journey simpler and makes it easier to test performance, clicks, and conversion before expanding to more platforms.",
        },
        {
          title: "How this project will grow",
          content:
            "The platform is already structured for future expansion, including additional exchanges, more comparison content, and more detailed analytics. The current setup is intentionally lean and focused.",
        },
      ]}
      ctaText="Visit Bybit"
    />
  );
}