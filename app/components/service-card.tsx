"use client"

import Image from "next/image"

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    borderColor: string
    accentColor: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group h-full">
      <div className="relative flex h-[360px] md:h-[85%] xl:h-[90%] 2xl:h-full flex-col rounded-[10px] md:rounded-[20px] border-2 border-[#273561] bg-white/5 backdrop-blur-[30px] p-3 md:p-6 transition-all duration-300 hover:shadow-2xl overflow-hidden">

        {/* -------------------------------------------------- */}
        {/*                 FIRST SECTION (HEADER)             */}
        {/* -------------------------------------------------- */}
        <div className="relative w-full md:w-full h-[250px] 2xl:h-[450px] flex flex-col items-center rounded-[20px] overflow-hidden">

          {/* Background curve */}
          <Image
            src="/home/curve-border.svg"
            alt="curve-border"
            width={100}
            height={100}
            className="absolute top-0 left-0 w-full h-full object-cover object-top pointer-events-none z-0 rounded-[20px]"
          />

          {/* Dark Box inside Top Section */}
          <div
            className={`absolute inset-x-[3%] 2xl:inset-x-[3.5%] top-[23%] 2xl:top-[24%] w-[94%] 2xl:w-[93%] h-[73%] 2xl:h-[71%] rounded-[20px] bg-linear-to-br from-[#001a33] to-[#0F2347] z-10`}
          />

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

        {/*             SECOND SECTION (CONTENT)               */}
        
        <div className="mt-6 relative z-20">
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

          <p className="text-white text-[13px] xl:text-[15px] 2xl:text-[18px] font-hel">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
}
