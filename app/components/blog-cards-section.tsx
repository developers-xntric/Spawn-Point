'use client'

import Image from "next/image"

export default function BlogCardsSection() {
    const articles = [
        {
            date: 'January 12, 2026',
            image:
                '/blogs/1.png',
            title: 'GAMING IS NOW DIGITAL CULTURE',
            description:
                'Gaming has evolved beyond entertainment into a core part of digital culture. Communities, creators, and technology now shape how players engage and how brands build real connections.',
        },
        {
            date: 'January 5, 2026',
            image:
                '/blogs/2.png',
            title: 'WHY BRANDS NEED TO SPEAK GAMER',
            description:
                'Gamers value authenticity over traditional advertising. Brands that understand gaming culture can create experiences that feel natural and earn real trust from their audience.',
        },
        {
            date: 'December 28, 2025',
            image:
                '/blogs/3.png',
            title: 'FROM GAMEPLAY TO BUSINESS IMPACT',
            description:
                'With the right mix of data, AI, and creator ecosystems, gaming experiences can drive measurable brand growth. We help brands translate gaming passion into sustainable business impact.',
        },
        {
            date: 'December 20, 2025',
            image:
                '/blogs/4.png',
            title: 'AI IS SHAPING THE GAMING WORLD',
            description:
                'AI is transforming how players interact with games and how brands understand audiences. Campaigns that resonate naturally with players require deeper understanding of their behavior.',
        },
        {
            date: 'December 15, 2025',
            image:
                '/blogs/5.png',
            title: 'BUILDING EXPERIENCES PLAYERS ACTUALLY CARE ABOUT',
            description:
                'Success is opening up just about visibility—it\'s about engagement. Brands that create authentic gaming experiences resonate deeper with their audience.',
        },
        {
            date: 'December 10, 2025',
            image:
                '/blogs/6.png',
            title: 'ESPORTS AND CREATOR ECOSYSTEMS: THE NEW FRONTIER',
            description:
                'Leveraging esports and creator communities allows brands to build campaigns that feel authentic and deliver measurable results to your audience.',
        },
    ]

    return (
        <section className="bg-[#031347] py-16">
            <div className="2xl:max-w-360 w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="border border-[#0a3f7f] rounded-lg overflow-hidden transition-colors group p-5 grad"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-[10px]">
                                <Image
                                    src={article.image || "/placeholder.svg"}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    width={500}
                                    height={500}
                                />
                            </div>

                            {/* Content */}
                            <div className="mt-2">
                                <p className="text-white text-md mb-3">{article.date}</p>
                                <h3 className="text-white font-fks font-bold text-lg md:text-3xl tracking-wide mb-3 leading-tight min-h-10">{article.title}</h3>
                                <p className="text-white text-lg font-hel mb-6 leading-tight">{article.description}</p>

                                {/* See More Button */}
                                <button className="w-full py-2 px-4 border-2 border-[#white] text-white hover:border-[#BBFC00] hover:text-[#BBFC00] transition-colors font-semibold">
                                    See More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
