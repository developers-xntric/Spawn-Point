"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    title: "Chupa Chups",
    description:
      "Integrated contextual in-game stream triggers to engage gamers at key gameplay moments without disrupting the viewing experience.",
    // stat: "+114% in-store traffic, proving virtual fandom can drive real-world flavor.",
    video: "/chupa-chups/feature.png",
    brandName: "Chupa Chups",
    url: "/case-studies/chupa-chups",
  },
  {
    id: 2,
    title: "Domino’s",
    description:
      "Positioned pizza as the ultimate gaming companion by embedding high-impact, non-intrusive overlays across popular game streams.",
    // stat: "+89% engagement across digital touchpoints.",
    video: "/dominos/feature.png",
    brandName: "Domino’s",
    url: "/case-studies/dominos",
  },
  {
    id: 3,
    title: "Doritos",
    description:
      "Drove higher engagement by tailoring live stream branding to specific game genres and gamer personas at scale.",
    video: "/doritos/feature.svg",
    brandName: "Doritos ",
    url: "/case-studies/doritos",
  },
  {
    id: 4,
    title: "Karaca",
    description:
      "Introduced a tech-enabled lifestyle product to gamers by interactive overlays with tech-savvy gaming audiences.",
    video: "/karaca/feature.svg",
    brandName: "Karaca",
    url: "/case-studies/karaca",
  },
  {
    id: 5,
    title: "Mentos ",
    description:
      "Captured gamer attention using playful, custom-designed overlays that blended seamlessly with live gaming content.",
    video: "/mentos/feature.svg",
    brandName: "Mentos ",
    url: "/case-studies/mentos",
  },
  {
    id: 6,
    title: "Vodafone",
    description:
      "Promoted an official esports tournament through native livestream integrations, linking 5G performance with competitive gaming.",
    video: "/vodafone/feature.svg",
    brandName: "Vodafone",
    url: "/case-studies/vodafone",
  },
  {
    id: 7,
    title: "Shell ",
    description:
      "Integrated contextual in-game stream triggers to engage gamers at key gameplay moments without disruptExtended real-world motorsport credibility into racing and simulation games through performance-aligned live stream branding.ing the viewing experience.",
    video: "/shell/feature.svg",
    brandName: "Shell ",
    url: "/case-studies/shell",
  },
]

export function CaseStudies({ isabout }: { isabout: boolean }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const rawProgress = (currentSlide / (caseStudies.length - 1)) * 100
    const minProgress = 6
    setProgress(Math.max(minProgress, rawProgress))
  }, [currentSlide])


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const study = caseStudies[currentSlide]

  return (
    <section className="pt-14 md:pt-16 pb-1 md:pb-16">
      <div className="2xl:max-w-[1440px] w-full md:w-[85%] mx-auto">

        {/* Hero Header */}
        <div className="mb-8 md:mb-8 2xl:mb-10">
          <div className="grid lg:grid-cols-2 md:gap-12 gap-4 items-start w-[90%] md:w-full mx-auto">
            <div>
              {isabout ?
                <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white text-left 2xl:leading-[65px] md:leading-[60px] leading-10 tracking-[1.5px] md:tracking-[2px]">
                  End-to-End <span className="text-[#BBFC00]"> Gaming,</span> Esports <span className="font-hel">&</span> Virtual
                  <span className="text-[#BBFC00]"> Experiences</span>
                </h2>



                :

                <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white text-left 2xl:leading-[65px] md:leading-[60px] leading-10 tracking-[1.5px] md:tracking-[2px]">
                  <span className="text-[#BBFC00]">Strategic </span> Case Studies <span className="font-hel">&</span> Measurable
                  <span className="text-[#BBFC00]"> Growth</span>
                </h2>


              }


            </div>

            <div className="flex flex-col gap-5">
              {isabout ? (
                <p className="text-white text-[14px] md:text-[18px] ">
                  SpawnPoint designs and delivers gaming-led brand experiences across the full funnel. From in-stream adtech and creator-led campaigns to esports partnerships and persistent virtual worlds, we build experiences that drive awareness, engagement, conversion, and long-term retention.
                </p>
              ) : (
                <p className="text-white text-[16px] md:text-[20px] ">
                  Our work showcases how proprietary AI, deep cultural fluency, and creator networks turn brand participation into high-value, sustained ROI.
                </p>
              )}

              <div className="flex gap-4 font-hel">
                <Link href="/case-studies">
                  <button className="px-4 md:px-8 py-2 md:py-3 text-[15px] md:text-base rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white border border-transparent transition cursor-pointer">
                    Case Studies
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-4 md:px-8 py-2 md:py-3 text-[15px] md:text-base rounded-[5px] border-2 border-white text-white font-bold hover:bg-white hover:text-[#031347] transition cursor-pointer">
                    Lets Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div>
          <div className="relative w-full h-[470px] md:h-[600px] 2xl:h-[600px] md:rounded-2xl overflow-hidden mb-8 2xl:mb-4 group">

            {/* VIDEO BACKGROUND (same wrapper, same size) */}
            <div className="relative w-full h-full">

              <Image width={2000} height={2000} src={study.video} alt={study.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-500" />


              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-[#000]/50 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-5 md:p-10 flex flex-col justify-end space-y-4 md:space-y-6">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-fks tracking-[1.5px]">
                    {study.title}
                  </h2>
                  <p className="text-white text-sm md:text-[20px] md:max-w-[80%] font-hel">
                    {study.description}
                  </p>
                  {/* <p className="text-white text-sm md:text-[20px] font-hel">
                    {study.stat}
                  </p> */}
                </div>

                <Link href={study.url} className="w-fit">
                  <button className=" px-4 md:px-8 py-2 md:py-3 text-[15px] md:text-base rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white hover:border-2 transition cursor-pointer">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mr-8 md:mr-0">
            <div className="w-[30%] md:w-[15%] h-1.5 bg-gray-700 rounded-full overflow-hidden ml-5 md:ml-0">
              <div
                className="h-full rounded-full bg-[#CCFF00] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex gap-2 md:gap-4 ml-8">
              <button
                onClick={prevSlide}
                className=" rounded-full border-2 border-[#273561] p-2 text-[#CCFF00] md:w-14 md:h-14 w-10 h-10 flex items-center justify-center cursor-pointer backdrop-blur-[10px] bg-white/10"
              >
                <Image src="/home/left-arrow.svg" alt="Left Arrow" width={20} height={20} className="md:w-[25px] md:h-[25px] w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="rounded-full border-2 border-[#273561] p-2 md:w-14 md:h-14 w-10 h-10 flex items-center justify-center cursor-pointer backdrop-blur-[10px] bg-white/10"
              >
                <Image src="/home/right-arrow.svg" alt="Right Arrow" width={20} height={20} className="md:w-[25px] md:h-[25px] w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
