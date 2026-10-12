import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SCHOOLS } from "@/data/content";
import { Sparkles, ArrowRight, CheckCircle2, MapPin, ExternalLink } from "lucide-react";
import { RevealSection } from "@/components/Motion";

export const metadata: Metadata = getMetadata({
  title: "Schools We Work With",
  description: "The schools whose digital marketing PII Digital Media currently manages.",
  path: "/work",
  keywords: ["school digital marketing", "school social media management", "school admission campaigns"]
});

export default function WorkIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "Our Schools", url: "https://piidigitalmedia.com/work" }
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
            <Sparkles className="w-3.5 h-3.5 text-[#6C836F]" />
            <span>Our Schools</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D151D] tracking-tight leading-tight">
            Schools We Work With.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            PII Digital Media currently works with {SCHOOLS.length} schools. Each school&apos;s content, campaigns, and reports are managed separately.
          </p>
        </div>
      </RevealSection>

      {/* Schools */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SCHOOLS.map((school) => (
            <div
              key={school.slug}
              className="bg-white rounded-3xl overflow-hidden border border-[#CBD5C8]/80 shadow-md hover:shadow-xl hover:border-[#6C836F] transition-all flex flex-col"
            >
              {school.image && (
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 border-b border-[#CBD5C8]/50">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                  {school.location && (
                    <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#0D151D] flex items-center gap-1.5 shadow-sm">
                      <MapPin className="w-3 h-3 text-[#6C836F]" />
                      <span>{school.location}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-7 sm:p-9 flex flex-col gap-5 flex-1">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0D151D]">
                    {school.website ? (
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#6C836F] transition-colors"
                      >
                        {school.name}
                      </a>
                    ) : (
                      school.name
                    )}
                  </h2>

                <div className="flex flex-wrap items-center gap-2">
                  {school.location && (
                    <span className="text-xs text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#6C836F]" /> {school.location}
                    </span>
                  )}
                  {school.curriculum && (
                    <span className="text-[11px] font-bold bg-[#EBF1E9] text-[#2F523E] border border-[#DEE7DC] px-2.5 py-0.5 rounded-full">
                      {school.curriculum}
                    </span>
                  )}
                </div>
              </div>

              {school.scope.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    What we handle
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {school.scope.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {school.website && (
                <a
                  href={school.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-xs font-bold text-[#0D151D] hover:text-[#6C836F] inline-flex items-center gap-1.5"
                >
                  <span>Visit school website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
        </div>
      </RevealSection>

      {/* Bottom CTA */}
      <RevealSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="bg-[#0D151D] text-white rounded-3xl p-8 sm:p-12 border border-[#1C2834] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Want Us to Manage Your School&apos;s Digital Marketing?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Tell us about your school and what you need. We will get back to you to discuss the scope.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D151D] font-semibold text-sm inline-flex items-center gap-2 transition-all shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

    </div>
  );
}
