"use client"

import Image from "next/image"
import { useState } from "react"

export default function NewsletterSection() {
    const [email, setEmail] = useState("")
    const [agreed, setAgreed] = useState(false)

    // Create array for marquee items
    const marqueeItems = Array(8).fill(null)

    return (
        <section className="bg-[#031347] pt-8 pb-20 overflow-hidden">
            {/* Infinite Scrolling Marquee */}
            <div className="relative mb-8 overflow-hidden">
                <div className="flex animate-marquee-newsletter">
                    {marqueeItems.map((_, index) => (
                        <div key={index} className="flex items-center shrink-0 mx-3">
                            {/* SP Logo */}
                            <div className="relative w-20 h-20 mr-2">
                                <Image src={"/spn.png"} alt="" width={400} height={400} />
                            </div>
                            <span className="text-[#FFF] text-3xl md:text-7xl font-bold tracking-wider whitespace-nowrap font-fks">
                                NEWSLETTER
                            </span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {marqueeItems.map((_, index) => (
                        <div key={`dup-${index}`} className="flex items-center shrink-0 mx-4">
                            <div className="relative w-12 h-12 mr-2">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M8 8L40 8L32 24L40 40H8L16 24L8 8Z" fill="#BBFC00" />
                                    <text x="18" y="28" fontSize="14" fontWeight="bold" fill="#031347">
                                        SP
                                    </text>
                                </svg>
                            </div>
                            <span className="text-[#BBFC00] text-3xl md:text-4xl font-bold tracking-wider whitespace-nowrap">
                                NEWSLETTER
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-5xl mx-auto mt-20  text-center">
                {/* Character Image */}
                <div className="relative w-full max-w-5xl mx-auto -mt-4 mb-0">
                    <Image src="/nl.png" alt="Game Characters" width={1000} height={1000} className="w-full h-auto object-cover relative z-0 mr-20  right-8" />
                </div>

                {/* Email Form - Overlapping the image */}
                <div className="relative z-20 -mt-16 md:-mt-32 mb-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-0 max-w-lg mx-auto relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full sm:flex-1 bg-white/10 border border-white rounded-l-full sm:rounded-[10px] rounded-full px-6 py-4 text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                            style={{
                                backdropFilter: "blur(17px)"
                            }}
                        />
                        <button className="absolute right-1 w-full sm:w-auto bg-white text-[#031347] font-hel text-sm font-semibold px-8 py-3 rounded-full sm:rounded-[10px] mt-2 sm:mt-0 transition-colors">
                            Subscribe
                        </button>
                    </div>

                    {/* Privacy Checkbox */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <input
                            type="checkbox"
                            id="privacy"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-500 bg-transparent accent-[#BBFC00]"
                        />
                        <label htmlFor="privacy" className="text-gray-400 text-xs">
                            I trust you with my data! Details in the{" "}
                            <a href="#" className="underline hover:text-white">
                                Privacy Policy
                            </a>
                            .
                        </label>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee-newsletter {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-newsletter {
          animation: marquee-newsletter 20s linear infinite;
        }
      `}</style>
        </section>
    )
}
