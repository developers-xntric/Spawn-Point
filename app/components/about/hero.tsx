import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="bg-[#031347] min-h-[600px] flex items-center justify-center relative py-16">
            {/* Pizza image - left side */}
            <div className="absolute left-[30%] top-[30%]">
                <Image src="/icons/yes.png" alt="Pizza decoration" width={50} height={50} className="object-contain" />
            </div>

            {/* Robot image - right side */}
            <div className="absolute right-[30%] top-[55%]">
                <Image src="/icons/arrow-top-right.png" alt="Robot decoration" width={50} height={50} className="object-contain" />
            </div>

            {/* Center content */}
            <div className="text-center z-10">
                <h1 className="text-white text-[80px] font-fks font-bold uppercase tracking-wide">WE ARE</h1>
                <h2 className="text-[#BBFC00] text-[120px] font-fks font-bold uppercase tracking-wide leading-20">SPAWN POINT</h2>
                <p className="text-white/80 text-md mt-6 max-w-sm mx-auto">
                    We help brands enter the gaming universe through immersive experiences, in-game activations, creators, and virtual worlds
                </p>
                <button className="mt-6 bg-[#BBFC00] text-[#031347] font-semibold text-ms px-8 py-2.5 rounded-[5px] hover:bg-[#a8e600] transition-colors">
                    Lets Connect
                </button>
            </div>
        </section>
    )
}
