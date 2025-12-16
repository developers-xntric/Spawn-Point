export default function ExpertiseSection() {
    return (
        <section className="bg-[#091B56] py-16 md:py-24 px-4 md:px-8 lg:px-24"
            style={{ borderRadius: "140px 0 0 0" }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {/* Header */}
                        <h2 className="font-black font-fks text-3xl md:text-4xl lg:text-6xl uppercase tracking-wider">
                            <span className="text-white">Expertise That Drives</span>
                            <br />
                            <span className="text-[#BBFC00]">Engagement</span>
                        </h2>

                        {/* Campaigns & Activations Card */}
                        <div className="bg-white/5 border-2 border-white/10 rounded-2xl p-6 md:p-8">
                            <h3 className="text-white font-fks font-black text-xl md:text-5xl uppercase tracking-wide mb-3">
                                Campaigns & Activations
                            </h3>
                            <p className="text-white text-md tracking-wide mb-2">
                                Turn brand stories into playable creator moments. Creators lead the narrative. Audiences shape the
                                outcome.
                            </p>
                            <p className="text-white text-lg tracking-wide mb-2">We build:</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-sm">+</span>
                                    <span className="text-white text-sm">Creator campaigns</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-sm">+</span>
                                    <span className="text-white text-sm">Reaction-based brand moments</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-sm">+</span>
                                    <span className="text-white text-sm">Play-test activations</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-sm">+</span>
                                    <span className="text-white text-sm">TikTok + IG Reels gaming formats</span>
                                </div>
                            </div>
                        </div>

                        {/* In-Stream Adtech Card */}
                        <div className="bg-white/5 rounded-2xl p-6 md:p-8">
                            <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide mb-3">
                                In-Stream Adtech
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">AI-powered ad overlays that adapt in real-time.</p>
                            <p className="text-gray-400 text-sm mb-3">We build:</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Dynamic live ads</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Rich-media panels</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">QR-triggered CTAs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Full-funnel analytics via DataForge</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        {/* Esports Partnerships Card */}
                        <div className="bg-[#0a1a4a] rounded-2xl p-6 md:p-8">
                            <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide mb-3">
                                Esports Partnerships
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Your brand inside the biggest cultural moments across UAE, KSA, Egypt.
                            </p>
                            <p className="text-gray-400 text-sm mb-3">We build:</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Tournament IPs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Finals events</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Team-branded partnerships</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">PR + social amplification</span>
                                </div>
                            </div>
                        </div>

                        {/* Virtual Worlds Card */}
                        <div className="bg-[#0a1a4a] rounded-2xl p-6 md:p-8">
                            <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide mb-3">Virtual Worlds</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Persistent branded experiences inside Roblox, Fortnite, Minecraft, CS2.
                            </p>
                            <p className="text-gray-400 text-sm mb-3">We build:</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Branded maps</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Gameplay loops</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Virtual stores (Shopify integrated)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Seasonal updates</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#BBFC00] text-xs">+</span>
                                    <span className="text-gray-300 text-xs">Streamer-driven traffic</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                            <p className="text-white text-lg md:text-xl font-medium">
                                Let's Build Your Next In
                                <br />
                                Game Power Move.
                            </p>
                            <button className="bg-[#BBFC00] text-[#031347] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#a8e600] transition-colors">
                                Activate Strategy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
