import Image from "next/image"

export default function BrandsPlayableSection() {
    const stats = [
        { value: "80M+", label: "Gamers in MENA" },
        { value: "4X", label: "higher recall vs traditional ads" },
        { value: "5X", label: "engagement during moment-reactive streams" },
        { value: "6+", label: "Worlds that retain users 6-10 hours/week" },
    ]

    return (
        <section className="bg-[#031347] pt-8 pb-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left - Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src="/game/mobile-legends.png"
                                alt="Mobile gaming"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full lg:w-1/2 bg-white/5 border-2 border-white/10 rounded-2xl p-8">
                        {/* Headline */}
                        <h2 className="font-black font-fks text-2xl md:text-3xl lg:text-5xl uppercase tracking-wide mb-4">
                            <span className="text-white">Brands </span>
                            <span className="text-[#BBFC00]">Need </span>
                            <span className="text-white">To Be</span>
                            <br />
                            <span className="text-white">Playable, Not </span>
                            <span className="text-[#BBFC00] italic">Scrollable.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-white tracking-wide text-sm md:text-md mb-8 leading-relaxed">
                            Gaming is now the largest attention economy across MENA. We help brands enter this space with credibility,
                            creativity, and measurable impact.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <p className="text-white font-mortend font-black text-3xl md:text-4xl lg:text-5xl">{stat.value}</p>
                                    <p className="text-white font-hel tracking-wide text-xs md:text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
