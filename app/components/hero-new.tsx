"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const stats = [
    {
        value: "30+",
        label: "Gaming Platforms & Worlds Activated",
    },
    {
        value: "1200+",
        label: "Creators, Streamers & Esports Assets Deployed Globally",
    },
    {
        value: "75+",
        label: "Brand Campaigns Executed Across MENA & Global Markets",
    },
    {
        value: "1.1B+",
        label: "Verified Gaming Impressions & Live Engagements",
    },
];

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col items-center justify-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/HeaderVideo.webm"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#031347]/50 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-[1440px] px-5 flex flex-col items-center justify-center h-full text-center mt-10 md:mt-0">
                {/* Headline */}
                <h1 className="font-fks font-bold uppercase text-white  leading-[40px] lg:leading-[90px] mb-8 md:mb-8
          text-[35px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] tracking-wide">
                    WHERE <span className="text-[#BBFC00]">GAMING</span> ATTENTION{" "}
                    <br className="hidden lg:block" />
                    BECOMES BRAND <span className="text-[#BBFC00]">MOMENTUM</span>
                </h1>

                {/* Stats Grid */}
                <div className="w-full max-w-[1000px] border border-[#BBFC00]/30 rounded-xl md:rounded-2xl bg-[#FFFFFF0D] backdrop-blur-md px-2 py-4 md:px-6 mb-10">
                    <div className="grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative md:grid hidden">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-cente text-center ${index !== stats.length - 1
                                    ? `${index === 0 ? "md:border-r" : "border-r"} md:border-r border-[#FFFFFF]/30`
                                    : ""
                                    }`}
                            >
                                <span className="font-fks font-bold text-[#BBFC00] text-2xl md:text-3xl lg:text-[60px] mb-2 font-fks tracking-wide">
                                    {stat.value}
                                </span>
                                <span className="font-hel text-white text-[12px] md:text-[13px] md:max-w-[90%] leading-tight tracking-wide md:font-bold ">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="grid-cols-2 md:grid-cols-4 gap-y-8 relative md:hidden grid">

                        {/* Horizontal divider */}
                        <div className="absolute left-0 right-0 bottom-2 top-[47%] h-[1px] bg-[#FFFFFF]/30" />

                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center text-center ${index !== stats.length - 1
                                    ? `${index === 0 || index === 2 ? "border-r pr-2" : " pl-2"} md:border-r border-[#FFFFFF]/30`
                                    : ""
                                    }   `}
                            >
                                {/* <div className={`h-[1px] w-full bg-[#FFFFFF]/30 ${index >= 2 ? "mt-6" : ""}`}></div> */}

                                <span className="font-fks font-bold text-[#BBFC00] text-[28px] md:text-3xl lg:text-[60px] md:mb-2 font-fks tracking-wide">
                                    {stat.value}
                                </span>
                                <span className="font-hel text-white text-[12px] md:text-[13px] md:max-w-[90%] leading-tight tracking-wide md:font-bold ">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <Link href="/contact">
                    <button className="block bg-[#BBFC00] text-[#031347] font-bold px-8 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
                        Lets Talk
                    </button>
                </Link>
            </div>


        </section>
    );
}
