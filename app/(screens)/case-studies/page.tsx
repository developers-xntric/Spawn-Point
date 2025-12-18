import CaseStudySection from '@/app/components/common/case-study-2';
import CaseStudySection2 from '@/app/components/common/case-study-3';
import CaseStudiesGrid from '@/app/components/common/case-study-grid';
import HeroSection from '@/app/components/common/hero';
import PartnersSection from '@/app/components/common/partners-section';
import ContactSection from '@/app/components/contact-section';

const CaseStudies = () => {
    return (
        <div>
            <HeroSection />
            <CaseStudySection />
            <CaseStudySection2 />
            <div>
                <h2 className="text-[40px] md:text-[70px] font-fks font-bold text-center text-white uppercase tracking-[1.5px"> <span className="text-[#BBFC00]">Our</span> Partners</h2>
                <PartnersSection />

            </div>
            <CaseStudiesGrid />
            <ContactSection />
        </div>
    )
}

export default CaseStudies;
