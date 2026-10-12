import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  Sparkles, 
  ShieldCheck
} from "lucide-react";
import { SERVICES, EDUCATION_SEGMENTS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_URL } from "@/data/content";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-[#0D151D] text-white pt-20 pb-12 border-t border-[#1C2834] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#6C836F]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Call to Action Ribbon */}
        <div className="bg-[#141F2A] border border-[#223242] rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6C836F]" />
              <span>Get in Touch</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Let&apos;s Talk About <span className="font-serif italic font-normal text-[#CBD5C8]">Your School.</span>
            </h3>
            <p className="text-[#94A3B8] text-sm sm:text-base mt-2 leading-relaxed">
              Tell us about your school and what you need help with. We will get back to you to discuss the scope.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D151D] font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#EBF1E9] border border-[#DEE7DC] hover:bg-[#DEE7DC] text-[#2F523E] font-semibold text-sm transition-colors text-center flex items-center justify-center gap-2 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#6C836F] animate-pulse" />
              WhatsApp Us Direct
            </a>
          </div>
        </div>

        {/* Multi-Column Main Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1C2834]">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Logo size={48} />
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight block group-hover:text-[#6C836F] transition-colors">
                  PII Digital Media
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#6C836F] uppercase">
                  Create • Connect • Grow
                </span>
              </div>
            </Link>

            <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-sm">
              PII Digital Media manages digital marketing for schools: social media, creatives, reels, admission campaigns, ads, website content, and SEO.
            </p>

            <div className="p-4 rounded-2xl bg-[#141F2A] border border-[#223242] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#6C836F] shrink-0 mt-0.5" />
              <div className="text-xs text-[#CBD5E1]">
                <span className="font-semibold text-white block">Focused on Schools</span>
                Each school&apos;s content, campaigns, and reports are managed separately, and details are confirmed with the school before publishing.
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6C836F]" />
                <a href={`tel:${CONTACT_PHONE_E164}`} className="py-1.5 hover:text-white transition-colors">{CONTACT_PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">Strategic Services</h4>
            <ul className="flex flex-col gap-0.5 sm:gap-2 text-sm sm:text-xs text-[#94A3B8]">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[#6C836F] hover:underline font-semibold mt-1 inline-block">
                  View All {SERVICES.length} Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Education Segments Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">Who We Serve</h4>
            <ul className="flex flex-col gap-0.5 sm:gap-2 text-sm sm:text-xs text-[#94A3B8]">
              {EDUCATION_SEGMENTS.map((seg) => (
                <li key={seg.slug}>
                  <Link href={`/who-we-serve/${seg.slug}`} className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">
                    {seg.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Knowledge Hub Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">Knowledge & Legal</h4>
            <ul className="flex flex-col gap-0.5 sm:gap-2 text-sm sm:text-xs text-[#94A3B8]">
              <li>
                <Link href="/about" className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">About PII Digital Media</Link>
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
              <li>
                <Link href="/sitemap.xml" className="inline-block py-1.5 sm:py-0 hover:text-white transition-colors">XML Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© 2026 PII Digital Media. All rights reserved.</p>
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
