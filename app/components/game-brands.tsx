import GameCard from "./game-cards"

export default function GameBrands() {

  const topLineText = "GEN ALPHA TO GEN Z"
  const bottomLineText = "GEN ALPHA TO GEN Z"
  const games = [
    {
      id: 1,
      title: "Roblox",
      titleImage: "/home/roblox.svg",
      description:
        "500M+ registered users, the ultimate UGC brand hub powered by Creative 2.0.",
      image: "/home/roblox-man.svg",
      imageWidth: 2000,
      imageHeight: 2000,
      imageClassName: "w-[200px] md:w-[280px] md:h-[450px] 2xl:w-[280px] 2xl:h-[490px] ml-6 ",
      titleImageWidth: 380,
      titleImageHeight: 80,
    },
    {
      id: 2,
      title: "Fortnite",
      titleImage: "/home/fortnite.svg",
      description:
        "Global reach, endless modding and customization for immersive brand experiences",
      image: "/home/fortnite-man.svg",
      imageWidth: 2000,
      imageHeight: 2000,
      imageClassName: "w-[400px]  md:h-[430px] 2xl:w-[480px] 2xl:h-[470px] ml-4 ",
      titleImageWidth: 352,
      titleImageHeight: 80,
    },
    {
      id: 3,
      title: "Minecraft",
      titleImage: "/home/minecraft.svg",
      description:
        "A creative sandbox with massive community engagement and limitless potential.",
      image: "/home/minecraft-man.svg",
      imageWidth: 2000,
      imageHeight: 2000,
      imageClassName: "w-[280px] md:w-[400px] md:h-[440px] 2xl:w-[480px] 2xl:h-[470px] 2xl:ml-4 ",
      titleImageWidth: 385,
      titleImageHeight: 74,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden pt-6 md:pt-3 pb-1 md:pb-16">
      {/* Header */}
      <div className="relative z-10 text-center mb-10 md:mb-8">
        <h2 className="text-[40px] lg:text-[60px] font-fks font-bold uppercase text-white max-w-[90%] md:max-w-[700px] mx-auto text-center leading-10 md:leading-[45px] lg:leading-[65px] tracking-[1.5px]">
          The <span className="text-[#BBFC00]">Strategic Entry </span> Point to MENA's Fastest-Growing<span className="text-[#BBFC00]"> Audience</span>
        </h2>
      </div>
      {/* GREENISH LINE */}
      <div
        className={`absolute top-[29%] lg:top-[50%] left-0 right-0 h-24 flex items-center overflow-hidden z-12 transition-all duration-300`}
        style={{
          transform: "skewY(-6deg)",
        }}
      >
        <div className="flex w-max animate-scroll-left bg-[#BBFC00]">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-[25px] md:text-[38px] font-fks uppercase font-bold text-[#031347] whitespace-nowrap px-4">
              {topLineText}    {/* GREENISH LINE */}
            </span>
          ))}
        </div>
      </div>

      {/* MOBILE GREENISH LINE  */}
      <div
        className={`absolute top-[83%] md:top-[50%] left-0 right-0 h-24 flex items-center overflow-hidden z-12 transition-all duration-300 md:hidden`}
        style={{
          transform: "skewY(-6deg)",
        }}
      >
        <div className="flex w-max animate-scroll-left bg-[#BBFC00]">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-[25px] md:text-[38px] font-fks uppercase font-bold text-[#031347] whitespace-nowrap px-4">
              {topLineText}    {/* GREENISH LINE */}
            </span>
          ))}
        </div>
      </div>

      {/* WHITE LINE */}
      <div
        className={`absolute top-[55%] lg:top-[50%] left-0 right-0 h-24 flex items-center overflow-hidden z-5 transition-all duration-300`}
        style={{
          transform: "skewY(6deg)",
        }}
      >
        <div className="flex w-max animate-scroll-right bg-white">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-[25px] md:text-[38px] font-fks uppercase text-[#031347] font-bold whitespace-nowrap px-4">
              {bottomLineText}      {/* WHITE LINE */}
            </span>
          ))}
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 2xl:max-w-[1440px] w-[90%] md:w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}
