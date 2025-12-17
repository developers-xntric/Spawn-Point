"use client"

import Image from "next/image"

export default function GamingHero() {
  return (
    <section className=" text-white overflow-hidden">
      <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto pt-6 md:pt-20 pb-12">
<div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center xl:gap-0 gap-5">


          {/* Left side - Image + glass background */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">

              {/* Background behind ONLY the girl image */}
              <div className="absolute top-8 lg:top-12 left-0 w-full xl:h-[540px] rounded-xl overflow-hidden ">
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
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white leading-[65px] text-balance text-left">
                WHO <span className="text-[#BBFC00]">WE ARE </span>
              </h2>
              <p className="text-xl font-bold text-gray-300 uppercase tracking-wider font-fks">
                SpawnPoint started with one belief
              </p>
            </div>

            <div className="space-y-4 text-gray-200 leading-relaxed text-sm xl:text-base">
              <p>
                Brands shouldn’t talk at players they should build with them. We are a collective of creators, designers, strategists, developers, and culture experts who understand the rhythm of gaming communities. Our experience spans across Roblox, Fortnite, esports, streaming, virtual production, and brand experience design.
              </p>
              <p>

                We help brands enter gaming worlds with respect, creativity, and innovation creating experiences that feel native rather than intrusive
              </p>
              <p>
                Whether it’s a custom Roblox world, a creator-led storytelling campaign, or dynamic in-stream ad placements, we craft experiences that players actually want to engage with. For us, gaming isn’t a channel it’s a culture.
              </p>
            </div>

            <div className=" pt-0 md:pt-4">
              <button className=" bg-[#BBFC00] text-[#031347] font-bold text-ms px-4 md:px-8 py-2.5 rounded-[5px] hover:bg-[#a8e600] transition-colors">
                Lets Connect
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
