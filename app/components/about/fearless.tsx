"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const items = [
    {
        title: "FEARLESS",
        desc: "We dive headfirst into new worlds, unafraid to experiment, break patterns, and push the limits of what in-game marketing can be. Every campaign is a bold move forward.",
        leftClass: "left-[5%] md:left-[20%] top-[2rem] rotate-[-20deg] xl:left-[8rem] xl:top-[2rem] 2xl:left-[-1rem] 2xl:top-[2rem]",
        rightClass: "right-[-2%] md:right-[17%] top-[17%] md:top-[6%] xl:right-[5rem] xl:top-[10%] 2xl:right-[-2rem] 2xl:top-[14%]"
    },
    {
        title: "INNOVATIVE",
        desc: "We dive headfirst into new worlds, unafraid to experiment, break patterns, and push the limits of what in-game marketing can be. Every campaign is a bold move forward.",
        leftClass: "left-[2%] md:left-[18%] top-[10%] rotate-[-20deg] xl:left-[6rem] xl:top-[12%] 2xl:left-[-5rem] 2xl:top-[10%]",
        rightClass: "right-[-6%] md:right-[15%] top-[12%] md:top-[6%] xl:right-[3rem] xl:top-[9%] 2xl:right-[-5rem] 2xl:top-[10%]"
    },
    {
        title: "RELENTLESS",
        desc: "We dive headfirst into new worlds, unafraid to experiment, break patterns, and push the limits of what in-game marketing can be. Every campaign is a bold move forward.",
        leftClass: "left-[2%] md:left-[18%] top-[10%] rotate-[-20deg] xl:left-[6rem] xl:top-[12%] 2xl:left-[-6rem] 2xl:top-[10%]",
        rightClass: "right-[-6%] md:right-[13%] top-[12%] md:top-[6%] xl:right-[3rem] xl:top-[9%] 2xl:right-[-6rem] 2xl:top-[10%]"
    },
    {
        title: "OPEN",
        desc: "We dive headfirst into new worlds, unafraid to experiment, break patterns, and push the limits of what in-game marketing can be. Every campaign is a bold move forward.",
        leftClass: "left-[14%] md:left-[26%] top-[10%] rotate-[-20deg] xl:left-[12rem] xl:top-[12%] 2xl:left-[5rem] 2xl:top-[14%]",
        rightClass: "right-[5%] md:right-[20%] top-[11%] md:top-[6%] xl:right-[9rem] xl:top-[8%] 2xl:right-[5rem] 2xl:top-[10%]"
    }
]

export default function FearlessProgress() {
    const containerRef = useRef<HTMLDivElement>(null)
    const blocksRef = useRef<(HTMLDivElement | null)[]>([])
    const leftRefs = useRef<(HTMLDivElement | null)[]>([])
    const rightRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const SHOW = { duration: 0.55, ease: "power2.out", overwrite: "auto" }
        const HIDE = { duration: 0.45, ease: "power2.in", overwrite: "auto" }

        // ---------- INITIAL STATE ----------
        blocksRef.current.forEach((block, i) => {
            if (!block) return

            const left = leftRefs.current[i]
            const right = rightRefs.current[i]
            const title = block.querySelector(".title")
            const desc = block.querySelector(".desc")
            const nextBlock = blocksRef.current[i + 1]
            const nextTitle = nextBlock?.querySelector(".title")
            const secondNextBlock = blocksRef.current[i + 2];
            const secondNextTitle = secondNextBlock?.querySelector(".title");
            
            if (i === 0) {
                gsap.set([title, desc, left, right], { opacity: 1, y: 10, height: "auto", scale: 1 });
                gsap.set([nextTitle], { y: "40px", scale: 1, });
                gsap.set([secondNextTitle], { y: "20px", scale: 1, });
            } else {
                gsap.set(title, { opacity: 0.1, y: 10, scale: 1, height: "auto" })
                 gsap.set(nextTitle, { y: "40px", scale: 1, });
                gsap.set([desc, left, right], {
                    opacity: 0,
                    y: "-200px",
                    height: 0,
                    scale: 1
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
            markers: false
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
                                ...HIDE
                            })
                            gsap.to(t, { opacity: 0.1, ...HIDE })
                        }
                    })

                    // show current (NO y TOUCH)
                    gsap.to([title, desc, left, right], {
                        opacity: 1,
                        y: 30,
                        height: "auto",
                        ...SHOW
                    })
                },

                onLeaveBack: () => {
                    // hide current
                    gsap.to([desc, left, right], {
                        opacity: 0,
                        height: 0,
                        ...HIDE
                    })
                    gsap.to(title, { opacity: 0.1, ...HIDE })

                    // restore previous
                    if (prevTitle && prevDesc && prevLeft && prevRight) {
                        gsap.to(prevTitle, { opacity: 1, ...SHOW })
                        gsap.to([prevDesc, prevLeft, prevRight], {
                            opacity: 1,
                            height: "auto",
                            ...SHOW
                        })
                    }
                }
            })
        })

        return () => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <div
            ref={containerRef}
            className="rounded-[38px_0_0_0] md:rounded-[162px_0_0_0] relative w-full h-screen bg-[#091B56] text-white overflow-hidden flex flex-col items-center justify-center -space-y-28 py-16"
        >
            {items.map((item, i) => (
                <div
                    key={i}
                    ref={(el) => { blocksRef.current[i] = el }}
                    className="h-[70vh] flex flex-col items-center justify-center relative px-6"
                >
                    <div
                        ref={(el) => { leftRefs.current[i] = el }}
                        className={`absolute bg-[#BBFC00] text-[#031347] px-4 2xl:px-7 2xl:py-2 py-1 font-bold rounded-[10px] opacity-0 text-[18px] md:text-[24px] 2xl:text-[32px] font-fks ${item.leftClass}`}
                    >
                        We are
                    </div>

                    <div
                        ref={(el) => { rightRefs.current[i] = el }}
                        className={`absolute w-32 h-32 rounded-full flex items-center justify-center text-white font-bold opacity-0 ${item.rightClass}`}
                    >
                        <Image src="/icons/about-sp.svg" alt="" width={2000} height={2000}
                            className="2xl:w-full 2xl:h-full md:w-[100px] md:h-[100px] w-[50px] h-[50px]" />
                    </div>

                    <div className="text-center max-w-3xl flex items-center justify-center flex-col">
                        <h3 className="title text-[70px] md:text-7xl lg:text-[8vw] 2xl:text-[10vw] font-bold font-fks mb-1 opacity-30 tracking-[0.3px]">
                            {item.title}
                        </h3>
                        <p className="desc text-[15px] md:text-xl leading-relaxed opacity-0 max-w-[700px] mx-auto mb-1 font-helvetica">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}