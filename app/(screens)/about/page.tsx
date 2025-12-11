import HeroSection from '@/app/components/about/hero';
import { Achievements } from '@/app/components/about/achievements';
import GamingHero from '@/app/components/about/gaming-hero';
import { CaseStudies } from '@/app/components/case-studies';
import MapSection from '@/app/components/map-section';
import CelebrationSection from '@/app/components/about/celeberaitng-section';
import Fearless from '@/app/components/about/fearless';
import ContactSection from '@/app/components/contact-section';
import NewsletterSection from '@/app/components/newsletter';

const About = () => {
    return (
        <div>
            <HeroSection />
            <GamingHero />
            <Achievements />
            <CelebrationSection />
            <Fearless />
            <CaseStudies />
            <MapSection />
            <ContactSection />
            <NewsletterSection />
        </div>
    )
}

export default About;
