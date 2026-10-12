import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { INSIGHTS_ARTICLES } from "@/data/content";
import { Layers, ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { RevealSection } from "@/components/Motion";

export const metadata: Metadata = getMetadata({
  title: "Insights & Guides for Schools",
  description: "Executive research, parent decision psychology, local SEO tutorials, and admissions calendar blueprints for school leaders, trustees, and education marketers.",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-[#6C836F]" />
            <span>The Education Marketer&apos;s Knowledge Base</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D151D] tracking-tight leading-tight">
            Strategic Insights for School Leaders & Marketers.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Original research, parent decision blueprints, and technical breakdowns to help educational institutions build long-term authority.
          </p>
        </div>
      </RevealSection>

      {/* Articles Grid */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INSIGHTS_ARTICLES.map((art) => (
            <div
              key={art.slug}
              className="bg-white rounded-3xl p-8 border border-[#CBD5C8]/80 shadow-xs hover:shadow-2xl hover:border-[#6C836F] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-4">
                  <span className="text-[#2F523E] bg-[#EBF1E9] border border-[#DEE7DC] px-3 py-1 rounded-full">{art.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#6C836F]" /> {art.readTime}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#6C836F]" /> {art.publishDate}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#0D151D] group-hover:text-[#6C836F] transition-colors leading-snug">
                  <Link href={`/insights/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">Key Takeaways:</div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {art.keyTakeaways.slice(0, 2).map((takeaway) => (
                      <li key={takeaway} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F] mt-1.5 shrink-0" />
                        <span className="line-clamp-2">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={art.author.avatar}
                    alt={art.author.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{art.author.name}</div>
                    <div className="text-[10px] text-slate-500">{art.author.role}</div>
                  </div>
                </div>

                <Link
                  href={`/insights/${art.slug}`}
                  className="px-4 py-2 rounded-full bg-[#0D151D] group-hover:bg-[#6C836F] text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Bottom CTA */}
      <RevealSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="bg-[#0D151D] text-white rounded-3xl p-8 sm:p-12 border border-[#1C2834] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Have a Specific Marketing or Admissions Challenge?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Our strategic team frequently conducts bespoke research and catchment audits for educational groups.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D151D] font-semibold text-sm inline-flex items-center gap-2 transition-all shadow-md"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

    </div>
  );
}
