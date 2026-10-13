import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES } from "@/data/content";
import { getMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Clock, 
  TrendingUp, 
  HelpCircle,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { RevealSection } from "@/components/Motion";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return getMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: [service.title, service.shortTitle, "education marketing", "school marketing"]
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "Services", url: "https://piidigitalmedia.com/services" },
    { name: service.shortTitle, url: `https://piidigitalmedia.com/services/${service.slug}` }
  ]);

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.summary,
    url: `https://piidigitalmedia.com/services/${service.slug}`
  });

  return (
    <div className="flex flex-col gap-20 sm:gap-28 pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Header */}
      <RevealSection className="pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132E20] border border-[#224A32] text-[#4ADE80] text-xs font-semibold">
            <span>Practice Area: {service.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#82A386] font-semibold leading-snug">
            &ldquo;{service.headline}&rdquo;
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {service.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#service-inquiry"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-200 text-[#0B0F14] font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Consult on {service.shortTitle}</span>
              <ArrowRight className="w-4 h-4 text-[#0B0F14]" />
            </a>
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-full bg-[#121820] hover:bg-[#17202B] text-white border border-white/[0.12] font-semibold text-sm transition-colors"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* Challenge vs Solution Breakdown */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-red-950/25 border border-red-800/40 rounded-3xl p-8 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-red-400">
              The Challenge
            </div>
            <h3 className="text-xl font-bold text-white">
              What Usually Goes Wrong
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.challenge}
            </p>
          </div>

          <div className="bg-[#132E20]/40 border border-[#224A32] rounded-3xl p-8 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#4ADE80]">
              Our Approach
            </div>
            <h3 className="text-xl font-bold text-white">
              How We Handle It
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.solution}
            </p>
          </div>

        </div>
      </RevealSection>

      {/* Deliverables & Institutional Value */}
      <RevealSection className="bg-[#080B0F]/60 py-20 px-4 sm:px-6 lg:px-8 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#82A386]">What We Deliver</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Scope of Deliverables
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              What is included depends on the scope agreed with each school.
            </p>

            <div className="space-y-3 pt-2">
              {service.deliverables.map((del, i) => (
                <div key={del} className="p-4 rounded-2xl bg-[#121820] border border-white/[0.08] shadow-sm flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#132E20] border border-[#224A32] text-[#4ADE80] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {del}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121820] p-8 rounded-3xl border border-white/[0.08] shadow-2xl space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4ADE80]">Why It Matters</span>
              <h3 className="text-lg font-bold text-white">
                What the School Gains
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.institutionalValue}
              </p>
            </div>
          </div>

        </div>
      </RevealSection>

      {/* 4-Step Process Workflow */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#82A386]">Process</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            How the Work Runs
          </h2>
          <p className="text-slate-400 text-sm">
            Four steps, with the school kept informed at each one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((p, idx) => (
            <div key={p.step} className="bg-[#121820] p-7 rounded-3xl border border-white/[0.08] shadow-md space-y-3">
              <span className="text-xs font-mono font-bold text-[#82A386] block">Step 0{idx + 1}</span>
              <h4 className="text-base font-bold text-white">{p.step}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Dedicated Inquiry Form Section */}
      <RevealSection id="service-inquiry" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8 text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Discuss {service.title} for Your Campus
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Tell us about your school and what you need help with.
          </p>
        </div>
        <ContactForm defaultService={service.shortTitle} />
      </RevealSection>

    </div>
  );
}
