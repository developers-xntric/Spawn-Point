import Image from "next/image"
import Link from "next/link"

interface CaseHeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  leftImage: string
  leftImageAlt?: string
  rightImage: string
  rightImageAlt?: string
}

export default function CaseHero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  leftImage,
  leftImageAlt = "Left image",
  rightImage,
  rightImageAlt = "Right image",
}: CaseHeroProps) {
  return (
    <section className="bg-[#031347] min-h-[500px] lg:min-h-[550px] 2xl:min-h-[650px] flex items-center justify-center relative pt-22 md:pt-20 mb-12">
      {/* Left image */}
      <div className="absolute left-[10%] md:left-[15%] xl:left-[30%] 2xl:left-[35%] top-[20%] md:top-[30%]">
        <Image src={leftImage} alt={leftImageAlt} width={50} height={50} className="object-contain" />
      </div>

      {/* Right image */}
      <div className="absolute right-[4%] md:right-[30%] top-[70%] md:top-[70%] 2xl:top-[67%] 2xl:right-[30%]">
        <Image src={rightImage} alt={rightImageAlt} width={70} height={70} className="object-contain" />
      </div>

      {/* Center content */}
      <div className="text-center z-10 lg:mb-10">
        <h1 className="text-white text-[45px] md:text-[70px] lg:text-[100px] font-fks font-bold uppercase tracking-wide">
          {title}
        </h1>
        <h2 className="text-[#BBFC00] text-[60px] md:text-[100px] lg:text-[130px] font-fks font-bold uppercase tracking-wide leading-[60px] md:leading-20 relative bottom-3">
          {subtitle}
        </h2>

        <Link href={buttonLink}>
          <button className="mt-6 bg-[#BBFC00] text-[#031347] text-ms px-8 py-2.5 rounded-[5px] hover:border hover:bg-transparent hover:border-white hover:text-white transition-colors font-bold">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  )
}
