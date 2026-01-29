'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQSection() {
    const [expandedIndex, setExpandedIndex] = useState(0)

    const faqs = [
        {
            question: 'Why is Spawn Point a top gaming design agency?',
            answer:
                'Spawn Point combines a game-native way of thinking and brand strategy to create player-friendly and player-driven experiences. We are designing within gaming culture, not around it. That feeling is what makes our work real, playable, and memorable.',
        },
        {
            question: 'What is an in-game marketing company?',
            answer:
                'An in-game marketing company connects brands to consumers in games and virtual environments. This includes branded environments, interactive mechanics as well as live activations. Engagement is the goal, not interruption.',
        },
        {
            question: 'Which gaming platforms do you work with?',
            answer:
                'We develop games across PC, console, mobile and emerging virtual platforms. Our experiences were built using Roblox, Fortnite Creative, Minecraft, and dedicated custom-built experiences. We adapt our design to fit the way each platform is played.',
        },
        {
            question: 'What is the "4-Quarter System"?',
            answer:
                'We call this the 4-Quarter System, the basis for how we build a long-term, sustainable presence. It breaks campaigns into four phases: entry, engagement, expansion, and retention. This keeps brands fresh instead of just during launch windows.',
        },
        {
            question: 'Do you only work with gaming brands?',
            answer:
                'No- actually, a lot of our clients are non-gaming and are entering into gaming for the first time. We help them translate their identity into playable, interactive formats.Gaming is merely a medium, a risk.',
        },
        {
            question: 'What is the difference between an "activation" and a "virtual world"?',
            answer:
                'An activation is a short-lived, time-limited event, usually associated with a campaign or moment. A virtual world is a world that a player returns to over time. Both can work to different calculated ends, and can be complementary.',
        },
        {
            question: 'How do you integrate creators and streamers into your strategy?',
            answer:
                'We partner with creators and co-create, rather than just place media. They inform experiences, narratives, and live interactions. This builds credibility and organic reach within gaming communities.',
        },
        {
            question: 'Is Spawn Point Studio focused on specific regions?',
            answer:
                'While Spawn Point Studio operates with a global perspective, our core expertise lies in the MENA and GCC regions. We combine local cultural insights with a "platform-first" approach, ensuring that while gaming knows no borders, your content resonates deeply within the local landscape.',
        },
        {
            question: 'How do "In-Stream AdTech" solutions work?',
            answer:
                'In-Stream AdTech incorporates brands into the experience of the digital live stream. The ads are integrated into the gameplay or appear as overlays. It allows for real-time measurable engagement with viewers.',
        },
    ]

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? -1 : index)
    }

    return (
        <section className="bg-[#031347] pb-16 px-4">
            <div className="max-w-[1440px] mx-auto w-[95%] lg:w-[90%]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Header and Description */}
                    <div>
                        <p className="mb-4 text-[16px] md:text-[20px] tracking-[10px] md:tracking-[12px] text-[#FF1586] uppercase">
                            FAQ'S
                        </p>
                        <h2 className="text-5xl lg:text-7xl font-bold mb-8 font-fks text-white">
                            FREQUENTLY <br /><span className="text-[#BBFC00]">ASKED</span> QUESTIONS
                        </h2>
                        <p className="text-white lg:text-lg lg:leading-relaxed font-hel text-balance pe-4 mb-10">
                            Here, we answer the most common questions about our approach to gaming, digital strategies, tactics, or
                            how we measure success. This FAQ gives you a clear understanding of how we work and what makes our
                            approach unique.
                        </p>
                    </div>

                    {/* Right Side - Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg grad overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'border-[#BBFC00] bg-[#0a1f5c]' : 'border-[#0a3f7f]'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="w-full px-6 py-4 flex items-start justify-between gap-4 transition-colors text-left"
                                >
                                    <span className="text-white font-fks font-bold text-xl lg:text-[28px] tracking-wider leading-8">{faq.question}</span>
                                    <span className="shrink-0 text-white mt-1">
                                        {expandedIndex === index ? <Minus size={25} /> : <Plus size={25} />}
                                    </span>
                                </button>

                                {/* Expanded Answer */}
                                {expandedIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-white text-sm lg:text-lg leading-tight">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
