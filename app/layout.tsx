import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Nati Kuzmi – Software Engineer & Full-Stack Developer",
  description: "Nati Kuzmi is a Computer Science graduate & full-stack developer building performant web apps, trading bots, and enterprise IT networking solutions.",
  keywords: ["Nati Kuzmi", "Natnael Teferi", "Software Engineer", "Full-Stack Developer", "Trading Bot", "Networking", "Web Development"],
  authors: [{ name: "Nati Kuzmi" }],
  openGraph: {
    title: "Nati Kuzmi – Full-Stack Developer & Software Engineer",
    description: "I build fast, performant web applications, trading bots, and enterprise IT infrastructure.",
    url: "https://portfilo.natikuzmi.workers.dev",
    siteName: "Nati Kuzmi Portfolio",
    images: [
      {
        url: "https://portfilo.natikuzmi.workers.dev/ceo.jpg",
        width: 1200,
        height: 630,
        alt: "Nati Kuzmi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nati Kuzmi – Full-Stack Developer",
    description: "Software engineer building performant, accessible web experiences.",
    images: ["https://portfilo.natikuzmi.workers.dev/ceo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nati Kuzmi",
    alternateName: "Natnael Teferi",
    jobTitle: "Full-Stack Software Engineer",
    url: "https://portfilo.natikuzmi.workers.dev",
    sameAs: [
      "https://t.me/NATENTERTAINMENTSUPPORT",
      "https://wa.me/251945653317",
      "https://github.com/natu-pixel/portfilo",
      "https://natentertainment.org/",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans selection:bg-blue-500/20 selection:text-blue-900 bg-white text-neutral-900 antialiased overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
