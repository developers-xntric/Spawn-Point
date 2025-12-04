export default function HOMEGSP() {
    return (
        <section className="bg-[#fff]/5 min-h-[80vh] relative overflow-hidden py-20 px-4" style={{
            borderRadius: "162px 0 0 0"
        }}>
            {/* Floating Images */}
            {/* Top Left - hg1.png */}
            <div className="absolute top-12 left-8 md:left-16 lg:left-24 w-40 md:w-52 z-10">
                <img src="/home/hg1.png" alt="Fantasy game with hammer" className="w-full h-auto" />
            </div>

            {/* Top Right - hg2.png */}
            <div className="absolute top-0 right-8 md:right-16 lg:right-24 w-40 md:w-52 lg:w-64 z-10">
                <img src="/home/hg2.png" alt="Minecraft style creature" className="w-full h-auto" />
            </div>

            {/* Bottom Left - hg3.png */}
            <div className="absolute bottom-4 left-4 md:left-12 lg:left-20 w-44 md:w-56 lg:w-72 z-10">
                <img src="/home/hg3.png" alt="Action game scene" className="w-full h-auto" />
            </div>

            {/* Bottom Right - hg4.png */}
            <div className="absolute bottom-0 right-4 md:right-12 lg:right-20 w-44 md:w-56 lg:w-80 z-10">
                <img src="/home/hg4.png" alt="Skateboard game scene" className="w-full h-auto" />
            </div>

            {/* Center Content */}
            <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[70vh]">
                {/* Pink Subheading */}
                <p className="text-[#FF1586] text-sm md:text-base tracking-[0.4em] uppercase mb-8 font-medium">
                    Spawn Point Studio
                </p>

                {/* Main Headline */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-fks font-black uppercase leading-tighter mb-10 px-10 tracking-wide">
                    <span className="text-[#BBFC00]">Spawn Point Crafts</span>{" "}
                    <span className="text-white">Brand Playbooks, Live-Stream Experiences, and</span>{" "}
                    <span className="text-[#BBFC00]">AI-Driven</span>{" "}
                    <span className="text-white">Audience Pipelines That Turn Games Into Measurable</span>{" "}
                    <span className="text-[#BBFC00]">Business Channels</span> <span className="text-white">Across</span>{" "}
                    <span className="text-[#BBFC00]">MENA</span> <span className="text-white">and Beyond</span>
                </h2>

                {/* CTA Button */}
                <button className="bg-[#BBFC00] text-[#031347] font-semibold px-8 py-3 rounded-md hover:bg-[#a8e600] transition-colors text-sm md:text-base">
                    Book a Strategy Sprint
                </button>
            </div>
        </section>
    )
}
