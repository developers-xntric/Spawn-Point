import React from "react";

interface CaseSecondProps {
    title?: string;
    videoSrc: string; // URL or path of the video
    videoType?: string; 
    titleClass?: string;
    sectionClass?: string;
    videoClass?: string;
}

export default function CaseSecond({
    title,
    videoSrc,
    videoType = "video/mp4",
    titleClass = "text-white text-[45px] md:text-[70px] lg:text-[90px] font-fks font-bold uppercase text-center mb-8",
    sectionClass = "bg-[#031347] py-20 px-5 flex flex-col items-center justify-center",
    videoClass = "w-full max-w-[900px] rounded-lg shadow-lg",
}: CaseSecondProps) {
    return (
        <section className={sectionClass}>
            <h2 className={titleClass}>{title}</h2>
            <video
                className={videoClass}
                src={videoSrc}
                controls
                autoPlay={false}
                muted={false}
                loop={false}
            />
        </section>
    );
}
