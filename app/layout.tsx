import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "RODIČÁKY bez chaosu!",
  description: "Rezervace schůzek na pár kliknutí – rychle, snadno, online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
