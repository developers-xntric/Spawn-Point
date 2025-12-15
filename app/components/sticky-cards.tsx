"use client";
import { useEffect, useRef } from "react";
import { useWindowWidth } from "../hooks/usewindowwidth";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { title } from "process";

gsap.registerPlugin(ScrollTrigger);

// Card data
const cards = [
  {
    heading: "Set goals",
    para: "Creator-led storytelling and immediate audience acquisition, fueled by our AI Ad Engine and in-stream AdTech implementation.",
    title:"Ignition"
  },
  {
    heading: "Build the strategy",
    title:"Scaling",
    para: "Conceptualization and development of major Esports IP partnerships alongside the build-out of persistent, branded Virtual Worlds.",
  },
  {
    heading: "Activate the campaign",
    title:"Momentum",
    para: "Strategic Seasonal Gaming Events 7and hybrid activations, focusing on high-dwell time engagement and expansive partnerships.",
  },
  {
    heading: "Amplify what works",
    title:"Sustained Growth",
    para: "Implementation of the Audience Reinforcement Engine and operationalizing commerce/loyalty missions within persistent Virtual Worlds.",
  },
];

export default function StickyCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const width = useWindowWidth();
  const isDesktop = width > 1024;

  useEffect(() => {
    if (!sectionRef.current) return;

    const left = sectionRef.current.querySelector(".left") as HTMLElement;
    const right = sectionRef.current.querySelector(".right") as HTMLElement;
    const cardElements = right?.children;

    if (!left || !right || !cardElements) return;

    // Fade-in animation for cards
    gsap.fromTo(
      cardElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 22%",
          end: "bottom bottom",
          scrub: 1,
          pin: isDesktop ? left : false,  //  pinning Disabled for mobile 
          markers: false,
          pinSpacing: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#091B56] mt-10 md:mt-20 text-white pb-4 lg:pb-40 xl:pt-16 pt-10 relative"
    >
      <div className="2xl:max-w-[1440px] w-[90%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT SECTION */}
          <div className="left w-[96vw] lg:w-[40%] xl:w-[50%] z-20 lg:bg-transparent h-fit">
            <p className="mb-4 text-[16px] md:text-[20px] tracking-[10px] md:tracking-[12px] text-[#FF1586] font-hel uppercase">
              How We Work
            </p>
            {width > 1024 ? (
              <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white leading-[65px] tracking-[2px] max-w-[650px]">
                From <span className="text-[#BBFC00]">Insight </span> to Immortality: Our 4-Quarter
                <span className="text-[#BBFC00]"> System</span>
              </h2>
            ) : (
              <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white leading-[40px] md:leading-[60px] tracking-[2px]">
                From <span className="text-[#BBFC00]">Insight </span> to Immortality: Our 4-Quarter
                <span className="text-[#BBFC00]"> System</span>
              </h2>
            )}
            <p className="text-white text-sm md:text-[16px] xl:text-[20px] font-hel mt-5">
              We implement a proprietary 4-Phase annual framework to ensure continuous relevance,
              maximize audience commitment, and deliver measurable Lifetime Lift. We transform
              short-term activations into long-term, compounding value.
            </p>
            <Link href="/contact">
              <button className="px-5 md:px-8 py-3 rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white border-2 transition cursor-pointer mt-5 font-hel md:text-base text-[14px]">
                Explore Services
              </button>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="right w-full lg:w-[60%] xl:w-[50%] md:space-y-8 space-y-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="slider relative md:rounded-[20px] rounded-[10px] bg-white/5 backdrop-blur-[30px] p-3 md:p-5 overflow-hidden border border-[#FFFFFF1A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-32 md:h-full"
                  viewBox="0 0 713 302"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter id="drop" x="0" y="0" width="713" height="302" filterUnits="userSpaceOnUse">
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
                    filter="url(#drop)"
                  />

                  <foreignObject x="30" y="30" width="640" height="230">
                    <div className="flex flex-col space-y-3 text-white leading-tight">
                      <p className="text-[#BBFC00] text-[32px] md:text-[20px] lg:text-[22px] tracking-[1px]">Q{index + 1} {card.title}</p>
                      <h3
                        dangerouslySetInnerHTML={{ __html: card.heading }}
                        className="text-white text-[50px] md:text-[32px] lg:text-[40px] xl:text-[40px] font-bold uppercase font-fks tracking-[2px] md:tracking-[1.5px]"
                      />
                      <p className="text-white text-[25px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-hel tracking-[1px]">{card.para}</p>
                    </div>
                  </foreignObject>
                </svg>

                <Image
                  src="/home/gif-icons.svg"
                  alt="icons"
                  width={140}
                  height={50}
                  className="absolute xl:top-5 md:top-2 -top-1 right-4 md:right-12 z-30 w-[70px] md:w-[100px] xl:w-[140px] h-[50px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
