import Image from "next/image"

export default function CaseStudySection() {
    return (
        <section className="bg-[#031347] py-16 ">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                {/* Top content area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left side - Text content */}
                    <div>
                        <h2 className="text-white font-fks font-bold text-3xl md:text-7xl uppercase">Netflix Next World</h2>
                        <p className="text-[#FFF] text-md font-bold uppercase tracking-tighter mt-2">
                            Custom Interactive Experience on <span className=" text-[#BBFC00]">Roblox</span>
                        </p>
                        <p className="text-white font-hel text-sm mt-6 leading-relaxed max-w-md">
                            Netflix partnered with SpawnPoint to build Next World, a fully immersive Roblox universe inspired by top
                            Netflix titles. Designed to engage Gen Z and Alpha audiences, the experience delivered cinematic
                            storytelling, interactive missions, and continuous content updates including the massively successful
                            Squid Game expansion.
                        </p>
                        {/* <button className="mt-8 bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
                            View Case Studies
                        </button> */}
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-8">
                        {/* Stat 1 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">9.3M</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Total Visits</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Massive player turnout driven through social buzz + platform visibility.
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">TOP-3</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Branded Entertainment Experience</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Ranked among the most engaging brand worlds of the month.
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">4K</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Peak CCU</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Reached a high-concurrency peak during the Squid Game update event.
                            </p>
                        </div>

                        {/* Stat 4 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">#4</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Trending in Adventure</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Achieved top-chart placement for popularity and retention.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom image area */}
                <div className="relative mt-4 md:mt-8">
                    <div className="md:rounded-xl overflow-hidden">
                        <video src="/Media4.mp4" autoPlay loop muted className="w-full h-[200px] md:h-auto object-cover md:rounded-xl"></video>
                        
                    </div>

                  
                </div>
            </div>
        </section>
    )
}
