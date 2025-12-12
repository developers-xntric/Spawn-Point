import Image from "next/image"

export function Achievements() {
  return (
    <section className="pb-10 md:pb-16 pt-10">
      <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-[20px] tracking-[12px] text-[#FF1586] font-hel">
            ACHEIVEMENTS
          </p>
          <h2 className="text-[60px] font-fks font-bold uppercase text-white max-w-[570px] mx-auto text-center leading-[65px] text-balance">
            WE DON'T <span className="text-[#BBFC00]">CREATE ADS </span> WE BUILD WORLDS THAT WIN{" "}
            <span className="text-[#BBFC00]">ATTENTION</span>.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid items-center gap-2 md:grid-cols-3 lg:gap-0 place-items-center justify-between">
          {/* Left Stats Cards */}
          <div className="space-y-6 flex flex-col w-full">
            {/* Card 1 */}
            <div className="rounded-lg border border-[#FFFFFF1A] backdrop-blur-[30px] bg-white/5 pt-10 pb-4 pl-4 ">
              <div className="text-[55px] font-fks font-bold uppercase text-white max-w-[570px] mx-auto  leading-[55px] text-balance">#1</div>
              <p className="text-white/80 text-md  max-w-sm ">in branded activations on Roblox</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-[#FFFFFF1A] backdrop-blur-[30px] bg-white/5 pt-10 pb-4 pl-4 ">
              <div className="text-[55px] font-fks font-bold uppercase text-white max-w-[570px] mx-auto  leading-[55px] text-balance">
                2.5 BILLION<span className="text-[45px]">+</span>
              </div>
              <p className="text-white/80 text-md  max-w-sm ">Visits across our experiences to date</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-[#FFFFFF1A] backdrop-blur-[30px] bg-white/5 pt-10 pb-4 pl-4 ">
              <div className="text-[55px] font-fks font-bold uppercase text-white max-w-[570px] mx-auto  leading-[55px] text-balance">Award Winning</div>
              <p className="text-white/80 text-md  max-w-sm">Recognized globally for excellence in brand activations</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative w-full h-full">
            <Image
              src="/about/achievements.png"
              alt="Roblox 3D Icon"
              fill
              className="object-contain w-full"
              priority
            />
          </div>

          {/* Right Info Card */}
          <div className="w-full rounded-lg h-full border border-[#FFFFFF1A] backdrop-blur-[30px] bg-white/5 p-8 flex flex-col justify-end space-y-6">
            <h3 className="text-[55px] font-fks font-bold uppercase text-white max-w-[570px]  leading-[55px] text-balance">
              Roblox Partner
              <br />
              Program:
            </h3>
            <p className="text-white/80 text-md  max-w-sm">
              As an exclusive member, we hold built the leading experiences within Roblox Advertising Solutions, giving
              us access to in-platform ads and the latest innovations for creating winning experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
