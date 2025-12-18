"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

export default function HOMEGSP() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const images = gsap.utils.toArray(".floating-img");
    const overlayImages = gsap.utils.toArray(".floating-img-overlay");
    const overlayRotation = [20, -28, 25, -10];

    const mm = gsap.matchMedia();

    mm.add(
      {
        // Mobile
        isMobile: "(max-width: 767px)",

        // Tablet (md)
        isTablet: "(min-width: 768px) and (max-width: 1023px)",

        // Desktop
        isDesktop: "(min-width: 1024px)",
      },
      (context) => {
        const { isMobile, isTablet, isDesktop } = context.conditions!;

        // Set start/end positions
        let start = "top top";
        let end = "+=100%";
        let pinSection = false; // Only pin on desktop

        if (isMobile) {
          start = "155% 1%";
          end = "+=0%";
        }

        if (isTablet) {
          start = "top top";
          end = "+=85%";
        }

        if (isDesktop) {
          start = "top top";
          end = "+=50%";
          pinSection = true; // Pin desktop
        }

        // MAIN FLOATING IMAGES
        gsap.to(images, {
          y: 200,
          rotate: 8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start,
            end,
            scrub: 2.7,
            pin: pinSection,
            pinSpacing: pinSection,
            markers: true,
          },
        });

        // OVERLAY IMAGES
        overlayImages.forEach((img, i) => {
          gsap.to(img as Element, {
            y: 200,
            rotate: overlayRotation[i],
            ease: "power1.out",
            scrollTrigger: {
              trigger: section,
              start,
              end,
              scrub: 2.7,
            },
          });
        });
      }
    );

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white/5 h-[700px] md:h-full md:min-h-screen relative overflow-hidden pb-20 md:pt-20 pt-0 px-4 rounded-[38px_0_0_0] md:rounded-[162px_0_0_0]"
    >
      {/* Floating Images */}
      <div className="absolute -top-10 md:left-10 xl:left-10 -left-4 w-30 md:w-60 2xl:w-64 z-10 floating-img">
        <Image
          width={2000}
          height={2000}
          src="/home/hg1.png"
          alt="hg1"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute -top-4 2xl:-top-6 -right-2 2xl:right-10 w-30 md:w-60 2xl:w-80 z-10 floating-img">
        <Image
          width={2000}
          height={2000}
          src="/home/hg8.png"
          alt="hg2"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-44 md:bottom-20 xl:bottom-44 2xl:bottom-52 -left-6 md:left-2 xl:left-10 w-36 md:w-64 lg:w-80 2xl:w-90 z-10 floating-img">
        <Image
          width={2000}
          height={2000}
          src="/home/hg3.png"
          alt="hg3"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-28 md:bottom-10 2xl:bottom-32 -right-10 xl:right-16 w-40 md:w-64 lg:w-80 2xl:w-90 z-10 floating-img rounded-[20px]">
        <Image
          width={2000}
          height={2000}
          src="/home/hg6.png"
          alt="hg4"
          className="w-full h-auto"
        />
      </div>

      {/* Overlay Images */}
      <div className="absolute -top-4 md:-top-8 left-4 md:left-20 xl:left-20 w-16 md:w-44 xl:w-48 z-20 floating-img-overlay">
        <Image
          width={2000}
          height={2000}
          src="/icons/hg1-overlay.svg"
          alt="hg1-overlay"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute -top-4 xl:top-10 2xl:top-10 right-2 md:right-10 2xl:right-20 w-20 md:w-44 2xl:w-48 z-20 floating-img-overlay">
        <Image
          width={2000}
          height={2000}
          src="/icons/hg3-overlay.svg"
          alt="hg2-overlay"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-48 md:bottom-48 2xl:bottom-72 -left-2 md:left-28 w-28 md:w-48 lg:w-60 z-20 floating-img-overlay">
        <Image
          width={2000}
          height={2000}
          src="/icons/hg2-overlay.svg"
          alt="hg3-overlay"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-32 2xl:bottom-56 -right-1 xl:right-24 w-28 md:w-48 lg:w-60 z-20 floating-img-overlay">
        <Image
          width={2000}
          height={2000}
          src="/icons/hg4-overlay.svg"
          alt="hg4-overlay"
          className="w-full h-auto"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-30 max-w-[1100px] mx-auto text-center flex flex-col items-center justify-center h-screen">
        <p className="text-[#FF1586] text-[16px] md:text-base tracking-[0.3em] md:tracking-[0.4em] uppercase mb-8 font-medium">
          Spawn Point Studio
        </p>

        <h2 className="text-[37px] lg:text-[60px] font-fks font-black uppercase leading-10 md:leading-[65px] mb-10 md:px-10 tracking-[1.5px] md:tracking-wide">
          <span className="text-[#BBFC00]">Spawn Point Crafts</span>{" "}
          <span className="text-white">
            Brand Playbooks, Live-Stream Experiences, and
          </span>{" "}
          <span className="text-[#BBFC00]">AI-Driven</span>{" "}
          <span className="text-white">
            Audience Pipelines That Turn Games Into Measurable
          </span>{" "}
          <span className="text-[#BBFC00]">Business Channels</span>{" "}
          <span className="text-white">Across</span>{" "}
          <span className="text-[#BBFC00]">MENA</span>{" "}
          <span className="text-white">and Beyond</span>
        </h2>
        
        <Link href="/contact">
          <button className="md:flex hidden bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white">
            Book a Strategy Sprint
          </button>
        </Link>
      </div>
    </section>
  );
}
