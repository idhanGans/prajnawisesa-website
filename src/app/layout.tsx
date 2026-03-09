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

const SITE_URL = "https://prajnawisesa.co";
const LOGO_PATH = "/logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: LOGO_PATH, type: "image/png" }],
    shortcut: [{ url: LOGO_PATH, type: "image/png" }],
    apple: [{ url: LOGO_PATH, type: "image/png" }],
  },
  title: {
    default:
      "Prajnawisesa Konsultan | Konsultan Bisnis & Akuntansi Profesional Malang",
    template: "%s | Prajnawisesa Konsultan",
  },
  description:
    "Prajnawisesa Konsultan (PWK) adalah konsultan bisnis profesional di Malang yang menyediakan jasa transformasi bisnis, akuntansi, pajak, people development, dan administrasi bisnis berkelanjutan untuk UKM dan korporasi di Jawa Timur.",
  keywords: [
    "konsultan bisnis malang",
    "jasa akuntansi malang",
    "konsultan pajak malang",
    "konsultan pajak surabaya",
    "jasa pembuatan business plan malang",
    "kantor konsultan pajak malang",
    "jasa akuntansi surabaya",
    "konsultan bisnis surabaya",
    "audit laporan keuangan surabaya",
    "change management indonesia",
    "transformasi bisnis digital",
    "accounting information system consultant",
    "corporate secretarial services indonesia",
    "people development malang",
    "training karyawan malang",
    "konsultasi SDM malang",
    "business transformation indonesia",
    "Prajnawisesa Konsultan",
  ],
  authors: [{ name: "Prajnawisesa Konsultan", url: SITE_URL }],
  creator: "Prajnawisesa Konsultan",
  publisher: "Prajnawisesa Konsultan",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
      "en-US": `${SITE_URL}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Prajnawisesa Konsultan",
    title:
      "Prajnawisesa Konsultan | Solusi Strategis Bisnis Berkelanjutan di Malang",
    description:
      "Konsultan bisnis profesional di Malang: transformasi bisnis, jasa akuntansi & pajak, people development, dan administrasi perusahaan. Didirikan oleh Desiree Muntu, CA, CFE.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Prajnawisesa Konsultan - Konsultan Bisnis Profesional Malang",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajnawisesa Konsultan | Konsultan Bisnis Malang",
    description:
      "Solusi strategis untuk pertumbuhan bisnis berkelanjutan. Transformasi bisnis, akuntansi, pajak, SDM, dan administrasi profesional di Malang & Surabaya.",
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
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Prajnawisesa Konsultan",
      alternateName: "PWK",
      url: SITE_URL,
      logo: `${SITE_URL}${LOGO_PATH}`,
      image: `${SITE_URL}/og-image.png`,
      description:
        "Prajnawisesa Konsultan adalah bisnis konsultan di Malang yang memberikan solusi transformasi bisnis, keuangan, SDM, dan administrasi bisnis berkelanjutan.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Kompleks Perkantoran Malang Trade Center Blok A-17, Jalan Raden Panji Suroso",
        addressLocality: "Malang",
        addressRegion: "Jawa Timur",
        postalCode: "65125",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-7.9391",
        longitude: "112.6465",
      },
      telephone: "+623414359807",
      email: "contact@prajnawisesa.co",
      founder: {
        "@type": "Person",
        name: "Desiree Muntu",
        jobTitle: "Managing Partner",
        description:
          "Chartered Accountant (CA), Certified Fraud Examiner (CFE), Brevet A, CSA Balanced Scorecard, MM. Former Deloitte professional and international accounting lecturer at Universitas Katolik Widya Karya Malang.",
        alumniOf: [
          { "@type": "Organization", name: "Deloitte" },
          {
            "@type": "EducationalOrganization",
            name: "Universitas Katolik Widya Karya Malang",
          },
        ],
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      priceRange: "$$$",
      areaServed: [
        { "@type": "City", name: "Malang" },
        { "@type": "City", name: "Surabaya" },
        { "@type": "State", name: "Jawa Timur" },
        { "@type": "Country", name: "Indonesia" },
      ],
      serviceType: [
        "Business Transformation",
        "Change Management",
        "Jasa Akuntansi",
        "Konsultan Pajak",
        "People Development",
        "Organizational Learning",
        "Business Administration",
        "Corporate Secretary",
        "Strategic Advisory",
      ],
      sameAs: [
        "https://www.linkedin.com/company/prajnawisesa-konsultan",
        "https://www.instagram.com/prajnawisesa",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Prajnawisesa Konsultan",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "id-ID",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Bagaimana proses awal konsultasi di Prajnawisesa Konsultan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kami memulai dengan Advisory sebagai tahap awal untuk mengenali potensi masalah internal maupun eksternal. Kami kemudian memberikan masukan dan arahan strategis yang sesuai dengan kondisi bisnis Anda saat ini.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah layanan pajak PWK mencakup pendampingan pemeriksaan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, kami mendampingi klien dalam tax planning, pelaporan, pengelolaan, hingga pendampingan untuk memberikan pemahaman pajak agar tidak menyalahi aturan yang berlaku.",
          },
        },
        {
          "@type": "Question",
          name: "Apa yang membedakan Business Plan yang dibuat oleh PWK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kami melakukan observasi mendalam terhadap bisnis Anda untuk menghasilkan strategi operasional dan keuangan yang tidak hanya indah di kertas, tetapi juga dapat dilaksanakan (executable) dan dievaluasi secara berkala.",
          },
        },
        {
          "@type": "Question",
          name: "Mengapa sistem informasi akuntansi (AIS) sangat penting untuk UKM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Banyak pelaku usaha mengalami kendala pembukuan karena spesifikasi AIS yang tidak sesuai. Kami membantu mengenali potensi software Anda saat ini atau memberikan saran sistem yang tepat untuk laporan yang impresif.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama durasi program People Development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Durasi program bersifat fleksibel dan disesuaikan dengan hasil analisa kendala SDM perusahaan Anda. Fokus kami adalah menemukan solusi dan merancang perencanaan terorganisir hingga tujuan tercapai.",
          },
        },
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
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0f1a" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Malang" />
        <meta name="geo.position" content="-7.9391;112.6465" />
        <meta name="ICBM" content="-7.9391, 112.6465" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
