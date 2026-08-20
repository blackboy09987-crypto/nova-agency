import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import RevealOnScroll from "@/components/RevealOnScroll";
import { siteConfig, instagramLink } from "@/lib/config";

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
    default: "Nova Agency | Digital Design & Web Development Agency in Pakistan",
    template: "%s",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Nova Agency | Digital Design & Web Development Agency in Pakistan",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Agency | Digital Design & Web Development Agency in Pakistan",
    description: siteConfig.description,
  },
  verification: {
    google: "v0QhgJwkZzBzGxOtT267ad_6440flNMg3_MbZ_79oIE",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${siteConfig.whatsappNumber}`,
    contactType: "customer service",
    email: siteConfig.email,
  },
  sameAs: [instagramLink],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg font-sans text-navy-2 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <RevealOnScroll />
        {children}
      </body>
    </html>
  );
}
