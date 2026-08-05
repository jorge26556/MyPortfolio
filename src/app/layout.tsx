import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { Navbar } from "@/components/layout/navbar";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { profileData } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://dyangotech.com";
const TITLE = `${profileData.name} — Full-Stack & Power Platform Developer`;
const DESCRIPTION =
  "Portafolio de Jorge Gaitán, Ingeniero de Sistemas y Computación. Desarrollo full-stack, aplicaciones móviles y soluciones empresariales con Power Platform, React, Next.js y Django.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${profileData.name}`,
  },
  description: DESCRIPTION,
  applicationName: `${profileData.name} — Portfolio`,
  authors: [{ name: profileData.name, url: SITE_URL }],
  creator: profileData.name,
  keywords: [
    "Jorge Gaitán",
    "desarrollador full-stack",
    "Power Platform Developer",
    "Power Apps",
    "Power Automate",
    "React",
    "Next.js",
    "Django",
    "TypeScript",
    "portafolio desarrollador Colombia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${profileData.name} — Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_CO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d1c" },
  ],
};

// Tells search engines and assistants who this site is about. Portfolios get a
// real benefit here: it is what powers the knowledge-panel style result.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profileData.name,
  url: SITE_URL,
  email: `mailto:${profileData.email}`,
  jobTitle: profileData.role,
  description: profileData.bio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  sameAs: profileData.socials.map((social) => social.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Spanish is the default language the provider starts in; it swaps this
    // attribute at runtime when the visitor switches languages.
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-dvh bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#projects"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Saltar al contenido
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            {children}
            <CustomCursor />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
