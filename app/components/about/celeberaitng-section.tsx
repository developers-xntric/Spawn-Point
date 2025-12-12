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

    // PIN SECTION
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: 1.7,
      markers:false,
    });

    // TEXT MOVEMENT + IMAGES MOVING WITH TEXT
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 3.7,

      },
    });

    // Move text left
    timeline.fromTo(
      lineRef.current,
      { x: "70%" },
      { x: "-190%",
        y: "40%",
        duration: 0.7,
        ease: "none" },
      0
    );

    // Move top image along with text
    timeline.fromTo(
      topImgRef.current,
      { x: "140%" },
      { x: "-540%", ease: "none" },
      0
    );

    // Move bottom image along with text
    timeline.fromTo(
      bottomImgRef.current,
      { x: "140%" },
      { x: "-600%", ease: "none" },
      0
    );

    // Image rotations
    gsap.fromTo(
      topImgRef.current,
      { rotate: -25 },
      {
        rotate: 55,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      bottomImgRef.current,
      { rotate: 25 },
      {
        rotate: -55,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* TOP IMAGE — NOW INSIDE THE TEXT */}
      <div
        ref={topImgRef}
        className="absolute top-[20%] z-30 pointer-events-none select-none"
      >
        <Image
          src="/icons/movingline-icon2.svg"
          alt="Top graphic"
          width={240}
          height={240}
        />
      </div>

      {/* MOVING TEXT LINE */}
      <div
        ref={lineRef}
        className="absolute inset-0 flex items-center whitespace-nowrap z-20"
        style={{ transform: "skewY(-6deg)" }}
      >
        <span className="text-[120px] font-fks uppercase font-bold text-white px-8 leading-none tracking-[1.7px]">
          Turning imagination into interactive worlds that bring your brand closer to the next generation
        </span>
      </div>

      {/* BOTTOM IMAGE — NOW INSIDE THE TEXT */}
      <div
        ref={bottomImgRef}
        className="absolute bottom-[1%] z-30 pointer-events-none select-none"
      >
        <Image
          src="/icons/movingline-icon.svg"
          alt="Bottom graphic"
          width={180}
          height={260}
        />
      </div>
    </div>
  );
}
