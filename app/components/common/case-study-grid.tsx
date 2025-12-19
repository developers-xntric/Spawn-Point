"use client";

import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesSection() {
    return (
        <section className="bg-[#031347] py-10 md:py-16 ">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto space-y-6">
                {/* Row 1: Left 70%, Right 30% */}
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                    {/* Left card - 70% */}
                    <div className="xl:col-span-7  lg:col-span-6 bg-white/5 md:p-5 p-3 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">
                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[330px] md:h-[350px] 2xl:h-[400px]">

                            <Image
                                src="/chupa-chups/feature.png"
                                alt="Doritos"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-4  left-4 md:left-4 right-4 z-10">
                                <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-4 uppercase">Chupa Chups</h3>
                                <p className="text-white text-[12px] md:text-base mb-4 md:mb-6  md:max-w-[80%] leading-[16px] md:leading-[24px]">
                                    Chupa Chups engaged gamers by integrating brand messaging directly into key gameplay moments. AI-powered stream triggers ensured visibility without disrupting immersion. The campaign delivered strong engagement by becoming part of the gaming experience.

                                </p>
                                <Link href="/case-studies/chupa-chups">

                                    <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-md hover:bg-transparent border border-[#BBFC00] hover:border-white hover:text-white transition-colors text-[12px] md:text-base">
                                        View Case Studies
                                    </button>

                                </Link>
                            </div>


                        </div>
                    </div>

                    {/* Right card - 30% */}
                    <div className="lg:col-span-4 xl:col-span-3 bg-white/5 p-3 md:p-5 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">

                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[330px] md:h-[350px] 2xl:h-[400px]">
                            <Image
                                src="dominos-card.svg"
                                alt="Spotify Island"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-4 md:left-4 left-4 right-4 z-10">
                                <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-3 uppercase">Domino’s </h3>
                                <p className="text-white text-[12px] md:text-sm mb-4 leading-snug">
                                    Domino’s positioned itself as a natural companion to gaming sessions through live stream integrations. Non-intrusive overlays appeared across popular game streams and creators. This approach drove high engagement while staying culturally relevant to gamers.
                                </p>
                                <Link href="/case-studies/dominos">

                                    <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-md hover:bg-transparent border border-[#BBFC00] hover:border-white hover:text-white transition-colors text-[12px] md:text-base">
                                        View Case Studies
                                    </button>

                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Row 2: Full width card */}

                <div className="bg-white/5 md:p-5 p-3 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">

                    <div className="relative rounded-lg md:rounded-2xl overflow-hidden group h-[330px] md:h-[500px] 2xl:h-[550px]">
                        <Image
                            src="/doritos/feature.svg"
                            alt="Spotify Island"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-4 md:bottom-4 left-4 md:left-4 right-8 z-10">
                            <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-4 uppercase">Doritos</h3>
                            <p className="text-white text-[12px] md:text-base mb-4 md:mb-6 md:max-w-[80%]">
                                Doritos activated a large creator network by tailoring messaging to different game genres. Customized overlays ensured relevance across diverse gaming audiences. The campaign achieved scale without compromising contextual engagement.
                            </p>
                            <Link href="/case-studies/doritos">

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
                    <div className="lg:col-span-4 xl:col-span-3 bg-white/5 p-3 md:p-5 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">


                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[330px] md:h-[350px] 2xl:h-[400px]">
                            <Image
                                src="/right-1.svg"
                                alt="Spotify Island"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-4 md:left-4 left-4 right-6 z-10">
                                <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-3 uppercase">Karaca</h3>
                                <p className="text-white text-[12px] md:text-base mb-4 md:mb-6 md:max-w-xl leading-[19px]">
                                    Karaca introduced its tech-enabled product to gamers through live streaming platforms.  Interactive overlays and creator partnerships highlighted innovation. The brand successfully connected with younger, tech-savvy audiences.
                                </p>
                                <Link href="/case-studies/karaca">

                                    <button className="bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-md hover:bg-transparent border border-[#BBFC00] hover:border-white hover:text-white transition-colors text-[12px] md:text-base">
                                        View Case Studies
                                    </button>

                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right card - 70% */}
                    <div className="lg:col-span-6 xl:col-span-7 bg-white/5 p-3 md:p-5 rounded-lg md:rounded-2xl border-[1px] border-white/20 h-full w-full">

                        <div className=" relative rounded-lg md:rounded-2xl overflow-hidden group h-[300px] md:h-[350px]  2xl:h-[400px]">
                            <Image
                                src="/vodafone/feature.svg"
                                alt="Spotify Island"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                            <div className="absolute bottom-4 md:bottom-4 md:left-4 left-4 right-4 z-10">
                                <h3 className="text-white font-fks font-bold text-3xl md:text-5xl mb-2 md:mb-4 uppercase">Vodafone </h3>
                                <p className="text-white text-[12px] md:text-base mb-4 md:mb-6 md:max-w-[85%]">
                                    Vodafone promoted an esports tournament using native livestream integrations. Brand messaging was aligned with speed, performance, and competition. The campaign strengthened Vodafone’s presence in the esports ecosystem.

                                </p>
                                <Link href="/case-studies/vodafone">

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
