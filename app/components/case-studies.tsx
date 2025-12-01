"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    title: "WHERE THE VIRTUAL CRAVES THE REAL",
    description:
      "We turned a virtual world into a playground for food lovers with streamer-led meal drops and immersive brand touchpoints that fueled real-world appetite.",
    stat: "+114% in-store traffic, proving virtual fandom can drive real-world flavor.",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=1200&h=600&fit=crop",
    brandName: "JOLLIBEE",
    url: "/case-studies/jollibee",
  },
  {
    id: 2,
    title: "Where the Virtual Craves the Real",
    description:
      "Crafted an immersive experience that bridges the gap between digital communities and brand engagement through interactive storytelling.",
    stat: "+89% engagement across digital touchpoints.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    brandName: "BRAND EXPERIENCE",
    url: "/case-studies/brand-experience",
  },
  {
    id: 3,
    title: "Where the Virtual Craves the Real",
    description:
      "Built a gaming experience that translates virtual moments into tangible real-world results and memorable brand interactions.",
    stat: "+156% community participation rate.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    brandName: "VIRTUAL BRAND",
    url: "/case-studies/virtual-brand",
  },
]


export function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress((currentSlide / (caseStudies.length - 1)) * 100)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const study = caseStudies[currentSlide]

  return (
    <section className="py-16">
      <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">

        {/* Hero Header */}
        <div className=" mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-[60px] font-fks font-bold uppercase text-white text-left leading-[65px] tracking-[2px]">
                Where <span className="text-[#BBFC00]">Brands </span> Become <br />{" "}
                playable<span className="text-[#BBFC00]"> Stories</span>
              </h2>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-8">
              <p className="text-white text-sm md:text-[20px] ">
                We design immersive in-game experiences that drive engagement across every screen, space, and platform.
              </p>

              <div className="flex gap-4 font-hel">
                <Link href="/case-studies">
                  <button className="px-8 py-3 rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white border-2 transition cursor-pointer">
                    Case Studies
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-3 rounded-[5px] border-2 border-white text-white font-bold hover:bg-white hover:text-[#031347] transition cursor-pointer">
                    Lets Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="">
          {/* Image Carousel */}
          <div className="relative w-full h-[560px] 2xl:h-[650px] rounded-2xl overflow-hidden mb-8 group">
            {/* Image with overlay */}
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${study.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end space-y-6">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-fks">{study.title}</h2>

                  <p className="text-white text-sm md:text-[20px] max-w-[70%] font-hel">{study.description}</p>
                  <p className="text-white text-sm md:text-[20px] font-hel">{study.stat}</p>
                </div>


                <Link href={study.url}>
                  <button className="px-8 py-3 rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white hover:border-2 transition cursor-pointer">
                    View Case Study 
                  </button>
                </Link>

              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            {/* Progress Bar */}
            <div className="w-[10%] h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-[#CCFF00] transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-4 ml-8">

              <button
                onClick={prevSlide}
                className=" rounded-full border-2 border-[#273561] p-2 text-[#CCFF00] w-14 h-14 flex items-center justify-center cursor-pointer backdrop-blur-[10px] bg-white/10"
              >
                <Image src="/home/left-arrow.svg" alt="Left Arrow" width={20} height={20} />
              </button>

              <button
                onClick={nextSlide}
                className="rounded-full border-2 border-[#273561] p-2 w-14 h-14 flex items-center justify-center cursor-pointer backdrop-blur-[10px] bg-white/10"
              >
                <Image src="/home/right-arrow.svg" alt="Right Arrow" width={20} height={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
