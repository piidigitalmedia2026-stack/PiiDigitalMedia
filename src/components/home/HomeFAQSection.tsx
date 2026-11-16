"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FREQUENT_QUESTIONS } from "@/data/content";

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#000000] py-14 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3 sm:mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8]">
              Governance & Policies
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="font-serif italic font-normal text-slate-300">Questions.</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#a1a1aa] max-w-xl mx-auto leading-relaxed">
            Straightforward answers about our engagement scope, school confidentiality, and admission commitments.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {FREQUENT_QUESTIONS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-[#09090b] border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-white/[0.22] bg-[#141416] shadow-xl" : "border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-start justify-between gap-3 sm:gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3.5">
                    <span className="font-mono text-xs text-[#71717a] mt-0.5 shrink-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#94a3b8] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-sm sm:text-lg font-bold text-white leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#141416] border border-white/[0.08] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : "text-[#71717a]"}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed border-t border-white/[0.06] mt-1 pl-4 sm:pl-14">
                    {item.answer}
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
