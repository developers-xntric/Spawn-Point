import Image from "next/image";

interface SolutionCard {
    title: string;
    description: string;
    points: string[];
    imageSrc: string;
    imageAlt?: string;
}

interface SolutionsProps {
    solutions: SolutionCard[];
    sectionClass?: string;
    leftCardClass?: string;
    rightCardClass?: string;
    titleClass?: string;
    descClass?: string;
    pointsClass?: string;
    imageClass?: string;
}

export default function Solutions({
    solutions,
    sectionClass = " ",
    leftCardClass = "flex-1 flex justify-center",
    rightCardClass = "flex-1 bg-[#14235C] rounded-xl p-8 md:p-12 text-white",
    titleClass = "text-[32px] md:text-[40px] font-fks font-bold mb-6",
    descClass = "mb-6 text-white/80",
    pointsClass = "list-decimal list-inside space-y-4 text-white/90 text-lg md:text-xl",
    imageClass = "w-full",
}: SolutionsProps) {
    return (
        <div className={sectionClass}>
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row gap-10 items-center">
                {solutions.map((sol, index) => (
                    <div key={index}>
                        {/* Left: Logo/Image */}
                        <div>
                            <h3 className={titleClass}>{sol.title}</h3>
                            <p className={descClass}>{sol.description}</p>
                        </div>


                        <div className="flex items-stretch justify-center gap-5 h-full">


                            <div className={leftCardClass}>
                                <div className=" rounded-xl flex items-center justify-center">
                                    <Image
                                        src={sol.imageSrc}
                                        alt={sol.imageAlt || sol.title}
                                        width={300}
                                        height={300}
                                        className={imageClass}
                                    />
                                </div>
                            </div>

                            {/* Right: Solution points */}
                            <div className={rightCardClass}>

                                <ol className={pointsClass}>
                                    {sol.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
}
