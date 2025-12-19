import CaseIntro from "@/app/components/case-studies/case-intro";
import CaseSecond from "@/app/components/case-studies/case-second";
import CaseHero from "@/app/components/case-studies/hero";
import ResultsSection from "@/app/components/case-studies/result";
import ReviewsCarousel from "@/app/components/case-studies/reviews";
import Solutions from "@/app/components/case-studies/solutions";
import PartnersSection from "@/app/components/common/partners-section";
import ContactSection from "@/app/components/contact-section";


const resultsData = [
    { title: "380K+ views with 1.16% CTR." },
    { title: "Activated 722 creators and 275 categories for maximum discovery and reach." },
    { title: "Karaca rebranded itself as a tech-integrated lifestyle brand, attracting a wider audience beyond its original clientele." },
]; 
          

const Karaca = () => { 
    return (
        <div className="space-y-10 md:space-y-20">
            <CaseHero
                title="Case study"
                subtitle="Karaca"
                buttonText="Let's Start"
                buttonLink="/contact"
                leftImage="/icons/pizza.png"
                rightImage="/icons/man.png"
            />
            <CaseSecond
                title="Introduced a tech-enabled lifestyle product to gamers by aligning interactive overlays with tech-savvy gaming audiences."
                videoSrc="/karaca/feature.svg"
                titleClass="text-white text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase  md:text-center mb-10 tracking-[1.5px] leading-[40px] md:leading-[65px] 2xl:leading-[80px]"
                sectionClass="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto bg-[#031347] flex flex-col items-center justify-center"
                videoClass="w-full  rounded-xl shadow-xl h-[250px] md:h-[400px] lg:h-[600px]"
            />

            <div className="rounded-[60px_0_0_0] md:rounded-[162px_0_0_0] bg-[#091B56] py-10 md:py-20">
                <CaseIntro
                    sectionClass="2xl:max-w-[1440px] w-[95%] md:w-[85%] mx-auto flex md:flex-row flex-col justify-between md:gap-5 "
                    cardClass="md:rounded-[20px] rounded-[10px] md:bg-white/5 md:backdrop-blur-[30px] p-3 md:p-5 overflow-hidden md:border border-[#FFFFFF1A] flex-1  justify-between flex flex-col"
                    titleClass="text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase  text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]"
                    descClass="text-white text-sm 2xl:text-[20px]  mb-4"
                    videoClass="w-full rounded-md"
                    cards={[
                        {
                            title: "INTRODUCTION",
                            description:
                                "Karaca introduced their 'Çaysever Robotea' product to gamers. Karaca is a lifestyle and homeware brand, and wanted to produce a tech-enabled product to target a younger audience on gaming platforms.",
                            videoSrc: "/karaca/left-1.gif",
                        },
                        { 
                            title: "THE CHALLENGE",
                            description:
                                "Karaca wanted to introduce a tech-enabled product to younger consumers. The brand needed to move beyond traditional lifestyle marketing channels. Building credibility in digital-first environments was essential.",
                            videoSrc: "/karaca/right-1.gif",
                        },
                    ]}
                />
            </div>

            <Solutions titleClass="text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase  text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]" rightCardClass=" md:rounded-[20px] rounded-[10px] bg-white/5 backdrop-blur-[30px] overflow-hidden border border-[#FFFFFF1A] flex-1 flex flex-col md:py-10 py-6 md:px-6 px-4"
                pointsClass="flex flex-col justify-between flex-1 list-decimal list-inside text-[14px] md:text-[17px] 2xl:text-[20px] font-hel text-white gap-6"

                descClass="text-white text-base 2xl:text-[20px] font-hel mb-4 mt-4" solutions={[
                    {
                        title: "SOLUTION", 
                        description:
                            "Gaming livestreams were used to reach tech-savvy audiences. Interactive overlays and creator integrations showcased innovation. The product was positioned naturally within gaming and tech contexts.",
                        points: [
                            "It targets gamers with interests in technology and innovation.",
                            "Used Twitch streams and creators to show the product through interactive overlays.",
                            "Intended influencer integrations embed the product into gaming ecosystems.",
                        ],
                        imageSrc: "/karaca/logo.svg",
                    },
                ]} />

            <ResultsSection
                titleClass="mb-6 text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase text-left md:text-center text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]"
                results={resultsData}

                description=""
                gridClass="grid lg:grid-cols-3 gap-6 mb-6"
                sectionClass=""
                cardClass="bg-white/5 backdrop-blur-[30px] md:text-[20px] border border-[#FFFFFF1A] rounded-xl p-6 text-white flex text-left"
                descriptionClass="text-white lg:text-[22px] md:text-[20px] text-left md:text-center  md:max-w-[900px] md:mx-auto"
            />
            <div>
                <h2 className="text-[35px] md:text-[70px] font-fks font-bold text-center text-white uppercase tracking-[1.5px]"> <span className="text-[#BBFC00]">Our</span> Partners</h2>
                <PartnersSection />

            </div>

            <ReviewsCarousel />

            <ContactSection />


        </div>
    )
}

export default Karaca;
