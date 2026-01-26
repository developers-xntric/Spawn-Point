import BrandsPlayableSection from "@/app/components/brand-experience/brand-playable-section";
import ExpertiseSection from "@/app/components/brand-experience/expertise-section";
import NumbersTalkSection from "@/app/components/brand-experience/numbers-talk-section";
import TechStackSection from "@/app/components/brand-experience/tech-stack-section";
import HeroSection from "@/app/components/common/hero";
import PartnersSection from "@/app/components/common/partners-section";
import ContactSection from "@/app/components/contact-section";
import NewsletterSection from "@/app/components/newsletter";
import FAQSection from "@/app/components/ui/faqs";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Branding Experience & Game Marketing Services | Spawn Point",
    description:
        "We design world-class brand experiences and in-game marketing strategies that drive deep engagement, interaction, and lasting recall for industry-leading brands.",
};

/* -------------------- SCHEMA: ORGANIZATION -------------------- */

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spawn Point",
    url: "https://spawnpointstudio.com/",
    logo: "https://spawnpointstudio.com/logo.png",
    email: "play@spawnpointstudio.com",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971523456789",
        contactType: "service",
        areaServed: "AE",
        availableLanguage: "en",
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
    },
    priceRange: "$$",
    areaServed: {
        "@type": "Place",
        name: "Dubai, UAE",
    },
    sameAs: [
        "https://www.linkedin.com/company/spawn-point",
        "https://www.instagram.com/spawnpointstudio",
        "https://www.tiktok.com/@spawnpointstudio",
    ],
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "30",
        bestRating: "5",
        worstRating: "1",
    },
};


/* -------------------- SCHEMA: PERSON -------------------- */

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tehreem Fazal Qureshi",
    description:
        "Tehreem Fazal is a creative strategist, content marketer, and freelance writer with over six years of experience crafting impactful stories for local and international brands. She specializes in content strategy, brand storytelling, and SEO-driven writing across industries including fashion, real estate, food, digital marketing, lifestyle, and automotive.",
    url: "https://www.linkedin.com/in/tehreem-fazal-5",
    sameAs: [
        "https://www.linkedin.com/in/tehreem-fazal-5",
    ],
};

/* -------------------- PAGE COMPONENT -------------------- */

const faqs = [
    {
        question: 'Why is Spawn Point a top gaming design agency?',
        answer:
            'Spawn Point combines a game-native way of thinking and brand strategy to create player-friendly and player-driven experiences. We are designing within gaming culture, not around it. That feeling is what makes our work real, playable, and memorable.',
    },
    {
        question: 'What is an in-game marketing company?',
        answer:
            'An in-game marketing company connects brands to consumers in games and virtual environments. This includes branded environments, interactive mechanics as well as live activations. Engagement is the goal, not interruption.',
    },
    {
        question: 'Which gaming platforms do you work with?',
        answer:
            'We develop games across PC, console, mobile and emerging virtual platforms. Our experiences were built using Roblox, Fortnite Creative, Minecraft, and dedicated custom-built experiences. We adapt our design to fit the way each platform is played.',
    },
    {
        question: 'What is the "4-Quarter System"?',
        answer:
            'We call this the 4-Quarter System, the basis for how we build a long-term, sustainable presence. It breaks campaigns into four phases: entry, engagement, expansion, and retention. This keeps brands fresh instead of just during launch windows.',
    },
    {
        question: 'Do you only work with gaming brands?',
        answer:
            'No- actually, a lot of our clients are non-gaming and are entering into gaming for the first time. We help them translate their identity into playable, interactive formats.Gaming is merely a medium, a risk.',
    },
    {
        question: 'What is the difference between an "activation" and a "virtual world"?',
        answer:
            'An activation is a short-lived, time-limited event, usually associated with a campaign or moment. A virtual world is a world that a player returns to over time. Both can work to different calculated ends, and can be complementary.',
    },
    {
        question: 'How do you integrate creators and streamers into your strategy?',
        answer:
            'We partner with creators and co-create, rather than just place media. They inform experiences, narratives, and live interactions. This builds credibility and organic reach within gaming communities.',
    },
    {
        question: 'Is Spawn Point Studio focused on specific regions?',
        answer:
            'While Spawn Point Studio operates with a global perspective, our core expertise lies in the MENA and GCC regions. We combine local cultural insights with a "platform-first" approach, ensuring that while gaming knows no borders, your content resonates deeply within the local landscape.',
    },
    {
        question: 'How do "In-Stream AdTech" solutions work?',
        answer:
            'In-Stream AdTech incorporates brands into the experience of the digital live stream. The ads are integrated into the gameplay or appear as overlays. It allows for real-time measurable engagement with viewers.',
    },
]

const BrandExperience = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            {/* ----------- SEO SCHEMAS ----------- */}

            <Script
                id="organization-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />

            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <Script
                id="person-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema),
                }}
            />
            <div>
                <HeroSection
                    h1="Where Brands"
                    h2="Become Experiences"
                    para="We design immersive brand experiences inside the platforms audiences already love. From interactive worlds to live activations, our work moves brands beyond visibility and into participation. Every experience is engineered to engage, retain, and evolve, creating lasting value long after launch."
                    icon1="/icons/pacman.png"
                    icon2="/icons/burger.png"
                    buttonText="Enter the Game"
                    icon1Style="absolute left-[10%] md:left-[15%] xl:left-[27%] top-[20%] md:top-[27%] 2xl:left-[32%]"
                    icon2Style="absolute right-[4%] md:right-[20.5%] top-[82%] md:top-[62%] 2xl:top-[62%] 2xl:right-[25%]"
                    paraclass="max-w-[90%] md:max-w-2xl"
                />
                <div className="-mt-6">
                    <PartnersSection isSecond={false} />
                </div>
                <BrandsPlayableSection />
                <ExpertiseSection />
                <TechStackSection />
                <NumbersTalkSection />
                <FAQSection />
                <ContactSection />
                <NewsletterSection />
            </div>
        </>
    )
}

export default BrandExperience;
