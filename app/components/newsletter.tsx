"use client"

import Image from "next/image"
import { useState } from "react"

export default function NewsletterSection() {
    const [email, setEmail] = useState("")
    const [agreed, setAgreed] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    // Create array for marquee items
    const marqueeItems = Array(8).fill(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !agreed) {
            setSubmitMessage("Please enter your email and agree to the privacy policy.");
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage("Thank you for subscribing! We've sent a confirmation to your email.");
                setEmail("");
            } else {
                setSubmitMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setSubmitMessage("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#031347] md:pt-8 md:pb-20 overflow-hidden">
            {/* Infinite Scrolling Marquee */}
            <div className="relative mb-8 overflow-hidden">
                <div className="flex animate-marquee-newsletter">
                    {marqueeItems.map((_, index) => (
                        <div key={index} className="flex items-center shrink-0 mx-3">
                            {/* SP Logo */}
                            <div className="relative w-12 h-12 md:w-20 md:h-20 mr-2">
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
            <div className="relative max-w-5xl mx-auto mt-10 text-center">
                {/* Character Image */}
                <div className="relative w-full max-w-5xl mx-auto -mt-4 mb-0">
                    <Image src="/nl.png" alt="Game Characters" width={1000} height={1000} className="w-full h-auto object-cover relative z-0 mr-20 mx-auto right-2 md:right-4 lg:right-8" />
                </div>

                {/* Email Form - Overlapping the image */}
                <div className="relative z-20 -mt-1 md:-mt-36 mb-12">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-0 max-w-[85%] md:max-w-lg mx-auto relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full sm:flex-1 bg-white/10 border border-white rounded-[10px] px-6 py-4 text-white placeholder-white focus:outline-none focus:border-white transition-colors text-[12px] md:text-base "
                            style={{
                                backdropFilter: "blur(17px)"
                            }}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="absolute md:right-2 right-2 lg:bottom-2 w-auto sm:w-auto bg-white text-[#031347] font-hel text-[11px] md:text-sm font-semibold px-4 md:px-8 py-3 rounded-[10px] md:mt-2 sm:mt-0 transition-colors hover:bg-opacity-90 disabled:opacity-70"
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>

                    {/* Display submission message */}
                    {submitMessage && (
                        <div className={`mt-4 text-center ${submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                            {submitMessage}
                        </div>
                    )}

                    {/* Privacy Checkbox */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <input
                            type="checkbox"
                            id="privacy"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-500 bg-transparent accent-[#BBFC00]"
                        />
                        <label htmlFor="privacy" className="text-white md:text-gray-400 text-xs">
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
          animation: marquee-newsletter 16s linear infinite;
        }
      `}</style>
        </section>
    )
}
