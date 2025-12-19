import CaseIntro from "@/app/components/case-studies/case-intro";
import CaseSecond from "@/app/components/case-studies/case-second";
import CaseHero from "@/app/components/case-studies/hero";
import ResultsSection from "@/app/components/case-studies/result";
import ReviewsCarousel from "@/app/components/case-studies/reviews";
import Solutions from "@/app/components/case-studies/solutions";
import PartnersSection from "@/app/components/common/partners-section";
import ContactSection from "@/app/components/contact-section";


const resultsData = [
    { title: "It stressed humor and gamer habits, increasing relevance." },
    { title: "Achieved ~800K video views across multiple gaming categories." },
    { title: "Achieved a 4.52% clickthrough rate (CTR), dramatically exceeding the industry average for the format." },
];


const ChupaChups = () => {
    return (
        <div className="space-y-10 md:space-y-20">
            <CaseHero
                title="Case study"
                subtitle="Chupa Chups"
                buttonText="Let's Start"
                buttonLink="/contact"
                leftImage="/icons/pizza.png"
                rightImage="/icons/man.png"
            />
            <CaseSecond
                title="Integrated contextual in-game stream triggers to engage gamers at key gameplay moments without disrupting the viewing experience."
                videoSrc="/videos/demo-video.mp4"
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
                                "Chupa Chups has used our Stream Trigger mechanism for real-time sponsorships for gamers' live streams. Rather than interrupting the gaming experience with pre-roll or mid-roll ads, Chupa Chups leveraged our AI game moments technology, Stream Trigger, to run brand messages at real moments of action. At the same time, Gen-Z and millennial gamers were engaged in their games. ",
                            videoSrc: "/chupa-chups/left-1.gif",
                        },
                        {
                            title: "THE CHALLENGE",
                            description:
                                "Gamers are highly sensitive to interruptions during live gameplay and tend to ignore traditional digital ads. Any brand presence that disrupts immersion risks negative perception. Chupa Chups needed a way to engage gamers without breaking the flow of play.",
                            videoSrc: "/chupa-chups/right-1.gif",
                        },
                    ]}
                />
            </div>

            <Solutions  titleClass="text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase  text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]" rightCardClass=" md:rounded-[20px] rounded-[10px] bg-white/5 backdrop-blur-[30px] overflow-hidden border border-[#FFFFFF1A] flex-1 flex flex-col md:py-10 py-6 md:px-6 px-4"
                pointsClass="flex flex-col justify-between flex-1 list-decimal list-inside text-[14px] md:text-[17px] 2xl:text-[20px] font-hel text-white gap-6"

                descClass="text-white text-base 2xl:text-[20px] font-hel mb-4 mt-4" solutions={[
                    {
                        title: "SOLUTION",
                        description:
                            "Our AI-powered stream triggers were used to activate overlays at key in-game moments. Brand messaging appeared contextually during high-engagement actions. This allowed Chupa Chups to blend naturally into the gaming experience.",
                        points: [
                            "Dynamic overlays were triggered during key points in-game where engagement was highest (kills, wins, key plays in VALORANT, and others).",
                            "The messaging was contextual, light-hearted, and visually oriented to a gaming audience.",
                            "The campaign was run across multiple streamers and games to reach as many people as possible.",
                        ],
                        imageSrc: "/chupa-chups/logo.svg",
                    },
                ]} />

            <ResultsSection
                titleClass="mb-6 text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase text-left md:text-center text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]"
                results={resultsData}
                
                description="In doing so, Chupa Chups became a native part of the gaming moment, not just a break in the action, targeting gaming audiences and in-game branding."
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

export default ChupaChups;
