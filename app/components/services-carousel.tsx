"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel"
import { ServiceCard } from "./service-card"
import type { CarouselApi } from "../components/ui/carousel"

const services = [
    {
        id: 1,
        title: "CAMPAIGNS & ACTIVATIONS",
        description:
            "We create creator-led storytelling and hybrid events‚ building brand awareness from high-impact digital moments to in-stream campaigns‚ that slot effortlessly into the gaming world․",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
        image: "/home/service-1.svg",
        serviceurl: "/contact",
    },
    {
        id: 2,
        title: "ESPORTS PARTNERSHIPS",
        description:
            "Gain entry into the competitive arena․ We ease high-value IP integrations with and sponsorships of esports‚ where players are intensely loyal, and the competition is largely regional․",
        borderColor: "from-[#E81B8E]",
        accentColor: "border-[#E81B8E]",
        image: "/home/service-2.svg",
        serviceurl: "/contact",
    },
    {
        id: 3,
        title: "Virtual Worlds",
        description:
            "We build sustainable branded economies․ Whether it's on Roblox‚ Fortnite‚ Minecraft‚ or all of the above‚ we create worlds that drive long-term conversion and retention․",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
        image: "/home/service-3.svg",
        serviceurl: "/contact",
    },
    {
        id: 4,
        title: "In-Stream AdTech",
        description:
            "Harness our proprietary AI Ad Engine․ Non-disruptive contextual stream triggers placed at natural breaks in the game make your brand feel like a part of the 'win'․",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
        image: "/home/service-4.svg",
        serviceurl: "/contact",
    },

]

export function ServicesCarousel() {
    const [api, setApi] = React.useState<CarouselApi | null>(null)
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const progressPercent = ((current + 1) / count) * 100

    return (
        <section className="pb-0 md:pb-1 pt-16 md:pt-20">
            <div className="2xl:max-w-[1440px] w-full md:w-[85%] mx-auto">

                {/* HEADER (UNCHANGED) */}
                <div className="mb-10 md:text-center 2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                    <p className="mb-4 md:text-[20px] text-[16px] tracking-[12px] uppercase text-[#FF1586] font-hel"> Our Core Services </p>
                    <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white max-w-[770px] mx-auto lg:leading-[65px] md:leading-[45px] leading-10 md:tracking-[2px] tracking-[1.5px]"> The New Standard for <span className="text-[#BBFC00]">Gaming Marketing</span> in the GCC
                    </h2>
                </div>


                <div className="">
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-[84.5vw] md:w-full mx-auto">
                        {services.map((service) => (
                            <div key={service.id} className="">
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CONTROLS ROW (YOUR UI PRESERVED) */}
                <div className="flex items-center md:justify-center md:gap-6 gap-4 relative ml-6  md:ml-0  mt-10 md:mt-10">

                    {/* LEFT */}
                    {/* <button
                        onClick={() => api?.scrollPrev()}
                        className="rounded-full border-2 border-[#273561] p-2 w-10 md:w-14 h-10 md:h-14 backdrop-blur bg-white/10 flex items-center justify-center"
                    >
                        <Image
                            src="/home/left-arrow.svg"
                            alt="Left"
                            width={27}
                            height={27}
                        />
                    </button> */}

                    {/* PROGRESS */}
                    {/* <div className="w-[100px] md:w-[170px] h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#BBFC00] transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div> */}

                    {/* RIGHT */}
                    {/* <button
                        onClick={() => api?.scrollNext()}
                        className="rounded-full border-2 border-[#273561] p-2 w-10 md:w-14 h-10 md:h-14 backdrop-blur bg-white/10 flex items-center justify-center"
                    >
                        <Image
                            src="/home/right-arrow.svg"
                            alt="Right"
                            width={27}
                            height={27}
                            className="md:ml-2"
                        />
                    </button> */}
                </div>
            </div>
        </section>
    )
}
