import { Metadata } from "next";

export function getMetadata({
  title,
  description,
  path = "",
  keywords = []
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://piidigitalmedia.com";
  const url = `${baseUrl}${path}`;
  const fullTitle = `${title} | Pii Digital Media`;

  const defaultKeywords = [
    "digital marketing agency for schools",
    "school admission marketing",
    "digital marketing for schools",
    "school social media management",
    "SEO services for schools"
  ];

  return {
    title,
    description,
    keywords: [...keywords, ...defaultKeywords],
    authors: [{ name: "Pii Digital Media", url: baseUrl }],
    creator: "Pii Digital Media",
    publisher: "Pii Digital Media",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Pii Digital Media",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${baseUrl}/logo.webp`,
          width: 1254,
          height: 1254,
          alt: "Pii Digital Media — Great Schools Deserve to Be Seen",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [`${baseUrl}/logo.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pii Digital Media",
    "url": "https://piidigitalmedia.com",
    "logo": "https://piidigitalmedia.com/logo.webp",
    "description": "Pii Digital Media manages digital marketing for schools: social media, creatives, reels, admission campaigns, ads, website content, and SEO.",
    "slogan": "Create. Connect. Grow.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-79899-95014",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "Organization",
      "name": "Pii Digital Media"
    },
    "description": service.description,
    "url": service.url,
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
