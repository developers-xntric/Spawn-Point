"use client";

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useWindowWidth } from "../hooks/usewindowwidth"

export default function Footer() {
    const width = useWindowWidth();
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Branded Experiences", href: "/brand-experience" },
        { label: "Case Studies", href: "/case-studies" },
    ]

    return (
        <footer className="relative w-full bg-[url('/Footer-bg.svg')] bg-cover bg-center overflow-hidden">
            <div className="relative  2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto py-10 md:pt-20">
                <div className="flex md:flex-row flex-col justify-between md:items-start gap-8 mb-6 md:mb-10">
                    {/* Left Side - Main Heading */}
                    <div className="flex-1 max-w-md">
                        <h2 className="font-fks font-bold text-white text-[40px] md:text-[60px] xl:text-[95px] leading-[50px] md:leading-[60px] xl:leading-[95px] uppercase max-w-[400px]">
                            Engineering The New Age Of Brand Play
                        </h2>
                    </div>

                    {/* Right Side - Column with BUILD WITH US, Logos, Nav, Social */}
                    <div className="flex flex-col items-start gap-10  ">
                        {/* BUILD WITH US */}
                        {/* <h2 className="text-lime-400 text-xl font-bold font-fks tracking-wider md:block hidden">BUILD WITH US</h2> */}

                        {/* Game Logos */}
                        <div className="flex items-center gap-4 lg:gap-12">
                            <Image src="/Roblox.svg" alt="Roblox" width={198} height={87} className="w-[100px] h-[50px] lg:w-auto lg:h-auto" priority />
                            <Image src="/Fortnite.svg" alt="Fortnite" width={198} height={87} className="w-[100px]  h-[50px] lg:w-auto lg:h-auto" priority />
                            <Image src="/Minecraft.svg" alt="Minecraft" width={198} height={87} className="w-[100px] h-[50px] lg:w-auto lg:h-auto" priority />
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col md:flex-row md:flex-wrap justify-between md:items-center w-full gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white no-underline text-[14px] md:text-[17px] hover:text-lime-400 transition-colors border-b md:border-b-0 md:pb-0 pb-2 flex justify-between items-center"
                                >
                                    {link.label}
                                    <div className="md:hidden block">
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Footer */}

                {width > 500 && <div className="w-full border-t border-white/20"></div>}

                {/* Spawnpoint Logo - Bottom Center */}
                <div className="hidden md:flex justify-center items-center pt-8">
                    <Image src="/Spawnpoint_name.svg" alt="Spawnpoint" width={120} height={80} className="w-[620px] h-5 md:w-auto md:h-auto" />
                </div>
                <div className="flex justify-center items-center md:hidden">
                    <Image src="/spawnpoint-mob.svg" alt="Spawnpoint" width={120} height={80} className="w-[520px] h-auto md:w-auto md:h-auto" />
                </div>

                <p className="text-white text-[12px] md:text-[13px] text-center mt-5 md:mt-10 uppercase">©  ALL RIGHTS RESERVED, spawnpointstudiO {new Date().getFullYear()}.</p>
            </div>

        </footer>
    )
}