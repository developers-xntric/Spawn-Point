import CaseIntro from "@/app/components/case-studies/case-intro";
import CaseSecond from "@/app/components/case-studies/case-second";
import CaseHero from "@/app/components/case-studies/hero";
import ResultsSection from "@/app/components/case-studies/result";
import ReviewsCarousel from "@/app/components/case-studies/reviews";
import Solutions from "@/app/components/case-studies/solutions";
import PartnersSection from "@/app/components/common/partners-section";
import ContactSection from "@/app/components/contact-section";


const resultsData = [
    { title: "Worked with 673 streamers, delivering 2.1X more engagement than benchmarks." },
    { title: "It received a 1.10% CTR within 5 million views." },
    { title: "Doritos proved beyond doubt that gaming campaigns that cater to specific genres can be more effective than a one-size-fits-all approach." },
];
          

const Doritos = () => { 
    return (
        <div className="space-y-10 md:space-y-20">
            <CaseHero
                title="Case study"
                subtitle="Doritos"
                buttonText="Let's Start"
                buttonLink="/contact"
                leftImage="/icons/pizza.png"
                rightImage="/icons/man.png"
            />
            <CaseSecond
                title="Drove higher engagement by tailoring live stream branding to specific game genres and gamer personas at scale."
                videoSrc="/doritos/feature.svg"
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
                                "It partnered with 673 streamers and received 140% higher engagement. Doritos wanted to not only be more present in gaming but also appeal to several player groups.",
                            videoSrc: "/dominos/left-1.gif",
                        },
                        {
                            title: "THE CHALLENGE",
                            description:
                                "Gaming audiences vary significantly across genres and player motivations. A single creative approach risked feeling generic or irrelevant. Doritos needed scale without sacrificing contextual relevance.",
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
                            "Streamers were segmented by game genre and audience type. Overlay creatives were customized to match each gaming environment. This ensured relevance while activating a large creator network.",
                        points: [
                            "Streamers were sorted according to game genre (Battle Royale, MOBA, FPS, etc.).",
                            "Overlay creatives were modified to match an audience's expectations for each genre.",
                            "The collaboration of large creators gave it reach.",
                        ],
                        imageSrc: "/dominos/logo.svg",
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

export default Doritos;
