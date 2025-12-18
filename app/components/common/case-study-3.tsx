import Image from "next/image"

export default function CaseStudySection2() {
    return (
        <section className="bg-[#031347] pt-0 md:pt-16 pb-16 ">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                {/* Top content area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left side - Text content */}
                    <div>
                        <h2 className="text-white font-fks font-bold text-3xl md:text-7xl uppercase">Domino’s</h2>
                        <p className="text-[#FFF] text-md font-bold uppercase tracking-tighter mt-2">
                            Positioned pizza as the ultimate gaming companion by embedding high-impact, non-intrusive overlays across popular game streams.
                        </p>
                        <p className="text-white font-hel text-sm mt-6 leading-relaxed max-w-md">
                            Knowing that many gamers will eat while playing, Domino's advertises pizza as the ultimate gaming fuel for long gaming sessions.

                        </p>
                        {/* <button className="mt-8 bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
                            View Case Studies
                        </button> */}
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-8">
                        {/* Stat 1 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">800K</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Total Visits</p> */}
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                                Achieved ~800K video views across multiple gaming categories.
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">4.52%</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Branded Entertainment Experience</p> */}
                            <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                               Achieved a 4.52% clickthrough rate (CTR), dramatically exceeding the industry average for the format. 
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            {/* <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">4K</p> */}
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Peak CCU</p> */}
                            {/* <p className="text-white font-hel text-sm mt-2 leading-relaxed">
                               Domino's became culturally relevant for gamers and was embraced by gamers with these integral placements in the gaming world.
                            </p> */}
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
                <div className="relative mt-8">
                    <div className="md:rounded-xl overflow-hidden">
                         <Image src="/dominos/feature.png" alt="few"  width={1000} height={1000} className="w-full h-[200px] md:h-auto object-cover md:rounded-xl"/>
                        {/* <video src="/Media2.mp4" autoPlay loop muted className="w-full h-[200px] md:h-auto object-cover md:rounded-xl"></video> */}
                    </div>


                </div>
            </div>
        </section>
    )
}
