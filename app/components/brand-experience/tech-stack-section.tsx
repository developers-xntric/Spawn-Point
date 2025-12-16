export default function TechStackSection() {
    const techItems = [
        {
            title: "AI AD ENGINE",
            description: "Delivers ads at peak gameplay moments.",
        },
        {
            title: "CREATORNET PORTAL",
            description: "Manages creators, UTM links, and briefs",
        },
        {
            title: "DATAFORGE DASHBOARD",
            description: "Performance unification + full-funnel reporting",
        },
        {
            title: "AUDIENCE REINFORCEMENT ENGINE",
            description: "Retention, churn prediction, remarketing paths.",
        },
    ]

    return (
        <section className="bg-[#031347] py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-xl lg:max-w-6xl mx-auto">
                {/* Header */}
                <h2 className="text-center font-fks font-black text-2xl md:text-3xl lg:text-6xl uppercase tracking-wide mb-12 md:mb-16">
                    <span className="text-white">The Spawnpoint </span>
                    <span className="text-[#BBFC00]">Tech Stack</span>
                </h2>

                {/* Overlapping Circles */}
                <div className="grid grid-cols-2 lg:flex md:flex-row md:justify-center md:items-center md:-space-x-8 lg:-space-x-4 md:space-y-0">
                    {techItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative w-48 h-48 md:w-44 md:h-44 lg:w-72 lg:h-72 rounded-full border-2 border-[#BBFC00]/40 bg-white/5 backdrop-blur-2xl flex flex-col items-center justify-center text-center py-4 ${index % 2 !== 0 ? "relative right-2" : "relative left-3"}`}
                            style={{ zIndex: techItems.length - index }}
                        >
                            {/* Asterisk Icon */}
                            <span className="text-[#BBFC00] text-5xl md:text-5xl mb-2 absolute top-8">*</span>

                            {/* Title */}
                            <h3 className="text-white font-fks font-bold text-xs md:text-3xl uppercase tracking-wider mb-2 leading-tight px-5">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white tracking-wide px-8 text-[10px] md:text-sm leading-tight">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
