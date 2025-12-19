"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/app/components/ui/carousel"
import type { CarouselApi } from "@/app/components/ui/carousel"

interface Review {
    description: string
    name: string
    designation: string
}

const reviews: Review[] = [
    {
        description:
            "Spawn Point helped us connect with gamers in a way that felt natural and immersive, allowing our brand to become part of the gameplay rather than an interruption.",
        name: "Al Smith",
        designation: "Country People and Culture Manager, IKEA UK, and Ireland.",
    },
    {
        description:
            "The campaign proved that live stream integrations can drive strong performance while staying true to gaming culture and audience expectations.",
        name: "Thomas Klien",
        designation: "Country People and Culture Manager, IKEA UK, and Ireland.",
    },
    {
        description:
            "By tailoring our messaging to different game genres, we were able to scale creator partnerships without losing relevance or authenticity.",
        name: "Mark Sam",
        designation: "Country People and Culture Manager, IKEA UK, and Ireland.",
    },
    {
        description:
            "They enabled us to introduce our tech-forward product to a younger audience in an environment where innovation and engagement naturally thrive.",
        name: "Abdullah Khan",
        designation: "Country People and Culture Manager, IKEA UK, and Ireland.",
    },
    {
        description:
            "Aligning our brand with racing and simulation games allowed us to extend our performance-driven identity into gaming in a way that felt credible and effective.",
        name: "Helen Glen",
        designation: "Country People and Culture Manager, IKEA UK, and Ireland.",
    },

]

export default function ReviewsCarousel() {
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

    const progressPercent = count ? ((current + 1) / count) * 100 : 0

    return (
        <section className="-mt-10">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">

                {/* SECTION TITLE */}
                <h2 className="text-[35px] md:text-[70px] font-fks font-bold text-center text-white uppercase tracking-[1.5px]"> <span className="text-[#BBFC00]">What Our</span>  Client Say</h2>

                {/* CAROUSEL */}
                <Carousel setApi={setApi}>
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem key={index}>
                                <div className="max-w-[900px] mx-auto text-center flex flex-col items-center space-y-10">

                                    {/* STARS */}
                                    <Image
                                        src="/icons/reviews-stars.svg" // ⭐ your star image
                                        alt="Rating"
                                        width={140}
                                        height={28}
                                        className="w-[90%] md:w-[50%]"
                                    />

                                    <div className="flex flex-col items-center bg-white/5 backdrop-blur p-5 rounded-[10px] border border-white/20">
                                        {/* REVIEW TEXT */}
                                        <p className="text-white text-[16px] md:text-[26px] leading-[22px] md:leading-[38px] mb-8">
                                            “{review.description}”
                                        </p>

                                        <div>

                                            {/* CLIENT INFO */}
                                            <p className="text-white font-semibold text-2xl font-fks uppercase tracking-[1.5px]">
                                                {review.name}
                                            </p>
                                            <p className="text-white text-sm md:text-lg">
                                                {review.designation}
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* CONTROLS (POSITION SAME FOR MOBILE + DESKTOP) */}
                <div className="flex items-center justify-center gap-3 md:gap-6 mt-4">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={() => api?.scrollPrev()}
                        className="rounded-full border-2 border-[#273561] w-12 h-12 flex items-center justify-center backdrop-blur bg-white/10"
                    >
                        <Image src="/home/left-arrow.svg" alt="Prev" width={20} height={20} className="md:w-[23px] md:h-[23px] w-[20px] h-[20px]" />
                    </button>

                    {/* PROGRESS BAR */}
                    <div className="w-[100px] md:w-[180px] h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#BBFC00] transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={() => api?.scrollNext()}
                        className="rounded-full border-2 border-[#273561] w-12 h-12 flex items-center justify-center backdrop-blur bg-white/10"
                    >
                        <Image src="/home/right-arrow.svg" alt="Next" width={20} height={20} className="md:w-[23px] md:h-[23px] w-[20px] h-[20px]" />
                    </button>

                </div>
            </div>
        </section>
    )
}
