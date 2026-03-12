import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import CustomCursor from "@/components/ui/custom-cursor";
import NoiseOverlay from "@/components/ui/noise-overlay";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vasperlabs.com"),
  title: {
    default: "Vasper Labs — Illuminating the Deep-Tech Void",
    template: "%s | Vasper Labs",
  },
  description:
    "Vasper Labs is a deep-tech incubator guiding Web3 and scalable AI infrastructure projects from the void to orbit. The first light in the deep-tech void.",
  keywords: [
    "deep tech",
    "incubator",
    "Web3",
    "AI",
    "blockchain",
    "artificial intelligence",
    "venture studio",
    "DeFi",
    "machine learning",
    "infrastructure",
  ],
  authors: [{ name: "Vasper Labs" }],
  creator: "Vasper Labs",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vasperlabs.com",
    siteName: "Vasper Labs",
    title: "Vasper Labs — Illuminating the Deep-Tech Void",
    description:
      "Deep-tech incubator guiding Web3 and AI infrastructure projects from the void to orbit.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vasper Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasper Labs — Illuminating the Deep-Tech Void",
    description:
      "Deep-tech incubator guiding Web3 and AI infrastructure projects from the void to orbit.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://vasperlabs.com",
    languages: {
      "en-GB": "https://vasperlabs.com",
      "x-default": "https://vasperlabs.com",
    },
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
        url: "https://vasperlabs.com/logo-white.svg",
      },
      description:
        "Vasper Labs is a deep-tech incubator illuminating Web3 and scalable AI infrastructure.",
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@vasperlabs.com",
        telephone: "+1-917-695-5756",
        contactType: "business inquiries",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://vasperlabs.com/#localbusiness",
      name: "Vasper Labs",
      url: "https://vasperlabs.com",
      email: "contact@vasperlabs.com",
      telephone: "+1-917-695-5756",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "51.5074",
        longitude: "-0.1278",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://vasperlabs.com/#website",
      url: "https://vasperlabs.com",
      name: "Vasper Labs",
      publisher: {
        "@id": "https://vasperlabs.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-void-black text-white antialiased overflow-x-hidden flex flex-col justify-center items-center w-full min-h-screen">
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          <div className="w-full flex justify-center items-center flex-col max-w-[100vw]">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
