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
            <HeroSection
                h1="Where Brands"
                h2="Become Experiences"
                para="We design immersive brand experiences inside the platforms audiences already love. From interactive worlds to live activations, our work moves brands beyond visibility and into participation. Every experience is engineered to engage, retain, and evolve, creating lasting value long after launch."
                icon1="/icons/pacman.png"
                icon2="/icons/burger.png"
                buttonText="Enter the Game"
                icon1Style="absolute left-[10%] md:left-[15%] xl:left-[27%] top-[20%] md:top-[27%]"
                icon2Style="absolute right-[4%] md:right-[22.5%] top-[70%] md:top-[62%]"
                paraclass="max-w-[90%] md:max-w-2xl"
            />
            <div className="-mt-6">
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
