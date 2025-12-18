import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
    h1?: string;
    h2?: string;
    icon1?: string;
    icon2?: string;
    para?: string;
    buttonText?: string;
    icon1Style?: string;
    icon2Style?: string;
    icon1Width?: number;
    icon1Height?: number;
    icon2Width?: number;
    icon2Height?: number;
    hWidth?: string;
}

export default function HeroSection({ h1, h2, icon1, icon2, para, buttonText, icon1Style, icon2Style, icon1Width, icon1Height, icon2Width, icon2Height, hWidth }: HeroSectionProps) {
    return (
        <section className="bg-[#031347] min-h-[500px] lg:min-h-[650px] 2xl:min-h-[600px] flex items-center justify-center relative pt-22 md:pt-16 mb-12">
            {/* Pizza image - left side */}
            <div className={`${icon1Style ? icon1Style : "absolute left-[10%]  md:left-[15%] xl:left-[30%] top-[20%] md:top-[30%]"}`}>
                <Image src={icon1 ? icon1 : "/icons/yes.png"} alt="Pizza decoration" width={icon1Width ? icon1Width : 55} height={icon1Height ? icon1Height : 50} className="object-contain" />
            </div>

            {/* Robot image - right side */}
            <div className={`${icon2Style ? icon2Style : "absolute right-[4%] md:right-[30%] top-[70%] md:top-[67%]"}`}>
                <Image src={icon2 ? icon2 : "/icons/arrow-top-right.png"} alt="Robot decoration" width={icon2Width ? icon2Width : 50} height={icon2Height ? icon2Height : 50} className="object-contain" />
            </div>

            {/* Center content */}
            <div className="text-center z-10 lg:mb-10">
                <h1 className="text-white text-[45px] md:text-[70px] lg:text-[100px] font-fks font-bold uppercase tracking-wide">{h1 ? h1 : "Real Results"}</h1>
                <h2 className="text-[#BBFC00] text-[60px] md:text-[100px] lg:text-[130px] font-fks font-bold uppercase tracking-wide leading-[60px] md:leading-20 relative md:bot  bottom-3">{h2 ? h2 : "Real Engagement"}</h2>
                <p className={`text-white text-md mt-2 md:mt-6 ${hWidth ? hWidth : "max-w-2xl"} mx-auto`}>
                    {para ? para : "See how we’ve helped brands connect with gaming audiences through immersive, measurable activations."}
                </p>
                {buttonText && <Link href="/contact">
                    <button className="mt-6 bg-[#BBFC00] text-[#031347] text-ms px-8 py-2.5 rounded-[5px] hover:border hover:bg-transparent hover:border-white hover:text-white transition-colors font-bold">
                        {buttonText ? buttonText : "Lets Get Started"}
                    </button>
                </Link>}
            </div>
        </section>
    )
}
