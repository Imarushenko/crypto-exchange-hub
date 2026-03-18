import type { Metadata } from "next";
import { SeoPageLayout } from "@/components/seo-page-layout";

export const metadata: Metadata = {
  title: "Bybit Referral Israel | CryptoEntry",
  description:
    "Explore the current Bybit referral offer intended for users in Israel.",
};

export default function BybitReferralIsraelPage() {
  return (
    <SeoPageLayout
      eyebrow="Bybit referral"
      title="Bybit Referral for Israel"
      description="This page is focused on the currently active Bybit referral link available on this site for users in Israel."
      sections={[
        {
          title: "Why Bybit is featured first",
          content:
            "Bybit is currently the active referral setup on this site, which makes it the clearest place to start. The project is designed to test one live offer first before introducing more exchange options.",
        },
        {
          title: "A simpler user journey",
          content:
            "Instead of overwhelming users with too many options, this page provides a cleaner path to one active crypto exchange referral. That makes the experience easier and helps with performance tracking.",
        },
        {
          title: "What happens next",
          content:
            "As more exchange links become available and region support expands, this site can grow into a broader comparison platform. For now, the focus remains on one active Israel-relevant offer.",
        },
      ]}
      ctaText="Open Bybit Referral"
    />
  );
}