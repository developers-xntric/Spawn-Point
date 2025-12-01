"use client";

import Image from "next/image";

type Game = {
  id: number;
  title: string;
  titleImage: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageClassName?: string;
  titleImageWidth?: number;
  titleImageHeight?: number;
  titleImageClassName?: string;
};

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="relative rounded-[20px] border-2 border-[#273561] bg-white/5 backdrop-blur-[30px] h-[530px] overflow-hidden">
      {/* Background image */}
      {game.image && (
        <Image
          src={game.image}
          alt={game.title}
          width={game.imageWidth}
          height={game.imageHeight}
          className={game.imageClassName}
        />
      )}

      {/* Dark gradient at bottom so text & logo are readable */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent  to-[#031347]" />

      {/* Overlay content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-3">
        {/* Title image (logo) overlapping bottom edge of background */}
        {game.titleImage && (
          <div className="flex items-end">
            <Image
              src={game.titleImage}
              alt={game.title}
              width={game.titleImageWidth ?? 350} 
              height={game.titleImageHeight ?? 200} 
              className={
                game.titleImageClassName ?? "w-auto h-16 object-contain"
              }
            />
          </div>
        )}

        {/* Description */}
        <p className="text-white text-sm md:text-base ">
          {game.description}
        </p>
      </div>
    </div>
  );
}
