"use client";
import { useEffect, useRef } from "react";
import { useWindowWidth } from "../hooks/usewindowwidth";
import Link from "next/link";
import Image from "next/image";

// Card data
const cards = [
  {
    heading: "Set goals",
    para: "Who do you want your message delivered to, and what’s your ideal result? Together, we’ll set goals and create a game plan to boost brand awareness, increase sales, or launch products. Whatever your target, we’ll hit it.",
  },
  {
    heading: "Build the strategy ",
    para: "Once your goal is clear, we get planning! From concept to creative, we craft custom in-game advertising campaigns that match your audience’s vibe and gameplay environment. ",
  },
  {
    heading: "Activate the campaign ",
    para: "We’ll ensure your ads are artfully incorporated into the game, keeping the experience fun, engaging, and, most crucially,",
  },
  {
    heading: "Amplify what works ",
    para: "We'll look at how your in-game ads performed, and point out key insights and lessons learnedall while staying focused on even bigger wins ahead!",
  },
];

export default function StickyCards() {
  const sectionRef = useRef(null);
  const width = useWindowWidth();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const sliderItems = document.querySelectorAll(".slider");
    sliderItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#091B56] mt-20 text-white pb-4 lg:pb-40 xl:pt-16 pt-10 relative"
    >
      <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT SECTION */}
          <div className="w-[96vw] lg:w-[40%] xl:w-[50%] sticky top-0 lg:top-[35%] z-20 lg:bg-transparent h-fit">
            <p className="mb-4 text-[20px] tracking-[12px] text-[#FF1586] font-hel">
              EXECUTION STEPS
            </p>
            {width > 1024 ? (
              <h2 className="text-[60px] font-fks font-bold uppercase text-white leading-[65px] tracking-[2px]  max-w-[550px]">
                How our <span className="text-[#BBFC00]">in-game </span>{" "}
                advertising process{" "}
                <span className="text-[#BBFC00]"> works</span>
              </h2>
            ) : (
              <h2 className="text-[60px] font-fks font-bold uppercase text-white leading-[65px] tracking-[2px] ">
                How our <span className="text-[#BBFC00]">in-game </span>{" "}
                advertising process{" "}
                <span className="text-[#BBFC00]"> works</span>
              </h2>
            )}
            <p className="text-white text-sm md:text-[20px] font-hel mt-5 ">
              From casual mobile players or competitive console gamers, no
              matter who you intend to reach, we’ll see your campaign through
              from start to finish. Our team will ensure it’s optimized for
              success along the way and provide frequent updates.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white border-2 transition cursor-pointer mt-5 font-hel">
                Lets Connect
              </button>
            </Link>
          </div>

          {/* RIGHT SECTION — CARDS NOW SHOWING */}
          <div className="w-full lg:w-[60%] xl:w-[50%] space-y-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="slider opacity-0 transition-all duration-700 translate-y-12
    relative rounded-[20px] bg-white/5 backdrop-blur-[30px] p-5 overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  viewBox="0 0 713 302"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter
                      id="drop"
                      x="0"
                      y="0"
                      width="713"
                      height="302"
                      filterUnits="userSpaceOnUse"
                    >
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

                  {/* MAIN OUTLINE */}
                  <path
                    d="M486.725 45.9194C490.284 52.1561 496.914 56.0059 504.095 56.0059H689C700.046 56.0059 709 64.9602 709 76.0059V274C709 285.046 700.046 294 689 294H24C12.9543 294 4 285.046 4 274V20C4 8.9543 12.9543 0 24 0H448.904C456.085 0 462.715 3.84976 466.274 10.0865L486.725 45.9194Z"
                    stroke="#BBFC00"
                    strokeWidth="2"
                    fill="transparent"
                    filter="url(#drop)"
                  />

                  {/* MAKE CARD CONTENT FIT INSIDE SVG */}
                  <foreignObject x="40" y="40" width="640" height="230">
                    <div className="flex flex-col space-y-3 text-white leading-tight">
                      <p className="text-[#BBFC00] text-[16px] md:text-[20px] lg:text-[22px]">
                        TIER {index + 1}
                      </p>

                      <h3
                        dangerouslySetInnerHTML={{ __html: card.heading }}
                        className="text-white text-[20px] md:text-[32px] lg:text-[28px] xl:text-[40px] 
          font-bold uppercase font-fks tracking-wide"
                      />

                      <p className="text-white text-sm md:text-[18px] font-hel">
                        {card.para}
                      </p>
                    </div>
                  </foreignObject>
                </svg>

                {/* TOP RIGHT ICON */}
                <Image
                  src="/home/gif-icons.svg"
                  alt="icons"
                  width={140}
                  height={50}
                  className="absolute top-5 right-12 z-30"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
