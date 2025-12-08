"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CelebrationSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const topImageRef = useRef<HTMLImageElement>(null);
    const bottomImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const wrapper = wrapperRef.current;
        const section = sectionRef.current;
        const topImg = topImageRef.current;
        const bottomImg = bottomImageRef.current;

        // Guard clause: ensure all refs are attached before proceeding
        if (!wrapper || !section || !topImg || !bottomImg) return;

        const wrapperWidth = wrapper.scrollWidth;
        const containerWidth = section.offsetWidth;

        // Animate text
        gsap.fromTo(
            wrapper,
            { x: containerWidth, rotateY: 20 },
            {
                x: -wrapperWidth,
                rotateY: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${wrapperWidth}`,
                    scrub: true,
                    pin: true,
                }
            }
        );

        // Animate top image rotation
        gsap.fromTo(
            topImg,
            { rotation: 0 },
            {
                rotation: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${wrapperWidth}`,
                    scrub: true,
                }
            }
        );

        // Animate bottom image rotation
        gsap.fromTo(
            bottomImg,
            { rotation: 0 },
            {
                rotation: -360,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${wrapperWidth}`,
                    scrub: true,
                }
            }
        );

    }, []);

    return (
        <div className="bg-[#031347]">
            <section
                ref={sectionRef}
                className="h-screen flex items-center justify-center overflow-hidden relative px-4"
            >
                <div
                    ref={wrapperRef}
                    style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                    }}
                    className="whitespace-nowrap flex flex-col items-center gap-10 relative"
                >
                    {/* 🔼 TOP IMAGE */}
                    <Image
                        ref={topImageRef}
                        src="/icons/OMG.svg"
                        alt="Top Decoration"
                        width={200}
                        height={200}
                        className="pointer-events-none select-none absolute -top-10 left-0 -translate-x-1/2"
                    />

                    {/* 📝 TEXT */}
                    <h1
                        className="text-[90px] md:text-[160px] font-fks font-extrabold uppercase text-white whitespace-nowrap mb-20"
                        style={{ transform: "skewY(-7deg)" }}
                    >
                        CELEBRATING <span className="text-[#BBFC00]">ALL OUR GLOBAL </span> COMMUNITY & PARTNERS WHO MADE <span className="text-[#BBFC00]"> HISTORY</span>  WITH US
                    </h1>

                    {/* 🔽 BOTTOM IMAGE */}
                    <Image
                        ref={bottomImageRef}
                        src="/icons/OMG.svg"
                        alt="Bottom Decoration"
                        width={200}
                        height={200}
                        className="pointer-events-none select-none absolute -bottom-72 left-0 -translate-x-1/2"
                    />
                </div>
            </section>
        </div>
    );
}
