"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FREQUENT_QUESTIONS } from "@/data/content";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {FREQUENT_QUESTIONS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`rounded-2xl border transition-all ${
              isOpen
                ? "bg-[#17202B] border-[#82A386]/60 shadow-lg shadow-black/40"
                : "bg-[#121820] border-white/[0.08] hover:border-white/[0.16]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base font-bold tracking-tight text-white">
                {faq.question}
              </span>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#132E20] text-[#4ADE80] border border-[#224A32]" : "bg-[#0E141B] text-slate-400 border border-white/[0.06]"}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-slate-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
