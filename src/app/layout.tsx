import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const SITE_URL = "https://prajnawisesa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Prajnawisesa Consultant | Strategic Business Consulting in Jakarta",
    template: "%s | Prajnawisesa Consultant",
  },
  description:
    "Prajnawisesa Consultant delivers strategic business consulting, digital transformation, operations excellence, and financial advisory services in Jakarta, Indonesia. 15+ years of experience, 200+ projects completed.",
  keywords: [
    "business consulting",
    "strategy consulting",
    "digital transformation",
    "operations excellence",
    "financial advisory",
    "management consulting",
    "Jakarta consulting firm",
    "Indonesia business consultant",
    "Prajnawisesa",
    "growth strategy",
    "M&A advisory",
    "supply chain optimization",
  ],
  authors: [{ name: "Prajnawisesa Consultant", url: SITE_URL }],
  creator: "Prajnawisesa Consultant",
  publisher: "Prajnawisesa Consultant",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Prajnawisesa Consultant",
    title: "Prajnawisesa Consultant | Strategic Business Consulting",
    description:
      "Empowering businesses through innovative strategies and sustainable growth solutions. 15+ years, 200+ projects, 98% client satisfaction.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Prajnawisesa Consultant - Strategic Business Consulting",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajnawisesa Consultant | Strategic Business Consulting",
    description:
      "Empowering businesses through innovative strategies and sustainable growth solutions.",
    images: [`${SITE_URL}/og-image.png`],
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "Business Consulting",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Prajnawisesa Consultant",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
      description:
        "Strategic business consulting firm delivering innovative strategies and sustainable growth solutions.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-812-3456-7890",
        contactType: "customer service",
        email: "contact@prajnawisesa.com",
        availableLanguage: ["English", "Indonesian"],
      },
      sameAs: [
        "https://linkedin.com/company/prajnawisesa",
        "https://twitter.com/prajnawisesa",
        "https://instagram.com/prajnawisesa",
      ],
      foundingDate: "2010",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 50,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Prajnawisesa Consultant",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Prajnawisesa Consultant",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
        bestRating: "5",
      },
      serviceType: [
        "Strategy Consulting",
        "Operations Excellence",
        "Digital Transformation",
        "Financial Advisory",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
