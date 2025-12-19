import Link from "next/link";
import Star from "../icons/star";

export default function ExpertiseSection() {
    return (
        <section className="bg-[#091B56] py-16 md:py-24 px-4 md:px-8 lg:px-28 rounded-tl-[50px] md:rounded-tl-[140px]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {/* Header */}
                        <h2 className="font-black font-fks text-5xl md:text-4xl lg:text-6xl uppercase tracking-wider mb-4">
                            <span className="text-white">Expertise Built For</span>
                            <br />
                            <span className="text-[#BBFC00]">Interaction</span>
                        </h2>

                        {/* PLAYTEST ACTIVATION */}
                        <div className="bg-white/5 border-2 border-white/10 rounded-2xl p-6 md:p-6">
                            <h3 className="text-white font-fks font-black text-4xl md:text-5xl uppercase tracking-wide mb-3">
                                PLAYTEST ACTIVATION
                            </h3>
                            <p className="text-white text-sm leading-tight lg:text-md tracking-wide mb-5 lg:max-w-[70%]">
                                Low-cost test entry via branded Roblox avatar interactions and short-form content.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2">
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm leading-4">Need low-risk access to gaming audiences.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm leading-4">CreatorNet Portal + DataForge Dashboard</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm leading-4">Fastest way to test gaming ROI under AED 15K.</span>
                                </div>
                            </div>
                        </div>

                        {/* CREATOR STREAM PLUS */}
                        <div className="bg-white/5 border-2 border-white/10 rounded-2xl p-6 md:p-6">
                            <h3 className="text-white font-fks font-black text-4xl md:text-5xl uppercase tracking-wide mb-3">
                                CREATOR STREAM PLUS
                            </h3>
                            <p className="text-white text-sm leading-tight lg:text-md tracking-wide mb-5 lg:max-w-[70%]">Extended in-stream activations using UTM, offer codes, and retargeting for performance.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2">
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Need to connect awareness with measurable conversions.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Al Ad Engine + Audience Reinforcement Engine
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Transforms creator reach into performance ROI.</span>
                                </div>
                            </div>
                        </div>

                        {/* ARENA ACCESS PARTNERSHIPS */}
                        <div className="bg-white/5 border-2 border-white/10 rounded-2xl p-6 md:p-6">
                            <h3 className="text-white font-fks font-black text-4xl md:text-5xl uppercase tracking-wide mb-3">
                                ARENA ACCESS PARTNERSHIPS
                            </h3>
                            <p className="text-white text-sm leading-tight lg:text-md tracking-wide mb-5 lg:max-w-[70%]">Brand integration into global esports platforms like Esports World Cup with managed activations.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2">
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Fragmented sponsorship ROI.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Al Ad Engine + CreatorNet Portal + DataForge Dashboard
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Turn sponsorships into measurable performance assets.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        {/* CREATOR STREAM AWARENESS */}
                        <div className="bg-white/5 border-2 border-white/10 rounded-2xl p-6 md:p-6">
                            <h3 className="text-white font-fks font-black text-4xl md:text-5xl uppercase tracking-wide mb-3">
                                CREATOR STREAM AWARENESS
                            </h3>
                            <p className="text-white text-sm leading-tight lg:text-md tracking-wide mb-5 lg:max-w-[70%]">
                                In-stream brand integrations for awareness across Twitch, YouTube, Kick, and TikTok.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2">
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Brands struggle to authentically reach gamers.
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Al Ad Engine + CreatorNet Portal + DataForge Dashboard</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">4x recall vs pre-roll ads; scalable awareness solution.</span>
                                </div>
                            </div>
                        </div>

                        {/* BRAND ARENA IP BUILD */}
                        <div className="bg-white/5 border-2 border-white/10 rounded-2xl p-6 md:p-6">
                            <h3 className="text-white font-fks font-black text-4xl md:text-5xl uppercase tracking-wide mb-3">BRAND ARENA IP BUILD</h3>
                            <p className="text-white text-sm leading-tight lg:text-md tracking-wide mb-5 lg:max-w-[70%]">
                                End-to-end esports IP development-concept, production, and live activation.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2">
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Sponsorships lack longevity; brands need cultural equity.
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">CreatorNet Portal + Al Ad Engine + DataForge Dashboard
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Own the arena, not just the logo.</span>
                                </div>
                            </div>
                        </div>

                        {/* WORLD FORGE BUILDS */}
                        <div className="bg-white/5 border-2 border-white/10 rounded-2xl p-6 md:p-6">
                            <h3 className="text-white font-fks font-black text-4xl md:text-5xl uppercase tracking-wide mb-3">WORLD FORGE BUILDS</h3>
                            <p className="text-white text-sm leading-tight lg:text-md tracking-wide mb-5 lg:max-w-[70%]">
                                Custom branded worlds in Roblox, Fortnite, Minecraft, or CS2 with playable loops and commerce.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-2">
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">Lack of persistent brand-owned spaces.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">DataForge Dashboard + CreatorNet Portal
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star />
                                    <span className="text-white text-md lg:text-sm">MENA gamers spend 6-10 hrs/week in-game-create your owned ecosystem.</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                            <p className="text-white text-lg md:text-2xl font-medium">
                                Let's Build Your Next In <br />
                                Game Power Move.
                            </p>
                            <Link href="/contact">
                                <button className="bg-[#BBFC00] text-[#031347] px-12 lg:px-7 py-3 rounded-[5px] font-bold text-md lg:text-sm hover:border hover:bg-transparent hover:border-white hover:text-white transition-colors">
                                    Activate Strategy
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
