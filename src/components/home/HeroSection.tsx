"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-16 sm:pt-24 lg:pt-36 pb-16 sm:pb-24 border-b border-white/[0.08] blueprint-canvas">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 blueprint-lines pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[300px] sm:h-[450px] bg-gradient-to-b from-blue-500/[0.07] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        
        {/* Eyebrow Label in JetBrains Mono */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 sm:mb-8 hover:border-white/[0.2] transition-all shadow-[0_0_20px_rgba(59,130,246,0.12)] max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse shrink-0" />
          <span className="font-mono text-[9.5px] sm:text-xs uppercase tracking-wider text-[#94a3b8] truncate">
            Digital Marketing & Digital Presence for Schools
          </span>
        </div>

        {/* Headline with Plus Jakarta Sans & Newsreader Italic Accent */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.08] max-w-4xl text-sheen">
          Great Schools Deserve to Be <span className="font-serif italic font-normal text-slate-300">Seen.</span>
        </h1>

        {/* Subtitle in Inter */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-[#a1a1aa] max-w-2xl font-normal leading-relaxed">
          We manage the complete digital marketing and online presence for schools: high-converting admission websites, weekly reels, campus event coverage, Google Ads, and Meta campaigns.
        </p>

        {/* 2 CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA: White BG + Black Text */}
          <Link
            href="/contact"
            className="w-full sm:w-auto h-11 sm:h-12 px-7 sm:px-8 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] active:scale-[0.98]"
          >
            <span>Book Free Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Secondary CTA: Transparent + Soft Border */}
          <Link
            href="/work"
            className="w-full sm:w-auto h-11 sm:h-12 px-7 sm:px-8 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <span>Explore Our Schools</span>
            <ChevronRight className="w-4 h-4 text-[#71717a]" />
          </Link>
        </div>

        {/* Micro Trust Indicators */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/[0.08] w-full max-w-3xl flex flex-wrap items-center justify-center gap-y-2.5 gap-x-5 sm:gap-x-10 text-[11px] sm:text-xs text-[#a1a1aa]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white shrink-0" />
            <span>Dedicated School Focus</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white shrink-0" />
            <span>Leadership-Verified Content</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white shrink-0" />
            <span>Isolated Assets & Reports</span>
          </div>
        </div>

      </div>
    </section>
  );
}
