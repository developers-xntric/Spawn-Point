"use client";

import Image from "next/image";

export default function CaseStudiesSection() {
    return (
        <section className="bg-[#031347] py-10 md:py-16 px-4 md:px-8">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto space-y-6">
                {/* Row 1: Left 70%, Right 30% */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                    {/* Left card - 70% */}
                    <div className="md:col-span-7 bg-white/5 p-5 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">
                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[300px] md:h-[400px]">

                            <Image
                                src="/left-card-1.svg"
                                alt="Doritos"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-8  left-6 md:left-8 right-8 z-10">
                                <h3 className="text-white font-fks font-bold text-4xl md:text-5xl mb-4 uppercase">Doritos</h3>
                                <p className="text-white/90 text-sm md:text-base mb-6 max-w-xl">
                                    Drove higher engagement by tailoring live stream branding to specific game genres and gamer personas at scale.
                                </p>
                                {/* <button className="bg-[#BBFC00] text-[#031347] font-bold px -8 py-3 rounded-md hover:bg-[#a8e600] transition-colors">
                                View Case Studies
                            </button> */}
                            </div>


                        </div>
                    </div>

                    {/* Right card - 30% */}
                    <div className="md:col-span-3 bg-white/5 p-5 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">

                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[300px] md:h-[400px]">
                            <Image
                                src="right-1.svg" // replace with your image path
                                alt="Spotify Island"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-2 md:bottom-8 md:left-8 left-6 right-6 z-10">
                                <h3 className="text-white font-fks font-bold text-4xl md:text-5xl mb-3 uppercase">Karaca</h3>
                                <p className="text-white/90 text-sm mb-4 leading-snug">
                                    Introduced a tech-enabled lifestyle product to gamers by aligning interactive overlays with tech-savvy gaming audiences.
                                </p>
                                {/* <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 text-sm rounded-md hover:bg-[#a8e600] transition-colors">
                                View Case Studies
                            </button> */}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Row 2: Full width card */}

                <div className="bg-white/5 p-5 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">

                    <div className="relative rounded-lg md:rounded-2xl overflow-hidden group h-[300px] md:h-[550px]">
                        <Image
                            src="/center-card.svg"
                            alt="Spotify Island"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-2 md:bottom-8 left-6 md:left-8 right-8 z-10">
                            <h3 className="text-white font-fks font-bold text-4xl md:text-5xl mb-4 uppercase">Mentos</h3>
                            <p className="text-white/90 text-sm md:text-base mb-6 max-w-xl">
                                Captured gamer attention using playful, custom-designed overlays that blended seamlessly with live gaming content.
                            </p>
                            {/* <button className="bg-[#BBFC00] text-[#031347] font-bold px-8 py-3 rounded-md hover:bg-[#a8e600] transition-colors">
              View Case Studies
            </button> */}
                        </div>
                    </div>
                </div>

                {/* Row 3: Reverse - Left 30%, Right 70% */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                    {/* Left card - 30% */}
                    <div className="md:col-span-3 bg-white/5 p-5 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">


                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[300px] md:h-[400px]">
                            <Image
                                src="/left-card-2.svg"
                                alt="Spotify Island"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-2 md:bottom-8 md:left-8 left-6 right-6 z-10">
                                <h3 className="text-white font-fks font-bold text-4xl md:text-5xl mb-3 uppercase">Vodafone</h3>
                                <p className="text-white/90 text-sm md:text-base mb-6 max-w-xl leading-[20px]">
                                    Promoted an official esports tournament through native livestream integrations, linking 5G performance with competitive gaming.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right card - 70% */}
                    <div className="md:col-span-7 bg-white/5 p-5 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">

                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[300px] md:h-[400px]">
                            <Image
                                src="/right-2.svg"
                                alt="Spotify Island"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-2 md:bottom-8 md:left-8 left-6 right-6 z-10">
                                <h3 className="text-white font-fks font-bold text-4xl md:text-5xl mb-4 uppercase">Shell</h3>
                                <p className="text-white/90 text-sm md:text-base mb-6 max-w-xl">
                                    Extended real-world motorsport credibility into racing and simulation games through performance-aligned live stream branding.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
