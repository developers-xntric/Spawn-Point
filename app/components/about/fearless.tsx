
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const items = [{ title: "FEARLESS", desc: "We enter new platforms before they’re proven and build where others hesitate. Risk is not avoided; it’s calculated, designed, and optimized. That’s how culture is created, not followed.", leftClass: "left-[5%] md:left-[23%] lg:left-[20%] top-[0rem] lg:top-[1%] rotate-[-20deg] xl:left-[8rem] xl:top-[1rem] 2xl:left-[-1rem] 2xl:top-[2rem]", rightClass: "right-[-2%] md:right-[17%] top-[5%] md:top-[-4%] xl:right-[6rem] lg:top-[0%] xl:top-[1%] 2xl:right-[-1rem] 2xl:top-[5%]" },
{ title: "INNOVATIVE", desc: "We fuse creativity, data, and technology to invent new ways for brands to play. From AI-driven systems to interactive storytelling, innovation is our baseline. If it’s been done before, we push it further.", leftClass: "left-[2%] md:left-[18%] top-[1%] rotate-[-20deg] xl:left-[6rem] md:top-[0%] lg:top-[0%] xl:top-[2%] 2xl:left-[-5rem] 2xl:top-[5%]", rightClass: "right-[-6%] md:right-[15%] top-[4%] md:top-[-4%] xl:right-[4rem] lg:top-[0%] xl:top-[12%] 2xl:right-[-4rem] 2xl:top-[9%]" },
{ title: "RELENTLESS", desc: "We don’t stop at launch, we optimize, iterate, and evolve. Every activation is measured, refined, and strengthened in real time. Because impact isn’t accidental, it’s engineered.", leftClass: "left-[2%] md:left-[18%] top-[1%] md:top-[0%] lg:top-[0%] rotate-[-20deg] xl:left-[5.5rem] xl:top-[1%] 2xl:left-[-6rem] 2xl:top-[6%]", rightClass: "right-[-6%] md:right-[16%] lg:right-[13%] top-[5%] md:top-[-3%] xl:right-[3.5rem] lg:top-[0%] xl:top-[3%] 2xl:right-[-5rem] 2xl:top-[8.5%]" },
{ title: "NATIVE", desc: "We don’t borrow gaming culture, we live inside it. From creators to communities, everything we build feels authentic by design. That’s what earns trust, time, and loyalty.", leftClass: "left-[10%] md:left-[28%] lg:left-[26%] top-[4%] md:top-[0%] lg:top-[0%] rotate-[-20deg] xl:left-[10rem] xl:top-[1%] 2xl:left-[4rem] 2xl:top-[6%]", rightClass: "right-[8%] lg:right-[20%] md:right-[25%] top-[4%] md:top-[-4%] lg:top-[0%] lg:right-[11rem] xl:right-[8rem] lg:top-[0%] xl:top-[1%] 2xl:right-[4rem] 2xl:top-[7%]" }]


export default function FearlessProgress() {
    const containerRef = useRef<HTMLDivElement>(null)
    const blocksRef = useRef<(HTMLDivElement | null)[]>([])
    const leftRefs = useRef<(HTMLDivElement | null)[]>([])
    const rightRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const SHOW = { duration: 0.55, ease: "power2.out", overwrite: "auto" } as const
        const HIDE = { duration: 0.45, ease: "power2.in", overwrite: "auto" } as const

        // ---------- INITIAL STATE ----------
        blocksRef.current.forEach((block, i) => {
            if (!block) return

            const left = leftRefs.current[i]
            const right = rightRefs.current[i]
            const title = block.querySelector(".title")
            const desc = block.querySelector(".desc")
            const nextBlock = blocksRef.current[i + 1]
            const nextTitle = nextBlock?.querySelector(".title")
            const secondNextBlock = blocksRef.current[i + 2]
            const secondNextTitle = secondNextBlock?.querySelector(".title")
            if (i === 0) {
                gsap.set([block], { marginTop: "75px" })
                gsap.set([title, desc, left, right], { opacity: 1, y: 10, height: "auto", scale: 1 })
                gsap.set([nextTitle], { y: "40px", scale: 1 })
                gsap.set([secondNextTitle], { y: "20px", scale: 1 })
            } else {
                gsap.set(title, { opacity: 0.1, y: 10, scale: 1, height: "auto" })
                gsap.set(nextTitle!, { y: "40px", scale: 1 })
                gsap.set([desc, left, right], {
                    opacity: 0,
                    y: "-200px",
                    height: 0,
                    scale: 1,
                })
            }
        })

        // ---------- PIN ----------
        ScrollTrigger.create({
            trigger: container,
            start: "top 6%",
            end: "bottom center",
            pin: true,
            scrub: 2.8,
            markers: false,
        })

        blocksRef.current.forEach((block, i) => {
            const icon = rightRefs.current[i]
            if (!block || !icon) return

            // initial state for EACH block
            gsap.set(icon, {
                rotation: 0,
                y: 0,
                transformOrigin: "50% 0%",
            })

            ScrollTrigger.create({
                trigger: block,
                start: "top 20%",
                end: "bottom center",
                scrub: 20,
                markers: false,
                onUpdate: (self) => {
                    const direction = self.direction
                    const moveY = gsap.utils.mapRange(0, 1, 30, 8, self.progress)

                    gsap.to(icon, {
                        rotation: gsap.utils.interpolate(0, 25, self.progress),
                        y: 20 + (direction === 1 ? -moveY : moveY),
                        ease: "none",
                        overwrite: "auto",
                    })
                },

                onLeave: () => {
                    // freeze when block ends
                    gsap.to(icon, { y: 0, duration: 0.2 })
                },

                onLeaveBack: () => {
                    gsap.to(icon, { y: 0, duration: 0.2 })
                },
            })
        })



        // ---------- BLOCK LOGIC ----------
        blocksRef.current.forEach((block, i) => {
            if (!block || i === 0) return

            const left = leftRefs.current[i]
            const right = rightRefs.current[i]
            const title = block.querySelector(".title")
            const desc = block.querySelector(".desc")

            const prevBlock = blocksRef.current[i - 1]
            const prevTitle = prevBlock?.querySelector(".title")
            const prevDesc = prevBlock?.querySelector(".desc")
            const prevLeft = leftRefs.current[i - 1]
            const prevRight = rightRefs.current[i - 1]

            ScrollTrigger.create({
                trigger: block,
                start: "top 30%",
                end: "bottom center",
                scrub: 2.8,
                markers: false,

                onEnter: () => {
                    // hide others
                    blocksRef.current.forEach((b, idx) => {
                        if (idx !== i && b) {
                            const t = b.querySelector(".title")
                            const d = b.querySelector(".desc")
                            gsap.to([d, leftRefs.current[idx], rightRefs.current[idx]], {
                                opacity: 0,
                                height: 0,
                                ...HIDE,
                            })
                            gsap.to(t, { opacity: 0.1, ...HIDE })
                        }
                    })

                    // show current (NO y TOUCH)
                    gsap.to([title, desc, left, right], {
                        opacity: 1,
                        y: 30,
                        height: "auto",
                        ...SHOW,
                    })
                },

                onLeaveBack: () => {
                    // hide current
                    gsap.to([desc, left, right], {
                        opacity: 0,
                        height: 0,
                        ...HIDE,
                    })
                    gsap.to(title, { opacity: 0.1, ...HIDE })

                    // restore previous
                    if (prevTitle && prevDesc && prevLeft && prevRight) {
                        gsap.to(prevTitle, { opacity: 1, ...SHOW })
                        gsap.to([prevDesc, prevLeft, prevRight], {
                            opacity: 1,
                            height: "auto",
                            ...SHOW,
                        })
                    }
                },
            })
        })

        return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }, [])

    return (
        <div
            ref={containerRef}
            className="rounded-[38px_0_0_0] md:rounded-[162px_0_0_0] relative w-full h-screen bg-[#091B56] text-white overflow-hidden flex flex-col items-center justify-center pt-1 md:pt-36 -space-y-28 pb-4 md:pb-32"
        >
            {/* Mobile-only fixed "We are" */}
            <div className="md:hidden absolute top-16 left-[20%] -translate-x-1/2 z-50 rotate-[-20deg]">
                <div className="bg-[#BBFC00] text-[#031347] px-4 py-1 font-bold rounded-[10px] text-[18px] font-fks">
                    We are
                </div>
            </div>

            {items.map((item, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        blocksRef.current[i] = el
                    }}
                    className="h-[70vh] flex flex-col items-center justify-center relative px-6"
                >
                    <div
                        ref={(el) => {
                            leftRefs.current[i] = el
                        }}
                        className={`absolute hidden md:block bg-[#BBFC00] text-[#031347] px-4 2xl:px-6 2xl:py-2 py-1 font-bold rounded-[10px] opacity-0 text-[18px] md:text-[24px] 2xl:text-[32px] font-fks ${item.leftClass}`}
                    >
                        We are
                    </div>


                    <div
                        ref={(el) => {
                            rightRefs.current[i] = el
                        }}
                        className={`absolute w-32 h-32 rounded-full flex items-center justify-center text-white font-bold opacity-0 ${item.rightClass}`}
                    >
                        <Image
                            src="/icons/about-sp.svg"
                            alt=""
                            width={2000}
                            height={2000}
                            className="2xl:w-full 2xl:h-full md:w-[100px] md:h-[100px] w-[50px] h-[50px]"
                        />
                    </div>

                    <div className="text-center max-w-3xl flex items-center justify-center flex-col pb-16 md:pb-20">
                        <h3 className="title text-[70px] md:text-7xl lg:text-[8vw] 2xl:text-[10vw] font-bold font-fks mb-1 opacity-30 tracking-[0.3px]">
                            {item.title}
                        </h3>
                        <p className="desc text-[15px] md:text-xl leading-relaxed opacity-0 max-w-[700px] mx-auto mb-8 md:mb-12 font-helvetica">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
