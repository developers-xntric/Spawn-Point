import MoveableBalls from "./moveable-balls"

export default function SecondSection() {
    return (
        <section id="second-section" className="w-full py-16 text-black">
            <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto flex flex-col items-center justify-center space-y-10">
                <div className="flex flex-col items-center justify-center space-y-3">
                    <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white md:max-w-[570px] mx-auto text-center leading-[40px] md:leading-[45px] lg:leading-[65px] text-balance tracking-[1.5px]">
                        Most <span className="text-[#BBFC00]">Brands </span> Play Around Gaming. We Play {" "}
                        <span className="text-[#BBFC00]">Inside It.</span>
                    </h2>
                    <p className="text-[16px] md:text-[20px] max-w-3xl font-hel font-normal text-white text-center">
                       Gaming + AI campaigns that move audiences, not just eyeballs. SpawnPoint builds proprietary systems that turn participation into measurable growth.
                    </p>
                </div>
                <div className="relative w-full h-[500px] rounded-[15px] border-[0.5px] border-[#BBFC00]">
                    <div className="w-full h-full rounded-[15px] overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg pointer-events-none"></div>

                        <MoveableBalls />
                    </div>

                </div>

            </div>
        </section>
    )
}
