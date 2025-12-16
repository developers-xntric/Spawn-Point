import ExpertiseSection from "@/app/components/brand-experience/expertise-section";
import HeroSection from "@/app/components/common/hero";
import PartnersSection from "@/app/components/common/partners-section";

const BrandExperience = () => {
    return (
        <div>
            <HeroSection
                h1="Where brands"
                h2="meet play"
                p="We design campaigns, creators, esports moments, and virtual worlds that move culture and performance at the same time."
                img1="/icons/pacman.png"
                img2="/icons/burger.png"
            />
            <div className="-mt-24">
                <PartnersSection isSecond={false} />
            </div>
            <ExpertiseSection />
        </div>
    )
}

export default BrandExperience;
