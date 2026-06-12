import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const googleAnalyticsId = "G-0HB4MVTN61";
const siteUrl = "https://carlosavellar.github.io/agency-grafikwork";
const previewImage = `${siteUrl}/assets/modern-halftone-blue-on-light.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Agência Grafikwork",
  description: "Site do desenvolvedor José Carlos",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Agência Grafikwork",
    description: "Site do desenvolvedor José Carlos",
    url: siteUrl,
    siteName: "Agência Grafikwork",
    images: [
      {
        url: previewImage,
        width: 900,
        height: 900,
        alt: "Arte azul pixelada da Agência Grafikwork",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Agência Grafikwork",
    description: "Site do desenvolvedor José Carlos",
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${2321524347}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
