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
        leftClass: "left-[-2rem] top-[2rem] rotate-[-20deg] xl:left-[8rem] xl:top-[2rem] 2xl:left-[-1rem] 2xl:top-[2rem]",
        rightClass: "right-[-3rem] top-[10%] xl:right-[5rem] xl:top-[10%] 2xl:right-[-2rem] 2xl:top-[14%]"
    },
    {
        title: "INNOVATIVE",
        desc: "We dive headfirst into new worlds, unafraid to experiment, break patterns, and push the limits of what in-game marketing can be. Every campaign is a bold move forward.",
        leftClass: "left-[-6rem] top-[10%] rotate-[-20deg] xl:left-[6rem] xl:top-[12%] 2xl:left-[-5rem] 2xl:top-[10%]",
        rightClass: "right-[-6rem] top-[10%] xl:right-[3rem] xl:top-[9%] 2xl:right-[-5rem] 2xl:top-[10%]"
    },
    {
        title: "RELENTLESS",
        desc: "We dive headfirst into new worlds, unafraid to experiment, break patterns, and push the limits of what in-game marketing can be. Every campaign is a bold move forward.",
        leftClass: "left-[-7rem] top-[10%] rotate-[-20deg] xl:left-[6rem] xl:top-[12%] 2xl:left-[-6rem] 2xl:top-[10%]",
        rightClass: "right-[-7rem] top-[10%] xl:right-[3rem] xl:top-[9%] 2xl:right-[-6rem] 2xl:top-[10%]"
    },
    {
        title: "OPEN",
        desc: "We dive headfirst into new worlds, unafraid to experiment, break patterns, and push the limits of what in-game marketing can be. Every campaign is a bold move forward.",
        leftClass: "left-[4rem] top-[10%] rotate-[-20deg] xl:left-[12rem] xl:top-[12%] 2xl:left-[5rem] 2xl:top-[14%]",
        rightClass: "right-[4rem] top-[10%] xl:right-[9rem] xl:top-[8%] 2xl:right-[5rem] 2xl:top-[10%]"
    }
];


export default function FearlessProgress() {
    const containerRef = useRef<HTMLDivElement>(null)
    const blocksRef = useRef<(HTMLDivElement | null)[]>([])
    const leftRefs = useRef<(HTMLDivElement | null)[]>([])
    const rightRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Set initial states for all blocks
        blocksRef.current.forEach((block, i) => {
            const left = leftRefs.current[i];
            const right = rightRefs.current[i];
            const title = block?.querySelector(".title");
            const desc = block?.querySelector(".desc");
            const nextBlock = blocksRef.current[i + 1]
            const nextTitle = nextBlock?.querySelector(".title")
            const secondNextBlock = blocksRef.current[i + 2]; 
            const secondNextTitle = secondNextBlock?.querySelector(".title"); 

            if (i === 0) {
                gsap.set([title, desc, left, right], { opacity: 1, y: 10, height: "auto", scale: 1 });
                gsap.set([nextTitle], { y: "40px", scale: 1, });
                gsap.set([secondNextTitle], { y: "20px", scale: 1, });
            } else {
                gsap.set([title], { opacity: 0.1, });
                gsap.set([desc, left, right], { opacity: 0, y: 15, height: 0 });

            }
        });

        // Pin the container
        ScrollTrigger.create({
            trigger: container,
            start: "top 0%",
            end: `bottom center`,
            pin: true,
            scrub: 1.8,
            markers: false,
        });

        blocksRef.current.forEach((block, i) => {
            if (!block) return;

            const left = leftRefs.current[i];
            const right = rightRefs.current[i];
            const title = block.querySelector(".title");
            const desc = block.querySelector(".desc");

            const nextBlock = blocksRef.current[i + 1]
            const nextTitle = nextBlock?.querySelector(".title")
            const secondNextBlock = blocksRef.current[i + 2]; 
            const secondNextTitle = secondNextBlock?.querySelector(".title"); 

            const prevBlock = i > 0 ? blocksRef.current[i - 1] : null;
            const prevLeft = i > 0 ? leftRefs.current[i - 1] : null;
            const prevRight = i > 0 ? rightRefs.current[i - 1] : null;
            const prevDesc = prevBlock?.querySelector(".desc");
            const prevTitle = prevBlock?.querySelector(".title");

            if (i === 0) return;

            ScrollTrigger.create({
                trigger: block,
                start: "top 30%",
                end: "bottom center",
                scrub: 1,
                markers: false,
                onEnter: () => {
                    // Hide previous block completely
                    if (prevBlock) gsap.set([prevDesc, prevLeft, prevRight], { opacity: 0, y: 0 });
                    if (prevTitle) gsap.set(prevTitle, { opacity: 0.1 });

                    // Show current block
                    gsap.set([title, desc, left, right], { opacity: 1, y: 0, height: "auto", scale: 1 });
                    gsap.set([nextTitle], { y: "22px", scale: 1, });
                    gsap.set([secondNextTitle], { y: "22px", scale: 1, });
                },
                onLeaveBack: () => {
                    // Hide current when scrolling back

                    gsap.set([title], { opacity: 0.1, y: 1, height: 0 });
                    gsap.set([desc, left, right], { opacity: 0, y: 10, height: 0 });
                    // Restore previous
                    if (prevTitle) gsap.set(prevTitle, { opacity: 1 });
                    if (prevDesc && prevLeft && prevRight) gsap.set([prevDesc, prevLeft, prevRight], { opacity: 1, y: 0, height: "auto" });
                }
            });
        });
    }, []);



    return (
        <div
            ref={containerRef}
            style={{ borderRadius: "162px 0 0 0" }}
            className="relative w-full h-screen bg-[#091B56] text-white overflow-hidden flex flex-col items-center justify-center -space-y-28 py-16"
        >
            {items.map((item, i) => (
                <div
                    key={i}
                    ref={(el) => { blocksRef.current[i] = el }}
                    className="h-[70vh] flex flex-col items-center justify-center relative px-6"
                >
                    <div
                        ref={(el) => { leftRefs.current[i] = el }}
                        className={`absolute bg-[#BBFC00] text-[#031347] px-4 2xl:px-7 2xl:py-2 py-1 font-bold rounded-[10px] opacity-0 text-[24px] 2xl:text-[32px] font-fks ${item.leftClass}`}
                    >
                        We are
                    </div>

                    <div
                        ref={(el) => { rightRefs.current[i] = el }}
                        className={`absolute w-32 h-32 rounded-full flex items-center justify-center text-white font-bold opacity-0 ${item.rightClass}`}
                    >
                        <Image src="/icons/about-sp.svg" alt="" width={2000} height={2000} className="2xl:w-full 2xl:h-full w-[100px] h-[100px]" />
                    </div>

                    <div className="text-center max-w-3xl flex items-center justify-center flex-col">
                        <h3 className="title text-6xl sm:text-7xl lg:text-[8vw] 2xl:text-[10vw] font-bold font-fks mb-1 opacity-30 tracking-[0.3px] ">
                            {item.title}
                        </h3>
                        <p className="desc text-lg sm:text-xl leading-relaxed opacity-0 max-w-[700px] mx-auto mb-1 font-helvetica">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
