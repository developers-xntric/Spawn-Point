export default function NumbersTalkSection() {
    return (
        <section className="bg-[#031347] pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h2 className="text-center font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide mb-12 md:mb-16">
                    <span className="text-white">Let The </span>
                    <span className="text-[#BBFC00]">Numbers </span>
                    <span className="text-white">Talk</span>
                </h2>

                {/* Content Layout */}
                <div className="flex flex-col items-center">
                    {/* Top Row - Stats and Video */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full mb-6">
                        {/* Left Stat */}
                        <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 text-center w-[300px]">
                            <p className="text-white font-black text-4xl md:text-5xl lg:text-6xl font-mortend">10M+</p>
                            <p className="text-white text-xs md:text-sm mt-1">
                                Players Reached Across
                                <br />
                                Game Worlds
                            </p>
                        </div>

                        {/* Center Video */}
                        <div className="relative">
                            <div className="rounded-full px-4 py-2 md:px-6 md:py-3 overflow-hidden">
                                <video
                                    src="/game/fool.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-32 h-20 md:w-40 md:h-24 lg:w-80 lg:h-28 object-cover rounded-full"
                                />
                            </div>
                        </div>

                        {/* Right Stat */}
                        <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 md:p-8 text-center max-w-[300px]">
                            <p className="text-white font-black text-4xl md:text-5xl lg:text-6xl font-mortend">3X</p>
                            <p className="text-white text-xs md:text-sm mt-1">Higher Recall vs Traditional Digital Ads</p>
                        </div>
                    </div>

                    {/* Bottom Stat */}
                    <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 md:p-8 text-center w-[300px]">
                        <p className="text-white font-black text-4xl md:text-5xl lg:text-6xl font-mortend">150+</p>
                        <p className="text-white text-xs md:text-sm mt-1">In-Game Activations Launched</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
