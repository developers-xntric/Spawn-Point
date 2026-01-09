"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"

interface CaseHeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  leftImage: string
  leftImageAlt?: string
  rightImage: string
  rightImageAlt?: string
  vodafoneClass?: string
  isVodafone?: boolean
}

export default function CaseHero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  leftImage,
  vodafoneClass,
  isVodafone,
  leftImageAlt = "Left image",
  rightImage,
  rightImageAlt = "Right image",
}: CaseHeroProps) {
  const leftImgRef = useRef(null)
  const rightImgRef = useRef(null)

  useEffect(() => {
    // Left Image Animation
    gsap.to(leftImgRef.current, {
      y: -10,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Right Image Animation
    gsap.to(rightImgRef.current, {
      y: -10,
      duration: 3,
      delay: 0.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    })
  }, [])

  return (
    <section className="bg-[#031347] min-h-[380px] lg:min-h-[550px] 2xl:min-h-[500px] flex items-center justify-center relative pt-22 md:pt-20 2xl:pt-52 mb-12">
      {/* Left image */}
      <div ref={leftImgRef} className="absolute left-[10%] md:left-[15%] xl:left-[32%] 2xl:left-[36%] top-[27%] md:top-[30%] 2xl:top-[40%] ">
        <Image src={leftImage} alt={leftImageAlt} width={50} height={50} className="object-contain" />
      </div>

      {/* Right image */}
      <div ref={rightImgRef} className={`${isVodafone ? vodafoneClass : "absolute right-[1%] md:right-[33%] top-[62%] md:top-[68%] 2xl:top-[70%] 2xl:right-[36.5%]"}`}>
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
