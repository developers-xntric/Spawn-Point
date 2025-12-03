import CSGMED from "./csg/csg-med";
import CSGSM from "./csg/csg.sm";

export default function CaseStudiesGrid() {
    return (
        <section className="bg-[#031347] py-16 px-8 md:px-16">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Row 1: Two cards side by side */}
                <div className="flex gap-6">
                    {/* Left card - Image on right */}
                    <div className="bg-[#0a1f5c] rounded-lg px-6 flex flex-col md:flex-row gap-6">
                        <div className="relative">
                            <div className="flex absolute bottom-[17%] left-10 flex-col justify-center flex-1">
                                <h3 className="text-[#031347] font-bold text-xl md:text-4xl mb-3 font-fks">SPOTIFY ISLAND</h3>
                                <p className="text-[#031347] font-semibold max-w-[500px] text-sm leading-tight mb-4 font-hel">
                                    Spotify Island's continued success a story of creativity, collaboration, iteration, and a double Webby
                                    Award win.
                                </p>
                                <div>
                                    <button className="bg-[#BBFC00] text-[#031347] text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#a8e600] transition-colors">
                                        View Case Studies
                                    </button>
                                </div>
                            </div>
                            <CSGMED />
                        </div>
                    </div>

                    {/* Right card - Image on left */}
                    <div className="bg-[#0a1f5c] rounded-lg px-6 flex flex-col md:flex-row gap-6">
                        <div className="relative">
                            <div className="flex absolute bottom-[17%] left-6 flex-col justify-center flex-1">
                                <h3 className="text-[#031347] font-bold text-xl md:text-4xl mb-3 font-fks">SPOTIFY ISLAND</h3>
                                <p className="text-[#031347] font-semibold max-w-[350px] text-sm leading-tight mb-4 font-hel">
                                    Spotify Island's continued success a story of creativity, collaboration, iteration, and a double Webby
                                    Award win.
                                </p>
                                <div>
                                    <button className="bg-[#BBFC00] text-[#031347] text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#a8e600] transition-colors">
                                        View Case Studies
                                    </button>
                                </div>
                            </div>
                            <CSGSM />
                        </div>
                    </div>
                </div>

                {/* Row 2: Full width card with image on top */}
                <div className="bg-[#0a1f5c] rounded-lg p-6">
                    <div className="bg-gray-300 rounded-lg rounded-tl-3xl w-full h-64 md:h-80 mb-6" />
                    <div className="max-w-xl">
                        <h3 className="text-white font-bold text-xl md:text-2xl mb-3">SPOTIFY ISLAND</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Spotify Island's continued success a story of creativity, collaboration, iteration, and a double Webby
                            Award win.
                        </p>
                        <button className="bg-[#BBFC00] text-[#031347] text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#a8e600] transition-colors">
                            View Case Studies
                        </button>
                    </div>
                </div>

                {/* Row 3: Two cards with images on top */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left card */}
                    <div className="bg-[#0a1f5c] rounded-lg p-6">
                        <div className="bg-gray-300 rounded-lg rounded-tl-3xl w-full h-40 mb-6" />
                        <h3 className="text-white font-bold text-xl md:text-2xl mb-3">SPOTIFY ISLAND</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Spotify Island's continued success a story of creativity, collaboration, iteration, and a double Webby
                            Award win.
                        </p>
                        <button className="bg-[#BBFC00] text-[#031347] text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#a8e600] transition-colors">
                            View Case Studies
                        </button>
                    </div>

                    {/* Right card */}
                    <div className="bg-[#0a1f5c] rounded-lg p-6">
                        <div className="bg-gray-300 rounded-lg rounded-tl-3xl w-full h-40 mb-6" />
                        <h3 className="text-white font-bold text-xl md:text-2xl mb-3">SPOTIFY ISLAND</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Spotify Island's continued success a story of creativity, collaboration, iteration, and a double Webby
                            Award win.
                        </p>
                        <button className="bg-[#BBFC00] text-[#031347] text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#a8e600] transition-colors">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
