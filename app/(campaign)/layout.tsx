import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spawnpointstudio.com"),
  title: "Ramadan Night Drops | Spawn Point",
  description:
    "Ramadan offers inside the live streams and games the UAE and Saudi Arabia play after iftar. One offer, two ways into gaming.",
  icons: { icon: "/favicon.png" },
};

// A separate root layout keeps campaign chrome and typography isolated.
export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
