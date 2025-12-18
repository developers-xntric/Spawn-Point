import CaseStudySection from '@/app/components/common/case-study-2';
import CaseStudySection2 from '@/app/components/common/case-study-3';
import CaseStudiesGrid from '@/app/components/common/case-study-grid';
import HeroSection from '@/app/components/common/hero';
import PartnersSection from '@/app/components/common/partners-section';
import ContactSection from '@/app/components/contact-section';

const CaseStudies = () => {
    return (
        <div>
            <HeroSection
                h1="Real Results"
                h2="Real Engagement"
                para="See how we’ve helped brands connect with gaming audiences through immersive, measurable activations."
                icon1="/icons/pizza.png"
                icon2="/icons/robo.png"
                buttonText="Let’s Get Started"
                hWidth='max-w-md'
                icon1Style="absolute left-[10%] md:left-[15%] xl:left-[27%] top-[20%] md:top-[27%]"
                icon2Style="absolute right-[4%] md:right-[20%] top-[70%] md:top-[58%]"
                icon1Width={50}
                icon2Width={70}
            />
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
