import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SERVICES } from "@/data/content";
import { 
  Compass, 
  Globe, 
  Search, 
  Target, 
  Megaphone, 
  Share2, 
  Video, 
  Users, 
  Layers, 
  ShieldCheck, 
  Bot, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { RevealSection } from "@/components/Motion";

export const metadata: Metadata = getMetadata({
  title: "Digital Marketing Services for Schools",
  description: "Digital marketing services for schools: social media management, creatives, reels, admission campaigns, Google Ads and Meta Ads coordination, website content updates, SEO, and reporting.",
  path: "/services",
  keywords: ["school marketing services", "school social media management", "school admission campaigns", "school SEO"]
});

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "Services", url: "https://piidigitalmedia.com/services" }
  ]);

  const categories = [
    "Digital Marketing",
    "Strategy & Branding",
    "Web & Tech",
    "Growth Marketing",
    "Creative & Media",
    "Retention & Automation"
  ] as const;

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
            <Compass className="w-3.5 h-3.5 text-[#82A386]" />
            <span>Our Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Digital Marketing Services for Schools.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            What we offer depends on what each school needs. These are the services we provide.
          </p>
        </div>
      </RevealSection>

      {/* Categorized Services List */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {categories.map((cat) => {
          const catServices = SERVICES.filter(s => s.category === cat);
          if (catServices.length === 0) return null;

          return (
            <div key={cat} className="space-y-8">
              <div className="flex items-center gap-4 border-b border-white/[0.08] pb-4">
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {cat}
                </span>
                <span className="text-xs font-mono font-bold bg-[#132E20] text-[#4ADE80] border border-[#224A32] px-2.5 py-0.5 rounded-full">
                  {catServices.length} {catServices.length === 1 ? "Service" : "Services"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((srv) => (
                  <div
                    key={srv.slug}
                    className="bg-[#121820] rounded-3xl p-7 border border-white/[0.08] shadow-md hover:shadow-2xl hover:border-[#82A386]/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#82A386]">
                          {srv.shortTitle}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#17202B] text-[#82A386] flex items-center justify-center group-hover:bg-[#132E20] group-hover:text-[#4ADE80] transition-colors border border-white/[0.06]">
                          <Globe className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-[#82A386] transition-colors">
                        {srv.title}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed">
                        {srv.summary}
                      </p>

                    </div>

                    <div className="pt-6 mt-4 border-t border-white/[0.08] flex items-center justify-end">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="text-xs font-bold text-[#82A386] hover:text-white group-hover:translate-x-1 transition-all inline-flex items-center gap-1"
                      >
                        <span>Full Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </RevealSection>

      {/* Bottom CTA */}
      <RevealSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="bg-[#121820] text-white rounded-3xl p-8 sm:p-12 border border-white/[0.08] space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Not Sure Which Services Your School Needs?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Tell us about your school and we will discuss a scope that fits.
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
