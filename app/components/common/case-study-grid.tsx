"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesSection() {
    return (
        <section className="bg-[#031347] pt-10 pb-10 md:pt-10 md:pb-16 ">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto space-y-6">
                {/* Row 1: Left 70%, Right 30% */}
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                    {/* Left card - 70% */}
                    <div className="xl:col-span-7  lg:col-span-6 bg-white/5 md:p-5 p-3 rounded-lg md:rounded-2xl border border-white/20 h-full w-full">
                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[330px] md:h-[350px] 2xl:h-[400px]">

                            <Image
                                src="/doritos/feature.gif"
                                alt="Doritos"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-4  left-4 md:left-4 right-4 z-10">
                                <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-4 uppercase">Doritos</h3>
                                <p className="text-white text-[12px] md:text-base mb-4 md:mb-6  md:max-w-[60%] leading-4 md:leading-6">
                                    Drove higher engagement by tailoring live stream branding to specific game genres and gamer personas at scale.

                                </p>
                                <Link href="/case-studies/doritos">

                                    <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-md hover:bg-transparent border border-[#BBFC00] hover:border-white hover:text-white transition-colors text-[12px] md:text-base">
                                        View Case Studies
                                    </button>

                                </Link>
                            </div>


                        </div>
                    </div>

                    {/* Right card - 30% */}
                    <div className="lg:col-span-4 xl:col-span-3 bg-white/5 p-3 md:p-5 rounded-lg md:rounded-2xl border border-white/20 h-full w-full">

                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[330px] md:h-[350px] 2xl:h-[400px]">
                            <video src="/karaca/feature.webm" autoPlay loop muted className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-4 md:left-4 left-4 right-4 z-10">
                                <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-3 uppercase">Karaca </h3>
                                <p className="text-white text-[12px] md:text-sm mb-4 leading-snug">
                                    Introduced a tech-enabled lifestyle product to gamers by aligning interactive overlays with tech-savvy gaming audiences.
                                </p>
                                <Link href="/case-studies/karaca">

                                    <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-md hover:bg-transparent border border-[#BBFC00] hover:border-white hover:text-white transition-colors text-[12px] md:text-base">
                                        View Case Studies
                                    </button>

                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Row 2: Full width card */}

                <div className="bg-white/5 md:p-5 p-3 rounded-lg md:rounded-2xl border border-white/20 h-full w-full">

                    <div className="relative rounded-lg md:rounded-2xl overflow-hidden group h-[330px] md:h-[500px] 2xl:h-[550px]">
                        <video src="/mentos/feature.webm" autoPlay loop muted className="object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-4 md:bottom-4 left-4 md:left-4 right-8 z-10">
                            <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-4 uppercase">Mentos</h3>
                            <p className="text-white text-[12px] md:text-base mb-4 md:mb-6 md:max-w-[80%]">
                                Drove higher engagement by tailoring live stream branding to specific game genres and gamer personas at scale.

                            </p>
                            <Link href="/case-studies/mentos">

                                <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-md hover:bg-transparent border border-[#BBFC00] hover:border-white hover:text-white transition-colors text-[12px] md:text-base">
                                    View Case Studies
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>

                {/* Row 3: Reverse - Left 30%, Right 70% */}
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                    {/* Left card - 30% */}
                    <div className="lg:col-span-4 xl:col-span-3 bg-white/5 p-3 md:p-5 rounded-lg md:rounded-2xl border border-white/20 h-full w-full">


                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[330px] md:h-[350px] 2xl:h-[400px]">
                            <Image
                                src="/vodafone/feature.gif"
                                alt="Spotify Island"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-4 md:left-4 left-4 right-6 z-10">
                                <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-3 uppercase">Vodafone</h3>
                                <p className="text-white text-[12px] md:text-base mb-4 md:mb-6 md:max-w-xl leading-[19px]">
                                    Promoted an official esports tournament through native livestream integrations, linking 5G performance with competitive gaming.
                                </p>
                                <Link href="/case-studies/vodafone">

                                    <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-md hover:bg-transparent border border-[#BBFC00] hover:border-white hover:text-white transition-colors text-[12px] md:text-base">
                                        View Case Studies
                                    </button>

                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right card - 70% */}
                    <div className="lg:col-span-6 xl:col-span-7 bg-white/5 p-3 md:p-5 rounded-lg md:rounded-2xl border border-white/20 h-full w-full">

                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[300px] md:h-[350px]  2xl:h-[400px]">
                            <video
                                src="/shell/feature.webm"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 h-full w-full object-cover"
                            >
                                Your browser does not support the video tag.
                            </video>

                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-4 md:left-4 left-4 right-4 z-10">
                                <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-4 uppercase">Shell</h3>
                                <p className="text-white text-[12px] md:text-base mb-4 md:mb-6 md:max-w-[85%]">
                                    Extended real-world motorsport credibility into racing and simulation games through performance-aligned live stream branding.

                                </p>
                                <Link href="/case-studies/shell">

                                    <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-md hover:bg-transparent border border-[#BBFC00] hover:border-white hover:text-white transition-colors md:text-base text-[12px] ">
                                        View Case Studies
                                    </button>

                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
