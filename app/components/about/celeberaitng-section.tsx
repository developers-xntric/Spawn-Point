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
          start: "top center",
          end: "bottom center",
          scrub: 3.7,
        },
      });

      tl.fromTo(
        lineRef.current,
        { x: "50%" },
        { x: "-50%", y: "10%", ease: "none" },
        0
      );

      tl.fromTo(
        topImgRef.current,
        { x: "120%", rotation: 0 },
        { x: "-540%", rotation: 360, ease: "none" },
        0
      );

      tl.fromTo(
        bottomImgRef.current,
        { x: "120%", rotation: 0 },
        { x: "-600%", rotation: -360, ease: "none" },
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
          x: "-220%",
          y: "10%",
          ease: "none",
        },
        0
      );

      tl.fromTo(
        topImgRef.current,
        { x: "80%", rotation: 0 },
        { x: "-260%", rotation: 360, ease: "none" },
        0
      );

      tl.fromTo(
        bottomImgRef.current,
        { x: "80%", rotation: -360 },
        { x: "-300%", rotation: 0, ease: "none" },
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
        className="absolute md:top-[20%] top-[25%] z-30 pointer-events-none select-none"
      >
        <Image
          src="/icons/movingline-icon2.svg"
          alt="Top graphic"
          width={240}
          height={240}
          className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] 2xl:w-60 2xl:h-60"
        />
      </div>

      {/* MOVING TEXT LINE */}
      <div
        ref={lineRef}
        className="absolute inset-0 flex items-center whitespace-nowrap z-20"
        style={{ transform: "skewY(-6deg)" }}
      >
        <span className="text-[67px] md:text-[120px]  2xl:text-[160px] font-fks uppercase font-bold text-white px-8 leading-none tracking-[1.7px] hidden md:block">
          Let’s <span className="text-[#BBFC00]">Build</span> What Players Want to Be <span className="text-[#BBFC00]">Part </span> Of
        </span>
        <span className="text-[67px] md:text-[120px] font-fks uppercase font-bold text-white px-8 leading-none tracking-[1.7px] md:hidden block">
          Let’s <span className="text-[#BBFC00]">Build</span> What Players Want to Be <span className="text-[#BBFC00]">Part </span> Of
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
          className="w-[100px] h-[100px] md:w-40 md:h-[220px] 2xl:w-[180px] 2xl:h-[260px]"
        />
      </div>
    </div>
  );
}
