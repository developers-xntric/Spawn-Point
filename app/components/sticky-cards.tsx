"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Card data
const cards = [
  {
    heading: "Set goals",
    para: "Creator-led storytelling and immediate audience acquisition, fueled by our AI Ad Engine and in-stream AdTech implementation.",
    title: "Ignition",
  },
  {
    heading: "Build the strategy",
    title: "Scaling",
    para: "Conceptualization and development of major Esports IP partnerships alongside the build-out of persistent, branded Virtual Worlds.",
  },
  {
    heading: "Activate the campaign",
    title: "Momentum",
    para: "Strategic Seasonal Gaming Events and hybrid activations, focusing on high-dwell time engagement and expansive partnerships.",
  },
  {
    heading: "Amplify what works",
    title: "Sustained Growth",
    para: "Implementation of the Audience Reinforcement Engine and operationalizing commerce/loyalty missions within persistent Virtual Worlds.",
  },
]

export default function StickyCards() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Check if desktop
    const isDesktop = window.innerWidth > 1024

    if (!isDesktop) return

    const ctx = gsap.context(() => {
      const left = sectionRef.current!.querySelector(".left") as HTMLElement
      const right = sectionRef.current!.querySelector(".right") as HTMLElement
      const cardEls = Array.from(right.children) as HTMLElement[]


      gsap.set(cardEls, {
        opacity: 0,
        y: (i) => i === 0 ? 180 : 150,
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: left,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 2.5,
        markers: false,
      })

      cardEls.forEach((card, index) => {
        gsap.to(card, {
          opacity: 1,
          y: 40,
          duration: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: index === cardEls.length - 1 ? "top 60%" : "top 38%",
            end: "top 100%",
            scrub: 1.7,
            markers: false,
          },
        })
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#091B56] mt-10 md:mt-1 text-white md:pb-4 lg:pb-10 xl:pt-1 pt-10 relative min-h-screen"
    >
      <div className="2xl:max-w-[1440px] w-[90%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT SECTION */}
          <div className="left relative top-0 w-full lg:w-[40%] xl:w-[55%] lg:h-screen lg:flex lg:flex-col lg:justify-center ">
            <div>
              <p className="mb-4 text-[16px] md:text-[20px] tracking-[10px] md:tracking-[12px] text-[#FF1586] uppercase">
                How We Work
              </p>
              <h2 className="text-[40px] lg:text-[60px] font-bold uppercase text-white leading-[40px] md:leading-[60px] lg:leading-[65px] tracking-[2px] md:tracking-[2px] max-w-[650px] font-fks">
                From <span className="text-[#BBFC00]">Insight </span> to Immortality: Our 4-Quarter
                <span className="text-[#BBFC00]"> System</span>
              </h2>
              <p className="text-white text-sm md:text-[16px] xl:text-[20px] font-hel mt-5">
                We implement a proprietary 4-Phase annual framework to ensure continuous relevance,
                maximize audience commitment, and deliver measurable Lifetime Lift. We transform
                short-term activations into long-term, compounding value.
              </p>
              <Link href="/brand-experience">
                <button className="px-5 md:px-8 py-3 rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white border border-transparent transition cursor-pointer mt-5 font-hel md:text-base text-[14px]">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="right w-full lg:w-[60%] xl:w-[50%] md:space-y-8 space-y-4 md:pb-20 pb-14">
            {cards.map((card, index) => (
              <div
                key={index}
                className="card-item relative md:rounded-[20px] rounded-[10px] bg-white/5 backdrop-blur-[30px] p-3 md:p-5 overflow-hidden border border-[#FFFFFF1A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-32 md:h-full"
                  viewBox="0 0 713 302"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter id={`drop-${index}`} x="0" y="0" width="713" height="302" filterUnits="userSpaceOnUse">
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0  
                  0 0 0 0 0 
                  0 0 0 0 0 
                  0 0 0 0.25 0"
                      />
                      <feBlend in="SourceGraphic" result="shape" />
                    </filter>
                  </defs>

                  <path
                    d="M486.725 45.9194C490.284 52.1561 496.914 56.0059 504.095 56.0059H689C700.046 56.0059 709 64.9602 709 76.0059V274C709 285.046 700.046 294 689 294H24C12.9543 294 4 285.046 4 274V20C4 8.9543 12.9543 0 24 0H448.904C456.085 0 462.715 3.84976 466.274 10.0865L486.725 45.9194Z"
                    stroke="#BBFC00"
                    strokeWidth="1"
                    fill="transparent"
                    filter={`url(#drop-${index})`}
                  />

                  <foreignObject x="30" y="30" width="640" height="230">
                    <div className="flex flex-col space-y-3 text-white leading-tight">
                      <p className="text-[#BBFC00] text-[32px] md:text-[20px] lg:text-[22px] tracking-[1px]">
                        Q{index + 1} {card.title}
                      </p>
                      <h2
                        dangerouslySetInnerHTML={{ __html: card.heading }}
                        className="font-fks text-white text-[50px] md:text-[32px] lg:text-[40px] xl:text-[44px] font-bold uppercase tracking-[2px] md:tracking-[1.5px]"
                      />
                      <p className="text-white text-[25px] md:text-[18px] lg:text-[20px] xl:text-[24px] tracking-[1px] md:tracking-[0.5px] font-hel">
                        {card.para}
                      </p>
                    </div>
                  </foreignObject>
                </svg>

                <Image
                  src="/home/gif-icons-sticky.svg"
                  alt="icons"
                  width={140}
                  height={50}

                  className="mix- red-400 absolute xl:top-3 md:top-2 2xl:top-5 -top-1 right-4 md:right-12 xl:right-10 2xl:right-12 z-30 w-[70px] md:w-[100px] xl:w-[140px] h-[50px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
