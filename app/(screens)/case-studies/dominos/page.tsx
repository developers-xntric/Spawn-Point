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
          

const Dominos = () => {
    return (
        <div className="space-y-10 md:space-y-20">
            <CaseHero
                title="Case study"
                subtitle="Domino’s"
                buttonText="Let's Start"
                buttonLink="/contact"
                leftImage="/icons/pizza.png"
                rightImage="/icons/man.png"
            />
            <CaseSecond
                title="Positioned pizza as the ultimate gaming companion by embedding high-impact, non-intrusive overlays across popular game streams."
                videoSrc="/dominos/feature.png"

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
                                "Knowing that many gamers will eat while playing, Domino's advertises pizza as the ultimate gaming fuel for long gaming sessions.",
                            videoSrc: "/dominos/left-1.gif",
                        },
                        {
                            title: "THE CHALLENGE",
                            description:
                                "The gaming ecosystem is crowded with ads competing for attention. Domino’s needed to remain culturally relevant while driving measurable engagement. Traditional formats risked being ignored by gaming audiences.",
                            videoSrc: "/dominos/right-1.gif",
                        },
                    ]}
                />
            </div>

            <Solutions titleClass="text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase  text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]" rightCardClass=" md:rounded-[20px] rounded-[10px] bg-white/5 backdrop-blur-[30px] overflow-hidden border border-[#FFFFFF1A] flex-1 flex flex-col md:py-10 py-6 md:px-6 px-4"
                pointsClass="flex flex-col justify-between flex-1 list-decimal list-inside text-[14px] md:text-[17px] 2xl:text-[22px] font-hel text-white gap-6"

                descClass="text-white text-base 2xl:text-[20px] font-hel mb-4 mt-4" solutions={[
                    {
                        title: "SOLUTION", 
                        description:
                            "A partnership program recruited top 321 gaming streamers to play popular titles like League of Legends, VALORANT, GTA V, and FIFA. These were less visible overlay formats that filled the space during the stream, not on top.",
                        points: [
                            "Domino’s partnered with gaming streamers across popular titles.",
                            "Non-intrusive live stream overlays replaced disruptive ad formats.",
                            "Messaging was aligned with gaming moments and food consumption behavior.",
                        ],
                        imageSrc: "/dominos/logo.svg",
                    },
                ]} />

            <ResultsSection
                titleClass="mb-6 text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase text-left md:text-center text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]"
                results={resultsData}

                description="Domino's became culturally relevant for gamers and was embraced by gamers with these integral placements in the gaming world."
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

export default Dominos;
