export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Digital Marketing" | "Strategy & Branding" | "Web & Tech" | "Growth Marketing" | "Creative & Media" | "Retention & Automation";
  summary: string;
  headline: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  institutionalValue: string;
  process: { step: string; desc: string }[];
  icon: string;
}

export interface School {
  slug: string;
  name: string;
  location?: string;
  curriculum?: string;
  website?: string;
  image?: string;
  scope: string[];
}

export interface EducationSegment {
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  keyChallenges: string[];
  strategicSolutions: string[];
  recommendedServices: string[];
  icon: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  category: "Admissions Marketing" | "Institutional Branding" | "Parent Psychology" | "Digital Strategy" | "Search & Local SEO";
  readTime: string;
  excerpt: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
  }[];
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Admissions" | "Strategy" | "Pricing & Engagement";
}
