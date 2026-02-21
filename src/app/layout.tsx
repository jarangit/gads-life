import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Geist_Mono } from "next/font/google";
import { QueryProvider } from "@/providers";
import "./globals.css";
import Nav from "@/components/layouts/nav";
import { Footer } from "@/components/layouts/Footer";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gads.life";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "gads✓life | เลือกของดี โดยไม่ต้องคิดเยอะ",
    template: "%s | gads✓life",
  },
  description:
    "คัดสรรสินค้าจากการใช้งานจริง ไม่มีอันดับสปอนเซอร์ โปร่งใสทุกขั้นตอน",
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "gads✓life | เลือกของดี โดยไม่ต้องคิดเยอะ",
    description:
      "คัดสรรสินค้าจากการใช้งานจริง ไม่มีอันดับสปอนเซอร์ โปร่งใสทุกขั้นตอน",
    siteName: "gads✓life",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "gads✓life | เลือกของดี โดยไม่ต้องคิดเยอะ",
    description:
      "คัดสรรสินค้าจากการใช้งานจริง ไม่มีอันดับสปอนเซอร์ โปร่งใสทุกขั้นตอน",
  },
  icons: {
    icon: [
      { url: "/icon-web.png" },
      { url: "/icon-web.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/icon-web.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "gads✓life",
    url: siteUrl,
    inLanguage: ["th-TH", "en-US"],
    description:
      "คัดสรรสินค้าจากการใช้งานจริง ไม่มีอันดับสปอนเซอร์ โปร่งใสทุกขั้นตอน",
  };

  return (
    <html lang="th">
      <body
        className={`${ibmPlexSansThai.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <QueryProvider>
          <Nav />
          <main className="container min-h-screen">
            <div className="py-12">{children}</div>
          </main>
        </QueryProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Footer />
      </body>
    </html>
  );
}
