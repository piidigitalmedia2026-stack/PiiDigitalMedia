"use client";

import React, { useState, useEffect, useRef } from "react";

const STATS = [
  {
    value: 4,
    suffix: "+",
    label: "Partner Institutions",
    desc: "Premier school networks managed across Hyderabad and Telangana.",
    mono: "01 // CAMPUSES"
  },
  {
    value: 100,
    suffix: "%",
    label: "Pre-Verified Content",
    desc: "Every date, student photo, and circular confirmed with leadership.",
    mono: "02 // GOVERNANCE"
  },
  {
    value: 8,
    suffix: "-Month",
    label: "Structured Campaign Cycle",
    desc: "Predictable admissions marketing from October awareness through enrollment.",
    mono: "03 // ENGINE"
  },
  {
    value: 24,
    suffix: "-48h",
    label: "Creative Turnaround",
    desc: "Rapid delivery for campus achievements, sports events, and circulars.",
    mono: "04 // AGILITY"
  }
];

export function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#000000] py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3 sm:mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8]">
                Proven Benchmarks
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Institutional Discipline in <span className="font-serif italic font-normal text-slate-300">Numbers.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-sm leading-relaxed">
            Standard operating metrics designed for school leadership transparency and accountability.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-2xl bg-[#09090b] border border-white/[0.08] hover:border-white/[0.22] hover:bg-[#141416] hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#71717a] block mb-3 sm:mb-4 uppercase tracking-wider">
                  {stat.mono}
                </span>

                <div className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 flex items-baseline text-sheen">
                  <span>{stat.value}</span>
                  <span className="text-[#94a3b8] text-xl sm:text-3xl font-bold ml-0.5">{stat.suffix}</span>
                </div>

                <div className="text-base font-bold text-white mb-1.5">
                  {stat.label}
                </div>

                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  {stat.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#71717a]">Measured Year-Round</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
