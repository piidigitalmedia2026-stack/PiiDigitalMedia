import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Compass,
  Globe,
  Search,
  Target,
  Megaphone,
  Video,
  Users,
  Layers,
  Share2,
  GraduationCap,
  Baby,
  MapPin,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";
import {
  SERVICES,
  EDUCATION_SEGMENTS,
  SCHOOLS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  WHATSAPP_URL,
  INSIGHTS_ARTICLES
} from "@/data/content";
import { GrowthFrameworkInteractive } from "@/components/GrowthFrameworkInteractive";
import { FAQSection } from "@/components/FAQSection";
import { ContactForm } from "@/components/ContactForm";
import { HeroScrollSection } from "@/components/HeroScrollSection";
import { SchoolPortfolioGrid } from "@/components/SchoolPortfolioGrid";
import { ServicesStackSection } from "@/components/ServicesStackSection";
import { RevealSection, Reveal, Stagger, StaggerItem } from "@/components/Motion";

const ICONS: Record<string, LucideIcon> = {
  Share2, Layers, Video, Users, Target, Megaphone, Globe, Search, TrendingUp, GraduationCap, Baby, Compass
};

const PILLARS = [
  {
    icon: Globe,
    title: "Websites & Digital Presence",
    desc: "Modern school websites, admission landing pages, and Google Search visibility built to welcome prospective parents."
  },
  {
    icon: Target,
    title: "Built for Schools",
    desc: "Planned around the school calendar, admission cycles, and key academic milestones."
  },
  {
    icon: ShieldCheck,
    title: "Checked Before Publishing",
    desc: "Names, dates, fee circulars, and event details confirmed directly with school leadership."
  },
  {
    icon: Layers,
    title: "Each School Kept Separate",
    desc: "Dedicated content, unique institutional branding, and separate campaign reports for every school."
  }
];

function SectionHeading({ eyebrow, title, link }: { eyebrow: string; title: React.ReactNode; link?: { href: string; label: string } }) {
  return (
    <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#6C836F]">{eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D151D] tracking-tight mt-2">
          {title}
        </h2>
      </div>
      {link && (
        <Link
          href={link.href}
          className="text-xs font-bold text-[#0D151D] hover:text-[#6C836F] flex items-center gap-1.5 shrink-0 group"
        >
          <span>{link.label}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-24 pb-24 w-full overflow-x-clip">

      <HeroScrollSection />

      {/* Schools Portfolio: 3 Clean Campus Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 sm:-mt-8">
        <div className="hidden md:block">
          <SectionHeading
            eyebrow="Our Schools"
            title={<>Schools We <span className="font-serif italic font-normal text-[#6C836F]">Work With</span></>}
            link={{ href: "/work", label: "View Our Schools" }}
          />
        </div>

        <SchoolPortfolioGrid />
      </section>

      {/* How we work */}
      <RevealSection className="bg-[#0D151D] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-[0.15em] text-[#6C836F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F]" />
            <span>Digital Presence & Marketing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl">
            Digital marketing & digital presence,{" "}
            <span className="text-[#6C836F] font-serif italic font-normal">
              made for schools.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl leading-relaxed">
            From modern school websites and Google search presence to high-impact admission campaigns and daily campus storytelling.
          </p>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {PILLARS.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <StaggerItem
                  key={pillar.title}
                  className="p-6 sm:p-7 rounded-3xl bg-[#141F2A] border border-[#223242] space-y-4 hover:border-[#6C836F] transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#6C836F]">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <div className="text-base font-bold text-white">{pillar.title}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </RevealSection>

      {/* Parent journey */}
      {/* Pinned while scrolling; not wrapped in a reveal so the sticky panel is never transformed */}
      <section className="w-full -my-10 sm:-my-14">
        <GrowthFrameworkInteractive />
      </section>

      {/* Services Stacking Cards */}
      <ServicesStackSection />



      {/* Insights */}
      <RevealSection className="bg-[#FAF9F5] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#CBD5C8]/70">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Insights"
            title={<>Guides for <span className="font-serif italic font-normal text-[#6C836F]">School Leaders</span></>}
            link={{ href: "/insights", label: "All Articles" }}
          />

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {INSIGHTS_ARTICLES.slice(0, 3).map((art) => (
              <StaggerItem key={art.slug}>
                <Link
                  href={`/insights/${art.slug}`}
                  className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-[#CBD5C8]/80 hover:shadow-2xl hover:border-[#6C836F] hover:scale-[1.01] transition-all duration-300 flex flex-col gap-4 group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span className="text-[#2F523E] bg-[#EBF1E9] border border-[#DEE7DC] px-2.5 py-1 rounded-md">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0D151D] group-hover:text-[#6C836F] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <span className="mt-auto text-xs font-bold text-[#0D151D] group-hover:text-[#6C836F] inline-flex items-center gap-1.5 transition-colors">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </RevealSection>

      {/* FAQ */}
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Reveal className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#6C836F]">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D151D] tracking-tight mt-2">
            Common <span className="font-serif italic font-normal text-[#6C836F]">Questions</span>
          </h2>
        </Reveal>
        <FAQSection />
      </RevealSection>

      {/* Contact */}
      <RevealSection id="contact-session" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#6C836F]">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D151D] tracking-tight leading-tight">
              Tell Us About <span className="font-serif italic font-normal text-[#6C836F]">Your School</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Share what you need and our school partnership team will get back to you within 24 hours.
            </p>

            <div className="p-4 rounded-2xl bg-[#0D151D] text-white text-xs flex items-center justify-between border border-[#223242] shadow-md">
              <div>
                <span className="text-slate-400 block text-[11px]">Direct Line & Desk</span>
                <a href={`tel:${CONTACT_PHONE_E164}`} className="font-bold text-white text-sm hover:underline">{CONTACT_PHONE_DISPLAY}</a>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#EBF1E9] border border-[#DEE7DC] text-[#2F523E] font-bold text-xs hover:bg-[#DEE7DC] transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C836F]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </RevealSection>

    </div>
  );
}
