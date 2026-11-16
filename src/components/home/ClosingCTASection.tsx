"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { 
  CONTACT_PHONE_DISPLAY, 
  CONTACT_PHONE_E164, 
  WHATSAPP_URL, 
  CONTACT_LOCATION 
} from "@/data/content";
import { ContactForm } from "@/components/ContactForm";

export function ClosingCTASection() {
  return (
    <section id="contact" className="w-full bg-[#000000] py-14 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background blueprint lines & radial glow */}
      <div className="absolute inset-0 blueprint-lines pointer-events-none opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info & Value Prop (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 lg:sticky lg:top-28">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3 sm:mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span className="font-mono text-[9.5px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8]">
                  Start the Conversation
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Ready to Elevate Your School&apos;s <span className="font-serif italic font-normal text-slate-300">Digital Presence?</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#a1a1aa] leading-relaxed">
                Schedule a consultation to review your admission objectives, social channels, or school website. We provide clear deliverables and dedicated institutional attention.
              </p>
            </div>

            {/* Direct Desks Card */}
            <div className="p-5 rounded-2xl bg-[#09090b] border border-white/[0.08] flex flex-col gap-3.5 shadow-xl">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#71717a]">
                Direct Leadership Desks
              </span>

              <a
                href={`tel:${CONTACT_PHONE_E164}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#141416] border border-white/[0.08] hover:border-white/[0.2] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white" />
                  <div>
                    <span className="font-mono text-[10px] text-[#71717a] block">Phone / Direct Line</span>
                    <span className="font-mono text-xs font-bold text-white">{CONTACT_PHONE_DISPLAY}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#71717a] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={`${WHATSAPP_URL}?text=Hello%20Pii%20Digital%20Media%2C%20we%20would%20like%20to%20schedule%20a%20discussion%20for%20our%20school.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#141416] border border-white/[0.08] hover:border-white/[0.2] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#3b82f6]" />
                  <div>
                    <span className="font-mono text-[10px] text-[#71717a] block">Instant WhatsApp Desk</span>
                    <span className="font-mono text-xs font-bold text-white">Chat with Strategy Lead</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#71717a] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#141416] border border-white/[0.08]">
                <MapPin className="w-4 h-4 text-[#94a3b8]" />
                <div className="text-xs text-[#a1a1aa]">
                  <span className="font-mono text-[10px] text-[#71717a] block">Headquarters</span>
                  <span className="text-white font-medium">{CONTACT_LOCATION}</span>
                </div>
              </div>
            </div>

            {/* Reassurance Badge */}
            <div className="p-4 rounded-2xl bg-[#09090b] border border-white/[0.08] flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <div className="text-xs text-[#a1a1aa] leading-relaxed">
                <strong className="text-white">Leadership Approval:</strong> No school event, student creative, or fee circular is published without prior sign-off from authorized school management.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
