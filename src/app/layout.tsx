import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import RevealOnScroll from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nova Agency | Digital Design, Web Development & Digital Solutions",
    template: "%s",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Nova Agency | Digital Design, Web Development & Digital Solutions",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Agency | Digital Design, Web Development & Digital Solutions",
    description: siteConfig.description,
  },
  verification: {
    google: "v0QhgJwkZzBzGxOtT267ad_6440flNMg3_MbZ_79oIE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg font-sans text-navy-2 antialiased">
        <RevealOnScroll />
        {children}
      </body>
    </html>
  );
}
