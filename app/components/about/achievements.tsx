import Image from "next/image"

export function Achievements() {
  return (
    <section className="pb-10 md:pb-16 pt-4">
      <div className="2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-[16px] md:text-[20px] tracking-[10px] md:tracking-[12px] text-[#FF1586] font-hel uppercase">
            Our Achievements
          </p>
          <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white  mx-auto text-center leading-10 md:leading-[45px] lg:leading-[65px] text-balance tracking-[1.5px]">
            Built on <span className="text-[#BBFC00]">Performance </span> Not {""}
            <span className="text-[#BBFC00]">Promises</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid items-center gap-6 md:gap-2 grid-cols-1 lg:grid-cols-3 xl:gap0 xl:gap-6 place-items-center justify-between">
          {/* Left Stats Cards */}
          <div className="space-y-6 flex flex-col w-full h-full justify-between">
            {/* Card 1 */}
            <div className="rounded-2xl md:rounded-lg border border-[#FFFFFF1A] backdrop-blur-[30px] bg-white/5 pt-4 md:pt-10 xl:pt-10 2xl:pt-20 pb-4 pl-4 ">
              <div className="text-[40px] md:text-[55px] font-fks font-bold uppercase text-white max-w-[570px] mx-auto  leading-[55px] text-balance">#1</div>
              <p className="text-white text-[16px] md:text-[16px]  max-w-sm ">in branded activations on Roblox</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl md:rounded-lg border border-[#FFFFFF1A] backdrop-blur-[30px] bg-white/5 pt-5 md:pt-10 xl:pt-10 2xl:pt-20 pb-4 pl-4 ">
              <div className="text-[40px] md:text-[55px] font-fks font-bold uppercase text-white max-w-[570px] mx-auto  leading-[55px] text-balance tracking-[1.5px]">
                2.5 BILLION<span className="text-[45px]">+</span>
              </div>
              <p className="text-white text-[16px] md:text-[16px]  max-w-sm ">Visits across our experiences to date</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl md:rounded-lg border border-[#FFFFFF1A] backdrop-blur-[30px] bg-white/5 pt-5 md:pt-10 xl:pt-10 2xl:pt-20 pb-4 pl-4 ">
              <div className="text-[40px] md:text-[55px] font-fks font-bold uppercase text-white max-w-[570px] mx-auto  leading-[55px] text-balance tracking-[1.5px]">Award Winning</div>
              <p className="text-white text-[16px] md:text-[16px]  max-w-sm">Recognized globally for excellence in brand activations</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="hidden md:block relative w-full h-full">
            <Image
              src="/about/achievements.png"
              alt="Roblox 3D Icon"
              width={2000}
              height={2000}
              className="object-contain w-full h-full mx-auto"
              priority
            />
          </div>

          {/* Right Info Card */}
          <div className="w-full rounded-lg h-full border border-[#FFFFFF1A] backdrop-blur-[30px] bg-white/5 p-4 md:p-8 flex flex-col justify-end space-y-6 md:pt-8 pt-6">
            <h3 className="text-[40px] md:text-[55px] font-fks font-bold uppercase text-white max-w-[570px]  leading-10 md:leading-[55px] text-balance tracking-[1.5px]">
              Roblox Partner
              <br />
              Program:
            </h3>
            <p className="text-white text-[16px] md:text-[16px]  max-w-sm">
              As an exclusive member, we hold built the leading experiences within Roblox Advertising Solutions, giving
              us access to in-platform ads and the latest innovations for creating winning experiences.
            </p>
          </div>

           {/* Center Image */}
          <div className="relative md:hidden w-full h-[260px] sm:h-80 md:h-[420px] lg:h-full ">
            <Image
              src="/about/achivement-mob.png"
              alt="Roblox 3D Icon"
              width={2000}
              height={2000}
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
