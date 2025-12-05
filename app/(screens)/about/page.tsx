import CaseStudySection from '@/app/components/common/case-study-2';
import CaseStudySection2 from '@/app/components/common/case-study-3';
import CaseStudiesGrid from '@/app/components/common/case-study-grid';
import HeroSection from '@/app/components/about/hero';
import PartnersSection from '@/app/components/common/partners-section';
import { Achievements } from '@/app/components/about/achievements';

const About = () => {
    return (
        <div>
            <HeroSection />
            <Achievements />
            <CaseStudySection2 />
            <PartnersSection />
            <CaseStudiesGrid />
        </div>
    )
}

export default About;
