import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Metadata } from "next";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { INSIGHTS_ARTICLES } from "@/data/content";
import { Layers, ArrowRight, Clock, Sparkles } from "lucide-react";
import { RevealSection } from "@/components/Motion";

export const metadata: Metadata = getMetadata({
  title: "Insights & Guides for Schools",
  description: "Practical guides for schools on how parents choose a school, planning the admission season, local SEO, and measuring marketing.",
  path: "/insights",
  keywords: ["school admission marketing insights", "education branding guide", "school SEO strategy"]
});

export default function InsightsIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "Insights", url: "https://piidigitalmedia.com/insights" }
  ]);

  return (
    <div className="flex flex-col gap-20 sm:gap-28 pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <RevealSection className="pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132E20] border border-[#224A32] text-[#4ADE80] text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-[#82A386]" />
            <span>Guides for Schools</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Insights for School Leaders.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical guides on how parents choose a school, planning the admission season, local search, and measuring marketing.
          </p>
        </div>
      </RevealSection>

      {/* Articles Grid */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INSIGHTS_ARTICLES.map((art) => (
            <div
              key={art.slug}
              className="bg-[#121820] rounded-3xl p-8 border border-white/[0.08] shadow-md hover:shadow-2xl hover:border-[#82A386]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4">
                  <span className="text-[#4ADE80] bg-[#132E20] border border-[#224A32] px-3 py-1 rounded-full">{art.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3.5 h-3.5 text-[#82A386]" /> {art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#82A386] transition-colors leading-snug">
                  <Link href={`/insights/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#82A386] mb-2">Key Takeaways:</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {art.keyTakeaways.slice(0, 2).map((takeaway) => (
                      <li key={takeaway} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] mt-1.5 shrink-0" />
                        <span className="line-clamp-2">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Logo size={32} />
                  <div className="text-xs font-bold text-white">Pii Digital Media</div>
                </div>

                <Link
                  href={`/insights/${art.slug}`}
                  className="px-4 py-2 rounded-full bg-white hover:bg-slate-200 text-[#0B0F14] font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B0F14]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Bottom CTA */}
      <RevealSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="bg-[#121820] text-white rounded-3xl p-8 sm:p-12 border border-white/[0.08] space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Have a Question About Your School&apos;s Marketing?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Tell us what you need help with and we will get back to you.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-200 text-[#0B0F14] font-bold text-sm inline-flex items-center gap-2 transition-all shadow-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#0B0F14]" />
            </Link>
          </div>
        </div>
      </RevealSection>

    </div>
  );
}
