import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { generateOrganizationSchema } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piidigitalmedia.com"),
  title: {
    default: "PII Digital Media | Digital Marketing for Schools",
    template: "%s | PII Digital Media"
  },
  description: "PII Digital Media manages digital marketing for schools: social media, creatives, reels, admission campaigns, ads, website content, and SEO.",
  keywords: [
    "digital marketing agency for schools",
    "school admission marketing",
    "school social media management",
    "digital marketing for schools"
  ],
  authors: [{ name: "PII Digital Media" }],
  creator: "PII Digital Media",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://piidigitalmedia.com",
    siteName: "PII Digital Media",
    title: "PII Digital Media — Great Schools Deserve to Be Seen",
    description: "Social media, creatives, reels, admission campaigns, ads, website content, and SEO for schools.",
    images: [{ url: "/logo.webp" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PII Digital Media — Great Schools Deserve to Be Seen",
    description: "Digital marketing for schools.",
    creator: "@piidigitalmedia"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${newsreader.variable} ${playfair.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#0D151D] font-sans selection:bg-[#0D151D] selection:text-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
