import Image from "next/image"

export default function CaseStudySection() {
    return (
        <section className="bg-[#031347] py-16 ">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                {/* Top content area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left side - Text content */}
                    <div>
                        <h2 className="text-white font-fks font-bold text-3xl md:text-7xl uppercase">Chupa Chups</h2>
                        <p className="text-[#FFF] text-md font-bold uppercase tracking-tighter mt-2">
                            Integrated contextual in-game stream triggers to engage gamers at key gameplay moments without disrupting the viewing experience.

                        </p>
                        <p className="text-white font-hel text-sm mt-6 leading-relaxed max-w-md">
                            Chupa Chups has used our Stream Trigger mechanism for real-time sponsorships for gamers' live streams. Rather than interrupting the gaming experience with pre-roll or mid-roll ads, Chupa Chups leveraged our AI game moments technology, Stream Trigger, to run brand messages at real moments of action. At the same time, Gen-Z and millennial gamers were engaged in their games.

                        </p>
                        {/* <button className="mt-8 bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
                            View Case Studies
                        </button> */}
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-8">
                        {/* Stat 1 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">100%</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Total Visits</p> */}
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                With video completion rates at 100%, they were proving it had worked.

                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">T1.64%</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Branded Entertainment Experience</p> */}
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                1.64%CTR; high-performing brand-awareness-led gaming campaign.
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">15 GMAES</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Peak CCU</p> */}
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                This included the activation of 7 streamers in 15 games.

                            </p>
                        </div>

                        {/* Stat 4 */}
                        {/* <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">#4</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Trending in Adventure</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Achieved top-chart placement for popularity and retention.
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* Bottom image area */}
                <div className="relative mt-4 md:mt-8">
                    <div className="md:rounded-xl overflow-hidden">
                        <Image src="/chupa-chups/feature.png" alt="few"  width={1000} height={1000} className="w-full h-[200px] md:h-auto object-cover md:rounded-xl"/>
                        {/* <video src="/Media4.mp4" autoPlay loop muted className="w-full h-[200px] md:h-auto object-cover md:rounded-xl"></video> */}

                    </div>


                </div>
            </div>
        </section>
    )
}
