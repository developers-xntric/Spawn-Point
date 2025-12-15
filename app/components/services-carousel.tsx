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
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1.5 : prev - 1));
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 1.2 : prev + 1));
    };

    // NEW PROGRESS BAR %  
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

    return (
        <section className="pb-6 md:pb-16 pt-6">
            <div className="2xl:max-w-[1440px] w-[100%] md:w-[85%] mx-auto">
                {/* Header */}
                <div className="mb-16 md:text-center 2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                    <p className="mb-4 md:text-[20px] text-[16px] tracking-[12px] text-[#FF1586] font-hel">
                        SERVICES
                    </p>
                    <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white max-w-[770px] mx-auto lg:leading-[65px] md:leading-[45px] leading-[40px] md:tracking-[2px] tracking-[1.5px]">
                        <span className="text-[#BBFC00]">Gaming + AI </span> first campaigns
                        that move audiences, not{" "}
                        <span className="text-[#BBFC00]">just eyeballs</span>
                    </h2>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex gap-4 md:gap-6 transition-transform duration-500"
                        style={{
                            width: `${totalSlides * 35.5}%`,
                            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                        }}
                    >
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="w-[120%] md:w-[70%] lg:w-[45%] h-[520px] md:h-[520px] 2xl:h-[545px] shrink-0"
                            >
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress & Arrows Row */}
                <div className="flex items-center md:justify-center justify-start gap-6 2xl:mt-18 md:mt-0 -mt-24 relative">

                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className="absolute xl:left-[43%] md:left-[37%] left-[58px] -translate-x-10 md:-translate-x-16 rounded-full border-2 border-[#273561] p-2 text-[#CCFF00] w-10 md:w-14 h-10 md:h-14 flex items-center justify-center cursor-pointer backdrop-blur-[10px] bg-white/10 "
                    >
                        <Image src="/home/left-arrow.svg" alt="Left Arrow" width={200} height={200} className="w-[17px] md:w-[27px] h-[17px] md:h-[27px]" />
                    </button>

                    {/* NEW DYNAMIC PROGRESS BAR */}
                    <div className="w-[100px] md:w-[170px] h-2 bg-white/10 rounded-full overflow-hidden md:static relative left-18">
                        <div
                            className="h-full bg-[#BBFC00] rounded-full transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>


                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="absolute xl:right-[43%] md:right-[37%] right-[132px] translate-x-10 md:translate-x-16 rounded-full border-2 border-[#273561] p-2 md:w-14 md:h-14 w-10 h-10 flex items-center justify-center cursor-pointer backdrop-blur-[10px] bg-white/10"
                    >
                        <Image src="/home/right-arrow.svg" alt="Right Arrow" width={200} height={200} className="w-[17px] md:w-[27px] h-[17px] md:h-[27px]" />
                    </button>
                </div>
            </div>
        </section>
    );
}
