"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "./service-card";
import Image from "next/image";

const services = [
    {
        id: 1,
        title: "CAMPAIGNS & ACTIVATIONS",
        description:
            "Turn stories into playable moments. We craft creator-led campaigns that merge entertainment with engagement  every stream becomes a narrative that sells.",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
    },
    {
        id: 2,
        title: "ESPORTS PARTNERSHIPS",
        description: "Level up your brand through competitive community experiences. From tournament branding to team collaborations we build presence where passion runs.",
        borderColor: "from-[#E81B8E]",
        accentColor: "border-[#E81B8E]",
    },
    {
        id: 3,
        title: "CAMPAIGNS & ACTIVATIONS",
        description:
            "Turn stories into playable moments. We craft creator-led campaigns that merge entertainment with engagement  every stream becomes a narrative that sells.",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
    },
    {
        id: 4,
        title: "CAMPAIGNS & ACTIVATIONS",
        description:
            "Turn stories into playable moments. We craft creator-led campaigns that merge entertainment with engagement  every stream becomes a narrative that sells.",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
    },
    {
        id: 5,
        title: "ESPORTS PARTNERSHIPS",
        description: "Level up your brand through competitive community experiences. From tournament branding to team collaborations we build presence where passion runs.",
        borderColor: "from-[#E81B8E]",
        accentColor: "border-[#E81B8E]",
    },
   {
        id: 6,
        title: "CAMPAIGNS & ACTIVATIONS",
        description:
            "Turn stories into playable moments. We craft creator-led campaigns that merge entertainment with engagement  every stream becomes a narrative that sells.",
        borderColor: "from-[#CCFF00]",
        accentColor: "border-[#CCFF00]",
    },
  
 
];

export function ServicesCarousel() {
    const itemsPerSlide = 3;
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = Math.ceil(services.length / itemsPerSlide);

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    // NEW PROGRESS BAR %  
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

    return (
        <section className="py-10 md:py-16">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <p className="mb-4 text-[21px] tracking-[14px] text-[#FF1586] font-hel">
                        SERVICES
                    </p>
                    <h2 className="text-[60px] font-fks font-bold uppercase text-white max-w-[770px] mx-auto leading-[65px] tracking-[2px]">
                        <span className="text-[#BBFC00]">Gaming + AI </span> first campaigns
                        that move audiences, not{" "}
                        <span className="text-[#BBFC00]">just eyeballs</span>
                    </h2>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex gap-6 transition-transform duration-500"
                        style={{
                            width: `${totalSlides * 35.5}%`,
                            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                        }}
                    >
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="w-[45%] h-[520px] 2xl:h-[545px] shrink-0"
                            >
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress & Arrows Row */}
                <div className="flex items-center justify-center gap-6 2xl:mt-18 mt-5 relative">

                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-[43%] -translate-x-10 md:-translate-x-16 rounded-full border-2 border-[#273561] p-2 text-[#CCFF00] w-14 h-14 flex items-center justify-center cursor-pointer backdrop-blur-[10px] bg-white/10"
                    >
                        <Image src="/home/left-arrow.svg" alt="Left Arrow" width={20} height={20} />
                    </button>

                    {/* NEW DYNAMIC PROGRESS BAR */}
                    <div className="w-[170px] h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#BBFC00] rounded-full transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>


                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="absolute right-[43%] translate-x-10 md:translate-x-16 rounded-full border-2 border-[#273561] p-2 w-14 h-14 flex items-center justify-center cursor-pointer backdrop-blur-[10px] bg-white/10"
                    >
                        <Image src="/home/right-arrow.svg" alt="Right Arrow" width={20} height={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
