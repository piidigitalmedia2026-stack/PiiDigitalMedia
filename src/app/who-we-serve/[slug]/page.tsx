import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { EDUCATION_SEGMENTS, SERVICES } from "@/data/content";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Building2, 
  Target 
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { RevealSection } from "@/components/Motion";

export async function generateStaticParams() {
  return EDUCATION_SEGMENTS.map((segment) => ({
    slug: segment.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const segment = EDUCATION_SEGMENTS.find((s) => s.slug === slug);
  if (!segment) return {};

  return getMetadata({
    title: segment.title,
    description: `How Pii Digital Media approaches digital marketing for ${segment.title}.`,
    path: `/who-we-serve/${segment.slug}`,
    keywords: [segment.title, "school marketing", "admissions strategy", "education growth"]
  });
}

export default async function SegmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const segment = EDUCATION_SEGMENTS.find((s) => s.slug === slug);

  if (!segment) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "Who We Serve", url: "https://piidigitalmedia.com/who-we-serve" },
    { name: segment.title, url: `https://piidigitalmedia.com/who-we-serve/${segment.slug}` }
  ]);

  return (
    <div className="flex flex-col gap-20 sm:gap-28 pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <RevealSection className="pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132E20] border border-[#224A32] text-[#4ADE80] text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-[#82A386]" />
            <span>Who We Serve</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {segment.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#82A386] font-semibold leading-snug">
            {segment.subtitle}
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {segment.audience}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#segment-inquiry"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-200 text-[#0B0F14] font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Consult on {segment.title}</span>
              <ArrowRight className="w-4 h-4 text-[#0B0F14]" />
            </a>
            <Link
              href="/who-we-serve"
              className="px-6 py-3.5 rounded-full bg-[#121820] hover:bg-[#17202B] text-white border border-white/[0.12] font-semibold text-sm transition-colors"
            >
              All Institutional Segments
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* Challenges vs Strategic Solutions */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-red-950/25 border border-red-800/40 rounded-3xl p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
              <AlertTriangle className="w-4 h-4" />
              <span>Common Challenges</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              What These Schools Often Face
            </h3>
            <ul className="space-y-3 pt-2">
              {segment.keyChallenges.map((ch) => (
                <li key={ch} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#132E20]/40 border border-[#224A32] rounded-3xl p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4ADE80]">
              <Sparkles className="w-4 h-4 text-[#82A386]" />
              <span>Our Approach</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              How We Help
            </h3>
            <ul className="space-y-3 pt-2">
              {segment.strategicSolutions.map((sol) => (
                <li key={sol} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] mt-0.5 shrink-0" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </RevealSection>

      {/* Inquiry Form */}
      <RevealSection id="segment-inquiry" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8 text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Talk to Us About Your School
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Tell us about your school and what you need help with.
          </p>
        </div>
        <ContactForm defaultSegment={segment.title} />
      </RevealSection>

    </div>
  );
}
