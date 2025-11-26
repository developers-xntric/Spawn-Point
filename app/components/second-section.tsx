import MoveableBalls from "./moveable-balls"

export default function ContentSection() {
    return (
        <section className="w-full py-20 text-black">
            <div className="2xl:max-w-[1740px] w-[95%] md:w-[90%] mx-auto flex flex-col items-center justify-center space-y-10">
                <div className="flex flex-col items-center justify-center space-y-3">
                    <h2 className="text-[60px] font-fks font-bold uppercase text-white max-w-[570px] mx-auto text-center leading-[65px] text-balance">
                        Create <span className="text-[#BBFC00]">Whatever </span> You Want We'll Build the World{" "}
                        <span className="text-[#BBFC00]">Around It</span>
                    </h2>
                    <p className="text-[20px] max-w-2xl font-hel font-normal text-white text-center">
                        From pixels to players, we turn creativity into experience.
                    </p>
                </div>
                <div className="relative w-full h-[500px] rounded-[15px] border-[1px] border-[#BBFC00]">
                    <div className="w-full h-full rounded-[15px] overflow-hidden relative">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg pointer-events-none"></div>

                        <MoveableBalls />
                    </div>

                </div>

            </div>
        </section>
    )
}
