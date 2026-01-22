import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Spawn Point",
  description: "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="w172BGIIA6u1tiBba5DZ1Q"
      />
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
