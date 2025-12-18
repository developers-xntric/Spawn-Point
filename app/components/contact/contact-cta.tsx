import Image from "next/image"
import HeroSection from "../common/hero"


export default function ContactCTA() {
    return (
        <HeroSection
                h1="Ready to"
                h2="Play for Real?"
                para=" Your audience is already inside gaming, esports, and virtual worlds. Let’s meet them with experiences that earn time, trust, and loyalty. Start the conversation, and everything else follows."
                icon1="/icons/OMG.svg"
                icon2="/icons/Dollar.svg"
                icon1Style="absolute left-[10%] md:left-[15%] xl:left-[32%] top-[25%] md:top-[32%]"
                icon2Style="absolute right-[4%] md:right-[21.5%] top-[70%] md:top-[58%]"
                icon1Width={100}
                icon2Width={80}
            />

        // <section className="bg-[#031347] min-h-[300px] md:min-h-[300px] 2xl:min-h-[500px] flex items-center justify-center relative pt-16 mt-20 md:mt-20 2xl:mt-20 mb-12">
        //     {/* Pizza image - left side */}
        //     <div className="absolute left-[4%] md:left-[10%] lg:left-[20%]  xl:left-[30%] top-[20%] md:top-[30%]">
        //         <Image src="/icons/OMG.svg" alt="Pizza decoration" width={50} height={50} className="object-contain" />
        //     </div>

        //     {/* Robot image - right side */}
        //     <div className="absolute right-0 md:right-[4%] lg:right-[20%] xl:right-[30%] top-[90%] md:top-[70%] xl:top-[67%]">
        //         <Image src="/icons/Dollar.svg" alt="Robot decoration" width={50} height={50} className="object-contain" />
        //     </div>

        //     {/* Center content */}
        //     <div className="text-center z-10 mb-10">
        //         <h1 className="text-white text-[50px] md:text-[100px] font-fks font-bold uppercase tracking-wide">Ready to</h1>
        //         <h2 className="text-[#BBFC00] text-[70px] md:text-[130px] font-fks font-bold uppercase tracking-wide leading-20 relative md:bot  bottom-3 uppercase">Play for Real?</h2>
        //         <p className="text-white text-md mt-2 md:mt-6 max-w-sm mx-auto">
        //            Your audience is already inside gaming, esports, and virtual worlds. Let’s meet them with experiences that earn time, trust, and loyalty. Start the conversation, and everything else follows.
        //         </p>
                
        //     </div>
            
        // </section>
    )
}
