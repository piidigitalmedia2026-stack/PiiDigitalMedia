"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, CheckCircle2, Search, Video, Target, Users, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const TAB_DATA = [
  {
    step: "01",
    phase: "DISCOVER",
    headline: "Be Visible Where Parents Start Looking",
    tagline: "Be found the moment families begin exploring schools in your city.",
    description: "Parents begin with a search on Google Maps or Instagram recommendations. We coordinate high-intent search ads, local SEO, and campus reels so your institution is visible immediately.",
    channels: ["Google Search Ads", "Local SEO & Maps", "Instagram Reels", "Curriculum Highlights"],
    metric: "Verified parent reach & search impressions",
    icon: Search,
    highlight: "Top 3 local search rank & active weekly impressions"
  },
  {
    step: "02",
    phase: "TRUST",
    headline: "Show Daily Campus Life As It Truly Is",
    tagline: "Build genuine confidence with real students, teachers, and facilities.",
    description: "When parents evaluate your school, stock photos turn them away. We produce crisp campus event reels, student achievement carousels, and sports day highlights that show the school's vibrant culture.",
    channels: ["Campus Event Coverage", "Teacher & Student Spotlights", "Facilities Walkthroughs", "Parent Testimonials"],
    metric: "High parent engagement & social trust",
    icon: Video,
    highlight: "Authentic short-form video & zero generic stock photos"
  },
  {
    step: "03",
    phase: "ENQUIRE",
    headline: "Turn Online Interest into Campus Walk-Ins",
    tagline: "Clear admission messaging with zero friction for busy parents.",
    description: "An interested parent should be able to enquire in 1-click. We build fast, mobile-friendly admission landing pages and run targeted Meta & Google Ads campaigns pointing directly to admissions.",
    channels: ["Admissions Open Creatives", "Meta Ads Retargeting", "Fast Mobile Inquiry Forms", "WhatsApp 1-Click Connect"],
    metric: "Qualified admission inquiries & prospectus downloads",
    icon: Target,
    highlight: "Verified contact details & instant admissions desk alerts"
  },
  {
    step: "04",
    phase: "ENROL",
    headline: "Support Campus Visits & Community Pride",
    tagline: "Turning campus tour walk-ins into confident enrollments.",
    description: "Marketing supports the physical campus visit with clear fee schedules, admission guidelines, and continuous updates on academic milestones that reassure parents throughout the enrollment process.",
    channels: ["Open Day Promotions", "Parent Orientation Guides", "Circular & Portal Updates", "Annual Achievements"],
    metric: "Confirmed campus visits & student enrollments",
    icon: Users,
    highlight: "End-to-end alignment with school admission staff"
  }
];

export function TabsShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [segmentProgress, setSegmentProgress] = useState(0);
  const isClickingRef = useRef(false);

  // Scroll tracking across the pinned track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Advance tabs one by one while scrolling down
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isClickingRef.current) return;

    const numTabs = TAB_DATA.length;
    // Clamp progress between 0 and 0.999
    const clampedProgress = Math.min(0.999, Math.max(0, latest));
    const targetTab = Math.floor(clampedProgress * numTabs);

    // Progress within current tab segment (0 to 1)
    const tabStart = targetTab / numTabs;
    const currentTabProgress = (clampedProgress - tabStart) * numTabs;

    setActiveTab(targetTab);
    setSegmentProgress(currentTabProgress);
  });

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setSegmentProgress(0.5);
    isClickingRef.current = true;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;

      // Scroll to the midpoint of this step's segment
      const targetRatio = (idx + 0.5) / TAB_DATA.length;
      const targetScroll = containerTop + targetRatio * totalScrollable;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 700);
  };

  const current = TAB_DATA[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#000000] border-b border-white/[0.08] h-[250vh] sm:h-[300vh] lg:h-[350vh]"
    >
      {/* Sticky Static Frame that stays pinned while scrolling */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-10 px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto w-full">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 max-w-full mb-3 sm:mb-5 lg:mb-8">
            <div className="flex flex-col items-start max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-2 sm:mb-3 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
                <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8]">
                  01–04 Growth Framework
                </span>
                <span className="sm:hidden font-mono text-[9px] text-[#3b82f6] font-bold ml-1">
                  • {current.step}/04
                </span>
              </div>
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                A Structured Journey from <span className="font-serif italic font-normal text-slate-300">Discovery to Enrolment.</span>
              </h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-2 sm:line-clamp-none">
                How modern parents research, trust, and ultimately choose your school over other options in your area.
              </p>
            </div>

            {/* Scroll Indicator Badge (tablet / desktop) */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141416] border border-white/[0.08] text-xs font-mono text-[#94a3b8] self-start sm:self-end shrink-0">
              <span className="text-[11px] text-[#71717a]">Scroll to advance</span>
              <span className="w-1 h-1 rounded-full bg-[#3b82f6]" />
              <span className="text-white font-semibold">Stage {current.step} / 04</span>
            </div>
          </div>

          {/* Numbered Interactive Tabs Selector (01–04) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 mb-3 sm:mb-5 lg:mb-7">
            {TAB_DATA.map((item, idx) => {
              const isActive = idx === activeTab;
              const isPast = idx < activeTab;
              const fillPercent = isPast
                ? 100
                : isActive
                ? Math.max(12, Math.min(100, Math.round(segmentProgress * 100)))
                : 0;

              return (
                <button
                  key={item.step}
                  onClick={() => handleTabClick(idx)}
                  className={`relative p-2.5 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl text-left transition-all duration-300 cursor-pointer border overflow-hidden ${
                    isActive
                      ? "bg-[#141416] border-white/[0.22] shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-[1.01]"
                      : "bg-[#09090b] border-white/[0.08] hover:border-white/[0.18] hover:bg-[#141416]/60"
                  }`}
                >
                  {/* Progress Line Track across top of each tab */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] sm:h-[2.5px] bg-white/[0.06]">
                    <div
                      className={`h-full bg-[#3b82f6] shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-[width] ${
                        isActive ? "duration-75" : "duration-300"
                      }`}
                      style={{ width: `${fillPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-1 pt-0.5 sm:pt-1">
                    <span className={`font-mono text-[11px] sm:text-xs lg:text-sm font-bold ${isActive ? "text-[#3b82f6]" : "text-[#71717a]"}`}>
                      {item.step}
                    </span>
                    <span className={`font-mono text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-wider ${isActive ? "text-white" : "text-[#71717a]"}`}>
                      {item.phase}
                    </span>
                  </div>
                  <div className={`text-[11px] sm:text-xs lg:text-sm font-semibold leading-snug line-clamp-1 ${isActive ? "text-white" : "text-[#a1a1aa]"}`}>
                    {item.headline}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Showcase Panel with Animated Transitions */}
          <div className="relative rounded-xl sm:rounded-2xl bg-[#09090b] border border-white/[0.08] p-3.5 sm:p-7 lg:p-10 overflow-hidden shadow-2xl flex items-center">
            {/* Animated background giant section number watermark */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`watermark-${current.step}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 0.12, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="section-marker absolute -right-4 -bottom-8 select-none hidden md:block pointer-events-none text-[160px] lg:text-[220px] font-black font-mono text-white leading-none"
              >
                {current.step}
              </motion.div>
            </AnimatePresence>

            {/* Animated Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-center relative z-10 w-full"
              >
                {/* Left Content Column */}
                <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white">
                      PHASE {current.step} • {current.phase}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-[#94a3b8] truncate max-w-[200px] sm:max-w-none">
                      {current.metric}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                    {current.headline}
                  </h3>

                  <p className="font-serif italic text-xs sm:text-sm lg:text-base text-slate-300 line-clamp-1 sm:line-clamp-none">
                    &ldquo;{current.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {current.description}
                  </p>

                  {/* Channels & Deliverables Chips */}
                  <div className="pt-0.5 sm:pt-1">
                    <div className="font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-[#71717a] mb-1.5">
                      Strategic Deliverables & Channels:
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {current.channels.map((ch, idx) => (
                        <motion.span
                          key={ch}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.03 }}
                          className="font-mono text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#141416] border border-white/[0.08] text-white flex items-center gap-1.5 shadow-sm"
                        >
                          <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-400 shrink-0" />
                          <span>{ch}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile-Only Compact Outcome Row */}
                  <div className="block lg:hidden pt-1">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#141416] border border-white/[0.08] flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                        <div className="text-[11px] text-white truncate">
                          <span className="text-[#94a3b8] font-mono mr-1">Outcome:</span>
                          {current.highlight}
                        </div>
                      </div>
                      <a
                        href="#services"
                        className="font-mono text-[10px] text-[#3b82f6] hover:text-white shrink-0 flex items-center gap-1"
                      >
                        <span>Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Card / Visual Preview (Desktop Only) */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="rounded-2xl bg-[#141416] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[#27272a] border border-white/[0.08] flex items-center justify-center text-white">
                          <CurrentIcon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Institutional Focus</div>
                          <div className="font-mono text-[10px] text-[#71717a]">Stage {current.step} of 04</div>
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
                    </div>

                    <div className="py-5 space-y-3.5">
                      <div className="text-xs text-[#a1a1aa] leading-relaxed">
                        Key Institutional Outcome:
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#09090b] border border-white/[0.08] text-xs font-mono text-white flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#3b82f6] shrink-0" />
                        <span>{current.highlight}</span>
                      </div>
                      <div className="text-[11px] text-[#71717a]">
                        Verified with school leadership prior to execution.
                      </div>
                    </div>

                    <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#a1a1aa]">Explore full scope</span>
                      <a
                        href="#services"
                        className="font-mono text-xs text-white hover:text-blue-400 flex items-center gap-1 transition-colors"
                      >
                        <span>View Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
