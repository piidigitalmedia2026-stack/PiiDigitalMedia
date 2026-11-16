"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X, Globe, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, WHATSAPP_URL, MAIN_SERVICES, IS_COMING_SOON, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from "@/data/content";
import { Logo } from "@/components/Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/80 backdrop-blur-xl border-b border-[#ffffff1f] transition-all">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between">
        
        {/* Brand Logo & Tag */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 sm:gap-3 shrink-0 cursor-pointer group">
          <Logo size={32} />
          <div className="flex flex-col justify-center">
            <span className="font-heading font-bold text-white text-[13.5px] sm:text-[16px] tracking-tight leading-tight group-hover:text-zinc-200 transition-colors">
              Pii Digital Media
            </span>
            <span className="font-mono text-[7.5px] sm:text-[9px] tracking-[0.14em] text-[#94a3b8] uppercase font-medium">
              EDUCATION MARKETING & WEB
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button 
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] text-xs xl:text-[13px] font-medium transition-all ${
                pathname.startsWith("/services")
                  ? "text-white bg-[#18181b] border border-[#ffffff1f]"
                  : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]/50"
              }`}
              aria-expanded={servicesDropdown}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#71717a] transition-transform duration-200 ${servicesDropdown ? "rotate-180 text-white" : ""}`} />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-[500px] bg-[#09090b] rounded-[12px] shadow-2xl border border-[#ffffff1f] p-3 grid grid-cols-2 gap-2 mt-2 z-50 backdrop-blur-2xl">
                <div className="col-span-2 pb-2 mb-1 border-b border-[#ffffff1f] flex items-center justify-between px-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#71717a]">Our Core Capabilities</span>
                  <Link href="/services" className="font-mono text-[11px] text-[#3b82f6] hover:underline flex items-center gap-1">
                    All {SERVICES.length} Services &rarr;
                  </Link>
                </div>
                {MAIN_SERVICES.map((srv) => (
                  <Link 
                    key={srv.slug}
                    href={`/services/${srv.slug}`}
                    className="p-2.5 rounded-[12px] bg-[#18181b]/40 hover:bg-[#18181b] border border-transparent hover:border-[#ffffff1f] transition-all flex items-start gap-2.5 group"
                  >
                    <div className="w-7 h-7 rounded-[8px] bg-[#27272a] text-white flex items-center justify-center shrink-0 mt-0.5 border border-[#ffffff1f]">
                      <Globe className="w-3.5 h-3.5 text-[#94a3b8]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white group-hover:text-[#3b82f6] transition-colors">{srv.shortTitle}</div>
                      <p className="text-[11px] text-[#a1a1aa] line-clamp-1">{srv.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/work" 
            className={`px-3 py-1.5 rounded-[12px] text-xs xl:text-[13px] font-medium transition-all ${
              pathname.startsWith("/work")
                ? "text-white bg-[#18181b] border border-[#ffffff1f]"
                : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]/50"
            }`}
          >
            Schools & Work
          </Link>

          <Link 
            href="/who-we-serve" 
            className={`px-3 py-1.5 rounded-[12px] text-xs xl:text-[13px] font-medium transition-all ${
              pathname.startsWith("/who-we-serve")
                ? "text-white bg-[#18181b] border border-[#ffffff1f]"
                : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]/50"
            }`}
          >
            Who We Serve
          </Link>

          <Link 
            href="/insights" 
            className={`px-3 py-1.5 rounded-[12px] text-xs xl:text-[13px] font-medium transition-all ${
              pathname.startsWith("/insights")
                ? "text-white bg-[#18181b] border border-[#ffffff1f]"
                : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]/50"
            }`}
          >
            Insights
          </Link>

          <Link 
            href="/about" 
            className={`px-3 py-1.5 rounded-[12px] text-xs xl:text-[13px] font-medium transition-all ${
              pathname === "/about"
                ? "text-white bg-[#18181b] border border-[#ffffff1f]"
                : "text-[#a1a1aa] hover:text-white hover:bg-[#18181b]/50"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Secondary CTA: WhatsApp */}
          <a 
            href={`${WHATSAPP_URL}?text=Hello%20Pii%20Digital%20Media%2C%20we%20would%20like%20to%20discuss%20marketing%20for%20our%20school.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-3.5 rounded-[12px] bg-transparent border border-[#ffffff1f] hover:border-[#ffffff47] hover:bg-white/5 text-xs font-medium text-white transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
            <span>WhatsApp</span>
          </a>

          {/* Primary CTA: Book Free Call (White bg + Black text) */}
          <Link 
            href="/contact" 
            className="h-8 sm:h-9 px-2.5 sm:px-4 rounded-[10px] sm:rounded-[12px] bg-white hover:bg-zinc-200 text-black text-[11px] sm:text-xs font-semibold tracking-tight transition-all flex items-center gap-1 sm:gap-1.5 shadow-sm active:scale-[0.98]"
          >
            <span>Book Free Call</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] sm:rounded-[12px] bg-[#18181b] border border-[#ffffff1f] flex items-center justify-center text-white hover:bg-[#27272a] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-[#ffffff1f] bg-[#09090b] px-4 py-5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-3 rounded-[12px] text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-[#18181b] transition-colors min-h-[44px] flex items-center"
              >
                Services ({SERVICES.length} Capabilities)
              </Link>
              <Link 
                href="/work" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-3 rounded-[12px] text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-[#18181b] transition-colors min-h-[44px] flex items-center"
              >
                Schools & Work
              </Link>
              <Link 
                href="/who-we-serve" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-3 rounded-[12px] text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-[#18181b] transition-colors min-h-[44px] flex items-center"
              >
                Who We Serve
              </Link>
              <Link 
                href="/insights" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-3 rounded-[12px] text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-[#18181b] transition-colors min-h-[44px] flex items-center"
              >
                Insights & Guides
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-3 rounded-[12px] text-sm font-medium text-[#a1a1aa] hover:text-white hover:bg-[#18181b] transition-colors min-h-[44px] flex items-center"
              >
                About Agency
              </Link>

              <div className="pt-3 mt-2 border-t border-[#ffffff1f] flex flex-col gap-2.5">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center rounded-[12px] bg-transparent border border-[#ffffff1f] hover:border-[#ffffff47] text-white font-medium text-xs flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  <span>WhatsApp Desk</span>
                </a>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-center rounded-[12px] bg-white text-black font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm min-h-[44px]"
                >
                  <span>Book Free Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
