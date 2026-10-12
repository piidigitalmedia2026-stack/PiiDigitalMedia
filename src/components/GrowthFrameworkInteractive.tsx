"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { GROWTH_FRAMEWORK } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

const STAGES = GROWTH_FRAMEWORK.length;

/**
 * Scroll-pinned parent journey: the panel sticks below the header while the
 * page scrolls through this block, and scroll progress steps through the stages.
 */
export function GrowthFrameworkInteractive() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  // +1 when moving to a later stage, -1 when moving back; sets the slide direction.
  const [direction, setDirection] = useState(1);
  const current = GROWTH_FRAMEWORK[activeStep];

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(STAGES - 1, Math.max(0, Math.floor(progress * STAGES)));
    setActiveStep((prev) => {
      if (next !== prev) setDirection(next > prev ? 1 : -1);
      return next;
    });
  });

  // Clicking a tab scrolls to the middle of that stage's slice of the track.
  const goToStage = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const scrollable = track.offsetHeight - window.innerHeight;
    const top = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + scrollable * ((idx + 0.5) / STAGES), behavior: "smooth" });
  };

  return (
    <div ref={trackRef} className="relative" style={{ height: `${100 + STAGES * 55}vh` }}>
      <div className="sticky top-0 h-svh flex items-center pt-[72px] sm:pt-[80px] lg:pt-[96px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#6C836F]">The Parent Journey</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D151D] tracking-tight mt-2 mb-6 sm:mb-8">
            Discover → Trust → Enquire → Visit → <span className="font-serif italic font-normal text-[#6C836F]">Enrol</span>
          </h2>

          <div className="bg-white rounded-3xl p-5 sm:p-10 border border-[#CBD5C8]/80 shadow-md overflow-hidden">

            {/* Stage Tabs */}
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {GROWTH_FRAMEWORK.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={item.phase}
                    onClick={() => goToStage(idx)}
                    className={`relative p-2 sm:p-3.5 rounded-xl sm:rounded-2xl text-left transition-colors cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "bg-[#FAF9F5] text-[#4A5568] hover:bg-[#EBF1E9] hover:text-[#0D151D]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="framework-active-tab"
                        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-[#0D151D] shadow-md"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className={`relative hidden sm:block text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? "text-[#EBF1E9]" : "text-slate-500"}`}>
                      Stage {item.step}
                    </span>
                    <span className="relative block text-[11px] sm:text-sm font-extrabold tracking-tight sm:mt-1 text-center sm:text-left">
                      {item.phase}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scroll progress */}
            <div className="mt-5 sm:mt-8 h-1 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                className="h-full w-full origin-left bg-[#6C836F]"
                style={{ scaleX: scrollYProgress }}
              />
            </div>

            {/* Stage Detail */}
            <div className="min-h-[250px] sm:min-h-[190px] lg:min-h-[150px] pt-6 sm:pt-8">
              {/* Keyed so each stage mounts immediately and slides in; fast scrolling never leaves it empty */}
                <motion.div
                  key={current.phase}
                  initial={{ opacity: 0, y: 28 * direction }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-3">
                    <h3 className="text-xl sm:text-3xl font-extrabold text-[#0D151D] tracking-tight leading-snug">
                      {current.headline}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {current.tagline}
                    </p>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-2.5">
                    {current.channels.map((ch) => (
                      <div key={ch} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-[#FAF9F5] p-3 rounded-xl border border-[#CBD5C8]/50">
                        <CheckCircle2 className="w-4 h-4 text-[#6C836F] shrink-0" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
