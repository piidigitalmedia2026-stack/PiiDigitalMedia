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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] text-xs font-semibold">
            <span>Practice Area: {service.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D151D] tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#6C836F] font-semibold leading-snug">
            &ldquo;{service.headline}&rdquo;
          </p>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {service.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#service-inquiry"
              className="px-6 py-3.5 rounded-full bg-[#0D151D] hover:bg-[#6C836F] text-white font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Consult on {service.shortTitle}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-full bg-[#FAF9F5] hover:bg-[#EBF1E9] text-[#0D151D] border border-[#CBD5C8] font-semibold text-sm transition-colors"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* Challenge vs Solution Breakdown */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-red-50/50 border border-red-200/60 rounded-3xl p-8 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-red-600">
              The Institutional Challenge
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Why Traditional Approaches Fail
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.challenge}
            </p>
          </div>

          <div className="bg-[#EBF1E9]/70 border border-[#DEE7DC] rounded-3xl p-8 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#2F523E]">
              The PII Strategic Intervention
            </div>
            <h3 className="text-xl font-bold text-[#0D151D]">
              Our Education-Focused Solution
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.solution}
            </p>
          </div>

        </div>
      </RevealSection>

      {/* Deliverables & Institutional Value */}
      <RevealSection className="bg-white/60 py-20 px-4 sm:px-6 lg:px-8 border-y border-[#CBD5C8]/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C836F]">What We Deliver</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D151D] tracking-tight">
              Scope of Deliverables
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every deliverable is produced with strict adherence to institutional standards, safeguarding your leadership&apos;s reputation.
            </p>

            <div className="space-y-3 pt-2">
              {service.deliverables.map((del, i) => (
                <div key={del} className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#CBD5C8]/80 shadow-xs flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#EBF1E9] text-[#2F523E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="text-sm font-semibold text-[#0D151D]">
                    {del}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#CBD5C8]/80 shadow-lg space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#186641]">Why It Matters</span>
              <h3 className="text-lg font-bold text-[#0D151D]">
                What the School Gains
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.institutionalValue}
              </p>
            </div>
          </div>

        </div>
      </RevealSection>

      {/* 4-Step Process Workflow */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6C836F]">Execution Discipline</span>
          <h2 className="text-3xl font-extrabold text-[#0D151D] tracking-tight">
            How We Execute This Practice
          </h2>
          <p className="text-slate-600 text-sm">
            A structured 4-step workflow that keeps institutional leadership informed without micromanagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((p, idx) => (
            <div key={p.step} className="bg-white p-7 rounded-3xl border border-[#CBD5C8]/80 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#6C836F] block">Step 0{idx + 1}</span>
              <h4 className="text-base font-bold text-[#0D151D]">{p.step}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Dedicated Inquiry Form Section */}
      <RevealSection id="service-inquiry" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8 text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Discuss {service.title} for Your Campus
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Our education strategy team will prepare a customized assessment and proposal.
          </p>
        </div>
        <ContactForm defaultService={service.shortTitle} />
      </RevealSection>

    </div>
  );
}
