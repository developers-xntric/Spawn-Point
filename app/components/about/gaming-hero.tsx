"use client"

import Image from "next/image"
import Link from "next/link"
export default function GamingHero() {
  return (
    <section className=" text-white overflow-hidden">
      <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto pt-6 md:pt-20 pb-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center xl:gap-0 gap-5">
          {/* Left side - Image + glass background */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg 2xl:max-w-[620px]">

              {/* Background behind ONLY the girl image */}
              <div className="absolute top-8 lg:top-12 left-0 w-full xl:h-[540px] 2xl:h-[670px] rounded-xl overflow-hidden ">
                <Image
                  alt="gaming-bg"
                  width={1200}
                  height={1200}
                  src="/about/gaming-bg.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
              </div>

              {/* Foreground girl image */}
              <Image
                width={1200}
                height={1200}
                src="/about/gaming-girl.png"
                alt="Gaming character"
                className="relative z-50 w-full h-auto rounded-xl object-cover pl-4 pr-4"
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="flex flex-col gap-8 2xl:gap-12">
            <div>
              <h2 className="text-[40px] lg:text-[60px] 2xl:text-[70px] font-fks font-bold uppercase text-white leading-[65px] text-balance text-left">
                WHO <span className="text-[#BBFC00]">WE ARE </span>
              </h2>
              <p className="text-xl 2xl:text-2xl font-bold text-gray-300 uppercase tracking-wider font-fks 2xl:mt-4">
                Creators, Technologists, and Cultural Strategists
              </p>
            </div>

            <div className="space-y-4 2xl:space-y-5 text-gray-200 leading-relaxed text-sm xl:text-base 2xl:text-[19px] 2xl:leading-[25px]">
              <p>
                SpawnPoint is a collective of strategists, technologists, creators, and gaming natives who understand how digital culture actually moves. We don’t treat gaming as a channel; it’s our operating system.
              </p>
              <p>
                Our teams work across AI, data, creator ecosystems, esports, and virtual production to build experiences that feel native to players and measurable for brands. Rooted in MENA and connected globally, we bring cultural fluency, platform intelligence, and executional depth to every activation.
              </p>
              <p>
                Simply put, we speak gamer, and we translate it into business results.
              </p>
            </div>

            <div className=" pt-0 md:pt-4">
              <Link href="/contact">
                <button className=" bg-[#BBFC00] text-[#031347] font-bold text-ms px-4 md:px-8 py-2.5 rounded-[5px] hover:border hover:bg-transparent hover:border-white hover:text-white  transition-colors">
                 Get in Touch
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
