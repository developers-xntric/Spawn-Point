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
            "Creator-led storytelling, hybrid events, and in-stream ad campaigns build awareness ",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
        image: "/home/service-1.svg",
        serviceurl: "/campaigns-activations",
    },
    {
        id: 2,
        title: "ESPORTS PARTNERSHIPS",
        description:
            "High value IP integrations and strategic sponsorships that leverage community  competition ",
        borderColor: "from-[#E81B8E]",
        accentColor: "border-[#E81B8E]",
        image: "/home/service-2.svg",
        serviceurl: "/esports-partnerships",
    },
    {
        id: 3,
        title: "Virtual Worlds",
        description:
            "Sustained, persistent, and playable branded economies that drive conversion & retention",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
        image: "/home/service-3.svg",
        serviceurl: "/campaigns-activations",
    },
    {
        id: 4,
        title: "In-Stream AdTech",
        description:
            "Sustained, persistent, and playable branded economies that drive conversion & retention",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
        image: "/home/service-4.svg",
        serviceurl: "/campaigns-activations",
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
        <section  className="pb-0 md:pb-1 pt-16 md:pt-20">
            <div className="2xl:max-w-[1440px] w-full md:w-[85%] mx-auto">

                {/* HEADER (UNCHANGED) */}
                <div className="mb-16 md:text-center 2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto"> <p className="mb-4 md:text-[20px] text-[16px] tracking-[12px] text-[#FF1586] font-hel"> SERVICES </p> <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white max-w-[770px] mx-auto lg:leading-[65px] md:leading-[45px] leading-10 md:tracking-[2px] tracking-[1.5px]"> <span className="text-[#BBFC00]">Gaming + AI </span> first campaigns that move audiences, not{" "} <span className="text-[#BBFC00]">just eyeballs</span> </h2> </div>

                {/* SHADCN CAROUSEL */}
                {/* <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="gap-0 md:gap-2">
                        {services.map((service) => (
                            <CarouselItem
                                key={service.id}
                                className="grid grid-cols-4"
                            >
                                <div className=" md:h-[500px] 2xl:h-[560px]">
                                    <ServiceCard service={service} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel> */}

                <div className="">
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-[90%] md:w-full mx-auto">
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
