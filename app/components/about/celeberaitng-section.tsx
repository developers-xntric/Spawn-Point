"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function CelebrationSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const topImgRef = useRef(null);
  const bottomImgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // PIN (same for all)


    /* =======================
       DESKTOP (md and up)
    ======================= */
    mm.add("(min-width: 768px)", () => {
      // PIN — DESKTOP
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 1.7,
        markers: false,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 3.7,
        },
      });

      tl.fromTo(
        lineRef.current,
        { x: "70%" },
        { x: "-190%", y: "40%", ease: "none" },
        0
      );

      tl.fromTo(
        topImgRef.current,
        { x: "140%" },
        { x: "-540%", ease: "none" },
        0
      );

      tl.fromTo(
        bottomImgRef.current,
        { x: "140%" },
        { x: "-600%", ease: "none" },
        0
      );
    });

    /* =======================
       MOBILE
    ======================= */
    mm.add("(max-width: 767px)", () => {
      // PIN — MOBILE (shorter)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=80%",   // 🔽 smaller pin duration
        pin: true,
        scrub: 1.2,
        markers: false,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
          end: "bottom top",
          markers: false,
          scrub: 2,
        },
      });

      tl.fromTo(
        lineRef.current,
        { x: "40%" },
        {
          x: "-230%",     
          y: "10%",      
          ease: "none",
        },
        0
      );

      tl.fromTo(
        topImgRef.current,
        { x: "80%" },
        { x: "-260%", ease: "none" },
        0
      );

      tl.fromTo(
        bottomImgRef.current,
        { x: "80%" },
        { x: "-300%", ease: "none" },
        0
      );
    });

    return () => mm.revert();
  }, []);


  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* TOP IMAGE — NOW INSIDE THE TEXT */}
      <div
        ref={topImgRef}
        className="absolute md:top-[20%] top-[30%] z-30 pointer-events-none select-none"
      >
        <Image
          src="/icons/movingline-icon2.svg"
          alt="Top graphic"
          width={240}
          height={240}
          className="w-[120px] h-[120px] md:w-[240px] md:h-[240px]"
        />
      </div>

      {/* MOVING TEXT LINE */}
      <div
        ref={lineRef}
        className="absolute inset-0 flex items-center whitespace-nowrap z-20"
        style={{ transform: "skewY(-6deg)" }}
      >
        <span className="text-[67px] md:text-[120px] font-fks uppercase font-bold text-white px-8 leading-none tracking-[1.7px] hidden md:block">
          Turning imagination into interactive worlds that bring your brand closer to the next generation
        </span>
        <span className="text-[67px] md:text-[120px] font-fks uppercase font-bold text-white px-8 leading-none tracking-[1.7px] md:hidden block">
          Turning imagination into interactive world
        </span>
      </div>

      {/* BOTTOM IMAGE — NOW INSIDE THE TEXT */}
      <div
        ref={bottomImgRef}
        className="absolute md:bottom-[1%] bottom-[20%] z-30 pointer-events-none select-none"
      >
        <Image
          src="/icons/movingline-icon.svg"
          alt="Bottom graphic"
          width={180}
          height={260}
          className="w-[100px] h-[100px] md:w-[180px] md:h-[260px]"
        />
      </div>
    </div>
  );
}
