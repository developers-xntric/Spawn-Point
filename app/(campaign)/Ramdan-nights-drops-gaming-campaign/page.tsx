import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import RamadanCampaignPage from "@/app/components/ramadan-campaign/RamadanCampaignPage";

export const metadata: Metadata = {
  title: "Ramadan Night Drops Gaming Campaign | Spawn Point",
  alternates: {
    canonical:
      "https://spawnpointstudio.com/Ramdan-nights-drops-gaming-campaign",
  },
  openGraph: {
    title: "Ramadan Night Drops | Spawn Point",
    description: "One night. Two channels. Your Ramadan offer, inside gaming.",
    images: [
      {
        url: "/images/ramadan-campaign/film-poster.png",
        width: 1027,
        height: 578,
      },
    ],
  },
};

function video(name: string) {
  for (const extension of ["webm", "mp4"]) {
    const asset = `/images/ramadan-campaign/${name}.${extension}`;
    if (existsSync(path.join(process.cwd(), "public", asset))) return asset;
  }
  return undefined;
}

export default function Page() {
  return (
    <RamadanCampaignPage
      media={{
        film: video("film-loop"),
        stream: video("loop-offer"),
        world: video("loop-souq"),
      }}
    />
  );
}
