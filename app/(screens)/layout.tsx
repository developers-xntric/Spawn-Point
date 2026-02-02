import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Spawn Point",
  description: "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.",
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
    <html lang="en">
      <head>
        {/* Google Tag Manager - inline script for Search Console verification */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRQJGGQZ');`,
          }}
        />

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="w172BGIIA6u1tiBba5DZ1Q"
          strategy="afterInteractive"
        />
        <link rel="icon" href="/favicon.png" />
        <Script
          id="imageobject-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "contentUrl": "",
              "name": "Spawnpoint studio Logo",
              "description": "Official logo of Spawnpoint studio in-game marketing",
            }),
          }}
        />

        <Script
          id="webpage-graph"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://spawnpointstudio.com/#webpage",
                  "url": "https://spawnpointstudio.com/",
                  "name": "In-Game marketing Agency | SpawnPoint Studio",
                  "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.",
                  "isPartOf": { "@id": "https://spawnpointstudio.com/#website" },
                  "about": { "@id": "https://spawnpointstudio.com/#organization" }
                },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/contact#webpage", "url": "https://spawnpointstudio.com/contact", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/brand-experience#webpage", "url": "https://spawnpointstudio.com/brand-experience", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/case-studies#webpage", "url": "https://spawnpointstudio.com/case-studies", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/case-studies/chupa-chups#webpage", "url": "https://spawnpointstudio.com/case-studies/chupa-chups", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/blog#webpage", "url": "https://spawnpointstudio.com/blog", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/about#webpage", "url": "https://spawnpointstudio.com/about", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/case-studies/shell#webpage", "url": "https://spawnpointstudio.com/case-studies/shell", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/case-studies/vodafone#webpage", "url": "https://spawnpointstudio.com/case-studies/vodafone", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/case-studies/doritos#webpage", "url": "https://spawnpointstudio.com/case-studies/doritos", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/case-studies/karaca#webpage", "url": "https://spawnpointstudio.com/case-studies/karaca", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/case-studies/mentos#webpage", "url": "https://spawnpointstudio.com/case-studies/mentos", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } },
                { "@type": "WebPage", "@id": "https://spawnpointstudio.com/case-studies/dominos#webpage", "url": "https://spawnpointstudio.com/case-studies/dominos", "name": "In-Game marketing Agency | SpawnPoint Studio", "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.", "isPartOf": { "@id": "https://spawnpointstudio.com/#website" }, "about": { "@id": "https://spawnpointstudio.com/#organization" } }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRQJGGQZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
