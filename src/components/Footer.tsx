import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { 
  CONTACT_PHONE_DISPLAY, 
  CONTACT_PHONE_E164, 
  WHATSAPP_URL, 
  SERVICES,
  MAIN_SERVICES,
  EDUCATION_SEGMENTS,
  CONTACT_EMAIL,
  CONTACT_LOCATION
} from "@/data/content";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-[#ffffff] pt-16 sm:pt-20 pb-12 border-t border-[#ffffff1f] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-[#ffffff1f]">
          
          {/* Brand & Mission Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Logo size={42} />
              <div>
                <span className="font-heading font-extrabold text-white text-lg tracking-tight block group-hover:text-zinc-200 transition-colors">
                  Pii Digital Media
                </span>
                <span className="font-mono text-[9px] font-semibold tracking-widest text-[#94a3b8] uppercase">
                  Great Schools Deserve to Be Seen
                </span>
              </div>
            </Link>

            <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed max-w-md">
              Complete digital presence and strategic marketing for schools: high-converting admission websites, weekly reels, campus event coverage, Google Ads, Meta Ads, and search engine optimization.
            </p>

            <div className="p-4 rounded-[12px] bg-[#09090b] border border-[#ffffff1f] flex items-start gap-3 max-w-md">
              <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <div className="text-xs text-[#a1a1aa] leading-relaxed">
                <span className="font-semibold text-white block">Dedicated Institutional Focus</span>
                Each school&apos;s data, creatives, admission inquiries, and performance reports are managed in strict isolation with leadership sign-off prior to publishing.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#a1a1aa] pt-1">
              <a href={`tel:${CONTACT_PHONE_E164}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#94a3b8]" />
                <span className="font-mono">{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <span className="text-[#71717a]">•</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#94a3b8]" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <span className="text-[#71717a]">•</span>
              <div className="flex items-center gap-1.5 text-[#71717a]">
                <MapPin className="w-3.5 h-3.5 text-[#94a3b8]" />
                <span>{CONTACT_LOCATION}</span>
              </div>
            </div>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white">
              Institutional Services
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#a1a1aa]">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors flex items-center justify-between group">
                    <span>{s.shortTitle}</span>
                    <ArrowRight className="w-3 h-3 text-transparent group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="font-mono text-[11px] text-[#3b82f6] hover:underline flex items-center gap-1">
                  View all 9 capabilities &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Segments & Work (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white">
              Who We Serve
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#a1a1aa]">
              {EDUCATION_SEGMENTS.map((seg) => (
                <li key={seg.slug}>
                  <Link href={`/who-we-serve/${seg.slug}`} className="hover:text-white transition-colors">
                    {seg.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white block mb-1">
                  Our Work
                </span>
                <Link href="/work" className="hover:text-white transition-colors">
                  Partner Schools
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency & Guides (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white">
              Navigation
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#a1a1aa]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Agency</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">Schools We Work With</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">Insights & Playbooks</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li className="pt-2">
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] bg-[#18181b] border border-[#ffffff1f] hover:border-[#ffffff47] text-white text-[11px] transition-all"
                >
                  <MessageCircle className="w-3 h-3 text-[#3b82f6]" />
                  <span>WhatsApp Desk</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>© 2026 Pii Digital Media. All rights reserved.</p>
          <div className="font-mono text-[10px] tracking-widest text-[#a1a1aa] uppercase flex items-center gap-3">
            <span>CREATE</span>
            <span className="text-[#27272a]">•</span>
            <span>CONNECT</span>
            <span className="text-[#27272a]">•</span>
            <span>GROW</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
