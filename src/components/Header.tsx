"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, WHATSAPP_URL, MAIN_SERVICES } from "@/data/content";
import { Logo } from "@/components/Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-3 transition-colors bg-[#FAF9F5]/[0.97]">
      <div className="w-full max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-8 xl:px-12">
        {/* Mobile Floating Pill Navbar (< lg) - EXACT MATCH TO MOCKUP */}
        <div className="flex lg:hidden items-center justify-between bg-white/95 rounded-full px-3.5 py-1.5 border border-[#CBD5C8]/60 shadow-xs">
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 min-w-0 cursor-pointer group">
            <Logo size={34} />
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-bold text-[#0D151D] text-[13.5px] tracking-tight leading-tight truncate">
                PII Digital Media
              </span>
              <span className="text-[7px] font-bold tracking-[0.15em] text-[#64748B] uppercase">
                CREATE • CONNECT • GROW
              </span>
            </div>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 rounded-full bg-[#F0F3EF] flex items-center justify-center text-[#0D151D] hover:bg-[#E2E8DF] transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#0D151D]" /> : <Menu className="w-4 h-4 text-[#0D151D]" />}
          </button>
        </div>

        {/* Desktop Header (lg:) */}
        <div className="hidden lg:flex items-center justify-between h-[64px]">
          
          {/* Brand Logo - EXACT MATCH TO IMAGE */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 shrink-0 whitespace-nowrap cursor-pointer group">
            {/* Square Black Badge with Rounded Corners */}
            <Logo size={40} />
            {/* Brand Title & Subtitle */}
            <div className="flex flex-col justify-center">
              <span className="font-bold text-[#0D151D] text-[15px] tracking-tight leading-tight">
                PII Digital Media
              </span>
              <span className="text-[8.5px] font-bold tracking-[0.16em] text-[#64748B] uppercase mt-0.5">
                CREATE • CONNECT • GROW
              </span>
            </div>
          </Link>

          {/* Center Navigation Links - EXACT MATCH TO IMAGE */}
          <nav className="flex items-center gap-3 xl:gap-8 mx-4 whitespace-nowrap">
            <Link 
              href="/about" 
              className={`text-[13px] font-medium transition-colors ${
                pathname === "/about" ? "text-[#0D151D] font-semibold" : "text-[#1E293B] hover:text-[#0D151D]"
              }`}
            >
              About Agency
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1 text-[13px] font-medium transition-colors cursor-pointer ${
                  pathname.startsWith("/services") ? "text-[#0D151D] font-semibold" : "text-[#4A5568] hover:text-[#0D151D]"
                }`}
                aria-expanded={servicesDropdown}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#718096] transition-transform ${servicesDropdown ? "rotate-180" : ""}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-[520px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2 mt-2 z-50 whitespace-normal">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Main Services</span>
                    <Link href="/services" className="text-xs text-[#6C836F] hover:underline font-medium">All {SERVICES.length} Services &rarr;</Link>
                  </div>
                  {MAIN_SERVICES.map((srv) => (
                    <Link 
                      key={srv.slug}
                      href={`/services/${srv.slug}`}
                      className="p-2 rounded-xl hover:bg-[#FAF9F5] transition-colors flex items-start gap-2.5 min-w-0"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#EBF1E9] text-[#2F523E] flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-900">{srv.shortTitle}</div>
                        <p className="text-[10.5px] text-slate-500 truncate">{srv.summary}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/work" 
              className={`text-[13px] font-medium transition-colors ${
                pathname.startsWith("/work") ? "text-[#0D151D] font-semibold" : "text-[#1E293B] hover:text-[#0D151D]"
              }`}
            >
              Our Schools
            </Link>

            <Link 
              href="/insights" 
              className={`text-[13px] font-medium transition-colors ${
                pathname.startsWith("/insights") ? "text-[#0D151D] font-semibold" : "text-[#1E293B] hover:text-[#0D151D]"
              }`}
            >
              Insights & Guides
            </Link>
          </nav>

          {/* Right Action Buttons - EXACT MATCH TO IMAGE */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0 whitespace-nowrap">
            {/* Mint Green WhatsApp Pill with Green Dot & Icon */}
            <a 
              href={`${WHATSAPP_URL}?text=Hello%20PII%20Digital%20Media`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[34px] px-3.5 rounded-full text-xs font-semibold text-[#186641] bg-[#DCF4E7] hover:bg-[#cdeedc] transition-all flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0"></span>
              <svg className="w-3.5 h-3.5 fill-[#186641] shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.4 9.74 14.85 12.19 15.91C14.23 16.79 14.65 16.62 15.09 16.58C15.53 16.54 16.52 16 16.72 15.43C16.93 14.86 16.93 14.37 16.87 14.27C16.81 14.17 16.64 14.11 16.39 13.99C16.14 13.86 14.9 13.25 14.67 13.17C14.44 13.09 14.28 13.05 14.11 13.3C13.94 13.55 13.47 14.11 13.33 14.27C13.19 14.44 13.05 14.46 12.8 14.33C12.55 14.21 11.75 13.95 10.8 13.1C10.06 12.44 9.56 11.63 9.42 11.38C9.28 11.13 9.4 11 9.53 10.87C9.64 10.76 9.78 10.58 9.9 10.44C10.03 10.3 10.07 10.2 10.15 10.03C10.23 9.87 10.19 9.72 10.13 9.6C10.07 9.48 9.57 8.26 9.37 7.76C9.17 7.28 8.97 7.34 8.81 7.33H8.53Z"/>
              </svg>
              <span className="hidden xl:inline">WhatsApp Desk</span>
              <span className="sr-only xl:hidden">WhatsApp</span>
            </a>

            {/* Black Pill Book Strategy Call Button */}
            <Link 
              href="/contact" 
              className="h-[34px] px-4 rounded-full bg-[#0D151D] hover:bg-slate-800 text-white text-xs font-semibold tracking-normal transition-all flex items-center gap-1.5"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Smooth Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] max-h-[calc(100svh-60px)] overflow-y-auto bg-[#FAF9F5] border-b border-[#CBD5C8] p-6 shadow-2xl z-50"
          >
            <div className="flex flex-col gap-3.5">
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#0D151D] hover:text-[#6C836F] transition-colors py-1"
              >
                About Agency
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#0D151D] hover:text-[#6C836F] transition-colors py-1"
              >
                Services
              </Link>
              <Link 
                href="/work" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#0D151D] hover:text-[#6C836F] transition-colors py-1"
              >
                Our Schools
              </Link>
              <Link 
                href="/insights" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#0D151D] hover:text-[#6C836F] transition-colors py-1"
              >
                Insights & Guides
              </Link>
              <div className="pt-3 border-t border-[#CBD5C8]/60 flex flex-col gap-2.5">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center rounded-full bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#6C836F]" />
                  <span>WhatsApp Desk</span>
                </a>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center rounded-full bg-[#0D151D] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Book Strategy Call</span>
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
