import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientLogoStripSection } from "@/components/home/ClientLogoStripSection";
import { TabsShowcaseSection } from "@/components/home/TabsShowcaseSection";
import { IconCardGridSection } from "@/components/home/IconCardGridSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { ExpandableServicesSection } from "@/components/home/ExpandableServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BadgeTickerSection } from "@/components/home/BadgeTickerSection";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { ClosingCTASection } from "@/components/home/ClosingCTASection";

export default function FullHomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-clip bg-black text-white">
      {/* 1. Centered Bold Hero with 2 CTAs */}
      <HeroSection />

      {/* 2. Partner Schools Showcase (Client Logo Strip) */}
      <ClientLogoStripSection />

      {/* 3. Numbered Interactive Tabs Showcase (01–04) */}
      <TabsShowcaseSection />

      {/* 4. Icon Card Grids (Core Institutional Pillars) */}
      <IconCardGridSection />

      {/* 5. Problem / Solution Cards */}
      <ProblemSolutionSection />

      {/* 6. Expandable Services with Filter Chips */}
      <ExpandableServicesSection />

      {/* 7. Animated Stat Counters */}
      <StatsSection />

      {/* 8. Infinite Badge Ticker */}
      <BadgeTickerSection />

      {/* 9. FAQ Accordion */}
      <HomeFAQSection />

      {/* 10. Big Closing CTA with Consultation Form */}
      <ClosingCTASection />
    </div>
  );
}
