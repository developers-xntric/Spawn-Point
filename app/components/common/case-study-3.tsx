import Image from "next/image"
import Link from "next/link"

export default function CaseStudySection2() {
    return (
        <section className="bg-[#031347] pt-0 md:pt-16 pb-10 md:pb-16 ">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                {/* Top content area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left side - Text content */}
                    <div>
                        <h2 className="text-white font-fks font-bold text-3xl md:text-7xl uppercase">Shell</h2>
                        <p className="text-[#FFF] text-md 2xl:text-xl font-bold uppercase tracking-tighter mt-2">
                            Reaching Gamers Through Native Live Stream Integrations
                        </p>
                        <p className="text-white font-hel text-sm 2xl:text-lg mt-6 leading-relaxed max-w-md 2xl:max-w-full">
                            As a company wanting to attract a young, digital-first audience, Shell's digital strategy was to extend its performance brand values to gaming. Car racing and simulation games were clearly a good fit for a brand associated with speed, performance, engineering, and realism, so its branding was naturally integrated into live streams. Partnering with creators in performance-focused games reinforced authenticity, linking Shell's motorsport heritage with gaming. The campaign was featured in video game culture.

                        </p>
                        <Link href="/case-studies/shell">
                            <button className="mt-8 bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
                                View Case Studies
                            </button>

                        </Link>
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-8">
                        {/* Stat 1 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">216,414</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Total Visits</p> */}
                            <p className="text-white font-hel text-sm 2xl:text-lg mt-2 leading-relaxed">
                                viewers reached
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">1.49% CTR</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Branded Entertainment Experience</p> */}
                            <p className="text-white font-hel text-sm 2xl:text-lg mt-2 leading-relaxed">
                               High engagement rate
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white/5  md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">135</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Peak CCU</p> */}
                            <p className="text-white font-hel text-sm  2xl:text-lg mt-2 leading-relaxed">
                             streamers activated
                            </p>
                        </div>

                        {/* Stat 4 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">148%</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Trending in Adventure</p> */}
                            <p className="text-white font-hel text-sm 2xl:text-lg mt-2 leading-relaxed">
                               above industry benchmark
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom image area */}
                <div className="relative mt-8">
                    <div className="md:rounded-xl overflow-hidden">
                        <Image src="/shell/feature.svg" alt="few" width={1000} height={1000} className="w-full h-[200px] md:h-auto object-cover md:rounded-xl" />
                        {/* <video src="/Media2.mp4" autoPlay loop muted className="w-full h-[200px] md:h-auto object-cover md:rounded-xl"></video> */}
                    </div>


                </div>
            </div>
        </section>
    )
}
