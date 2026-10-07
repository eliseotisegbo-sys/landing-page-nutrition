import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { PRODUCT_NAME, SITE_URL } from "@/lib/config";

// ─── Polices optimisées via next/font (zéro layout shift) ─────
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

// ─── Viewport mobile optimisé ─────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3a6b4a",
};

// ─── Métadonnées SEO complètes ───────────────────────────────
export const metadata: Metadata = {
  title: {
    default: `${PRODUCT_NAME} — Manger mieux avec les aliments africains`,
    template: `%s | ${PRODUCT_NAME}`,
  },
  description:
    "Un guide pratique pour composer des assiettes équilibrées avec le riz, l'igname, le manioc, le plantain et tous les aliments du quotidien africain. 4 900 FCFA.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: PRODUCT_NAME,
    title: `${PRODUCT_NAME} — Manger mieux avec les aliments africains`,
    description:
      "Apprends à composer tes assiettes, gérer tes portions et cuisiner tes aliments locaux de façon équilibrée sans rien abandonner.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Couverture du ${PRODUCT_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PRODUCT_NAME} — Manger mieux avec les aliments africains`,
    description:
      "Guide pratique de nutrition africaine. Riz, igname, manioc, plantain — sans rien abandonner. 4 900 FCFA.",
    images: ["/images/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

// ─── Layout racine ───────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${lora.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
