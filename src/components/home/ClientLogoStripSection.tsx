"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { SCHOOLS } from "@/data/content";

export function ClientLogoStripSection() {
  return (
    <section className="w-full bg-[#09090b] text-white py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle top ambient radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[250px] sm:h-[300px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-3 sm:mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
              <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8]">
                Proven Institutional Partnerships
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Schools Trusting Pii Digital <span className="font-serif italic font-normal text-slate-300">Media.</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#a1a1aa] max-w-2xl leading-relaxed">
              Prominent K-12 and international school networks across Hyderabad and Telangana who partner with us for admissions growth and digital presence.
            </p>
          </div>

          <Link
            href="/work"
            className="w-full sm:w-auto justify-center font-mono text-xs font-semibold text-[#94a3b8] hover:text-white flex items-center gap-1.5 shrink-0 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] transition-all group"
          >
            <span>View All School Portfolios</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-white" />
          </Link>
        </div>

        {/* 4 School Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SCHOOLS.map((school) => (
            <div
              key={school.slug}
              className="rounded-2xl bg-[#141416] border border-white/[0.08] hover:border-white/[0.22] hover:bg-[#1a1a1e] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Campus Image Container with Vignette Gradient */}
                <div className="relative h-44 sm:h-48 w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={school.image || "/cmr-school-kompally.jpg"}
                    alt={school.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Bottom fade into card background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Location Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white font-medium flex items-center gap-1.5 shadow-lg">
                      <MapPin className="w-2.5 h-2.5 text-[#3b82f6]" />
                      <span>{(school.location || "Hyderabad").split(",")[0]}</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-white mb-1 leading-snug group-hover:text-blue-200 transition-colors">
                    {school.name}
                  </h3>
                  {school.curriculum && (
                    <div className="font-mono text-[11px] text-[#94a3b8] mb-3">
                      {school.curriculum}
                    </div>
                  )}

                  <div className="mt-3 pt-3 border-t border-white/[0.06]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#71717a] block mb-2.5">
                      Scope of Management:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                      {school.scope.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 px-5 border-t border-white/[0.06] bg-[#0d0d0f] flex items-center justify-between">
                <a
                  href={school.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#71717a] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Visit School</span>
                  <ExternalLink className="w-3 h-3 text-[#71717a]" />
                </a>
                <Link
                  href="/work"
                  className="font-mono text-xs font-semibold text-white hover:text-[#94a3b8] flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
