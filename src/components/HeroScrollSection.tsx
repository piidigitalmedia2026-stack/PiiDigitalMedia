"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  GraduationCap,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const STORY_PANELS = [
  {
    number: "01",
    tag: "Brand Architecture",
    title: "Build Your Brand",
    description:
      "Create a strong, trustworthy digital presence that reflects your institutional values, campus culture, and academic heritage.",
    metric: "Institutional Distinction",
  },
  {
    number: "02",
    tag: "Parent Discovery",
    title: "Reach the Right Parents",
    description:
      "Connect directly with local families actively researching and comparing schools during critical admission decision windows.",
    metric: "High-Intent Family Reach",
  },
  {
    number: "03",
    tag: "Admissions Growth",
    title: "Grow Admissions",
    description:
      "Support the admission season with planned campaigns, clear admission information, and a simple way for parents to enquire.",
    metric: "Sustainable Enrollment",
  },
];

export function HeroScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const [mobileActiveStage, setMobileActiveStage] = useState(0);

  // Desktop scroll progress through the complete hero + storytelling track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track active stage based on desktop scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.44) {
      setActiveStage(0);
    } else if (latest < 0.58) {
      setActiveStage(1);
    } else {
      setActiveStage(2);
    }
  });

  // ==========================================
  // DESKTOP SCROLL ANIMATIONS
  // ==========================================
  const heroTextY = useTransform(scrollYProgress, [0, 0.16], [0, -75]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0]);

  const heroButtonsY = useTransform(scrollYProgress, [0, 0.13], [0, -45]);
  const heroButtonsOpacity = useTransform(scrollYProgress, [0, 0.11], [1, 0]);
  const heroPillarsOpacity = useTransform(scrollYProgress, [0, 0.09], [1, 0]);

  const arcsOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const photoWidth = useTransform(scrollYProgress, [0.02, 0.2], ["58%", "100%"]);

  const photoClip = useTransform(
    scrollYProgress,
    [0.02, 0.2],
    ["ellipse(86% 94% at 94% 48%)", "ellipse(180% 180% at 50% 50%)"]
  );

  const imageScale = useTransform(scrollYProgress, [0, 0.26], [1, 1.06]);

  // Changing a blur radius on scroll re-renders the whole photo every frame.
  // A pre-blurred copy is painted once and only its opacity is driven by scroll.
  const bgBlurOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.74, 0.86],
    [0, 1, 1, 0]
  );

  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.74, 0.86],
    [0, 0.76, 0.76, 0]
  );

  const storyOpacity = useTransform(
    scrollYProgress,
    [0.24, 0.32, 0.72, 0.84],
    [0, 1, 1, 0]
  );
  const storyY = useTransform(
    scrollYProgress,
    [0.24, 0.32, 0.72, 0.84],
    [30, 0, 0, -30]
  );
  // The story layer covers the whole hero. While it is invisible it must not
  // take clicks, or it blocks the hero buttons underneath it.
  const storyPointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 0.24 && v <= 0.84 ? "auto" : "none"
  );

  const progressBarWidth = useTransform(
    scrollYProgress,
    [0.32, 0.72],
    ["15%", "100%"]
  );

  // ==========================================
  // MOBILE SCROLL ANIMATIONS (< lg)
  // ==========================================
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(mobileScrollYProgress, "change", (latest) => {
    if (latest < 0.50) {
      setMobileActiveStage(0);
    } else if (latest < 0.74) {
      setMobileActiveStage(1);
    } else {
      setMobileActiveStage(2);
    }
  });

  // Mobile Hero elements fade out & rise
  const mobileHeroOpacity = useTransform(mobileScrollYProgress, [0, 0.14], [1, 0]);
  const mobileHeroY = useTransform(mobileScrollYProgress, [0, 0.14], [0, -35]);
  const mobileHeroScale = useTransform(mobileScrollYProgress, [0, 0.14], [1, 0.96]);
  const mobileHeroPointerEvents = useTransform(mobileScrollYProgress, (v) => (v > 0.14 ? "none" : "auto"));

  // Mobile Campus Photo expands from rounded card into full viewport
  const mobilePhotoTop = useTransform(mobileScrollYProgress, [0.02, 0.16], ["47%", "0%"]);
  const mobilePhotoLeft = useTransform(mobileScrollYProgress, [0.02, 0.16], ["16px", "0px"]);
  const mobilePhotoRight = useTransform(mobileScrollYProgress, [0.02, 0.16], ["16px", "0px"]);
  const mobilePhotoBottom = useTransform(mobileScrollYProgress, [0.02, 0.16], ["16px", "0px"]);
  const mobilePhotoRadius = useTransform(mobileScrollYProgress, [0.02, 0.16], [24, 0]);
  const mobilePhotoScale = useTransform(mobileScrollYProgress, [0.02, 0.22], [1.0, 1.05]);
  const mobileScrollBadgeOpacity = useTransform(mobileScrollYProgress, [0.01, 0.08], [1, 0]);

  // Mobile blur & dark overlay - stays blurred and dark once applied
  const mobileBlurOpacity = useTransform(
    mobileScrollYProgress,
    [0.16, 0.26],
    [0, 1]
  );
  const mobileDarkOverlayOpacity = useTransform(
    mobileScrollYProgress,
    [0.16, 0.26],
    [0, 0.92]
  );

  // Mobile Storytelling Layer visibility - stays visible once revealed
  const mobileStoryOpacity = useTransform(
    mobileScrollYProgress,
    [0.18, 0.26],
    [0, 1]
  );
  const mobileStoryY = useTransform(
    mobileScrollYProgress,
    [0.18, 0.26],
    [20, 0]
  );
  const mobileStoryPointerEvents = useTransform(
    mobileScrollYProgress,
    (v) => (v >= 0.18 ? "auto" : "none")
  );

  // Mobile Storytelling 3 panels track sliding horizontally with comfortable dwell pauses
  const mobileTrackX = useTransform(
    mobileScrollYProgress,
    [0.26, 0.44, 0.52, 0.70, 0.76, 0.96],
    ["0%", "0%", "-33.333333%", "-33.333333%", "-66.666667%", "-66.666667%"]
  );

  const mobileStoryProgressBar = useTransform(
    mobileScrollYProgress,
    [0.26, 0.96],
    ["33%", "100%"]
  );

  const goToMobileStage = (idx: number) => {
    const el = mobileContainerRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const targetProgress = idx === 0 ? 0.35 : idx === 1 ? 0.61 : 0.86;
    window.scrollTo({ top: top + scrollable * targetProgress, behavior: "smooth" });
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. DESKTOP CINEMATIC SCROLL EXPERIENCE (lg: and above)    */}
      {/* ========================================================= */}
      <div
        ref={containerRef}
        className={`hidden lg:block relative w-full overflow-clip ${
          shouldReduceMotion ? "h-auto" : "h-[320vh]"
        }`}
      >
        <div
          className={`${
            shouldReduceMotion
              ? "relative min-h-[calc(100vh-88px)]"
              : "sticky top-[88px] h-[calc(100vh-88px)]"
          } w-full flex flex-col justify-between overflow-hidden bg-[#FAF9F5] z-10`}
        >
          {/* Soft Ambient Champagne Waves */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-r from-[#FAF9F5] via-[#F8F7F3] to-transparent opacity-95" />
            <div className="absolute -bottom-20 -left-20 w-[540px] h-[360px] rounded-[100%] bg-[#E5EBE3]/90 blur-3xl transform -rotate-12 pointer-events-none" />
            <div className="absolute bottom-12 left-1/4 w-[420px] h-[240px] rounded-[100%] bg-[#EEF2EC]/80 blur-2xl pointer-events-none" />
          </div>

          {/* Desktop Fixed Background Campus Image with Arch Expansion */}
          <motion.div
            style={shouldReduceMotion ? { width: "100%" } : { width: photoWidth }}
            className="absolute top-0 right-0 h-full pointer-events-none z-10 overflow-hidden"
          >
            <motion.div
              style={shouldReduceMotion ? { opacity: 0 } : { opacity: arcsOpacity }}
              className="absolute -top-[16%] -bottom-[16%] left-[3%] w-[124%] rounded-l-[550px] border border-[#CBD5C8]/80 pointer-events-none z-30"
            />
            <motion.div
              style={shouldReduceMotion ? { opacity: 0 } : { opacity: arcsOpacity }}
              className="absolute -top-[10%] -bottom-[10%] left-[7%] w-[118%] rounded-l-[500px] border border-[#E1E8DE]/60 pointer-events-none z-30"
            />

            <motion.div
              style={shouldReduceMotion ? { clipPath: "none" } : { clipPath: photoClip }}
              className="absolute top-0 right-0 w-full h-full overflow-hidden will-change-[clip-path]"
            >
              <motion.div
                style={shouldReduceMotion ? { scale: 1 } : { scale: imageScale }}
                className="relative w-full h-full will-change-transform"
              >
                <Image
                  src="/campus-photo-hd.jpg"
                  alt="Students in uniform walking towards modern sunlit educational campus building"
                  fill
                  fetchPriority="high"
                  quality={90}
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent mix-blend-soft-light pointer-events-none" />
                {!shouldReduceMotion && (
                  <motion.div
                    aria-hidden
                    style={{ opacity: bgBlurOpacity }}
                    className="absolute inset-0 pointer-events-none will-change-[opacity]"
                  >
                    <Image
                      src="/campus-photo-hd.jpg"
                      alt=""
                      fill
                      quality={75}
                      sizes="320px"
                      className="object-cover object-center scale-110 blur-[18px]"
                    />
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                style={shouldReduceMotion ? { opacity: 0 } : { opacity: darkOverlayOpacity }}
                className="absolute inset-0 bg-[#0D151D] pointer-events-none z-20 will-change-[opacity]"
              />
            </motion.div>
          </motion.div>

          {/* Desktop Hero Content */}
          <div className="w-full max-w-[1440px] mx-auto px-12 flex-1 flex flex-col justify-between pt-12 pb-8 relative z-20 pointer-events-none">
            <motion.div
              style={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: heroTextOpacity, y: heroTextY }}
              className="max-w-2xl flex flex-col justify-center my-auto pt-6 pb-4 will-change-transform pointer-events-auto"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[10.5px] font-bold tracking-[0.15em] text-[#2F523E] uppercase w-fit mb-8 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F]" />
                <span>Digital Growth for Education</span>
              </div>

              <h1 className="text-[74px] xl:text-[82px] font-bold tracking-[-0.03em] text-[#0D151D] leading-[1.02] mb-8 font-display">
                Schools Deserve<br />
                <span className="text-[#6C836F] italic font-normal">to Be Seen.</span>
              </h1>

              <motion.div
                style={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: heroButtonsOpacity, y: heroButtonsY }}
                className="flex items-center gap-3.5 mb-16"
              >
                <Link
                  href="/contact"
                  className="h-[46px] px-7 rounded-full bg-[#0D151D] hover:bg-slate-800 text-white font-bold text-[13px] tracking-wide transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <span>Let&apos;s Grow Your Institution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/work"
                  className="h-[46px] px-7 rounded-full bg-white hover:bg-[#FAF9F6] border border-[#D0D7DE] text-[#0D151D] font-bold text-[13px] tracking-wide transition-all shadow-2xs hover:shadow-xs flex items-center justify-center cursor-pointer"
                >
                  <span>Explore Our Work</span>
                </Link>
              </motion.div>

              <motion.div
                style={shouldReduceMotion ? { opacity: 1 } : { opacity: heroPillarsOpacity }}
                className="pt-8 border-t border-[#E5E9EE] flex items-center gap-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center text-[#4A5568] shrink-0">
                    <svg className="w-5 h-5 stroke-[1.75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <div className="text-[12px] font-semibold text-[#4A5568] leading-tight">
                    Education<br />Focused
                  </div>
                </div>

                <div className="w-[1px] h-7 bg-[#E2E8F0]" />

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center text-[#4A5568] shrink-0">
                    <Users className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div className="text-[12px] font-semibold text-[#4A5568] leading-tight">
                    Working with<br />4 Schools
                  </div>
                </div>

                <div className="w-[1px] h-7 bg-[#E2E8F0]" />

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center text-[#4A5568] shrink-0">
                    <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div className="text-[12px] font-semibold text-[#4A5568] leading-tight">
                    Transparent<br />Process
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Storytelling Phase (Over blurred background) */}
          <motion.div
            style={shouldReduceMotion ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: storyOpacity, y: storyY, pointerEvents: storyPointerEvents }}
            className="absolute inset-0 z-30 flex flex-col justify-center px-12"
          >
            <div className="w-full max-w-[1360px] mx-auto flex flex-col justify-center h-full py-8">
              <div className="flex items-end justify-between gap-4 mb-8 shrink-0">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] text-[10.5px] font-bold tracking-[0.16em] uppercase mb-3 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F]" />
                    <span>The PII Approach</span>
                  </div>
                  <h2 className="text-4xl lg:text-[44px] font-black text-[#FAF9F5] tracking-tight leading-tight">
                    More Than <span className="font-serif italic font-normal text-[#CBD5C8]">Marketing</span>
                  </h2>
                  <p className="text-sm text-[#CBD5C8] mt-1.5 max-w-xl leading-relaxed">
                    A three-stage approach designed for schools: build the brand, reach the right parents, and support admissions.
                  </p>
                </div>

                <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
                  {STORY_PANELS.map((p, idx) => (
                    <div
                      key={p.number}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                        activeStage === idx ? "bg-[#6C836F] text-white shadow-xs" : "text-[#CBD5C8]"
                      }`}
                    >
                      <span className="font-mono text-[10.5px] opacity-75">{p.number}</span>
                      <span>{p.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop 3-Panel Aligned Grid */}
              <div className="grid grid-cols-3 gap-6 lg:gap-7 w-full items-stretch">
                {STORY_PANELS.map((panel, idx) => {
                  const isActive = activeStage === idx;
                  return (
                    <div
                      key={panel.number}
                      className={`rounded-3xl p-7 lg:p-8 flex flex-col justify-between transition-[transform,opacity,border-color,background-color] duration-300 relative overflow-hidden ${
                        isActive
                          ? "bg-[#141F2A]/95 border-2 border-[#6C836F] shadow-2xl shadow-black/50 scale-[1.01]"
                          : "bg-[#0D151D]/80 border border-[#223242] opacity-80"
                      }`}
                    >
                      <span className="absolute -top-3 -right-2 text-7xl font-black text-white/[0.03] select-none pointer-events-none font-mono">
                        {panel.number}
                      </span>

                      <div>
                        <div className="flex items-center justify-between mb-5 relative z-10">
                          <div className="flex items-center gap-2.5">
                            <span className={`w-7 h-7 rounded-lg font-mono font-bold text-xs flex items-center justify-center ${isActive ? "bg-[#6C836F] text-white" : "bg-white/10 text-[#CBD5C8]"}`}>
                              {panel.number}
                            </span>
                            <span className="text-[11px] font-bold tracking-wider uppercase text-[#CBD5C8]">
                              {panel.tag}
                            </span>
                          </div>
                          <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[#6C836F]" : "bg-white/20"}`} />
                        </div>

                        <div className="w-full h-24 mb-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center p-3 relative overflow-hidden">
                          {idx === 0 && (
                            <svg className="w-16 h-14 text-[#6C836F]" viewBox="0 0 100 80" fill="none">
                              <rect x="22" y="32" width="7" height="32" rx="1.5" stroke="currentColor" strokeWidth="2" />
                              <rect x="46.5" y="26" width="7" height="38" rx="1.5" stroke="#FAF9F5" strokeWidth="2" />
                              <rect x="71" y="32" width="7" height="32" rx="1.5" stroke="currentColor" strokeWidth="2" />
                              <path d="M14 30L50 14L86 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M12 66H88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <circle cx="50" cy="20" r="2.5" fill="#FAF9F5" />
                            </svg>
                          )}
                          {idx === 1 && (
                            <svg className="w-16 h-14 text-[#6C836F]" viewBox="0 0 100 80" fill="none">
                              <circle cx="50" cy="40" r="26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                              <circle cx="50" cy="40" r="16" stroke="#FAF9F5" strokeWidth="1.75" />
                              <circle cx="50" cy="40" r="4.5" fill="#6C836F" />
                              <circle cx="34" cy="30" r="2.5" fill="#FAF9F5" />
                              <circle cx="66" cy="48" r="3" fill="#FAF9F5" />
                              <line x1="50" y1="14" x2="50" y2="66" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                              <line x1="24" y1="40" x2="76" y2="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                            </svg>
                          )}
                          {idx === 2 && (
                            <svg className="w-16 h-14 text-[#6C836F]" viewBox="0 0 100 80" fill="none">
                              <path d="M20 62H34V48H48V36H62V24H76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M24 58L76 20" stroke="#FAF9F5" strokeWidth="2" strokeLinecap="round" />
                              <circle cx="76" cy="20" r="4" fill="#6C836F" />
                              <path d="M72 20H80M76 16V24" stroke="#FAF9F5" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          )}
                        </div>

                        <h3 className="text-xl lg:text-[22px] font-extrabold text-[#FAF9F5] tracking-tight leading-snug">
                          {panel.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#CBD5C8] leading-relaxed mt-2.5">
                          {panel.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#CBD5C8]">
                        <span>{panel.metric}</span>
                        <div className="flex items-center gap-1.5 text-[#FAF9F5]">
                          <CheckCircle2 className={`w-4 h-4 ${isActive ? "text-[#6C836F]" : "text-slate-500"}`} />
                          <span>Stage {panel.number}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] font-semibold text-[#CBD5C8]/80 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F] animate-pulse" />
                  <span>Scroll to advance stages & transition into partner schools</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-slate-300">Phase 0{activeStage + 1} of 03</span>
                  <div className="w-28 h-1 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      style={shouldReduceMotion ? { width: "100%" } : { width: progressBarWidth }}
                      className="h-full bg-[#6C836F] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MOBILE & TABLET CINEMATIC HERO & STORY (< lg)          */}
      {/* Scroll-Driven Animation & Horizontal Storytelling Flow    */}
      {/* ========================================================= */}
      <div
        ref={mobileContainerRef}
        className={`block lg:hidden relative w-full overflow-clip ${
          shouldReduceMotion ? "h-auto" : "h-[165vh]"
        }`}
      >
        <div
          className={`${
            shouldReduceMotion
              ? "relative min-h-[calc(100svh-56px)] py-4 px-4 bg-[#FAF9F5]"
              : "sticky top-[54px] h-[calc(100svh-54px)] overflow-hidden bg-[#FAF9F5]"
          } w-full flex flex-col justify-between z-10`}
        >
          {/* A. Expanding Campus Background Image */}
          <motion.div
            style={
              shouldReduceMotion
                ? { position: "relative", width: "100%", height: "340px", borderRadius: "24px" }
                : {
                    position: "absolute",
                    top: mobilePhotoTop,
                    left: mobilePhotoLeft,
                    right: mobilePhotoRight,
                    bottom: mobilePhotoBottom,
                    borderRadius: mobilePhotoRadius,
                  }
            }
            className="overflow-hidden shadow-md border border-[#CBD5C8]/40 z-0 will-change-[top,left,right,bottom,border-radius]"
          >
            <motion.div
              style={
                shouldReduceMotion
                  ? { scale: 1 }
                  : { scale: mobilePhotoScale }
              }
              className="relative w-full h-full will-change-transform"
            >
              <Image
                src="/campus-photo-hd.jpg"
                alt="Great Schools Grow Here campus"
                fill
                fetchPriority="high"
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              {!shouldReduceMotion && (
                <motion.div
                  aria-hidden
                  style={{ opacity: mobileBlurOpacity }}
                  className="absolute inset-0 pointer-events-none will-change-[opacity]"
                >
                  <Image
                    src="/campus-photo-hd.jpg"
                    alt=""
                    fill
                    quality={75}
                    sizes="320px"
                    className="object-cover object-center scale-110 blur-[18px]"
                  />
                </motion.div>
              )}
            </motion.div>

            {/* Dark overlay for Storytelling section */}
            <motion.div
              style={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: mobileDarkOverlayOpacity }
              }
              className="absolute inset-0 bg-[#0D151D] z-10 pointer-events-none will-change-[opacity]"
            />

            {/* Floating Frosted Pill: Scroll ↓ */}
            <motion.div
              style={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: mobileScrollBadgeOpacity }
              }
              className="absolute bottom-3.5 right-3.5 z-20 bg-black/50 backdrop-blur-md text-white/95 border border-white/20 rounded-full px-3 py-1 text-[11px] font-medium flex items-center gap-1.5 shadow-md pointer-events-none"
            >
              <span>Scroll</span>
              <ArrowDown className="w-3 h-3 text-white/80 animate-bounce" />
            </motion.div>
          </motion.div>

          {/* B. Mobile Hero Headline, CTAs, and Trust Pillars (Fades out smoothly on scroll) */}
          <motion.div
            style={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : {
                    opacity: mobileHeroOpacity,
                    y: mobileHeroY,
                    scale: mobileHeroScale,
                    pointerEvents: mobileHeroPointerEvents as any,
                  }
            }
            className="relative z-10 w-full flex flex-col items-center text-center px-4 pt-3 pb-2 max-w-sm mx-auto will-change-[opacity,transform]"
          >
            {/* Centered Heading */}
            <h1 className="font-display font-bold text-[34px] sm:text-[40px] text-[#0D151D] tracking-tight leading-[1.08]">
              Schools Deserve<br />
              <span className="italic font-normal text-[#6C836F]">to Be Seen.</span>
            </h1>

            {/* Centered Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] text-[9.5px] font-bold tracking-[0.14em] uppercase mt-2.5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F523E]" />
              <span>DIGITAL GROWTH FOR EDUCATION</span>
            </div>

            {/* Stacked Action Buttons */}
            <div className="flex flex-col gap-2 w-full max-w-[300px] mt-4">
              <Link
                href="/contact"
                className="h-[42px] w-full rounded-full bg-[#182620] hover:bg-[#22352c] text-white font-medium text-[12.5px] tracking-wide shadow-sm flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
              >
                <span>Let&apos;s Grow Your Institution</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>

              <Link
                href="/work"
                className="h-[42px] w-full rounded-full bg-white hover:bg-[#FAF9F5] border border-[#CBD5C8] text-[#0D151D] font-medium text-[12.5px] tracking-wide shadow-2xs flex items-center justify-center active:scale-[0.99] transition-all"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* 3 Trust Pillars Row with Dividers */}
            <div className="w-full max-w-[320px] grid grid-cols-3 divide-x divide-[#CBD5C8]/80 text-center items-center py-1 mt-4">
              <div className="flex flex-col items-center justify-center px-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#4A5568] mb-0.5" />
                <span className="font-bold text-[#0D151D] text-[10.5px] leading-tight">Education</span>
                <span className="text-[#64748B] text-[9px] leading-tight">Focused</span>
              </div>
              <div className="flex flex-col items-center justify-center px-1">
                <Users className="w-3.5 h-3.5 text-[#4A5568] mb-0.5" />
                <span className="font-bold text-[#0D151D] text-[10.5px] leading-tight">4 Partner</span>
                <span className="text-[#64748B] text-[9px] leading-tight">Schools</span>
              </div>
              <div className="flex flex-col items-center justify-center px-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4A5568] mb-0.5" />
                <span className="font-bold text-[#0D151D] text-[10.5px] leading-tight">Clear</span>
                <span className="text-[#64748B] text-[9px] leading-tight">Process</span>
              </div>
            </div>
          </motion.div>

          {/* C. Mobile Storytelling Layer ("More Than Marketing") with 3 Horizontal Panels */}
          <motion.div
            style={
              shouldReduceMotion
                ? { position: "relative", opacity: 1, y: 0, marginTop: "24px" }
                : {
                    position: "absolute",
                    inset: 0,
                    opacity: mobileStoryOpacity,
                    y: mobileStoryY,
                    pointerEvents: mobileStoryPointerEvents as any,
                  }
            }
            className="z-20 flex flex-col justify-between h-full w-full max-w-md mx-auto px-3.5 pt-3 pb-3 text-white will-change-[opacity,transform] relative"
          >
            {/* Soft luminous ambient sage glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#6C836F]/20 blur-3xl pointer-events-none" />

            {/* Header info */}
            <div className="w-full shrink-0 relative z-10">
              <div className="flex items-center justify-between mb-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/12 border border-white/20 text-[#CBD5C8] text-[10.5px] font-mono tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F] animate-pulse" />
                  <span>0{mobileActiveStage + 1} / 03</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/95 uppercase font-sans text-[9px] tracking-widest font-bold">
                    {STORY_PANELS[mobileActiveStage]?.tag || "Strategic Growth"}
                  </span>
                </div>
              </div>

              <h2 className="text-[30px] sm:text-[34px] font-display font-bold text-white leading-[1.08] tracking-tight">
                More Than<br />
                <span className="font-display italic font-normal text-[#E2EAE0]">Marketing.</span>
              </h2>

              <p className="text-[12px] sm:text-[12.5px] text-white/80 mt-1 leading-relaxed">
                Digital presence, parent discovery, and admission campaigns.
              </p>
            </div>

            {/* Horizontal Storytelling Cards Track */}
            <div className="w-full overflow-hidden my-auto py-1 relative z-10">
              <motion.div
                style={shouldReduceMotion ? { transform: "none" } : { x: mobileTrackX }}
                className="flex w-[300%] will-change-transform"
              >
                {STORY_PANELS.map((panel, idx) => {
                  const isActive = mobileActiveStage === idx;
                  return (
                    <div key={idx} className="w-1/3 px-1 flex justify-center">
                      <div
                        className={`w-full max-w-[365px] rounded-3xl bg-gradient-to-b from-white/[0.16] via-white/[0.10] to-white/[0.05] border transition-[opacity,border-color,background-color] duration-300 p-5 sm:p-6 shadow-2xl flex flex-col justify-between min-h-[350px] sm:min-h-[380px] ${
                          isActive
                            ? "border-white/35 bg-white/[0.12] shadow-emerald-950/50"
                            : "border-white/15 opacity-75"
                        }`}
                      >
                        {/* Top: Pill & bespoke graphic */}
                        <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 shrink-0">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-medium">
                            <span className="font-mono font-bold text-[#A8BEA7]">{panel.number}</span>
                            <span className="w-1 h-1 rounded-full bg-white/40" />
                            <span className="text-white/95 font-semibold text-[10.5px]">{panel.metric}</span>
                          </div>

                          {/* Minimal graphic */}
                          <div className="flex items-center shrink-0">
                            {idx === 0 && (
                              <div className="flex items-end gap-1.5 h-8 px-2 py-1 bg-white/10 rounded-lg">
                                <div className="w-1.5 h-3 rounded-full bg-white/30" />
                                <div className="w-1.5 h-5 rounded-full bg-white/50" />
                                <div className="w-1.5 h-7 rounded-full bg-[#6C836F]" />
                              </div>
                            )}
                            {idx === 1 && (
                              <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg relative">
                                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-[#6C836F]" />
                                </div>
                              </div>
                            )}
                            {idx === 2 && (
                              <div className="flex items-end gap-1 h-8 px-2 py-1 bg-white/10 rounded-lg">
                                <div className="w-1.5 h-2.5 rounded-t-sm bg-white/30" />
                                <div className="w-1.5 h-4 rounded-t-sm bg-white/50" />
                                <div className="w-1.5 h-6 rounded-t-sm bg-white/70" />
                                <div className="w-1.5 h-7 rounded-t-sm bg-[#6C836F]" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Middle: Title, Description & Institutional Bullets */}
                        <div className="my-auto py-2">
                          <h3 className="text-[22px] sm:text-[24px] font-display font-bold text-white leading-tight mb-2">
                            {panel.title}
                          </h3>
                          <p className="text-[12.5px] sm:text-[13px] text-white/85 leading-relaxed">
                            {panel.description}
                          </p>

                          {/* Dual Key Deliverables */}
                          <div className="mt-3.5 space-y-1.5 py-2 px-3 rounded-2xl bg-white/[0.06] border border-white/10 text-[11px] text-[#CBD5C8]">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F] shrink-0" />
                              <span>{idx === 0 ? "Bespoke visual identity & school prestige" : idx === 1 ? "Local parent discovery during decision windows" : "Direct inquiry to confirmed enrollment tracking"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F] shrink-0" />
                              <span>{idx === 0 ? "Consistent multi-channel brand presence" : idx === 1 ? "High-intent family reach & comparison ranking" : "Predictable annual student intake & retention"}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom: Next step button */}
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between shrink-0">
                          <span className="text-[11px] font-medium text-[#CBD5C8] flex items-center gap-1.5">
                            <span className="text-[#6C836F] font-bold">✓</span>
                            <span>{idx === 0 ? "Institutional distinction" : idx === 1 ? "Verified parent discovery" : "Confirmed enrollments"}</span>
                          </span>

                          <button
                            onClick={() => goToMobileStage((idx + 1) % 3)}
                            className="w-8 h-8 rounded-full bg-[#182620] hover:bg-[#253a2f] border border-white/20 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
                            aria-label="Next stage"
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Bottom Navigation & Progress Dots */}
            <div className="w-full flex items-center justify-between pt-2 border-t border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                {STORY_PANELS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToMobileStage(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      mobileActiveStage === i
                        ? "w-8 h-1.5 bg-[#6C836F]"
                        : "w-2 h-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Jump to stage ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-[10.5px] text-white/75 font-mono font-medium">Stage 0{mobileActiveStage + 1} of 03</span>
                <div className="w-20 h-1 rounded-full bg-white/15 overflow-hidden">
                  <motion.div
                    style={shouldReduceMotion ? { width: "100%" } : { width: mobileStoryProgressBar }}
                    className="h-full bg-[#6C836F] rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
