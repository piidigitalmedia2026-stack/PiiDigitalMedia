import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Newsreader, JetBrains_Mono } from "next/font/google";
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
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: "variable",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piidigitalmedia.com"),
  title: {
    default: "Pii Digital Media | Digital Marketing for Schools",
    template: "%s | Pii Digital Media"
  },
  description: "Pii Digital Media manages digital marketing for schools: social media, creatives, reels, admission campaigns, ads, website content, and SEO.",
  keywords: [
    "digital marketing agency for schools",
    "school admission marketing",
    "school social media management",
    "digital marketing for schools"
  ],
  authors: [{ name: "Pii Digital Media" }],
  creator: "Pii Digital Media",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://piidigitalmedia.com",
    siteName: "Pii Digital Media",
    title: "Pii Digital Media — Great Schools Deserve to Be Seen",
    description: "Social media, creatives, reels, admission campaigns, ads, website content, and SEO for schools.",
    images: [{ url: "/logo.webp" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pii Digital Media — Great Schools Deserve to Be Seen",
    description: "Digital marketing for schools.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} scroll-smooth antialiased h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#000000] text-[#ffffff] font-sans selection:bg-white selection:text-black">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
