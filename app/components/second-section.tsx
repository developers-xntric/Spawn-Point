import MoveableBalls from "./moveable-balls"

export default function SecondSection() {
    return (
        <section id="second-section" className="w-full pt-16 pb-16 md:pb-[120px] text-black">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto flex flex-col items-center justify-center space-y-10">
                <div className="flex flex-col items-center justify-center space-y-3">
                    <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white md:max-w-[800px] mx-auto text-center leading-10 md:leading-[45px] lg:leading-[65px] text-balance tracking-[1.5px]">
                        THE GATEWAY TO <span className="text-[#BBFC00]">MENA’s </span> Digital Generation Stop Watching {" "}
                        <span className="text-[#BBFC00]">Start Playing.</span>
                    </h2>
                    <p className="text-[16px] md:text-[20px] max-w-3xl font-hel font-normal text-white text-center">
                       Through a blend of local storytelling and technical expertise‚ we smoothly integrate global brands into the regional gaming narrative‚ extending from Riyadh all the way to Dubai․
                    </p>
                </div>
                <div className="relative w-full  h-[400px]  md:h-[500px] rounded-[15px] border-[0.5px] border-[#BBFC00]">
                    <div className="w-full h-full rounded-[15px] overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg pointer-events-none"></div>

                        <MoveableBalls />
                    </div>

                </div>

            </div>
        </section>
    )
}
