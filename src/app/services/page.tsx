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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#6C836F]" />
            <span>Our Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D151D] tracking-tight leading-tight">
            Digital Marketing Services for Schools.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
              <div className="flex items-center gap-4 border-b border-[#CBD5C8]/80 pb-4">
                <span className="text-xl sm:text-2xl font-extrabold text-[#0D151D] tracking-tight">
                  {cat}
                </span>
                <span className="text-xs font-mono font-bold bg-[#EBF1E9] text-[#2F523E] border border-[#DEE7DC] px-2.5 py-0.5 rounded-full">
                  {catServices.length} {catServices.length === 1 ? "Service" : "Services"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((srv) => (
                  <div
                    key={srv.slug}
                    className="bg-white rounded-3xl p-7 border border-[#CBD5C8]/70 shadow-xs hover:shadow-xl hover:border-[#6C836F] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-[#6C836F]">
                          {srv.shortTitle}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#EBF1E9] text-[#2F523E] flex items-center justify-center group-hover:bg-[#0D151D] group-hover:text-white transition-colors">
                          <Globe className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#0D151D] group-hover:text-[#6C836F] transition-colors">
                        {srv.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                        {srv.summary}
                      </p>

                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-end">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="text-xs font-bold text-[#6C836F] hover:text-[#0D151D] group-hover:translate-x-1 transition-all inline-flex items-center gap-1"
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
        <div className="bg-[#0D151D] text-white rounded-3xl p-8 sm:p-12 border border-[#1C2834] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Not Sure Which Services Your School Needs?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Tell us about your school and we will discuss a scope that fits.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D151D] font-semibold text-sm inline-flex items-center gap-2 transition-all shadow-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </RevealSection>

    </div>
  );
}
