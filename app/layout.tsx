import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "RODIČÁKY.CZ | Třídní schůzky bez chaosu!",
  description: "Třídní schůzky – snadná a přehledná komunikace mezi rodiči a školou. Zjistěte termíny, přihlaste se online a získejte důležité informace.",
  keywords: ["schůzky", "třídní schůzky", "škola", "rodičák"],
  authors: [
    { name: "Adam Havlík" },
    { name: "Ondřej Krejčí" }
  ],
  openGraph: {
    type: "website",
    title: "Třídní schůzky",
    description: "Třídní schůzky – snadná a přehledná komunikace mezi rodiči a školou. Zjistěte termíny, přihlaste se online a získejte důležité informace.",
    images: [
      {
        url: "/images/metabanner.jpg",
        alt: "Logo rodicaky.cz",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Třídní schůzky",
    description: "Třídní schůzky – snadná a přehledná komunikace mezi rodiči a školou. Zjistěte termíny, přihlaste se online a získejte důležité informace.",
    images: [
      {
        url: "/images/metabanner.jpg",
        alt: "Logo rodicaky.cz",
      }
    ],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
