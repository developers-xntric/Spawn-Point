"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function HOMEGSP() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;

        const images = gsap.utils.toArray(".floating-img");
        const overlayImages = gsap.utils.toArray(".floating-img-overlay");
        const overlayRotation = [20, -28, 25, -10];
        gsap.to(images, {
            y: 200,
            rotate: 8,
            ease: "power1.out",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "top+=400",
                scrub: 2.7,
                pin: true,
                markers: false,
                pinSpacing: true,
            },
        });

        // OVERLAY IMAGES – EACH WITH CUSTOM ROTATION
        overlayImages.forEach((img, i) => {
            gsap.to(img as Element, {
                y: 200,
                rotate: overlayRotation[i],
                ease: "power1.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "top+=400",
                    scrub: 2.7,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white/5 min-h-screen relative overflow-hidden py-20 px-4"
            style={{ borderRadius: "162px 0 0 0" }}
        >
            {/* Original Floating Images */}
            <div className="absolute -top-10 left-22 w-48 md:w-60 lg:w-64 z-10 floating-img">
                <Image width={2000} height={2000} src="/home/hg1.png" alt="hg1" className="w-full h-auto" />
            </div>

            <div className="absolute top-5 right-10 w-48 md:w-60 lg:w-80 z-10 floating-img">
                <Image width={2000} height={2000} src="/home/hg8.png" alt="hg2" className="w-full h-auto" />
            </div>

            <div className="absolute bottom-52 left-16 w-52 md:w-64 lg:w-90 z-10 floating-img">
                <Image width={2000} height={2000} src="/home/hg3.png" alt="hg3" className="w-full h-auto" />
            </div>

            <div className="absolute bottom-56 right-16 w-52 md:w-64 lg:w-90 z-10 floating-img rounded-[20px]">
                <Image width={2000} height={2000} src="/home/hg6.png" alt="hg4" className="w-full h-auto" />
            </div>

            {/* Overlay Images */}
            <div className="absolute -top-8 left-28 w-32 md:w-44 lg:w-48 z-20 floating-img-overlay">
                <Image width={2000} height={2000} src="/icons/hg1-overlay.svg" alt="hg1-overlay" className="w-full h-auto" />
            </div>

            <div className="absolute top-20 right-20 w-32 md:w-44 lg:w-48 z-20 floating-img-overlay">
                <Image width={2000} height={2000} src="/icons/hg3-overlay.svg" alt="hg2-overlay" className="w-full h-auto" />
            </div>

            <div className="absolute bottom-72 left-28 w-36 md:w-48 lg:w-60 z-20 floating-img-overlay">
                <Image width={2000} height={2000} src="/icons/hg2-overlay.svg" alt="hg3-overlay" className="w-full h-auto" />
            </div>

            <div className="absolute bottom-56 right-24 w-36 md:w-48 lg:w-60 z-20 floating-img-overlay">
                <Image width={2000} height={2000} src="/icons/hg4-overlay.svg" alt="hg4-overlay" className="w-full h-auto" />
            </div>

            {/* Center Content perfectly centered */}
            <div className="relative z-30 max-w-[1100px] mx-auto text-center flex flex-col items-center justify-center h-screen">
                <p className="text-[#FF1586] text-sm md:text-base tracking-[0.4em] uppercase mb-8 font-medium">
                    Spawn Point Studio
                </p>

                <h2 className="text-2xl md:text-4xl lg:text-[60px] font-fks font-black uppercase leading-tighter mb-10 px-10 tracking-wide">
                    <span className="text-[#BBFC00]">Spawn Point Crafts</span>{" "}
                    <span className="text-white">Brand Playbooks, Live-Stream Experiences, and</span>{" "}
                    <span className="text-[#BBFC00]">AI-Driven</span>{" "}
                    <span className="text-white">Audience Pipelines That Turn Games Into Measurable</span>{" "}
                    <span className="text-[#BBFC00]">Business Channels</span>{" "}
                    <span className="text-white">Across</span>{" "}
                    <span className="text-[#BBFC00]">MENA</span>{" "}
                    <span className="text-white">and Beyond</span>
                </h2>

                <button className="bg-[#BBFC00] text-[#031347] font-semibold px-8 py-3 rounded-md hover:bg-[#a8e600] transition-colors text-sm md:text-base">
                    Book a Strategy Sprint
                </button>
            </div>
        </section>
    );
}
