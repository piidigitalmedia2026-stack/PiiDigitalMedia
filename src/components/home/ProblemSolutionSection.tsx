"use client";

import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

const COMPARISONS = [
  {
    num: "01",
    area: "Social Media & Visual Identity",
    problem: {
      title: "Silent Channels & Stale Circulars",
      desc: "School social media feeds go dark for weeks, or only post low-resolution administrative circulars that fail to showcase actual campus life to prospective parents."
    },
    solution: {
      title: "Weekly Campus Reels & Active Storytelling",
      desc: "We produce vibrant Instagram reels, event coverage, festival creatives, and student achievement posts—keeping your school energetic, active, and on-brand."
    }
  },
  {
    num: "02",
    area: "Admission Marketing",
    problem: {
      title: "Last-Minute Panic Campaigns in February",
      desc: "Rushed hoardings and untargeted ads run at high cost with little planning, delivering junk leads that admissions counselors struggle to convert."
    },
    solution: {
      title: "8-Month Coordinated Admission Engine",
      desc: "A structured 4-phase campaign across Meta Ads and Google Ads starting in October: building parent authority, open days, and high-intent walk-ins."
    }
  },
  {
    num: "03",
    area: "Web & Digital Presence",
    problem: {
      title: "Slow Websites & Buried 10MB PDFs",
      desc: "Admission criteria and fee structures locked inside non-responsive PDFs that require manual zoom on phones, driving parents away to competitors."
    },
    solution: {
      title: "Modern School Portals & 1-Click Inquiries",
      desc: "Mobile-optimized school websites, transparent grade overviews, Google Maps local search optimization, and instant WhatsApp inquiry routing."
    }
  }
];

export function ProblemSolutionSection() {
  return (
    <section className="w-full bg-[#000000] py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3 sm:mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8]">
              Friction vs Resolution
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Digital Friction Schools Face — <span className="font-serif italic font-normal text-slate-300">And How We Fix It.</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#a1a1aa] leading-relaxed">
            Parents evaluate schools on their phones long before visiting campus. Here is how we bridge the gap between your real campus standard and your online presence.
          </p>
        </div>

        {/* Comparison Cards Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {COMPARISONS.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-[#09090b] border border-white/[0.08] hover:border-white/[0.22] hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-300 p-4 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                  <span className="font-mono text-xs font-bold text-[#71717a]">CHALLENGE {item.num}</span>
                  <span className="font-mono text-[11px] text-[#94a3b8]">{item.area}</span>
                </div>

                {/* The Problem */}
                <div className="mb-5 p-4 rounded-xl bg-[#141416]/50 border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2 text-[#a1a1aa]">
                    <XCircle className="w-4 h-4 text-[#71717a] shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-[#71717a]">Without Pii Media</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#a1a1aa] mb-1.5">
                    {item.problem.title}
                  </h4>
                  <p className="text-xs text-[#71717a] leading-relaxed">
                    {item.problem.desc}
                  </p>
                </div>

                {/* The Solution */}
                <div className="p-4 rounded-xl bg-[#141416] border border-white/[0.08] hover:border-white/[0.18] transition-colors shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-white">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-white">With Pii Media</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {item.solution.title}
                  </h4>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {item.solution.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#71717a]">Dedicated Execution</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
