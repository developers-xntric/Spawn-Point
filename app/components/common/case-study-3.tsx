import Image from "next/image"

export default function CaseStudySection2() {
    return (
        <section className="bg-[#031347] py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Top content area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left side - Text content */}
                    <div>
                        <h2 className="text-white font-fks font-bold text-3xl md:text-7xl uppercase">Netflix Next World</h2>
                        <p className="text-[#FFF] text-md font-bold uppercase tracking-tighter mt-2">
                            Custom Interactive Experience on <span className="underline text-[#BBFC00]">Roblox</span>
                        </p>
                        <p className="text-whitefont-hel text-sm mt-6 leading-relaxed max-w-md">
                            Netflix partnered with SpawnPoint to build Next World, a fully immersive Roblox universe inspired by top
                            Netflix titles. Designed to engage Gen Z and Alpha audiences, the experience delivered cinematic
                            storytelling, interactive missions, and continuous content updates including the massively successful
                            Squid Game expansion.
                        </p>
                        <button className="mt-8 bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
                            View Case Studies
                        </button>
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        {/* Stat 1 */}
                        <div>
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">9.3M</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Total Visits</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Massive player turnout driven through social buzz + platform visibility.
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div>
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">TOP-3</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Branded Entertainment Experience</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Ranked among the most engaging brand worlds of the month.
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div>
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">4K</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Peak CCU</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Reached a high-concurrency peak during the Squid Game update event.
                            </p>
                        </div>

                        {/* Stat 4 */}
                        <div>
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">#4</p>
                            <p className="text-[#FFF] text-md font-semibold mt-1">Trending in Adventure</p>
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Achieved top-chart placement for popularity and retention.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom image area */}
                <div className="relative mt-8">
                    <div className="rounded-xl overflow-hidden">
                        <Image
                            src="/icons/cod.png"
                            alt="Netflix Next World gameplay showcase"
                            width={1200}
                            height={1200}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    {/* Partnership badge */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="text-white font-hel text-sm">Partnership</span>
                        <span className="text-white font-hel">×</span>
                        <span className="text-white font-bold text-sm tracking-wider">UBISOFT</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
