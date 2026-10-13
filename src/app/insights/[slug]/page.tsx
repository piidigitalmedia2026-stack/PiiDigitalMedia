import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { INSIGHTS_ARTICLES } from "@/data/content";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { Clock, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { RevealSection } from "@/components/Motion";

export async function generateStaticParams() {
  return INSIGHTS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return getMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    keywords: article.tags
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://piidigitalmedia.com" },
    { name: "Insights", url: "https://piidigitalmedia.com/insights" },
    { name: article.title, url: `https://piidigitalmedia.com/insights/${article.slug}` }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Pii Digital Media"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pii Digital Media"
    }
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Header */}
      <RevealSection className="pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-400">
            <span className="text-[#4ADE80] bg-[#132E20] border border-[#224A32] px-3 py-1 rounded-full">{article.category}</span>
            <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3.5 h-3.5 text-[#82A386]" /> {article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
            {article.excerpt}
          </p>

          {/* Author Badge */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <div className="text-sm font-bold text-white">Pii Digital Media</div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Executive Key Takeaways Box */}
      <RevealSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 rounded-3xl bg-[#121820] border border-white/[0.08] shadow-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4ADE80]">
            <Sparkles className="w-4 h-4 text-[#82A386]" />
            <span>Key Takeaways</span>
          </div>
          <ul className="space-y-2.5">
            {article.keyTakeaways.map((takeaway) => (
              <li key={takeaway} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80] mt-0.5 shrink-0" />
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealSection>

      {/* Article Body Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        {article.contentSections.map((section, idx) => (
          <div key={section.heading} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {idx + 1}. {section.heading}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {section.body}
            </p>
          </div>
        ))}

        {/* Tags */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-[#17202B] border border-white/[0.08] text-slate-300 px-3 py-1 rounded-lg">
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Embedded Strategy Consultation Section */}
      <RevealSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6 text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white">
            Want Help Putting This into Practice?
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Tell us about your school and what you need help with.
          </p>
        </div>
        <ContactForm />
      </RevealSection>

    </div>
  );
}
