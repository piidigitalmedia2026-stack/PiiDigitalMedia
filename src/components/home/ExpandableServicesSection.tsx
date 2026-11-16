"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  ArrowRight, 
  Share2, 
  Layers, 
  Video, 
  Users, 
  Target, 
  Megaphone, 
  Globe, 
  Search, 
  TrendingUp, 
  CheckCircle2,
  type LucideIcon 
} from "lucide-react";
import { SERVICES } from "@/data/content";

const ICONS: Record<string, LucideIcon> = {
  Share2,
  Layers,
  Video,
  Users,
  Target,
  Megaphone,
  Globe,
  Search,
  TrendingUp
};

const CATEGORIES = [
  "All",
  "Digital Marketing",
  "Growth Marketing",
  "Creative & Media",
  "Web & Tech",
  "Strategy & Branding"
];

export function ExpandableServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(SERVICES[0]?.slug || null);

  const filteredServices = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const toggleExpand = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <section id="services" className="w-full bg-[#000000] py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start max-w-3xl mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3 sm:mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8]">
              09 Modular Capabilities
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Services Built Exclusively for <span className="font-serif italic font-normal text-slate-300">School Growth.</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#a1a1aa] leading-relaxed">
            Every module is tailored to educational timelines, CBSE/ICSE admissions, and parent expectations. Select a category below to explore deliverables.
          </p>
        </div>

        {/* Filter Chips (Horizontally scrollable on mobile, wrapping on desktop) */}
        <div className="flex overflow-x-auto sm:flex-wrap no-scrollbar pb-2 sm:pb-0 gap-2 sm:gap-2.5 mb-6 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-3.5 sm:px-4 py-2 rounded-xl transition-all cursor-pointer shrink-0 min-h-[38px] ${
                  isSelected
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/[0.2]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid with Expandable Accordion Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredServices.map((service) => {
            const Icon = ICONS[service.icon] || Globe;
            const isExpanded = expandedSlug === service.slug;

            return (
              <div
                key={service.slug}
                className={`rounded-2xl bg-[#09090b] border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? "border-white/[0.25] bg-[#141416] shadow-2xl md:col-span-2 lg:col-span-3"
                    : "border-white/[0.08] hover:border-white/[0.2] hover:bg-[#141416]/50"
                }`}
              >
                <div className="p-5 sm:p-7">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#141416] border border-white/[0.08] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded-[4px] bg-[#27272a] text-[#94a3b8] uppercase">
                          {service.category}
                        </span>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-white mt-0.5 sm:mt-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleExpand(service.slug)}
                      className="w-10 h-10 rounded-xl bg-[#141416] hover:bg-[#27272a] border border-white/[0.08] text-white shrink-0 transition-colors cursor-pointer flex items-center justify-center"
                      aria-label="Expand service details"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Expanded Content Panel */}
                  {isExpanded && (
                    <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                      {/* Deliverables */}
                      <div className="space-y-3">
                        <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                          Key Deliverables:
                        </div>
                        <ul className="space-y-2 text-xs text-[#a1a1aa]">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process Workflow */}
                      <div className="space-y-3">
                        <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                          Execution Workflow:
                        </div>
                        <div className="space-y-2.5">
                          {service.process.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs">
                              <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] bg-[#27272a] text-[#94a3b8] shrink-0">
                                {idx + 1}
                              </span>
                              <div>
                                <span className="font-semibold text-white">{step.step}: </span>
                                <span className="text-[#a1a1aa]">{step.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Value & Direct Scope Link */}
                      <div className="space-y-4 flex flex-col justify-between">
                        <div>
                          <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-2">
                            Institutional Value:
                          </div>
                          <p className="text-xs text-[#a1a1aa] leading-relaxed p-4 rounded-xl bg-[#09090b] border border-white/[0.08]">
                            {service.institutionalValue}
                          </p>
                        </div>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-sm"
                        >
                          <span>Explore Full Service Scope</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer toggle if not expanded */}
                {!isExpanded && (
                  <div className="px-6 py-3.5 border-t border-white/[0.06] bg-[#09090b]/80 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(service.slug)}
                      className="font-mono text-xs text-[#94a3b8] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>View deliverables</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-mono text-xs text-white hover:text-[#94a3b8] flex items-center gap-1 transition-colors"
                    >
                      <span>Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
