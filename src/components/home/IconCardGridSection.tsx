"use client";

import React from "react";
import { Globe, Target, ShieldCheck, Layers, ArrowUpRight } from "lucide-react";

const PILLARS = [
  {
    step: "01",
    icon: Globe,
    title: "Websites & Digital Presence",
    desc: "Modern school websites, admission landing pages, and Google Search dominance engineered to welcome parents."
  },
  {
    step: "02",
    icon: Target,
    title: "Built for School Calendars",
    desc: "Planned around academic milestones, admission cycles, sports meets, and annual day celebrations."
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Verified Before Publishing",
    desc: "Student names, dates, fee circulars, and event details confirmed directly with school management."
  },
  {
    step: "04",
    icon: Layers,
    title: "Each School Kept Separate",
    desc: "Dedicated content, unique institutional branding, and private campaign analytics for every partner institution."
  }
];

export function IconCardGridSection() {
  return (
    <section className="w-full bg-[#000000] py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3 sm:mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8]">
                Institutional Architecture
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built Specifically for <span className="font-serif italic font-normal text-slate-300">Schools.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-base text-[#a1a1aa] max-w-md leading-relaxed">
            Education has unique parent expectations, academic timelines, and compliance standards. We never treat a school like a generic business.
          </p>
        </div>

        {/* 4 Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-5 sm:p-7 rounded-2xl bg-[#09090b] border border-white/[0.08] hover:border-white/[0.22] hover:bg-[#141416] hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#141416] group-hover:bg-[#27272a] border border-white/[0.08] flex items-center justify-center text-white transition-colors shadow-sm">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="font-mono text-xs text-[#71717a] group-hover:text-[#94a3b8] transition-colors">
                      {pillar.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-white/[0.06] flex items-center justify-between opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#94a3b8]">Institutional Standard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
