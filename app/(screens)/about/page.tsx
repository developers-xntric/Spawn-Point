import HeroSection from '@/app/components/about/hero';
import { Achievements } from '@/app/components/about/achievements';
import GamingHero from '@/app/components/about/gaming-hero';
import { CaseStudies } from '@/app/components/case-studies';
import MapSection from '@/app/components/map-section';
import CelebrationSection from '@/app/components/about/celeberaitng-section';
import Fearless from '@/app/components/about/fearless';
import ContactSection from '@/app/components/contact-section';
import NewsletterSection from '@/app/components/newsletter';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "About Spawn Point | In-Game Marketing & Streamers Agency",
    description:
        "Learn how Spawn Point Studio leads the way in in-game marketing and brand activations, blending creative strategy with technology to build impactful campaigns.",
    alternates: {
        canonical: "https://spawnpointstudio.com/about",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "AboutPage",
            "@id": "https://spawnpointstudio.com/about/#webpage",
            "url": "https://spawnpointstudio.com/about",
            "name": "About SpawnPoint Studio | Leading In-Game Marketing Agency",
            "description": "Learn about SpawnPoint Studio and our leadership. Led by Co-Founder Yasir Iqbal, we bring 15+ years of creative expertise to in-game marketing across MENA and global markets.",
            "isPartOf": {
                "@id": "https://spawnpointstudio.com/#website"
            },
            "breadcrumb": {
                "@id": "https://spawnpointstudio.com/about/#breadcrumb"
            }
        },
        {
            "@type": "ProfessionalService",
            "@id": "https://spawnpointstudio.com/#organization",
            "name": "SpawnPoint Studio",
            "url": "https://spawnpointstudio.com/",
            "logo": "https://spawnpointstudio.com/home/spawn-logo.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
            },
           
        },
        {
            "@type": "Person",
            "@id": "https://spawnpointstudio.com/about/#yasiriqbal",
            "name": "Yasir Iqbal Siddiqui",
            "jobTitle": "Co-Founder & Chief Creative Officer",
            "description": "Yasir Iqbal is a multidisciplinary creative leader with over 15 years of experience shaping brand narratives and leading design-driven transformation across the MENA region and global markets.",
            "url": "https://www.linkedin.com/in/yasir-iqbal-siddiqui",
            "sameAs": [
                "https://www.linkedin.com/in/yasir-iqbal-siddiqui"
            ],
            "affiliation": {
                "@id": "https://spawnpointstudio.com/#organization"
            },
            "knowsAbout": [
                "Brand Strategy",
                "In-Game Marketing",
                "Creative Direction",
                "Digital Ecosystems",
                "Brand Narratives"
            ],
            "worksFor": {
                "@id": "https://spawnpointstudio.com/#organization"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://spawnpointstudio.com/about/#breadcrumb",
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
                    "name": "About Us",
                    "item": "https://spawnpointstudio.com/about"
                }
            ]
        }
    ]
}


const About = () => {
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
                <HeroSection />
                <GamingHero />
                <Achievements />
                <CelebrationSection />
                <Fearless />
                <CaseStudies isabout={true} />
                <MapSection />
                <ContactSection />
                <NewsletterSection />
            </div>
        </>
    )
}

export default About;
