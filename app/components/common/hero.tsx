import Image from "next/image"
import Link from "next/link"
export default function HeroSection() {
    return (
        <section className="bg-[#031347] min-h-[500px] lg:min-h-[650px] 2xl:min-h-[600px] flex items-center justify-center relative pt-22 md:pt-16 mb-12">
            {/* Pizza image - left side */}
            <div className="absolute left-[10%]  md:left-[15%] xl:left-[30%] top-[20%] md:top-[30%]">
                <Image src="/icons/yes.png" alt="Pizza decoration" width={50} height={50} className="object-contain" />
            </div>

            {/* Robot image - right side */}
            <div className="absolute right-[4%] md:right-[30%] top-[70%] md:top-[67%]">
                <Image src="/icons/arrow-top-right.png" alt="Robot decoration" width={50} height={50} className="object-contain" />
            </div>

            {/* Center content */}
            <div className="text-center z-10 lg:mb-10">
                <h1 className="text-white text-[45px] md:text-[70px] lg:text-[100px] font-fks font-bold uppercase tracking-wide">Real Results</h1>
                <h2 className="text-[#BBFC00] text-[60px] md:text-[100px] lg:text-[130px] font-fks font-bold uppercase tracking-wide leading-[60px] md:leading-20 relative md:bot  bottom-3">Real Engagement</h2>
                <p className="text-white text-md mt-2 md:mt-6 max-w-sm mx-auto">
                    See how we’ve helped brands connect with gaming audiences through immersive, measurable activations.
                </p>
                <Link href="/contact">
                    <button className="mt-6 bg-[#BBFC00] text-[#031347] text-ms px-8 py-2.5 rounded-[5px] hover:border hover:bg-transparent hover:border-white hover:text-white transition-colors font-bold">
                        Lets Get Started
                    </button>
                </Link>
            </div>



        </section>
    )
}
