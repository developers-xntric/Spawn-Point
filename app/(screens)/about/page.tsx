import CaseStudySection from '@/app/components/common/case-study-2';
import CaseStudySection2 from '@/app/components/common/case-study-3';
import CaseStudiesGrid from '@/app/components/common/case-study-grid';
import HeroSection from '@/app/components/about/hero';
import PartnersSection from '@/app/components/common/partners-section';
import { Achievements } from '@/app/components/about/achievements';
import GamingHero from '@/app/components/about/gaming-hero';

const About = () => {
    return (
        <div>
            <HeroSection />
            <GamingHero />
            <Achievements />
            <CaseStudySection2 />
            <PartnersSection />
            <CaseStudiesGrid />
        </div>
    )
}

export default About;
