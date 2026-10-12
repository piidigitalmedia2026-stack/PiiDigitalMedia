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
  description: "About PII Digital Media, a brand that manages digital marketing for schools.",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-[#6C836F]" />
            <span>Our Origin & Purpose</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D151D] tracking-tight leading-tight">
            We Believe Education Is the Most Consequential Choice a Family Ever Makes.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            That is why it should never be marketed like sneakers, soda, or smartphone apps. PII Digital Media was founded on a simple conviction: great schools deserve strategic, dignified, and measurable digital visibility.
          </p>
        </div>
      </RevealSection>

      {/* Origin Story */}
      <RevealSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#CBD5C8]/80 shadow-xs space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6C836F]">The Agency Story</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D151D] tracking-tight">
            Why We Rejected General Marketing to Specialize Solely in Education
          </h2>
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              In 2021, our leadership observed a troubling pattern: exceptional educational institutions with visionary academic programs, stellar faculty, and Olympic-grade sports complexes were struggling to attract students. Meanwhile, aggressive franchise operators with heavy commercial ad spend were vacuuming up student admissions.
            </p>
            <p>
              When legacy institutions hired traditional advertising agencies, the results were disastrous. The agencies ran cheesy discount banners, published stock photos of European children on Indian school websites, and flooded admission desks with unqualified spam leads.
            </p>
            <p>
              We built <strong>PII Digital Media</strong> to solve this exact gap: combining deep understanding of pedagogy, board guidelines, and parent decision psychology with cutting-edge digital performance marketing, video storytelling, and conversion engineering.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* 4 Pillars of Our Methodology */}
      <RevealSection className="bg-white/60 py-20 px-4 sm:px-6 lg:px-8 border-y border-[#CBD5C8]/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-extrabold text-[#0D151D] tracking-tight">
              Our Core Operating Principles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The ethical and strategic guardrails that guide every campaign we produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#CBD5C8]/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF1E9] text-[#2F523E] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-[#0D151D]">No Fake Claims or Gimmicks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never make fabricated promises of &lsquo;100% Guaranteed Admissions&rsquo; or invent fictional awards. Parent trust is built on unyielding truth.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#CBD5C8]/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] text-[#0D151D] border border-[#CBD5C8]/80 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-[#0D151D]">Pedagogy-First Storytelling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We study your curriculum, experiential learning philosophy, teacher training, and safety standards to articulate authentic value.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#CBD5C8]/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#DCF4E7] text-[#186641] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-[#0D151D]">Radical Data Transparency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time Looker Studio dashboards tracking cost-per-inquiry, campus visit completions, and counselor response times.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#CBD5C8]/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF1E9] text-[#2F523E] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-[#0D151D]">Long-Term Institutional Value</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We build enduring digital assets—high-authority SEO backlinks, authentic review moats, and cinematic brand films—that pay dividends for years.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>



      {/* CTA Footer Band */}
      <RevealSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="bg-[#0D151D] text-white rounded-3xl p-8 sm:p-12 border border-[#1C2834] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Build a Meaningful Growth Partnership?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Let&apos;s discuss your institution&apos;s admissions goals, competitive landscape, and digital visibility.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D151D] font-semibold text-sm inline-flex items-center gap-2 transition-all shadow-md"
            >
              <span>Schedule Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

    </div>
  );
}
