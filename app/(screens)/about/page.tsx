import HeroSection from '@/app/components/about/hero';
import { Achievements } from '@/app/components/about/achievements';
import GamingHero from '@/app/components/about/gaming-hero';
import { CaseStudies } from '@/app/components/case-studies';
import MapSection from '@/app/components/map-section';
import CelebrationSection from '@/app/components/about/celeberaitng-section';
import Fearless from '@/app/components/about/fearless';

const About = () => {
    return (
        <div>
            <HeroSection />
            <GamingHero />
            <Achievements />
            <CaseStudies />
            <MapSection />
            <CelebrationSection />
            <Fearless   />
        </div>
    )
}

export default About;
