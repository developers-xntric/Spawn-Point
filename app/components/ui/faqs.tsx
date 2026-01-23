'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQSection() {
    const [expandedIndex, setExpandedIndex] = useState(1)

    const faqs = [
        {
            question: 'WHAT MAKES YOUR APPROACH TO GAMING DIFFERENT FROM TRADITIONAL MARKETING?',
            answer:
                'Our approach is rooted in understanding gaming culture deeply. We don\'t treat games as just another ad space—we integrate brands authentically into the gaming experience itself.',
        },
        {
            question: 'WHAT SERVICES DO YOU OFFER?',
            answer:
                'Our teams work across AI, data analytics, creator ecosystems, esports, and virtual production to build engaging experiences that drive measurable results. We partner with players and brands to create authentic connections.',
        },
        {
            question: 'ARE YOUR SERVICES LIMITED TO MENA?',
            answer:
                'While we specialize in the MENA region, our expertise and services extend globally. We understand regional nuances while leveraging international best practices.',
        },
        {
            question: 'HOW DO YOU MEASURE SUCCESS?',
            answer:
                'We measure success through multiple metrics including engagement rates, brand lift, community growth, and business outcomes. Every campaign is backed by data-driven insights.',
        },
        {
            question: 'HOW DO YOU ENSURE EXPERIENCES RESONATE WITH GAMERS?',
            answer:
                'We work directly with gaming communities and use data analytics to understand what resonates. Our approach is iterative and always informed by player feedback.',
        },
        {
            question: 'CAN BRANDS COLLABORATE WITH CREATORS THROUGH YOUR PLATFORM?',
            answer:
                'Yes, our platform facilitates authentic collaborations between brands and creators. We ensure partnerships feel natural and deliver value to both parties.',
        },
    ]

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? -1 : index)
    }

    return (
        <section className="bg-[#031347] pb-16 px-4">
            <div className="max-w-[1440px] mx-auto w-[90%]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Header and Description */}
                    <div>
                        <p className="mb-4 text-[16px] md:text-[20px] tracking-[10px] md:tracking-[12px] text-[#FF1586] uppercase">
                            FAQ'S
                        </p>
                        <h1 className="text-7xl font-bold mb-8 font-fks text-white">
                            FREQUENTLY <br /><span className="text-[#BBFC00]">ASKED</span> QUESTIONS
                        </h1>
                        <p className="text-white text-lg leading-relaxed font-hel text-balance pe-4">
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
                                    <span className="text-white font-fks font-bold text-[28px] tracking-wider leading-8">{faq.question}</span>
                                    <span className="shrink-0 text-white mt-1">
                                        {expandedIndex === index ? <Minus size={25} /> : <Plus size={25} />}
                                    </span>
                                </button>

                                {/* Expanded Answer */}
                                {expandedIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-white text-lg leading-tight">{faq.answer}</p>
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
