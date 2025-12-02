"use client"
import { useEffect, useRef } from "react"
import { useWindowWidth } from "../hooks/usewindowwidth"
import Link from "next/link"
import Image from "next/image"

// Card data
const cards = [
    {
        heading: "Set goals",
        para: "Who do you want your message delivered to, and what’s your ideal result? Together, we’ll set goals and create a game plan to boost brand awareness, increase sales, or launch products. Whatever your target, we’ll hit it.",
    },
    {
        heading: "Build the strategy ",
        para: "Once your goal is clear, we get planning! From concept to creative, we craft custom in-game advertising campaigns that match your audience’s vibe and gameplay environment. ",
    },
    {
        heading: "Activate the campaign ",
        para: "We’ll ensure your ads are artfully incorporated into the game, keeping the experience fun, engaging, and, most crucially,",
    },
    {
        heading: "Amplify what works ",
        para: "We'll look at how your in-game ads performed, and point out key insights and lessons learnedall while staying focused on even bigger wins ahead!",
    },
]

export default function StickyCards() {
    const sectionRef = useRef(null)
    const width = useWindowWidth()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in")
                    } else {
                        entry.target.classList.remove("fade-in")
                    }
                })
            },
            { threshold: 0.2 },
        )

        const sliderItems = document.querySelectorAll(".slider")
        sliderItems.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="bg-[#091B56] mt-20 text-white pb-4 lg:pb-40 xl:pt-16 pt-10 relative"
        >
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* LEFT SECTION */}
                    <div className="w-[96vw] lg:w-[40%] xl:w-[50%] sticky top-0 lg:top-[35%] z-20 lg:bg-transparent h-fit">
                        <p className="mb-4 text-[20px] tracking-[12px] text-[#FF1586] font-hel">
                            EXECUTION STEPS
                        </p>
                        {width > 1024 ? (
                            <h2 className="text-[60px] font-fks font-bold uppercase text-white leading-[65px] tracking-[2px]  max-w-[550px]">
                                How our <span className="text-[#BBFC00]">in-game </span> advertising process{" "}
                                <span className="text-[#BBFC00]"> works</span>
                            </h2>
                        ) : (
                            <h2 className="text-[60px] font-fks font-bold uppercase text-white leading-[65px] tracking-[2px] ">
                                How our <span className="text-[#BBFC00]">in-game </span> advertising process{" "}
                                <span className="text-[#BBFC00]"> works</span>
                            </h2>
                        )}
                        <p className="text-white text-sm md:text-[20px] font-hel mt-5 ">
                            From casual mobile players or competitive console gamers, no matter who you intend to reach, we’ll see your campaign through from start to finish. Our team will ensure it’s optimized for success along the way and provide frequent updates.
                        </p>
                        <Link href="/contact">
                            <button className="px-8 py-3 rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white border-2 transition cursor-pointer mt-5 font-hel">
                                Lets Connect
                            </button>
                        </Link>
                    </div>

                    {/* RIGHT SECTION — CARDS NOW SHOWING */}
                    <div className="w-full lg:w-[60%] xl:w-[50%] space-y-8">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`slider opacity-0 transition-all duration-700 translate-y-12
      relative flex flex-row justify-between items-start md:items-center  
      rounded-[20px] border-2 border-[#273561] bg-white/5 
      backdrop-blur-[30px] p-10
      ${index === 0 && ""} border-[#3C3C3C]`}
                            >

                                {/* TOP RIGHT IMAGE */}
                                <Image
                                    src="/home/gif-icons.svg"
                                    alt="icons"
                                    width={60}
                                    height={60}
                                    className="w-[140px] h-[50px] absolute top-2 right-8 z-20"
                                />

                                <Image
                                    src="/home/curve-bg-sticky.svg"
                                    alt="icons"
                                    width={6000}
                                    height={6000}
                                    className="w-[1500px] h-[90%] absolute right-[5%] z-20"
                                />

                                {/* TEXT CONTENT */}
                                <div className="relative z-10 w-[60%] lg:w-auto flex flex-col space-y-2">
                                    <p className="text-[#BBFC00] text-[16px] md:text-[20px] lg:text-[20px] xl:text-[25px]">
                                        TIER {index + 1}
                                    </p>

                                    <h3
                                        dangerouslySetInnerHTML={{ __html: card.heading }}
                                        className="text-[#FFF] text-[20px] md:text-[32px] lg:text-[26px] xl:text-[40px]
        font-bold tracking-wide uppercase font-fks"
                                    />

                                    <p className="text-white text-sm md:text-[18px] font-hel">
                                        {card.para}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
