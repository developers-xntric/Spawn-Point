export const markets = ["UAE", "KSA", "GCC"] as const;
export const pilotOptions = ["Live in-stream ads", "Live in-stream + in-game ads", "Not sure, recommend an option"] as const;
export const drops = ["Night Meal", "Ramadan Loadout", "Snack Run", "Eid Drops"] as const;

export type Booking = {
  fullName: string;
  email: string;
  mobile: string;
  brand: string;
  markets: string[];
  pilots: string[];
  drop: string;
};
export type BookingErrors = Partial<Record<keyof Booking, string>>;

export function validateBooking(data: Booking): BookingErrors {
  const errors: BookingErrors = {};
  if (!data.fullName.trim() || data.fullName.length > 120) errors.fullName = "Enter your full name (up to 120 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254) errors.email = "Enter a valid work email address.";
  if (data.mobile && (!/^[+\d\s().-]+$/.test(data.mobile) || data.mobile.replace(/\D/g, "").length < 7 || data.mobile.replace(/\D/g, "").length > 15)) errors.mobile = "Enter a valid mobile number including country code.";
  if (data.brand.length > 200) errors.brand = "Keep brand names under 200 characters.";
  if (!Array.isArray(data.markets) || data.markets.length === 0 || data.markets.some(market => !(markets as readonly string[]).includes(market)) || new Set(data.markets).size !== data.markets.length) errors.markets = "Choose at least one target market.";
  if (!Array.isArray(data.pilots) || data.pilots.length === 0 || data.pilots.some(pilot => !(pilotOptions as readonly string[]).includes(pilot)) || new Set(data.pilots).size !== data.pilots.length) errors.pilots = "Choose at least one pilot.";
  if (!(drops as readonly string[]).includes(data.drop)) errors.drop = "Choose a drop.";
  return errors;
}
