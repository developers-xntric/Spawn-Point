import Image from "next/image"

export default function CaseStudySection() {
    return (
        <section className="bg-[#031347] py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Top content area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left side - Text content */}
                    <div>
                        <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight uppercase">Netflix Next World</h2>
                        <p className="text-[#BBFC00] text-xs font-semibold uppercase tracking-wider mt-2">
                            Custom Interactive Experience on <span className="underline">Roblox</span>
                        </p>
                        <p className="text-white/70 text-sm mt-6 leading-relaxed max-w-md">
                            Netflix partnered with SpawnPoint to build Next World, a fully immersive Roblox universe inspired by top
                            Netflix titles. Designed to engage Gen Z and Alpha audiences, the experience delivered cinematic
                            storytelling, interactive missions, and continuous content updates including the massively successful
                            Squid Game expansion.
                        </p>
                        <button className="mt-8 border border-[#BBFC00] text-[#BBFC00] font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-[#BBFC00] hover:text-black transition-colors">
                            View Case Studies
                        </button>
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        {/* Stat 1 */}
                        <div>
                            <p className="text-white font-black text-4xl md:text-5xl">9.3M</p>
                            <p className="text-[#BBFC00] text-sm font-semibold mt-1">Total Visits</p>
                            <p className="text-white/60 text-xs mt-2 leading-relaxed">
                                Massive player turnout driven through social buzz + platform visibility.
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div>
                            <p className="text-white font-black text-4xl md:text-5xl">TOP-3</p>
                            <p className="text-[#BBFC00] text-sm font-semibold mt-1">Branded Entertainment Experience</p>
                            <p className="text-white/60 text-xs mt-2 leading-relaxed">
                                Ranked among the most engaging brand worlds of the month.
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div>
                            <p className="text-white font-black text-4xl md:text-5xl">4K</p>
                            <p className="text-[#BBFC00] text-sm font-semibold mt-1">Peak CCU</p>
                            <p className="text-white/60 text-xs mt-2 leading-relaxed">
                                Reached a high-concurrency peak during the Squid Game update event.
                            </p>
                        </div>

                        {/* Stat 4 */}
                        <div>
                            <p className="text-white font-black text-4xl md:text-5xl">#4</p>
                            <p className="text-[#BBFC00] text-sm font-semibold mt-1">Trending in Adventure</p>
                            <p className="text-white/60 text-xs mt-2 leading-relaxed">
                                Achieved top-chart placement for popularity and retention.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom image area */}
                <div className="relative mt-8">
                    <div className="rounded-xl overflow-hidden">
                        <Image
                            src="/valo.png"
                            alt="Netflix Next World gameplay showcase"
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>

                    {/* Partnership badge */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="text-white/60 text-xs">Partnership</span>
                        <span className="text-white/60">×</span>
                        <span className="text-white font-bold text-sm tracking-wider">UBISOFT</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
