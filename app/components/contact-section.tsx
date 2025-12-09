"use client"

import { useState } from "react"

const services = [
    "Campaigns & Activations",
    "Virtual Worlds",
    "Esports Partnerships",
    "In Stream Adtech",
    "Hybrid Events",
    "Creator Economy",
]

const budgetOptions = ["$15K—30K", "$30K—70K", "More Than $70K"]

export default function ContactSection() {
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [selectedBudget, setSelectedBudget] = useState<string>("")

    const toggleService = (service: string) => {
        setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
    }

    return (
        <section className="bg-[#031347] py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#0a1a4a] rounded-2xl p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-white text-4xl md:text-5xl font-bold tracking-wide mb-8">LET'S COLLAB</h2>

                                {/* Video Player */}
                                <div className="relative mb-8">
                                    <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden bg-[#0d2156]">
                                        <video src="/robo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    </div>
                                    {/* Book a call badge */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#BBFC00] text-[#031347] px-3 py-2 rounded-lg">
                                        <div className="w-8 h-8 bg-[#031347] rounded-md flex items-center justify-center">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="4" width="18" height="16" rx="2" stroke="#BBFC00" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="3" fill="#BBFC00" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold">Book a call with spawnpoint</span>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mt-8">
                                <p className="text-white text-2xl md:text-3xl font-bold tracking-wider">COLLAB@SPAWNPOINT.COM</p>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="flex flex-col gap-6">
                            {/* Services */}
                            <div>
                                <label className="text-gray-400 text-sm mb-3 block">Services</label>
                                <div className="flex flex-wrap gap-2">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            onClick={() => toggleService(service)}
                                            className={`px-4 py-2 rounded-full border text-sm transition-all ${selectedServices.includes(service)
                                                    ? "bg-white text-[#031347] border-white"
                                                    : "bg-transparent text-white border-gray-500 hover:border-white"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Budget */}
                            <div>
                                <label className="text-gray-400 text-sm mb-3 block">Budget</label>
                                <div className="flex flex-wrap gap-2">
                                    {budgetOptions.map((budget) => (
                                        <button
                                            key={budget}
                                            onClick={() => setSelectedBudget(budget)}
                                            className={`px-4 py-2 rounded-full border text-sm transition-all ${selectedBudget === budget
                                                    ? "bg-white text-[#031347] border-white"
                                                    : "bg-transparent text-white border-gray-500 hover:border-white"
                                                }`}
                                        >
                                            {budget}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Name and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-b border-gray-500 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-transparent border-b border-gray-500 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Details */}
                            <div>
                                <textarea
                                    placeholder="Drop any details (optional)"
                                    rows={3}
                                    className="w-full bg-transparent border-b border-gray-500 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                                />
                            </div>

                            {/* Privacy and Submit */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
                                <p className="text-gray-400 text-xs">
                                    Curious how we handle your data with care? Scoop into our{" "}
                                    <a href="#" className="underline hover:text-white">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                                <button className="text-white font-bold text-lg tracking-wider hover:text-[#BBFC00] transition-colors">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
