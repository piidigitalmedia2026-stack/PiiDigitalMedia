"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { SCHOOLS } from "@/data/content";

const MOBILE_FEATURED_SCHOOLS = [
  {
    name: "CMR School",
    location: "Kompally",
    image: "/cmr-school-kompally.jpg",
    slug: "cmr-school-kompally",
    url: "https://cmrschoolkompally.com/",
  },
  {
    name: "Malla Reddy School",
    location: "Medchal",
    image: "/malla-reddy-school-medchal.jpg",
    slug: "malla-reddy-school-medchal",
    url: "https://mallareddyschool.com/",
  },
  {
    name: "CMR School",
    location: "Kundanpally",
    image: "/cmr-school-kundanpally.jpg",
    slug: "cmr-school-kundapally",
    url: "https://cmrschoolkundanpally.com/",
  },
  {
    name: "Wellspire International School",
    location: "Hyderabad",
    image: "/wellspire-international-school.jpg",
    slug: "wellspire-international-school",
    url: "https://www.wellspireschool.com/",
  },
];

export function SchoolPortfolioGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  // All 4 confirmed partner schools
  const featuredSchools = SCHOOLS;

  const scrollMobile = (direction: "left" | "right") => {
    if (mobileScrollRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      mobileScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* ========================================================= */}
      {/* MOBILE SCHOOLS VIEW (< md)                                */}
      {/* Exact match to reference: Header, 2 photo cards, CTA pill */}
      {/* ========================================================= */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="block md:hidden w-full pb-2 overflow-hidden"
      >
        {/* Header: OUR SCHOOLS with divider and round arrow buttons */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A5568] shrink-0">
            OUR SCHOOLS
          </span>
          <div className="flex-1 h-[1px] bg-[#CBD5C8]/80" />
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => scrollMobile("left")}
              className="w-7 h-7 rounded-full bg-[#EBF0E9] hover:bg-[#DEE5DC] text-[#1E293B] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous schools"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollMobile("right")}
              className="w-7 h-7 rounded-full bg-[#EBF0E9] hover:bg-[#DEE5DC] text-[#1E293B] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next schools"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl font-serif font-bold text-[#0D151D] tracking-tight mb-4">
          Real Institutions.{" "}
          <span className="font-serif italic font-normal text-[#6C836F]">
            Real Work.
          </span>
        </h2>

        {/* Horizontal Photo Cards Track */}
        <div
          ref={mobileScrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory py-1 w-full"
        >
          {MOBILE_FEATURED_SCHOOLS.map((school, i) => (
            <motion.div
              key={school.slug}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="snap-start shrink-0"
            >
              {school.url?.startsWith("http") ? (
                <a
                  href={school.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[230px] sm:w-[260px] h-[175px] rounded-2xl relative overflow-hidden group block shadow-md border border-[#CBD5C8]/50"
                >
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    quality={90}
                    sizes="260px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                  <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between z-10">
                    <div>
                      <h3 className="font-bold text-white text-[14px] leading-tight drop-shadow-xs">
                        {school.name}
                      </h3>
                      <p className="text-white/80 font-serif italic text-[11px] mt-0.5 drop-shadow-xs">
                        {school.location}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#0D151D]/80 border border-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-[#182620] transition-colors shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              ) : (
                <Link
                  href={school.url || "/work"}
                  className="w-[230px] sm:w-[260px] h-[175px] rounded-2xl relative overflow-hidden group block shadow-md border border-[#CBD5C8]/50"
                >
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    quality={90}
                    sizes="260px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                  <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between z-10">
                    <div>
                      <h3 className="font-bold text-white text-[14px] leading-tight drop-shadow-xs">
                        {school.name}
                      </h3>
                      <p className="text-white/80 font-serif italic text-[11px] mt-0.5 drop-shadow-xs">
                        {school.location}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#0D151D]/80 border border-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-[#182620] transition-colors shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Full-width dark CTA pill */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/contact"
            className="w-full rounded-full bg-[#182620] hover:bg-[#22352c] text-white py-3.5 px-5 flex items-center justify-between shadow-md active:scale-[0.99] transition-transform mt-4"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="text-[12.5px] font-semibold tracking-wide text-white">
              Let&apos;s Discuss Your School&apos;s Growth
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </Link>
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* DESKTOP SCHOOLS VIEW (md:)                                */}
      {/* ========================================================= */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
        {featuredSchools.map((school, index) => (
          <motion.div
            key={school.slug}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 28 }
            }
            transition={{
              duration: 0.75,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -6, transition: { duration: 0.25 } }
            }
            className="group relative bg-white rounded-3xl p-6 sm:p-7 lg:p-8 border border-[#CBD5C8]/80 hover:border-[#6C836F] hover:shadow-xl transition-shadow flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6C836F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* School Campus Photo Banner */}
            {school.image && (
              <div className="relative h-44 -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 lg:-mx-8 lg:-mt-8 mb-5 overflow-hidden border-b border-[#CBD5C8]/60">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between z-10 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider drop-shadow-sm">
                    {school.location}
                  </span>
                  {school.website && (
                    <span className="text-[10px] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full font-mono text-white">
                      Partner School
                    </span>
                  )}
                </div>
              </div>
            )}

            <div>
              {/* Header: Icon + Curriculum Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EBF1E9] text-[#2F523E] flex items-center justify-center group-hover:bg-[#0D151D] group-hover:text-white transition-colors duration-300 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                {school.curriculum ? (
                  <span className="text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#EBF1E9] text-[#2F523E] border border-[#DEE7DC]">
                    {school.curriculum}
                  </span>
                ) : (
                  <span className="text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF9F5] text-[#6C836F] border border-[#CBD5C8]/60">
                    Partner School
                  </span>
                )}
              </div>

              {/* School Name */}
              {school.website ? (
                <a
                  href={school.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-extrabold text-[#0D151D] hover:text-[#6C836F] transition-colors leading-snug block"
                >
                  {school.name}
                </a>
              ) : (
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0D151D] group-hover:text-[#6C836F] transition-colors leading-snug">
                  {school.name}
                </h3>
              )}

              {/* Location */}
              {school.location && (
                <p className="text-xs font-medium text-slate-500 mt-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6C836F] shrink-0" />
                  <span>{school.location}</span>
                </p>
              )}

              {/* Scope Highlights */}
              {school.scope && school.scope.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#E5E9EE]/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6C836F] block">
                    Scope of Partnership
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {school.scope.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-[#E2E8DF] text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                    {school.scope.length > 3 && (
                      <span className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-[#FAF9F5] text-[#6C836F]">
                        +{school.scope.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Card Footer CTA */}
            <div className="mt-6 pt-4 border-t border-[#E5E9EE]/80 flex items-center justify-between">
              {school.website ? (
                <a
                  href={school.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0D151D] hover:text-[#6C836F] flex items-center gap-1.5 transition-colors"
                >
                  <span>Visit School Website</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  href="/work"
                  className="text-xs font-bold text-[#0D151D] hover:text-[#6C836F] flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              <div className="w-2 h-2 rounded-full bg-[#6C836F]" title="Active Partner" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
