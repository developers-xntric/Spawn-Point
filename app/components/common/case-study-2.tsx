import Image from "next/image";
import Link from "next/link";

export default function CaseStudySection() {
    return (
        <section className="bg-[#031347] py-8 pt-0 md:pt-0 ">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
                {/* Top content area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left side - Text content */}
                    <div>
                        <h2 className="text-white font-fks font-bold text-3xl md:text-7xl uppercase">Mentos </h2>
                        <p className="text-[#FFF] text-md 2xl:text-xl font-bold uppercase tracking-tighter mt-2">
                            Engaging Gamers Through Playful Live Stream Branding

                        </p>
                        <p className="text-white font-hel text-sm 2xl:text-lg mt-6 leading-relaxed max-w-md 2xl:max-w-max">
                            Mentos had the challenge of creating a campaign that did not feel disruptive for the gamer but instead playful. The brand used live-streaming gaming content as a distribution channel and created sticker-like content that felt natural within the gaming environment. We kept the engaging experience, maintained the high-impact brand exposure, and were able to reach a younger audience who generally avoid customary digital advertising placements, with native formats. Thus, in combination with relevance and seamlessness, they ensured strong engagement with the sponsorship activity.


                        </p>
                        <Link href="/case-studies/mentos">

                            <button className="mt-8 bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
                                View Case Studies
                            </button>
                        </Link>
                    </div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-8">
                        {/* Stat 1 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">667K+</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Total Visits</p> */}
                            <p className="text-white font-hel text-sm 2xl:text-lg mt-2 leading-relaxed">
                                views

                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">2.84% ctr</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Branded Entertainment Experience</p> */}
                            <p className="text-white font-hel text-sm 2xl:text-lg mt-2 leading-relaxed">
                                High engagement rate

                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">100%</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Peak CCU</p> */}
                            <p className="text-white font-hel text-sm 2xl:text-lg mt-2 leading-relaxed">
                                non-intrusive native overlays
                            </p>
                        </div>

                        {/* Stat 4 */}
                         <div className="bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:border-none md:p-0 p-4 md:rounded-none rounded-xl border border-white/10">
                            <p className="text-white font-bold tracking-wide text-4xl md:text-7xl font-fks">Gen-Z</p>
                            {/* <p className="text-[#FFF] text-md font-semibold mt-1">Trending in Adventure</p> */}
                            <p className="text-white font-hel text-sm 2xl:text-lg mt-2 leading-relaxed">
                                Strong Gen-Z reach
                            </p>
                        </div> 
                    </div>
                </div>

                {/* Bottom image area */}
                <div className="relative mt-4 md:mt-8">
                    <div className="md:rounded-xl overflow-hidden">
                        <Image src="/mentos/feature.svg" alt="Mentos" width={2000} height={2000} className="w-full h-[200px] md:h-auto object-cover md:rounded-xl" />
                        {/* <video src="/Media4.mp4" autoPlay loop muted className="w-full h-[200px] md:h-auto object-cover md:rounded-xl"></video> */}

                    </div>


                </div>
            </div>
        </section>
    )
}
