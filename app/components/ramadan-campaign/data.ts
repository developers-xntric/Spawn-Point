export const asset = (name: string) => `/images/ramadan-campaign/${name}`;
export type CampaignMedia = { film?: string; stream?: string; world?: string };

export const channels = [
  { title: "Iftar", text: "Family time. Nothing airs. Commerce happens after iftar and around suhoor, never over prayer or family moments." },
  { title: "After Iftar", text: "The drop goes live inside selected creator streams for 60 to 120 minutes. Viewers tap the link in chat, scan the QR on screen or use the creator’s code, without leaving the stream." },
  { title: "Late Evening", text: "Streams continue, and billboards and screens inside mobile, PC and console games keep the same offer in view, so the next drop feels familiar." },
  { title: "Suhoor", text: "A last reminder before the fast, timed to local prayer times. Saudi Arabia runs one hour behind the UAE, so each market gets its own night." },
  { title: "Next Morning", text: "A daily report by creator, game and market, and spend moves to the creators, games and hours that sell." },
];

export const offers = [
  { label: "In-stream", accent: "overlays", icon: "square", title: "In-stream", titleAccent: "programmatic", poster: "stream-poster.png", media: "stream", paragraphs: ["Gaming creators stream live every night. Your offer appears on screen as an overlay while they play, on Twitch, YouTube and Kick. It never interrupts the stream, so viewers keep watching and the offer stays in view.", "Bought by impression across vetted UAE and KSA creators, targeted by country, language, game and audience size."] },
  { label: "Codes, QR and", accent: "links", icon: "triangle", title: "Codes, QR and", titleAccent: "links", poster: "offer-still.png", paragraphs: ["A snipe or sidebar with a clear call to action, a richer reveal with a QR viewers scan from their phone, or the creator’s link and code in chat, so the claim is one tap away.", "Every creator gets a unique code or link, so each order is traced to the stream that sold it."] },
  { label: "In-game", accent: "billboards", icon: "cross", title: "In-game", titleAccent: "programmatic", poster: "offer-still.png", paragraphs: ["Games have billboards, stadium boards and screens, just like a city. Your Ramadan visual goes on them across mobile, PC and console, and players see it without leaving play.", "Bought by viewable impression across hundreds of games, targeted by market, device and genre, with brand-safety filters."] },
  { label: "Branded", accent: "worlds", icon: "circle", title: "Branded", titleAccent: "worlds", poster: "world-poster.png", media: "world", paragraphs: ["A playable Roblox or Fortnite world built around your brand: an evening market where players complete nightly quests, collect lanterns and earn rewards they redeem in your stores.", "Reusable every season, and quoted separately from the pilots."] },
] as const;

export const categories = [
  { name: "The Night Meal", short: "Night Meal", sector: "Food, QSR and delivery", image: "night-meal.png", text: "A sharing meal, a dessert add-on or free delivery over a minimum order, live for one evening window.", action: "Ordered through the creator’s link or code" },
  { name: "Ramadan Loadout", short: "Ramadan Loadout", sector: "Gaming retail and electronics", image: "ramadan-loadout.png", text: "Headset and controller bundles linked to in-stock items, with an exclusive bundle price or a gift with purchase.", action: "Bought from the product page" },
  { name: "The Snack Run", short: "Snack Run", sector: "Grocery and FMCG", image: "snack-run.png", text: "A ready-made evening basket of snacks or essentials, through your own app or a delivery partner.", action: "Added to the basket in one tap" },
  { name: "Eid Drops", short: "Eid Drops", sector: "Beauty, fashion and gifting", image: "eid-drops.png", text: "Real gift sets with their price and delivery date, launched early enough to arrive before Eid.", action: "Ordered before the delivery cutoff" },
];

export const proof = [
  ["+14%", "Store traffic", "QSR · streamer meal drops"],
  ["850K+", "Full video views", "QSR · gamified drops"],
  ["1.2M", "Watch-minutes in week one", "QSR · launch blitz"],
  ["+4.4%", "Click-through rate", "FMCG · creator-led campaign"],
  ["+27%", "Engagement year on year", "Telecom · streamer alliances"],
  ["600M+", "Earned impressions", "Automotive · world-record live activation"],
];
