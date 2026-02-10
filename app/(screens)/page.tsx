import { Metadata } from "next";
import Script from "next/script";

import Hero from "../components/hero-new";
import SecondSection from "../components/second-section";
import HOMEGSP from "../components/home-gsp";
import { ServicesCarousel } from "../components/services-carousel";
import PartnersSection from "../components/common/partners-section";
import GameCardsSection from "../components/game-brands";
import { CaseStudies } from "../components/case-studies";
import StickyCards from "../components/sticky-cards";
import MapSection from "../components/map-section";
import FAQSection from "../components/ui/faqs";
import ContactSection from "../components/contact-section";
import NewsletterSection from "../components/newsletter";
import BlogCarousel from "../components/blog-slider";

/* -------------------- METADATA -------------------- */

export const metadata: Metadata = {
  title: "In-Game Marketing & Brand Activation Agency | Spawn Point",
  description:
    "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.",
  alternates: {
    canonical: "https://spawnpointstudio.com/",
  },
};




/* -------------------- PAGE COMPONENT -------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://spawnpointstudio.com/#organization",
      "name": "SpawnPoint Studio",
      "url": "https://spawnpointstudio.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://spawnpointstudio.com/#logo",
        "url": "https://spawnpointstudio.com/home/spawn-logo.png",
        "contentUrl": "https://spawnpointstudio.com/home/spawn-logo.png",
        "width": "600",
        "height": "60",
        "caption": "SpawnPoint Studio Logo"
      },
      "image": {
        "@id": "https://spawnpointstudio.com/#logo"
      },
      "email": "play@spawnpointstudio.com",
      "telephone": "+971 5456 17052",
      "sameAs": [
        "https://www.linkedin.com/company/spawn-point",
        "https://www.instagram.com/spawnpointstudio"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971 5456 17052",
          "contactType": "Gaming service",
          "areaServed": "AE",
          "availableLanguage": "en"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://spawnpointstudio.com/#website",
      "url": "https://spawnpointstudio.com/",
      "name": "SpawnPoint Studio",
      "publisher": {
        "@id": "https://spawnpointstudio.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": "https://spawnpointstudio.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://spawnpointstudio.com/#webpage",
      "url": "https://spawnpointstudio.com/",
      "name": "In-Game Marketing Agency | SpawnPoint Studio",
      "isPartOf": {
        "@id": "https://spawnpointstudio.com/#website"
      },
      "about": {
        "@id": "https://spawnpointstudio.com/#organization"
      },
      "description": "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences in Roblox, Fortnite, and Minecraft.",
      "breadcrumb": {
        "@id": "https://spawnpointstudio.com/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://spawnpointstudio.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://spawnpointstudio.com/"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "name": "SpawnPoint Studio - Gaming Marketing Agency",
      "@id": "https://spawnpointstudio.com/",
      "url": "https://spawnpointstudio.com/",
      "telephone": "+971 5456 17052",
      "priceRange": "AED 10,000 - AED 500,000",
      "image": "https://spawnpointstudio.com/home/spawn-logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "30",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is Spawn Point a top gaming design agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Spawn Point combines a game-native way of thinking and brand strategy to create player-friendly and player-driven experiences."
          }
        },
        {
          "@type": "Question",
          "name": "What is an in-game marketing company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An in-game marketing company connects brands to consumers in games and virtual environments like Roblox and Fortnite."
          }
        },
        {
          "@type": "Question",
          "name": "Which gaming platforms do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We develop games across PC, console, mobile and virtual platforms including Roblox, Fortnite Creative, and Minecraft."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 4-Quarter System?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It breaks campaigns into four phases: entry, engagement, expansion, and retention to keep brands fresh long-term."
          }
        },
        {
          "@type": "Question",
          "name": "Do you only work with gaming brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, we help non-gaming brands translate their identity into playable, interactive formats."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an activation and a virtual world?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An activation is a short-lived event, while a virtual world is a persistent environment players return to over time."
          }
        },
        {
          "@type": "Question",
          "name": "How do you integrate creators and streamers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We partner with creators to co-create experiences that build credibility and organic reach."
          }
        },
        {
          "@type": "Question",
          "name": "Is Spawn Point Studio focused on specific regions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our core expertise lies in the MENA and GCC regions, combining local cultural insights with global platform strategy."
          }
        },
        {
          "@type": "Question",
          "name": "How do In-Stream AdTech solutions work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They incorporate brands directly into digital live streams via gameplay integration or real-time overlays."
          }
        }
      ]
    }
  ]
}


export default function Home() {



  return (
    <>
      {/* ----------- SEO SCHEMAS ----------- */}

      <Script
        id="schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />



      {/* ----------- PAGE CONTENT ----------- */}

      <div className="overflow-x-hidden">
        <Hero />
        <SecondSection />
        <HOMEGSP />
        <ServicesCarousel />
        <PartnersSection />
        <GameCardsSection />
        <CaseStudies isabout={false} />
        <StickyCards />
        <MapSection />
        <FAQSection />
        <BlogCarousel />
        <ContactSection />
        <NewsletterSection />
      </div>
    </>
  );
}
