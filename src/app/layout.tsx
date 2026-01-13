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
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Prajnawisesa | Digital Solutions & Innovation",
  description:
    "Transform your business with cutting-edge digital solutions. We deliver innovative web design, development, and strategic consulting services.",
  keywords: [
    "web design",
    "web development",
    "digital solutions",
    "consulting",
    "innovation",
  ],
  authors: [{ name: "Prajnawisesa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prajnawisesa.com",
    siteName: "Prajnawisesa",
    title: "Prajnawisesa | Digital Solutions & Innovation",
    description:
      "Transform your business with cutting-edge digital solutions and strategic consulting.",
    images: [
      {
        url: "https://prajnawisesa.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prajnawisesa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajnawisesa | Digital Solutions & Innovation",
    description:
      "Transform your business with cutting-edge digital solutions and strategic consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <meta name="theme-color" content="#d4af37" />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
