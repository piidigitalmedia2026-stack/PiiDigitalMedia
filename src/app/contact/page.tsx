import React from "react";
import { Metadata } from "next";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_URL } from "@/data/content";
import { ContactForm } from "@/components/ContactForm";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  MessageSquare
} from "lucide-react";
import { RevealSection } from "@/components/Motion";

export const metadata: Metadata = getMetadata({
  title: "Contact Us",
  description: "Contact Pii Digital Media about digital marketing for your school. Call or WhatsApp +91 79899 95014.",
  path: "/contact",
  keywords: ["education marketing agency contact", "book school marketing strategy call", "school admissions audit"]
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "Contact", url: "https://piidigitalmedia.com/contact" }
  ]);

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <RevealSection className="pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132E20] border border-[#224A32] text-[#4ADE80] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#82A386]" />
            <span>Contact</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let’s Grow Your Institution Together.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us about your school and what you need help with, and we will get back to you.
          </p>
        </div>
      </RevealSection>

      {/* Main Grid */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Agency Channels & Assurance */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-[#121820] text-white space-y-6 shadow-2xl border border-white/[0.08]">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4ADE80]">
                Direct Contact Channels
              </span>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#82A386] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Phone & WhatsApp</span>
                    <a href={`tel:${CONTACT_PHONE_E164}`} className="font-bold text-white text-base hover:underline">{CONTACT_PHONE_DISPLAY}</a>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#132E20] border border-[#224A32] hover:bg-[#1A3D2A] text-[#4ADE80] font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-8 rounded-3xl bg-[#121820] border border-white/[0.08] shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white">
                What Happens After You Submit:
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">1. We read your enquiry.</strong> Your details reach us directly.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">2. We get in touch.</strong> We contact you by phone or WhatsApp to understand what your school needs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">3. We agree the scope.</strong> If it is a fit, we agree what work we will take on for your school.</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E141B] border border-white/[0.08] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#82A386] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400">
                <strong className="text-white block font-bold">Your Details</strong>
                We use the details you send only to respond to your enquiry.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </RevealSection>

    </div>
  );
}
