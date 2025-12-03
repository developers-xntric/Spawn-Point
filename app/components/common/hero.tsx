import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="bg-[#031347] min-h-[400px] flex items-center justify-center relative py-16">
            {/* Pizza image - left side */}
            <div className="absolute left-[20%] top-[30%]">
                <Image src="/pizza.jpg" alt="Pizza decoration" width={50} height={50} className="object-contain" />
            </div>

            {/* Robot image - right side */}
            <div className="absolute right-[20%] top-[55%]">
                <Image src="/robo.jpg" alt="Robot decoration" width={40} height={40} className="object-contain" />
            </div>

            {/* Center content */}
            <div className="text-center z-10">
                <h1 className="text-white font-black text-5xl md:text-6xl tracking-tight uppercase">Real Projects</h1>
                <h2 className="text-[#BBFC00] font-black text-5xl md:text-6xl tracking-tight uppercase mt-1">Real Impact</h2>
                <p className="text-white/80 text-sm mt-4 max-w-xs mx-auto">
                    Explore how brands used SpawnPoint to
                    <br />
                    enter the gaming universe
                </p>
                <button className="mt-6 bg-[#BBFC00] text-black font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-[#a8e600] transition-colors">
                    Lets Connect
                </button>
            </div>
        </section>
    )
}
