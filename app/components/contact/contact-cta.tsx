import React from 'react';
import Image from 'next/image';

const ContactCTA = () => {
  return (
    <section className="bg-[#031347] min-h-[500] flex items-center justify-center relative pt-16">
      {/* OMG icon - left side */}
      <div className="absolute left-[30%] top-[32%]">
        <Image src="/icons/OMG.svg" alt="OMG Icon" width={80} height={100} className="object-contain"/>
      </div>

      {/* Dollar icon - right side */}
      <div className="absolute right-[28%] top-[69%]">
        <Image src="/icons/Dollar.svg" alt="Dollar" width={70} height={100} className="object-contain"  />
      </div>

      {/* Center content */}
      <div className="text-center z-10">
        <h1 className="text-white font-bold font-fks uppercase  text-[80px] font-fks   tracking-wide">
          Create What&apos;s
        </h1>
        <h2 className="text-[#BBFC00] text-[120px] font-fks font-bold uppercase tracking-wide leading-20">
          Next In Gaming
        </h2>
        <p className="text-white/80 text-md text-bol mt-6 max-w-[500px] mx-auto font-normal font-helvetica">
          Whether you&apos;re ready to launch a full-scale immersive world or just want to explore what your brand could look like inside a game, we&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
};

export default ContactCTA;