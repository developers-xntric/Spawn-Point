interface CaseCard {
    title: string;
    description: string;
    videoSrc: string; // changed from imageSrc to videoSrc
}

interface CaseSectionProps {
    cards: CaseCard[];
    sectionClass?: string;
    cardClass?: string;
    titleClass?: string;
    descClass?: string;
    videoClass?: string;
}

export default function CaseIntro({
    cards,
    sectionClass = "bg-[#0A1B4D] py-16 px-6 flex flex-col lg:flex-row gap-8 justify-center",
    cardClass = "bg-[#14235C] rounded-xl p-6 flex-1",
    titleClass = "text-white font-fks font-bold text-lg md:text-xl mb-4 uppercase",
    descClass = "text-white text-sm md:text-base opacity-80 mb-4",
    videoClass = "w-full rounded-md",
}: CaseSectionProps) {
    return (
        <section className={sectionClass}>
            {cards.map((card, index) => {
                const isGif = card.videoSrc.toLowerCase().endsWith(".gif");
                return (
                    <div key={index} className={cardClass}>
                        <h3 className={titleClass}>{card.title}</h3>
                        <p className={descClass}>{card.description}</p>
                        {isGif ? (
                            <img src={card.videoSrc} alt={card.title} className={videoClass} />
                        ) : (
                            <video
                                src={card.videoSrc}
                                controls
                                className={videoClass}
                                autoPlay
                                muted
                                loop
                            />
                        )}
                    </div>
                );
            })}
        </section>
    );
}
