import React from 'react';
import ContactCTA from '../../components/contact/contact-cta';
import ContactForm from '../../components/contact/contactform';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Contact Spawn Point Studio | Let’s Build Gaming Experiences",
  description:
    "Partner with Spawn Point Studio for expert in-game marketing and brand activations. Contact our creative agency today to start building your next big campaign.",
  alternates: {
    canonical: "https://spawnpointstudio.com/contact",
  },
};

const schemaData =
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://spawnpointstudio.com/contact/#webpage",
      "url": "https://spawnpointstudio.com/contact",
      "name": "Contact SpawnPoint Studio | Get in Touch with our Gaming Experts",
      "description": "Have a project in mind? Contact SpawnPoint Studio today to discuss your in-game marketing strategy for Roblox, Fortnite, and Minecraft.",
      "isPartOf": {
        "@id": "https://spawnpointstudio.com/#website"
      },
      "breadcrumb": {
        "@id": "https://spawnpointstudio.com/contact/#breadcrumb"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://spawnpointstudio.com/#organization",
      "name": "SpawnPoint Studio",
      "url": "https://spawnpointstudio.com/",
      "image": "https://spawnpointstudio.com/home/spawn-logo.png",
      
      "email": "sammas@spawnpointstudio.com",
      "priceRange": "AED",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
      
        "contactType": "customer service",
        "areaServed": "AE",
        "availableLanguage": "en"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://spawnpointstudio.com/contact/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://spawnpointstudio.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact Us",
          "item": "https://spawnpointstudio.com/contact"
        }
      ]
    }
  ]
}


const Contact: React.FC = () => {
  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <div>
        <ContactCTA />
        <ContactForm />
      </div>
    </>
  )
};
export default Contact;