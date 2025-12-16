import Image from "next/image"

export default function ContactCTA() {
    return (
        <section className="bg-[#031347] min-h-[300px] md:min-h-[300px] 2xl:min-h-[500px] flex items-center justify-center relative pt-16 mt-20 md:mt-20 2xl:mt-20 mb-12">
            {/* Pizza image - left side */}
            <div className="absolute left-[4%] md:left-[10%] lg:left-[20%]  xl:left-[30%] top-[20%] md:top-[30%]">
                <Image src="/icons/OMG.svg" alt="Pizza decoration" width={50} height={50} className="object-contain" />
            </div>

            {/* Robot image - right side */}
            <div className="absolute right-0 md:right-[4%] lg:right-[20%] xl:right-[30%] top-[90%] md:top-[70%] xl:top-[67%]">
                <Image src="/icons/Dollar.svg" alt="Robot decoration" width={50} height={50} className="object-contain" />
            </div>

            {/* Center content */}
            <div className="text-center z-10 mb-10">
                <h1 className="text-white text-[50px] md:text-[100px] font-fks font-bold uppercase tracking-wide">Create What’s</h1>
                <h2 className="text-[#BBFC00] text-[70px] md:text-[130px] font-fks font-bold uppercase tracking-wide leading-20 relative md:bot  bottom-3 uppercase">Next in Gaming</h2>
                <p className="text-white text-md mt-2 md:mt-6 max-w-sm mx-auto">
                    Whether you’re ready to launch a full-scale immersive world or just want to explore what your brand could look like inside a game, we’d love to hear from you.
                </p>
                
            </div>
            
        </section>
    )
}
