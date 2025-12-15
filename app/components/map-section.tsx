import Image from 'next/image';
import React from 'react';

export default function MapSection() {
    const crewMembers = [
        {
            id: 1,
            name: 'PINKY "THE CREATOR"',
            image: '/home/map-man-1.svg',
            position: 'top-[-200px] md:top-[-210px] 2xl:top-[-140px] xl:left-[150px] 2xl:left-[170px]',
            pinPosition: 'bottom-[-30px] left-[100%] -translate-x-1/2'
        },
        {
            id: 2,
            name: 'JUMANJI "THE MOTION"',
            image: '/home/map-man-2.svg',
            position: 'top-[-250px] 2xl:top-[-140px] lg:right-[12%] right-[0%]',
            pinPosition: 'bottom-[-30px] right-[100%]'
        },
        {
            id: 3,
            name: 'FRAMEZ "THE LENSE"',
            image: '/home/map-man-3.svg',
            position: 'bottom-[50px] md:bottom-[300px] xl:bottom-[200px] 2xl:bottom-[210px] lg:left-[1%] xl:left-[15%]',
            pinPosition: 'top-[-20px] left-[105%] -translate-x-1/2'
        },
        {
            id: 4,
            name: 'C-SLACK "THE CULTURE"',
            image: '/home/map-man-4.svg',
            position: 'md:bottom-[45%] lg:bottom-[27%] 2xl:bottom-[200px] right-[1%] lg:right-[12%]',
            pinPosition: 'top-[-20px] right-[100%] -translate-x-1/2'
        }
    ];

    return (
        <div className="relative w-full  bg-[#031347] overflow-hidden pt-16 flex flex-col items-center justify-center gap-80 2xl:gap-60">

            {/* Centered MAP Background  */}
            <div className="absolute md:inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <Image
                    src="/home/desktop-map.svg"
                    alt="center-map"
                    width={1200}
                    height={1200}
                    className="object-contain"
                />
            </div>

            <div className=" text-center">
                <p className="mb-4 text-[16px] md:text-[20px] tracking-[10px] md:tracking-[12px] text-[#FF1586] font-hel">
                    TEAM SPAWN POINT
                </p>
                <h2 className="md:w-full w-[90%] lg:text-[60px] text-[40px] font-fks font-bold uppercase text-white max-w-[770px] mx-auto lg:leading-[65px] leading-[40px] md:leading-[45px] tracking-[2px]">
                    Your Brand’s <span className="text-[#BBFC00]">Gaming Task</span> Force
                </h2>
            </div>


            {/* Crew Cards */}
            <div className="relative 2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto md:h-[95vh] h-[280px]">
                {crewMembers.map((member) => (
                    <div key={member.id} className={`absolute ${member.position}`}>

                        {/* Map Pin */}
                        <div className={`absolute ${member.pinPosition} z-20 md:block hidden`}>
                            <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                                <path d="M12 0C5.37 0 0 5.37 0 12C0 18 12 32 12 32C12 32 24 18 24 12C24 5.37 18.63 0 12 0Z" fill="#BFFF00" />
                                <circle cx="12" cy="12" r="6" fill="#020B2D" />
                            </svg>
                        </div>

                        {/* Card */}
                        <div className="group relative z-30 w-[150px] md:w-72 h-[185px] md:h-[295px] 2xl:w-[350px] 2xl:h-[350px] rounded-[10px] overflow-hidden border border-[#FFFFFF1A] shadow-2xl transition-all duration-300 hover:scale-150 hover:shadow-[0_0_30px_rgba(191,255,0,0.3)] cursor-pointer bg-white/5 backdrop-blur-[30px] p-2 ">

                            {/* REC ICON */}
                            <div className="absolute top-2 right-3 z-30 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#BFFF00] rounded-full animate-pulse"></div>
                                <span className="text-[#BFFF00] text-[10px] md:text-[14px] font-bold">REC</span>
                            </div>

                            {/* Time */}
                            <div className="absolute top-3 right-3 z-30 md:mt-4 mt-1">
                                <span className="text-[#BFFF00] text-[10px] md:text-[14px] ">0:01:12</span>
                            </div>

                            {/* Character Image */}
                            <div className="relative overflow-hidden mt-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={3000}
                                    height={3000}
                                    className="w-full h-full object-contain transform transition-transform duration-500"
                                />

                            </div>

                            {/* Name */}
                            <div className="relative flex  py-3 ">
                                <h3 className="text-white font-bold text-[12px] md:text-[18px] tracking-wide uppercase">
                                    {member.name}
                                </h3>
                            </div>

                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}
