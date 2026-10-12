import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { INSIGHTS_ARTICLES } from "@/data/content";
import { getMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { Clock, Calendar, ArrowRight, Share2, Sparkles, CheckCircle2 } from "lucide-react";
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
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "PII Digital Media"
    },
    "datePublished": "2026-08-15"
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
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
            <span className="text-[#2F523E] bg-[#EBF1E9] border border-[#DEE7DC] px-3 py-1 rounded-full">{article.category}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#6C836F]" /> {article.readTime}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#6C836F]" /> {article.publishDate}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0D151D] tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            {article.excerpt}
          </p>

          {/* Author Badge */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-bold text-slate-900">{article.author.name}</div>
                <div className="text-xs text-slate-500">{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>Share Guide</span>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Executive Key Takeaways Box */}
      <RevealSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 rounded-3xl bg-[#EBF1E9]/70 border border-[#DEE7DC] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F523E]">
            <Sparkles className="w-4 h-4 text-[#6C836F]" />
            <span>Executive Summary & Key Takeaways</span>
          </div>
          <ul className="space-y-2.5">
            {article.keyTakeaways.map((takeaway) => (
              <li key={takeaway} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D151D] tracking-tight">
              {idx + 1}. {section.heading}
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {section.body}
            </p>
          </div>
        ))}

        {/* Tags */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-lg">
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Embedded Strategy Consultation Section */}
      <RevealSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6 text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-950">
            Put These Strategic Principles into Practice
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Book a confidential strategy session with our education practice leads.
          </p>
        </div>
        <ContactForm />
      </RevealSection>

    </div>
  );
}
