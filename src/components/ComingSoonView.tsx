"use client";

import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  Megaphone,
  Video,
  Globe
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { 
  CONTACT_PHONE_DISPLAY, 
  CONTACT_PHONE_E164, 
  WHATSAPP_URL, 
  CONTACT_EMAIL, 
  CONTACT_LOCATION,
  SCHOOLS 
} from "@/data/content";

export function ComingSoonView() {
  return (
    <div className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center py-10 sm:py-16 lg:py-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#132E20]/30 via-[#82A386]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-10 w-[450px] h-[350px] bg-[#121820]/60 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Grid: Info + Contact Details (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Coming Soon Hero & Contact Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Header Badge & Title */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132E20] border border-[#224A32] text-[#4ADE80] text-xs font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Launching Soon</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                Great Schools Deserve{" "}
                <span className="font-serif italic font-normal text-[#82A386]">
                  to Be Seen.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Our new institutional platform is currently under development. In the meantime, our marketing, creative storytelling, and admission campaign desks are fully operational and welcoming select school partners.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* WhatsApp Card */}
              <a
                href={`${WHATSAPP_URL}?text=Hi%20Pii%20Digital%20Media%2C%20I%20would%20like%20to%20discuss%20marketing%20for%20our%20school.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#121820] border border-white/[0.08] hover:border-[#82A386]/50 hover:bg-[#17202B] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#132E20] border border-[#224A32] flex items-center justify-center text-[#4ADE80]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#4ADE80] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Instant Chat <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block mb-0.5">WhatsApp Desk</span>
                  <span className="text-sm font-semibold text-white tracking-wide">{CONTACT_PHONE_DISPLAY}</span>
                </div>
              </a>

              {/* Phone Direct Card */}
              <a
                href={`tel:${CONTACT_PHONE_E164}`}
                className="p-5 rounded-2xl bg-[#121820] border border-white/[0.08] hover:border-[#82A386]/50 hover:bg-[#17202B] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#17202B] border border-white/[0.1] flex items-center justify-center text-[#82A386]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 group-hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Direct Call <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block mb-0.5">Direct Line</span>
                  <span className="text-sm font-semibold text-white tracking-wide">{CONTACT_PHONE_DISPLAY}</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="p-5 rounded-2xl bg-[#121820] border border-white/[0.08] hover:border-[#82A386]/50 hover:bg-[#17202B] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#17202B] border border-white/[0.1] flex items-center justify-center text-[#82A386]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 group-hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Email Desk <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block mb-0.5">Official Inquiries</span>
                  <span className="text-sm font-semibold text-white truncate block">{CONTACT_EMAIL}</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#121820] border border-white/[0.08] flex flex-col justify-between shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#17202B] border border-white/[0.1] flex items-center justify-center text-[#82A386]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">Headquarters</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block mb-0.5">Location</span>
                  <span className="text-sm font-semibold text-white tracking-wide">{CONTACT_LOCATION}</span>
                </div>
              </div>

            </div>

            {/* What We Are Actively Handling */}
            <div className="p-6 rounded-2xl bg-[#121820] border border-white/[0.08]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#82A386] block mb-3">
                Core Services Open for School Partnerships
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Admission Campaigns (Meta & Google Ads)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Social Media & Continuous Reels Production</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>School Websites & Digital Portals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Complete Retainers for K-12 & Early Years</span>
                </div>
              </div>
            </div>

            {/* Partner Schools Proof */}
            <div className="p-5 rounded-2xl bg-[#0E141B] border border-white/[0.06] flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#82A386] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-white block mb-0.5">Currently Partnering With:</span>
                {SCHOOLS.map((s) => s.name).join(" • ")}. Each school&apos;s digital branding, campaigns, and enquiries are maintained with complete confidentiality and dedicated management.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#121820] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132E20] border border-[#224A32] text-[#4ADE80] text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#82A386]" />
                  <span>Partner With Us</span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Send an Enquiry
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Tell us about your institution and our director desk will connect directly with you.
                </p>
              </div>

              {/* The fully functional contact form */}
              <ContactForm />

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
