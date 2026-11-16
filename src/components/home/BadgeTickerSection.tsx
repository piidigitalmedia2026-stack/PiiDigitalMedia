"use client";

import React from "react";

const BADGES_ROW1 = [
  "ADMISSIONS MARKETING",
  "INSTAGRAM REELS",
  "CAMPUS EVENT COVERAGE",
  "GOOGLE ADS COORDINATION",
  "META AUDIENCE TARGETING",
  "HIGH-SPEED SCHOOL WEBSITES",
  "LOCAL SEO & GOOGLE MAPS",
  "1-CLICK WHATSAPP INQUIRY"
];

const BADGES_ROW2 = [
  "CBSE & ICSE CAMPAIGNS",
  "ANNUAL SPORTS DAY COVERAGE",
  "STUDENT ACHIEVEMENT POSTERS",
  "MONTHLY CONTENT CALENDARS",
  "PROSPECTUS & BROCHURES",
  "LEADERSHIP-VERIFIED WORKFLOWS",
  "CONFIDENTIAL INSTITUTION DATA",
  "PRE-PRIMARY TO HIGHER SEC"
];

export function BadgeTickerSection() {
  return (
    <section className="w-full bg-[#000000] py-10 sm:py-14 border-b border-[#ffffff1f] overflow-hidden relative">
      {/* Side gradient fade for seamless look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-3">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-3">
            {[...BADGES_ROW1, ...BADGES_ROW1].map((badge, idx) => (
              <div
                key={idx}
                className="font-mono text-xs font-semibold px-4 py-2 rounded-full bg-[#09090b] border border-[#ffffff1f] text-[#ffffff] whitespace-nowrap flex items-center gap-2 hover:border-[#ffffff47] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (offset or reversed direction) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-3" style={{ animationDirection: "reverse", animationDuration: "32s" }}>
            {[...BADGES_ROW2, ...BADGES_ROW2].map((badge, idx) => (
              <div
                key={idx}
                className="font-mono text-xs font-semibold px-4 py-2 rounded-full bg-[#18181b] border border-[#ffffff1f] text-[#a1a1aa] whitespace-nowrap flex items-center gap-2 hover:text-white hover:border-[#ffffff47] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
