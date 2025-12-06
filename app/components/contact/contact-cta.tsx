import React from 'react';

const ContactCTA = () => {
  return (
    <div
      className="bg-[linear-gradient(to_bottom,#0a0f2e,#0a0f2e_50%,#00051d)] text-white py-10 px-5 text-center relative font-sans overflow-hidden"
    >
      {/* Pixelated OMG icon approximation - you can replace with an actual image or SVG for exact pixel art */}
      <div
        className="absolute top-5 left-5 text-2xl font-['Press_Start_2P'] text-white "
      >
        <Image src="/icons/OMG.svg alt="OMG Icon" width={32} height={32} />
      </div>

      <h1
        className="text-[clamp(2rem,5vw,4rem)] font-bold m-0 mb-2.5 leading-[1.1] uppercase tracking-[1px]"
      >
        <span className="text-white">Create Whats</span>
        <br />
        <span className="text-[#bfff00]">Next In Gaming</span>
      </h1>
      <div></div>
      <p
        className="text-[clamp(0.9rem,2vw,1.1rem)] max-w-[600px] m-0 mx-auto leading-[1.4] text-center font-helvetica font-normal w-[733px]"
      >
        Whether youre ready to launch a full-scale immersive world or
        <br />
        just want to explore what your brand could look like inside a game, wed love to hear from you.
      </p>

      {/* Pixelated $ icon approximation - you can replace with an actual image or SVG for exact pixel art */}
      <div
        className="absolute bottom-5 right-5 text-2xl font-['Press_Start_2P'] text-[#ffd700]"
      >
        <Image src="/icons/Dollar.svg alt="Dollar" width={32} height={32} />
      </div>
    </div>
  );
};

export default ContactCTA;