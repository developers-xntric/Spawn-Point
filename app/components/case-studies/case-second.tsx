import React from "react";
import Image from "next/image";

interface CaseSecondProps {
  title?: string;
  videoSrc: string; // keep same prop to avoid breaking usage
  titleClass?: string;
  sectionClass?: string;
  videoClass?: string;
}

export default function CaseSecond({
  title,
  videoSrc,
  titleClass = "text-white text-[45px] md:text-[70px] lg:text-[90px] font-fks font-bold uppercase text-center mb-8",
  sectionClass = "bg-[#031347] py-20 px-5 flex flex-col items-center justify-center",
  videoClass = "w-full max-w-[900px] rounded-lg shadow-lg",
}: CaseSecondProps) {
  return (
    <section className={sectionClass}>
      {title && <h2 className={titleClass}>{title}</h2>}

      <div className={videoClass}>
        <Image
          src={videoSrc}
          alt="Case visual"
          width={2000}
          height={2000}
          className="w-full h-full object-cover rounded-xl"
          priority
        />
      </div>
    </section>
  );
}
