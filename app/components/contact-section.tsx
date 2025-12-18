"use client"

import Link from "next/link"
import { useState } from "react"

const services = [
    "Campaigns & Activations",
    "Virtual Worlds",
    "Esports Partnerships",
    "In Stream Adtech",
]

const budgetOptions = ["$15K—30K", "$30K—70K", "More Than $70K"]

export default function ContactSection() {
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [selectedBudget, setSelectedBudget] = useState<string>("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [details, setDetails] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const toggleService = (service: string) => {
        setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMessage("")

        try {
            const response = await fetch('/api/contact-section', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    services: selectedServices,
                    budget: selectedBudget,
                    details
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitSuccess(true)
                // Reset form
                setName("")
                setEmail("")
                setDetails("")
                setSelectedServices([])
                setSelectedBudget("")
                setTimeout(() => setSubmitSuccess(false), 5000)
            } else {
                setErrorMessage(data.error || 'Failed to send message')
            }
        } catch (error) {
            setErrorMessage('Network error. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="bg-[#031347] pb-16 md:pb-24 ">
            <div className="2xl:max-w-[1440px] w-[90%] lg:w-[85%] mx-auto">
                <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-6 md:p-12 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-white text-4xl md:text-7xl font-fks font-bold tracking-wide mb-8">LET'S COLLAB</h2>

                                {/* Video Player */}
                                <div
                                    id="videoPlayer"
                                    className="gradient-border flex items-center rounded-md md:w-[330px] ps-2 py-2 md:py-2 gap-2 relative md:mb-8 bg-[#031347]"
                                >
                                    <div className="relative md:w-[50px] md:h-[50px] w-[50px] h-[50px] aspect-square overflow-hidden bg-[#031347]">
                                        <video
                                            src="/robo.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover rounded-[5px]"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 text-[#ffffff] px-3 py-2 rounded-lg">
                                        <span className="md:text-[14px] text-[4vw] font-medium tracking-wide font-hel">
                                            Book a call with spawnpoint
                                        </span>
                                    </div>
                                </div>

                            </div>

                            {/* Email */}
                            <Link href="mailto:COLLAB@SPAWNPOINT.COM" className="mt-8 md:block hidden">
                                <p className="text-white text-2xl md:text-5xl font-fks font-bold tracking-wide">COLLAB@SPAWNPOINT.COM</p>
                            </Link>
                        </div>

                        {/* Right Side - Form */}
                        <div className="flex flex-col gap-6">
                            {submitSuccess && (
                                <div className="p-4 bg-green-500 text-white rounded-md">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

                            {errorMessage && (
                                <div className="p-4 bg-red-500 text-white rounded-md">
                                    {errorMessage}
                                </div>
                            )}

                            {/* Services */}
                            <div>
                                <label className="text-white text-md font-bold font-hel mb-3 block">Services</label>
                                <div className="flex flex-wrap gap-2">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleService(service)}
                                            className={`px-4 py-2 font-hel bg-[#031347] rounded-[5px] text-[12px] md:text-sm transition-all ${selectedServices.includes(service)
                                                ? "bg-white text-[#031347] border-white"
                                                : "bg-[#031347] text-white border-white hover:border-white"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Budget */}
                            <div>
                                <label className="text-white font-bold text-md mb-3 block">Budget</label>
                                <div className="flex flex-wrap gap-2">
                                    {budgetOptions.map((budget) => (
                                        <button
                                            key={budget}
                                            type="button"
                                            onClick={() => setSelectedBudget(budget)}
                                            className={`px-4 py-2 font-hel bg-[#031347] rounded-[5px] text-sm transition-all ${selectedBudget === budget
                                                ? "bg-white text-[#031347] border-white"
                                                : "bg-[#031347] text-white border-white hover:border-white"
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
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-transparent border-b border-white py-3 text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent border-b border-white py-3 text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Details */}
                            <div>
                                <textarea
                                    placeholder="Drop any details (optional)"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    rows={1}
                                    className="w-full bg-transparent border-b border-white py-3 text-white placeholder-white focus:outline-none focus:border-white transition-colors resize-none"
                                />
                            </div>

                            {/* Privacy and Submit */}
                            <form onSubmit={handleSubmit}>
                                <div className="flex  flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 mt-4">
                                    <p className="text-white text-xs">
                                        Curious how we handle your data with care? Scoop into our{" "}
                                        <a href="#" className="underline hover:text-white">
                                            Privacy Policy
                                        </a>
                                        .
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} text-white font-fks font-bold tracking-wide text-4xl hover:text-[#BBFC00] transition-colors`}
                                    >
                                        {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                                    </button>
                                </div>
                            </form>

                            {/* Email */}
                            <Link href="mailto:COLLAB@SPAWNPOINT.COM" className="mt-2 md:hidden block">
                                <p className="text-white text-2xl md:text-5xl font-fks font-bold tracking-wide">COLLAB@SPAWNPOINT.COM</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
