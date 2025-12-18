import Image from "next/image"

export default function BrandsPlayableSection() {
    const stats = [
        { value: "80M+", label: "Gamers in MENA" },
        { value: "4X", label: "higher recall vs traditional ads" },
        { value: "5X", label: "engagement during moment-reactive streams" },
        { value: "6+", label: "Worlds that retain users 6-10 hours/week" },
    ]

    return (
        <section className="bg-[#031347] pt-8 pb-20 ">
            <div className="2xl:max-w-[1440px] w-full md:w-[85%] mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-stretch gap-5 lg:gap-12">

                    {/* Left - Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src="/game/mobile-legends.png"
                                alt="Mobile gaming"
                                width={600}
                                height={600}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-[90%] lg:w-1/2 bg-white/5 border-2 border-white/10 rounded-2xl py-8 p-5 md:p-6 flex flex-col justify-between">
                        {/* Headline */}


                        <div className="flex flex-col gap-2">
                            <h2 className="font-black font-fks text-[32px] leading-8 xl:leading-12 lg:text-5xl uppercase tracking-wide mb-4">
                                <span className="text-white">Brands </span>
                                <span className="text-[#BBFC00]">Need </span>
                                <span className="text-white">To Be</span>
                                <br />
                                <span className="text-white">Playable, Not </span>
                                <span className="text-[#BBFC00]">Scrollable.</span>
                            </h2>

                            {/* Description */}
                            <p className="text-white tracking-wide text-sm md:text-[17px] mb-6 lg:mb-10 leading-tight">
                                Gaming is now the largest attention economy across MENA. We help brands enter this space with credibility,
                                creativity, and measurable impact.
                            </p>
                        </div>


                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 2xl:gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="border-2 bg-white/5 backdrop-blur-2xl border-white/10 rounded-2xl p-6 xl:p-4">
                                    <p className="text-white font-mortend font-black text-3xl md:text-4xl 2xl:text-[44px]">{stat.value}</p>
                                    <p className="text-white font-hel tracking-wider text-xs md:text-xs -mb-1 relative bottom-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
