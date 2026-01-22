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

export const metadata: Metadata = {
    title: "About Spawn Point | In-Game Marketing & Streamers Agency",
    description:
        "Learn how Spawn Point Studio leads the way in in-game marketing and brand activations, blending creative strategy with technology to build impactful campaigns.",
};

const About = () => {
    return (
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
    )
}

export default About;
