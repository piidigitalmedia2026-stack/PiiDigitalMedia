import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { EDUCATION_SEGMENTS } from "@/data/content";
import { GraduationCap, ArrowRight, CheckCircle2, Sparkles, Building2, Baby, Library, Award } from "lucide-react";
import { RevealSection } from "@/components/Motion";

export const metadata: Metadata = getMetadata({
  title: "Who We Serve",
  description: "The kinds of schools Pii Digital Media works with: K-12 schools, pre-primary sections, and international schools.",
  path: "/who-we-serve",
  keywords: ["schools digital marketing", "school marketing", "pre-primary admission marketing"]
});

export default function WhoWeServeIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "Who We Serve", url: "https://piidigitalmedia.com/who-we-serve" }
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
            <GraduationCap className="w-3.5 h-3.5 text-[#82A386]" />
            <span>Who We Serve</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            The Kinds of Schools We Work With.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Different kinds of schools need different things from their digital marketing.
          </p>
        </div>
      </RevealSection>

      {/* Segments Directory */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EDUCATION_SEGMENTS.map((seg) => (
            <div
              key={seg.slug}
              className="bg-[#121820] rounded-3xl p-8 border border-white/[0.08] shadow-md hover:shadow-2xl hover:border-[#82A386]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#4ADE80] bg-[#132E20] border border-[#224A32] px-3 py-1 rounded-full">
                    Schools
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#17202B] text-[#82A386] border border-white/[0.06] flex items-center justify-center group-hover:bg-[#132E20] group-hover:text-[#4ADE80] transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#82A386] transition-colors">
                  {seg.title}
                </h3>

                <p className="text-xs text-[#82A386] italic mt-1 font-medium">
                  {seg.subtitle}
                </p>

              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <Link
                  href={`/who-we-serve/${seg.slug}`}
                  className="w-full py-3 rounded-full bg-white hover:bg-slate-200 text-[#0B0F14] font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Learn More</span>
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
            Is Your School Not Listed Here?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Tell us about your school and we will let you know whether we can help.
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
