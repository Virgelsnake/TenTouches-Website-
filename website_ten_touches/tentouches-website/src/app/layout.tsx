import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://tentouches.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ten Touches — The Personal CRM for Relationship-Driven Sales",
  description:
    "Remember everyone, follow up consistently, sell smarter. Ten Touches is the mobile CRM built for salespeople who sell through trust, not scripts. Voice-first capture, intelligent follow-up, and behavioural insights — all on iOS.",
  keywords: [
    "CRM",
    "mobile CRM",
    "personal CRM",
    "relationship CRM",
    "sales follow-up",
    "voice CRM",
    "iOS CRM",
    "sales app",
    "Ten Touches",
    "relationship-driven sales",
  ],
  authors: [{ name: "Ten Touches" }],
  creator: "Ten Touches",
  publisher: "Ten Touches",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Ten Touches",
    title: "Ten Touches — The Personal CRM for Relationship-Driven Sales",
    description:
      "Remember everyone, follow up consistently, sell smarter. The mobile CRM built for salespeople who sell through trust.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ten Touches — Personal CRM for iOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ten Touches — The Personal CRM for Relationship-Driven Sales",
    description:
      "Remember everyone, follow up consistently, sell smarter. The mobile CRM built for salespeople who sell through trust.",
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ten Touches",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    description:
      "The personal CRM for relationship-driven salespeople. Voice-first capture, intelligent follow-up, and behavioural insights.",
    url: siteUrl,
    image: `${siteUrl}/app-icon.png`,
  };

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
