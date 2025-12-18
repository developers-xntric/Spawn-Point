"use client"

import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    borderColor: string
    accentColor: string
    image: string
    serviceurl: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group h-full">
      <div className="relative flex h-[379px] md:h-[88%] lg:h-[85%] xl:h-[100%] 2xl:h-full flex-col rounded-[10px] md:rounded-[20px] border-2 border-[#273561] bg-white/5 backdrop-blur-[30px] p-3 md:p-5 transition-all duration-300 hover:shadow-2xl overflow-hidden">

        {/* -------------------------------------------------- */}
        {/*                 FIRST SECTION (HEADER)             */}
        {/* -------------------------------------------------- */}
        <div className="relative w-full md:w-full h-[290px] md:h-full lg:h-[290px] 2xl:h-[450px] flex flex-col items-center rounded-[20px] overflow-hidden">

          {/* Background curve */}
          <Image
            src={service.image}
            alt="curve-border"
            width={100}
            height={100}
            className="absolute top-0 left-0 w-full  2xl:h-full object-cover object-top pointer-events-none z-0 rounded-[20px]"
          />

          {/* <Image
            src={service.image}
            alt="service-image"
            width={2000}
            height={2000}
            className={`absolute 2xl:w-[500px] 2xl:h-[230px] w-[500px] h-[180px]  top-[20%] 2xl:top-[22%]   z-10`}
          /> */}

          {/* Icons (absolute top-right) */}
          <div className="absolute top-1 xl:top-2 xl:right-2 md:right-0 2xl:right-6 right-0 z-20">
            <Image
              src="/home/gif-icons.svg"
              alt="icons"
              width={150}
              height={20}
              className="w-20 xl:w-[120px] 2xl:w-[150px]"
            />
          </div>
        </div>

        {/*    SECOND SECTION (CONTENT)    */}

        <div className="mt-6  relative z-20">
          <h3 className="mb-2 text-[20px] md:text-[34px] 2xl:text-[40px] font-fks font-bold uppercase text-white leading-5 md:leading-[42px] tracking-[2px]">
            {service.title.split("&").map((part, index, arr) => (
              <span key={index}>
                <span>{part.trim()}</span>

                {index < arr.length - 1 && (
                  <span className="mx-1 font-hel italic ">
                    &
                  </span>
                )}
              </span>
            ))}
          </h3>

          <p className="text-white text-[13px] xl:text-[15px] 2xl:text-[18px] font-hel mb-4 line-clamp-2">
            {service.description}
          </p>
          <div className="md:mb-2 w-full">
            <Link href={service.serviceurl} className="block hover:bg-[#BBFC00] hover:border-[#BBFC00] hover:text-[#031347] text-white text-[13px] md:text-base w-full font-hel font-bold  mt-4 bg-transparent border border-white px-4 py-2 lg:py-3 rounded-[5px] text-center">Let's Connect</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
