import CaseIntro from "@/app/components/case-studies/case-intro";
import CaseSecond from "@/app/components/case-studies/case-second";
import CaseHero from "@/app/components/case-studies/hero";
import ResultsSection from "@/app/components/case-studies/result";
import ReviewsCarousel from "@/app/components/case-studies/reviews";
import Solutions from "@/app/components/case-studies/solutions";
import PartnersSection from "@/app/components/common/partners-section";
import ContactSection from "@/app/components/contact-section";


const resultsData = [
    { title: "216,414 viewers reached" },
    { title: "1.49% CTR, 148% above industry benchmark" },
    { title: "Strong engagement driven by genre-brand alignment" },
]; 
            

const Shell = () => { 
    return (
        <div className="space-y-10 md:space-y-20">
            <CaseHero
                title="Case study"
                subtitle="Shell"
                buttonText="Let's Start"
                buttonLink="/contact"
                leftImage="/icons/pizza.png"
                rightImage="/icons/man.png"
            />
            <CaseSecond
                title="Extended real-world motorsport credibility into racing and simulation games through performance-aligned live stream branding."
                videoSrc="/shell/feature.svg"
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
                                "Shell targeted racing and simulation gaming audiences by activating streamers playing performance-driven titles such as iRacing, Euro Truck Simulator 2, and Rocket League. The campaign leveraged gaming environments where speed, engineering, and realism naturally align with Shell’s brand values.",
                            videoSrc: "/shell/left-1.gif",
                        },
                        { 
                            title: "THE CHALLENGE",
                            description:
                                "Shell wanted to engage younger audiences beyond traditional motorsports. Entering gaming risked feeling disconnected from core brand values. Authenticity and relevance were critical to success.",
                            videoSrc: "/shell/right-1.gif",
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
                            "The campaign focused on racing and simulation games aligned with performance. Creators playing driving-focused titles were activated. Shell branding was integrated contextually into gameplay environments.",
                        points: [ 
                            "Partnered with 135 streamers within the racing and simulation game categories",
                            "Used non-intrusive live stream overlays to integrate Shell branding seamlessly into gameplay",
                            "Focused on contextual relevance rather than broad, generic gaming exposure",
                        ], 
                        imageSrc: "/shell/logo.svg",
                    },
                ]} />

            <ResultsSection
                titleClass="mb-6 text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase text-left md:text-center text-white  tracking-[1.5px] leading-[65px] 2xl:leading-[80px]"
                results={resultsData}
                description="Shell positioned itself as a performance-led, technology-driven brand within racing and simulation gaming communities, reinforcing credibility through natural contextual integration."
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

export default Shell ;
