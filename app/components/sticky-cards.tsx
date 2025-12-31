"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    heading: "Audience Capture & Optimization.",
    para: "Creator-led storytelling and immediate audience acquisition, fueled by our AI Ad Engine and in-stream AdTech implementation.",
    title: "Ignition",
  },
  {
    heading: "Asset Development & IP Ownership.",
    title: "Scaling",
    para: "Conceptualization and development of major Esports IP partnerships alongside the build-out of persistent, branded Virtual Worlds.",
  },
  {
    heading: "High-Impact Visibility & Growth.",
    title: "Momentum",
    para: "Strategic Seasonal Gaming Events and hybrid activations, focusing on high-dwell time engagement and expansive partnerships.",
  },
  {
    heading: "Retention & Value Maximization.",
    title: "Sustained Growth",
    para: "Implementation of the Audience Reinforcement Engine and operationalizing commerce/loyalty missions within persistent Virtual Worlds.",
  },
];

export default function AboutSection3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const styleAmpersand = (text: string) => {
    // Replace & with a styled span
    const parts = text.split("&");
    return parts.map((part, i) =>
      i === 0 ? (
        <span key={i}>{part}</span>
      ) : (
        <span key={i}>
          <span className="font-hel">&</span>
          {part}
        </span>
      )
    );
  };

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current) return;

    const isMobile = window.innerWidth < 1024;
    const cardsEls = sectionRef.current.querySelectorAll(".card-item");

    // ✅ MOBILE: NO animation, NO pin
    if (isMobile) {
      cardsEls.forEach((card) => {
        card.classList.add("fade-in"); // make visible immediately
      });
      return;
    }

    // ---------------- DESKTOP ONLY ----------------

    // Fade-in observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsEls.forEach((card) => observer.observe(card));

    // Pin left section (DESKTOP ONLY)
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: leftRef.current,
      pinSpacing: true,
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#091B56]  mt-20  text-white pb-10 lg:pb-40 xl:pt-40 pt-20 relative"
    >
      <div className="2xl:max-w-[1440px] w-[90%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div
            ref={leftRef}
            className="w-[96vw] lg:w-[40%] xl:w-[50%] md:sticky top-0 lg:top-20 z-[20] lg:bg-transparent h-fit"
          >
            <div>
              <p className="mb-4 text-[16px] md:text-[20px] tracking-[10px] md:tracking-[12px] text-[#FF1586] uppercase">
                How We Work
              </p>
              <h2 className="text-[40px] lg:text-[60px] font-bold uppercase text-white leading-[40px] md:leading-[60px] lg:leading-[65px] tracking-[2px] md:tracking-[2px] max-w-[650px] font-fks">
                From <span className="text-[#BBFC00]">Insight </span> to
                Immortality: Our 4-Quarter
                <span className="text-[#BBFC00]"> System</span>
              </h2>
              <p className="text-white text-sm md:text-[16px] xl:text-[20px] font-hel mt-5 w-[95%] md:w-full">
                We implement a proprietary 4-Phase annual framework to ensure
                continuous relevance, maximize audience commitment, and deliver
                measurable Lifetime Lift. We transform short-term activations
                into long-term, compounding value.
              </p>
              <Link href="/brand-experience">
                <button className="px-5 md:px-8 py-3 rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white border border-transparent transition cursor-pointer mt-5 font-hel md:text-base text-[14px]">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[60%] xl:w-[50%] space-y-6 md:space-y-20">
            {cards.map((card, index) => (
              <div
                key={index}
                className="card-item relative md:rounded-[20px] rounded-[15px] bg-white/5 backdrop-blur-[30px] p-3 md:p-5 overflow-hidden border border-[#FFFFFF1A]"
              >
                {/* SVG Background */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-[210px] md:h-full lg:h-68 xl:h-70"
                  viewBox="0 0 713 302"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter
                      id={`drop-${index}`}
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

                  <path
                    d="M486.725 45.9194C490.284 52.1561 496.914 56.0059 504.095 56.0059H689C700.046 56.0059 709 64.9602 709 76.0059V274C709 285.046 700.046 294 689 294H24C12.9543 294 4 285.046 4 274V20C4 8.9543 12.9543 0 24 0H448.904C456.085 0 462.715 3.84976 466.274 10.0865L486.725 45.9194Z"
                    stroke="#BBFC00"
                    strokeWidth="1"
                    fill="transparent"
                    filter={`url(#drop-${index})`}
                  />
                </svg>

                <div className="flex flex-col space-y-2 md:space-y-3 text-white leading-tight absolute md:top-10 top-8 left-8 md:left-10 2xl:top-12 2xl:left-12">
                  <p className="text-[#BBFC00] text-[15px] md:text-[20px] lg:text-[22px] tracking-[1px]">
                    Q{index + 1} {card.title}
                  </p>
                  <h2 className="font-fks text-white text-[25px] md:text-[32px] lg:text-[40px] 2xl:text-[44px] font-bold uppercase leading-[30px] md:leading-[45px] tracking-[2px] md:tracking-[1.5px] lg:w-[70%]">
                    {styleAmpersand(card.heading)}
                  </h2>

                  <p className="text-white text-[13px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] md:tracking-[1px] md:tracking-[0.5px] font-hel w-[90%] xl:w-[90%] 2xl:w-[87%]">
                    {card.para}
                  </p>
                </div>

                <Image
                  src="/home/sticky-card-icon.svg"
                  alt="icons"
                  width={140}
                  height={50}
                  className="absolute xl:top-3 md:top-2 2xl:top-5 top-1 right-4 md:right-12 xl:right-10 2xl:right-12 z-30 w-[70px] md:w-[100px] xl:w-[140px] h-[50px] "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-item {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease-out;
        }

        .card-item.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ✅ MOBILE OVERRIDE */
        @media (max-width: 1023px) {
          .card-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
