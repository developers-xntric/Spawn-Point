import BrandsPlayableSection from "@/app/components/brand-experience/brand-playable-section";
import ExpertiseSection from "@/app/components/brand-experience/expertise-section";
import NumbersTalkSection from "@/app/components/brand-experience/numbers-talk-section";
import TechStackSection from "@/app/components/brand-experience/tech-stack-section";
import HeroSection from "@/app/components/common/hero";
import PartnersSection from "@/app/components/common/partners-section";
import ContactSection from "@/app/components/contact-section";
import NewsletterSection from "@/app/components/newsletter";

const BrandExperience = () => {
    return (
        <div>
            <HeroSection />
            <div className="-mt-24">
                <PartnersSection isSecond={false} />
            </div>
            <BrandsPlayableSection />
            <ExpertiseSection />
            <TechStackSection />
            <NumbersTalkSection />
            <ContactSection />
            <NewsletterSection />
        </div>
    )
}

export default BrandExperience;
