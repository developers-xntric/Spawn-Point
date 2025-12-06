"use client"

export default function GamingHero() {
  return (
    <section className="min-h-screen text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image + glass background */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              
              {/* Background behind ONLY the girl image */}
              <div className="absolute top-12 left-0 w-full h-[450px] rounded-xl overflow-hidden ">
                <img
                  src="/about/gaming-bg.jpg"  // your background
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />
              </div>

              {/* Foreground girl image */}
              <img
                src="/about/gaming-girl.png"
                alt="Gaming character"
                className="relative z-10 w-full h-auto rounded-xl object-cover pl-4 pr-4"
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="flex flex-col gap-8">
            <div>
               <h2 className="text-[60px] font-fks font-bold uppercase text-white text-center leading-[65px] text-balance">
                        WHO <span className="text-[#BBFC00]">WE ARE </span>
                    </h2>
              <p className="text-lg font-bold text-gray-300 uppercase tracking-wider">
                Your Gaming Community Started with One Belief
              </p>
            </div>

            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Brands shouldn't talk at players — they should build with them...
              </p>
              <p>
                We help brands enter gaming worlds with respect, creativity...
              </p>
              <p>
                For us, gaming isn't a channel — it's a culture...
              </p>
            </div>

            <div className="pt-4">
              <button className="mt-6 bg-[#BBFC00] text-[#031347] font-semibold text-ms px-8 py-2.5 rounded-[5px] hover:bg-[#a8e600] transition-colors">
                Lets Connect
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
