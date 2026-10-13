import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  Sparkles, 
  ShieldCheck
} from "lucide-react";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_URL, MAIN_SERVICES } from "@/data/content";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-[#080B0F] text-white pt-20 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#82A386]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Call to Action Ribbon */}
        <div className="bg-[#121820] border border-white/[0.08] rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132E20] border border-[#224A32] text-[#4ADE80] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#82A386]" />
              <span>Get in Touch</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Let&apos;s Talk About <span className="font-serif italic font-normal text-[#82A386]">Your School.</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
              Tell us about your school and what you need help with. We will get back to you to discuss the scope.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-200 text-[#0B0F14] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#0B0F14] group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#132E20] border border-[#224A32] hover:bg-[#1A3D2A] text-[#4ADE80] font-semibold text-sm transition-colors text-center flex items-center justify-center gap-2 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              WhatsApp Us Direct
            </a>
          </div>
        </div>

        {/* Multi-Column Main Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/[0.08]">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Logo size={48} />
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block group-hover:text-[#82A386] transition-colors">
                  Pii Digital Media
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#82A386] uppercase">
                  Create • Connect • Grow
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Pii Digital Media manages digital marketing for schools: social media, creatives, reels, admission campaigns, ads, website content, and SEO.
            </p>

            <div className="p-4 rounded-2xl bg-[#0E141B] border border-white/[0.08] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#82A386] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white block">Focused on Schools</span>
                Each school&apos;s content, campaigns, and reports are managed separately, and details are confirmed with the school before publishing.
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#82A386]" />
                <a href={`tel:${CONTACT_PHONE_E164}`} className="py-1.5 hover:text-white transition-colors">{CONTACT_PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Main Services</h4>
            <ul className="flex flex-col gap-0.5 sm:gap-2 text-sm sm:text-xs text-slate-400">
              {MAIN_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Knowledge Hub Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Company</h4>
            <ul className="flex flex-col gap-0.5 sm:gap-2 text-sm sm:text-xs text-slate-400">
              <li>
                <Link href="/about" className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">About Pii Digital Media</Link>
              </li>
              <li>
                <Link href="/work" className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">Schools We Work With</Link>
              </li>
              <li>
                <Link href="/insights" className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">Admissions Marketing Guides</Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Pii Digital Media. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Create</span>
            <span>Connect</span>
            <span>Grow</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
