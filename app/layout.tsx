import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vasperlabs.com"),
  title: {
    default: "Vasper Labs | AI & Web3 Research Laboratory",
    template: "%s | Vasper Labs",
  },
  description:
    "Vasper Labs is an independent research facility dedicated to building scalable AI architectures and decentralized infrastructure. Pioneering the next generation of intelligent systems.",
  keywords: [
    "AI research",
    "Web3",
    "artificial intelligence",
    "machine learning",
    "decentralized infrastructure",
    "research laboratory",
    "deep learning",
    "blockchain",
  ],
  authors: [{ name: "Vasper Labs" }],
  creator: "Vasper Labs",
  publisher: "Vasper Labs",
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vasperlabs.com",
    siteName: "Vasper Labs",
    title: "Vasper Labs | AI & Web3 Research Laboratory",
    description:
      "Pioneering the next generation of intelligent systems. Independent research facility dedicated to scalable AI architectures and decentralized infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasper Labs | AI & Web3 Research Laboratory",
    description:
      "Pioneering the next generation of intelligent systems. Independent research facility for AI and Web3.",
    creator: "@vasperlabs",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://vasperlabs.com",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vasperlabs.com/#organization",
      name: "Vasper Labs",
      url: "https://vasperlabs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vasperlabs.com/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Independent research facility dedicated to building scalable AI architectures and decentralized infrastructure.",
      foundingDate: "2024",
      sameAs: [
        "https://twitter.com/vasperlabs",
        "https://github.com/vasperlabs",
        "https://linkedin.com/company/vasperlabs",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@vasperlabs.com",
        telephone: "+1 (917) 695-5756",
        contactType: "General Inquiry",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://vasperlabs.com/#localbusiness",
      name: "Vasper Labs",
      image: "https://vasperlabs.com/logo.png",
      url: "https://vasperlabs.com",
      telephone: "+1 (917) 695-5756",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
        addressLocality: "London",
        addressRegion: "England",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5074,
        longitude: -0.1278,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://vasperlabs.com/#website",
      url: "https://vasperlabs.com",
      name: "Vasper Labs",
      publisher: {
        "@id": "https://vasperlabs.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://vasperlabs.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
