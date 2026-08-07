import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Natnael Teferi – Software Engineer & Full-Stack Developer",
  description: "Natnael Teferi is a Computer Science graduate & full-stack developer building performant web apps, trading bots, and enterprise IT networking solutions.",
  keywords: ["Natnael Teferi", "Software Engineer", "Full-Stack Developer", "Trading Bot", "Networking", "Web Development"],
  authors: [{ name: "Natnael Teferi" }],
  openGraph: {
    title: "Natnael Teferi – Full-Stack Developer & Software Engineer",
    description: "I build fast, performant web applications, trading bots, and enterprise IT infrastructure.",
    url: "https://natentertainment.org/",
    siteName: "Natnael Teferi Portfolio",
    images: [
      {
        url: "/ceo.jpg",
        width: 1200,
        height: 630,
        alt: "Natnael Teferi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natnael Teferi – Full-Stack Developer",
    description: "Software engineer building performant, accessible web experiences.",
    images: ["/ceo.jpg"],
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
    name: "Natnael Teferi",
    jobTitle: "Full-Stack Software Engineer",
    url: "https://natentertainment.org/",
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
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/aeonik" />
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
