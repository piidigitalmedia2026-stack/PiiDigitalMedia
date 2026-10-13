"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  Share2,
  Layers,
  Video,
  Target,
  Search,
  Megaphone,
  Globe,
  TrendingUp,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "@/data/content";
import { ServiceDetail } from "@/types";

const ICONS: Record<string, LucideIcon> = {
  Share2,
  Layers,
  Video,
  Target,
  Search,
  Megaphone,
  Globe,
  TrendingUp,
  Compass,
};

const MAJOR_SERVICE_SLUGS = [
  "website-content-updates",
  "digital-marketing",
  "admission-campaigns",
];

const MAJOR_SERVICES = MAJOR_SERVICE_SLUGS
  .map((slug) => SERVICES.find((s) => s.slug === slug))
  .filter((s): s is ServiceDetail => Boolean(s));

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
  total: number;
}

function ServiceStackCard({ service, index, total }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;
  const reduceMotion = useReducedMotion();

  // Track this card's scroll progress through the deck
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Scale down and push back into depth as subsequent cards stack over it
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion || isLast ? [1, 1] : [1, 0.94]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion || isLast ? [1, 1] : [1, 0.6]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion || isLast ? [0, 0] : [0, -8]
  );

  const Icon = ICONS[service.icon] ?? Globe;
  const numStr = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <div
      ref={cardRef}
      className="sticky mb-10 sm:mb-20 last:mb-[30vh] sm:last:mb-[40vh] [--card-deck-top:84px] lg:[--card-deck-top:116px]"
      style={{
        // Staggered top offset so earlier card tabs peek cleanly below the header
        // Desktop header is 88px tall, so 116px+ provides clean margin and full visibility
        top: `calc(var(--card-deck-top, 116px) + ${index * 10}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
          transformOrigin: "top center",
        }}
        className="w-full bg-[#121820] rounded-3xl p-5 sm:p-8 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-300"
      >
        {/* Top bar: Step Counter & Category */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.08] mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#82A386] tracking-wider">
              {numStr} / {totalStr}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4ADE80] bg-[#132E20] border border-[#224A32] px-2.5 py-0.5 rounded-full">
              {service.category}
            </span>
          </div>

          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#17202B] text-[#82A386] flex items-center justify-center shrink-0 border border-white/[0.08] shadow-2xs">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {/* Title & Core Headline */}
        <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
            {service.shortTitle}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-[#82A386] leading-snug">
            {service.headline}
          </p>
        </div>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-5">
          {service.summary}
        </p>

        {/* 3 Core Deliverables Checklist */}
        <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6 bg-[#0E141B] p-3 sm:p-4 rounded-2xl border border-white/[0.08]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Core Institutional Deliverables:
          </div>
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* Action Button & WhatsApp link */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-white/[0.08]">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-200 text-[#0B0F14] font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow group"
          >
            <span>Explore Service Blueprint</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={`${WHATSAPP_URL}?text=Hi%20PII%20Digital%20Media%2C%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.shortTitle)}%20for%20our%20school.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#4ADE80] hover:text-white py-1 px-2.5 rounded-full hover:bg-[#132E20] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#82A386]" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export function ServicesStackSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left Sticky Column on Desktop */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#82A386] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
              <span>Services Directory</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Services Built for{" "}
              <span className="font-serif italic font-normal text-[#82A386]">
                Institutions
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every digital marketing and web presence touchpoint—from school websites and local search authority to daily reels, creatives, and admission campaigns—managed with academic rigor.
            </p>
          </div>
        </div>

        {/* Right Column: Direct Stacking Cards Stream */}
        <div className="lg:col-span-7 relative pb-10 sm:pb-20">
          {MAJOR_SERVICES.map((service, index) => (
            <ServiceStackCard
              key={service.slug}
              service={service}
              index={index}
              total={MAJOR_SERVICES.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
