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
    alternates: {
        canonical: "https://spawnpointstudio.com/brand-experience",
    },
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

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfessionalService",
            "@id": "https://spawnpointstudio.com/brand-experience/#main-service",
            "name": "In-Game Brand Experience & Activation Services",
            "url": "https://spawnpointstudio.com/brand-experience",
            "image": "https://spawnpointstudio.com/home/spawn-logo.png",
            "description": "Spawnpoint Studio specializes in creating immersive in-game marketing experiences. From Roblox world building to Fortnite creative maps, we connect brands with gamers.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
            },
            
            "priceRange": "AED 10000 - AED 500000",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "30",
                "bestRating": "5",
                "worstRating": "1"
            }
        },
        {
            "@type": "ItemList",
            "@id": "https://spawnpointstudio.com/brand-experience/#itemlist",
            "name": "Gaming Marketing Services List",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Roblox World Building"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Fortnite Creative Activations"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Minecraft Branded Environments"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "In-Stream AdTech Solutions"
                }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://spawnpointstudio.com/brand-experience/#breadcrumb",
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
                    "name": "Brand Experience",
                    "item": "https://spawnpointstudio.com/brand-experience"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://spawnpointstudio.com/brand-experience/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why is Spawn Point a top gaming design agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Spawn Point combines a game-native way of thinking and brand strategy to create player-friendly and player-driven experiences. We are designing within gaming culture, not around it."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is an in-game marketing company?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An in-game marketing company connects brands to consumers in games and virtual environments. This includes branded environments, interactive mechanics as well as live activations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which gaming platforms do you work with?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We develop games across PC, console, mobile and emerging virtual platforms like Roblox, Fortnite Creative, and Minecraft."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the '4-Quarter System'?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The 4-Quarter System is our basis for building a long-term, sustainable presence by breaking campaigns into four phases: entry, engagement, expansion, and retention."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you only work with gaming brands?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, many of our clients are non-gaming brands entering the gaming space for the first time. We help translate their identity into playable, interactive formats."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between an 'activation' and a 'virtual world'?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An activation is a short-lived, time-limited event, while a virtual world is a persistent environment that players return to over time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you integrate creators and streamers into your strategy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We partner with creators to co-create experiences and narratives, building credibility and organic reach within gaming communities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is Spawn Point Studio focused on specific regions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While we operate globally, our core expertise lies in the MENA and GCC regions, ensuring content resonates deeply within the local landscape."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do 'In-Stream AdTech' solutions work?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In-Stream AdTech incorporates brands into the digital live stream experience via gameplay integration or real-time overlays."
                    }
                }
            ]
        }
    ]
}


const BrandExperience = () => {
    return (
        <>
            {/* ----------- SEO SCHEMAS ----------- */}

            <Script
                id="schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
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
