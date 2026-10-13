import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  HeartHandshake, 
  GraduationCap,
  Building
} from "lucide-react";
import { RevealSection } from "@/components/Motion";

export const metadata: Metadata = getMetadata({
  title: "About Us",
  description: "About Pii Digital Media, a brand that manages digital marketing for schools.",
  path: "/about",
  keywords: ["education marketing agency about", "school digital marketing specialists", "education branding agency"]
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "About Us", url: "https://piidigitalmedia.com/about" }
  ]);

  return (
    <div className="flex flex-col gap-20 sm:gap-28 pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <RevealSection className="pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132E20] border border-[#224A32] text-[#4ADE80] text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-[#82A386]" />
            <span>About Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Digital Marketing and Digital Presence for Schools.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Pii Digital Media is a brand that manages digital marketing and digital presence for schools. Great schools deserve to be seen, and our work is to help them show parents what they are really like.
          </p>
        </div>
      </RevealSection>

      {/* Origin Story */}
      <RevealSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#121820] p-8 sm:p-12 rounded-3xl border border-white/[0.08] shadow-2xl space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#82A386]">What We Do</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Work Is With Schools
          </h2>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              We currently work with four schools: CMR School, Kompally; CMR School, Kundanpally; Malla Reddy School, Medchal; and Wellspire International School.
            </p>
            <p>
              Depending on what each school needs, the work covers school websites and their upkeep, social media management, posters and carousels, reels and promotional videos, admission campaigns, Google Ads and Meta Ads coordination, SEO, content calendars, and performance reporting.
            </p>
            <p>
              The scope is different for every school, and it is agreed with the school before the work starts.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* 4 Pillars of Our Methodology */}
      <RevealSection className="bg-[#080B0F]/60 py-20 px-4 sm:px-6 lg:px-8 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              The principles we apply to every school we work with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#121820] p-7 rounded-3xl border border-white/[0.08] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#132E20] border border-[#224A32] text-[#4ADE80] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white">No Invented Claims</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We do not promise guaranteed admissions or publish achievements, statistics, or testimonials a school has not confirmed.
              </p>
            </div>

            <div className="bg-[#121820] p-7 rounded-3xl border border-white/[0.08] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#17202B] border border-white/[0.08] text-[#82A386] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white">Checked Before Publishing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                School names, dates, curriculum, and admission details are confirmed with the school before they go out.
              </p>
            </div>

            <div className="bg-[#121820] p-7 rounded-3xl border border-white/[0.08] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#132E20] border border-[#224A32] text-[#4ADE80] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white">Each School Kept Separate</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every school has its own content, campaigns, assets, and performance reports.
              </p>
            </div>

            <div className="bg-[#121820] p-7 rounded-3xl border border-white/[0.08] shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#17202B] border border-white/[0.08] text-[#82A386] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-white">Consistent Branding</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Each school keeps one consistent look and voice across social media, its website, advertisements, and presentations.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* CTA Footer Band */}
      <RevealSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="bg-[#121820] text-white rounded-3xl p-8 sm:p-12 border border-white/[0.08] space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Want to Talk About Your School?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Tell us about your school and what you need help with.
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
