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
                <h2 className="text-center font-fks font-black text-4xl sm:text-3xl md:text-5xl lg:text-6xl uppercase tracking-wide my-12 md:mb-16">
                    <span className="text-white">The Spawnpoint </span>
                    <span className="text-[#BBFC00]">Tech Stack</span>
                </h2>

                {/* Overlapping Circles */}
                <div className="grid grid-cols-2 lg:flex md:flex-row md:justify-center md:items-center md:-space-x-8 lg:-space-x-4 md:space-y-0 -space-y-2">
                    {techItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[250px] lg:h-[250px] xl:w-72 xl:h-72 rounded-full border-2 border-[#BBFC00]/40 bg-white/5 backdrop-blur-2xl flex flex-col items-center justify-center text-center py-4 setpos ${index % 2 !== 0 ? "relative right-3 sm:right-3 md:right-0" : "relative sm:left-2 left-4 md:left-0"}`}
                            style={{ zIndex: techItems.length - index }}
                        >
                            {/* Asterisk Icon */}
                            <span className="text-[#BBFC00] text-2xl sm:text-4xl xl:text-5xl mb-2 absolute top-2 sm:top-6 md:top-8">*</span>

                            {/* Title */}
                            <h3 className="text-white font-fks font-bold text-md sm:text-2xl md:text-3xl lg:text-[20px] xl:text-3xl uppercase tracking-widest sm:tracking-wider mb-2 leading-tight px-8 sm:px-5">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white tracking-wider px-8 text-[10px] sm:text-sm lg:text-xs lg:mt-2 xl:text-sm leading-tight">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
