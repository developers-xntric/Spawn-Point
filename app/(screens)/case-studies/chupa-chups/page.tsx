import CaseIntro from "@/app/components/case-studies/case-intro";
import CaseSecond from "@/app/components/case-studies/case-second";
import CaseHero from "@/app/components/case-studies/hero";
// import { ResultsSection } from "@/app/components/case-studies/result";
import Solutions from "@/app/components/case-studies/solutions";


const resultsData = [
  { title: "It stressed humor and gamer habits, increasing relevance." },
  { title: "Achieved ~800K video views across multiple gaming categories." },
  { title: "Achieved a 4.52% clickthrough rate (CTR), exceeding the industry average." },
];


const ChupaChups = () => {
    return (
        <div className="space-y-20">
            <CaseHero
                title="Case study"
                subtitle="Chupa Chups"
                buttonText="Let's Started"
                buttonLink="/contact"
                leftImage="/icons/pizza.png"
                rightImage="/icons/man.png"
            />
            <CaseSecond
                title="Integrated contextual in-game stream triggers to engage gamers at key gameplay moments without disrupting the viewing experience."
                videoSrc="/videos/demo-video.mp4"
                titleClass="text-white text-[50px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase text-center mb-10 tracking-[1.5px] leading-[65px] 2xl:leading-[80px]"
                sectionClass="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto bg-[#031347] flex flex-col items-center justify-center"
                videoClass="w-full  rounded-xl shadow-xl h-[600px]"
            />

            <div className="rounded-[162px_0_0_0] bg-[#091B56] py-20">
                <CaseIntro
                    sectionClass="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto flex justify-between gap-5 "
                    cardClass="md:rounded-[20px] rounded-[10px] bg-white/5 backdrop-blur-[30px] p-3 md:p-5 overflow-hidden border border-[#FFFFFF1A] flex-1  flex flex-col"
                    titleClass="text-[50px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase  text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]"
                    descClass="text-white text-sm 2xl:text-[20px]  mb-4"
                    videoClass="w-full rounded-md"
                    cards={[
                        {
                            title: "INTRODUCTION",
                            description:
                                "Gamers are highly sensitive to interruptions during live gameplay and tend to ignore traditional digital ads. Any brand presence that disrupts immersion risks negative perception. Chupa Chups needed a way to engage gamers without breaking the flow of play.",
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

            <Solutions titleClass="text-[50px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase  text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]" rightCardClass="md:rounded-[20px] rounded-[10px] bg-white/5 backdrop-blur-[30px] p-3 md:p-5 overflow-hidden border border-[#FFFFFF1A] flex-1  flex flex-col justify-between items-center h-[400px]" descClass="text-white text-sm 2xl:text-[20px] font-hel mb-4" solutions={[
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

            {/* <ResultsSection
                results={resultsData}
                description="In doing so, Chupa Chups became a native part of the gaming moment, not just a break in the action, targeting gaming audiences and in-game branding."
            /> */}


        </div>
    )
}

export default ChupaChups;
