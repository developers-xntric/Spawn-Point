"use client"

const partners = [
    { name: "PLAYSTATION NETWORK", icon: "/icons/ps.png" },
    { name: "SPOTIFY", icon: "/icons/spotify.png" },
    { name: "NETFLIX", icon: "/icons/netflix.png" },
    { name: "WARNER MUSIC GROUP", icon: "/icons/wmg.png" },
    { name: "PARAMOUNT", icon: "/icons/paramount.png" },
    { name: "SKECHER", icon: "/icons/sketcher.png" },
]

export default function PartnersSection({ isSecond = true }: { isSecond?: boolean }) {
    // Duplicate partners for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]

    return (
        <section className="bg-[#031347] py-16 overflow-hidden">


            {/* Slider Container */}
            <div className="flex flex-col gap-4">
                {/* Row 1 - Moves Left */}
                <div className="relative">
                    <div className="flex animate-scroll-left gap-4">
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`row1-${index}`}
                                className="shrink-0 flex items-center gap-4 bg-[#001763] text-white px-5 py-2.5 rounded-[15px] font-bold text-[20px] whitespace-nowrap border-[1.8px] border-[#FFFFFF1A]"
                            >
                                <span className="font-fks text-[17px] md:text-3xl tracking-wider">{partner.name}</span>
                                <img src={partner.icon || "/placeholder.svg"} alt={partner.name} className="w-9 h-9 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Moves Right (opposite direction) */}
                {isSecond && <div className="relative">
                    <div className="flex animate-scroll-right gap-4">
                        {duplicatedPartners.map((partner, index) => {
                            const isHighlighted = partner.name === "PARAMOUNT" && index === 3
                            return (
                                <div
                                    key={`row2-${index}`}
                                    className={`shrink-0 flex items-center gap-4 px-5 py-2.5 rounded-[15px] font-bold text-[20px] whitespace-nowrap border-[1.8px] border-[#FFFFFF1A] ${isHighlighted ? "bg-[#BBFC00] text-[#001763] border-2 border-[#BBFC00]" : "bg-[#001763] text-white"
                                        }`}
                                >
                                    <span className="font-fks text-[17px] md:text-3xl tracking-wider">{partner.name}</span>
                                    <img src={partner.icon || "/placeholder.svg"} alt={partner.name} className="w-9 h-9 object-contain" />
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </div>

            <style jsx>{`
            @keyframes scroll-left {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
            }

            @keyframes scroll-right {
            0% {
                transform: translateX(-50%);
            }
            100% {
                transform: translateX(0);
            }
            }

            @media (max-width: 768px) {
            .animate-scroll-left {
            animation: scroll-left 8s linear infinite;
            }
            .animate-scroll-right {
            animation: scroll-right 8s linear infinite;
            }
            }

            @media (min-width: 768px) {
            .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
            }

            .animate-scroll-right {
            animation: scroll-right 20s linear infinite;
            }
            }
      `}</style>
        </section>
    )
}
