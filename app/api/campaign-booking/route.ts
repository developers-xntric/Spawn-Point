import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateBooking, type Booking } from "@/app/components/ramadan-campaign/booking";

export const runtime = "nodejs";
const recipients = ["sammas@spawnpointstudio.com", "ahmed@spawnpointstudio.com"];
const textFields = ["fullName", "email", "mobile", "brand", "drop"] as const;
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);

export async function POST(request: Request) {
  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 8192) return NextResponse.json({ error: "The request is too large." }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request. Please check your details and try again." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  const submitted = body as Record<string, unknown>;
  if (textFields.some(key => submitted[key] !== undefined && typeof submitted[key] !== "string") || !Array.isArray(submitted.markets) || submitted.markets.some(market => typeof market !== "string") || !Array.isArray(submitted.pilots) || submitted.pilots.some(pilot => typeof pilot !== "string")) return NextResponse.json({ error: "Invalid form fields." }, { status: 400 });
  const data = { ...Object.fromEntries(textFields.map(key => [key, typeof submitted[key] === "string" ? submitted[key].trim() : ""])), markets: submitted.markets.map(market => (market as string).trim()), pilots: submitted.pilots.map(pilot => (pilot as string).trim()) } as Booking;
  const errors = validateBooking(data);
  if (Object.keys(errors).length) return NextResponse.json({ error: "Please check the highlighted fields.", errors }, { status: 400 });

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(process.env.SMTP_PORT || "465");
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("Campaign booking: SMTP configuration is missing or invalid.");
    return NextResponse.json({ error: "We couldn't send your request. Please try again later or contact sammas@spawnpointstudio.com." }, { status: 503 });
  }
  const transport = nodemailer.createTransport({
    host: SMTP_HOST, port, secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000,
  });
  const price = data.pilots.length === 1 && data.pilots[0] === "Live in-stream ads" ? "US$8,000" : "US$16,000";
  const rows = [
    ["Full name", data.fullName], ["Work email", data.email], ["Mobile / WhatsApp", data.mobile || "Not provided"],
    ["Brand(s)", data.brand || "Not provided"], ["Target markets", data.markets.join(", ")], ["Pilots", data.pilots.join(", ")], ["Drop", data.drop],
    ["Displayed pilot price", price], ["Submitted at (UTC)", new Date().toISOString()],
  ];
  try {
    const info = await transport.sendMail({
      from: { name: "SpawnPoint Ramadan Campaign", address: SMTP_USER },
      to: recipients,
      replyTo: data.email,
      subject: "New Ramadan Night Drops pilot enquiry",
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `<h2>Ramadan Night Drops - Pilot Enquiry</h2><table>${rows.map(([label, value]) => `<tr><th align="left" style="padding:8px">${label}</th><td style="padding:8px">${escapeHtml(value)}</td></tr>`).join("")}</table>`,
    });
    // Only show the thank-you video when SMTP accepts both requested recipients.
    const accepted = info.accepted.map(address => String(address).toLowerCase());
    if (!recipients.every(address => accepted.includes(address))) throw new Error("One or more campaign recipients were rejected");
    return NextResponse.json({ success: true });
  } catch (error) {
    const smtpError = error as Error & { code?: string; command?: string; response?: string; responseCode?: number };
    console.error("Campaign booking email failed", {
      code: smtpError.code ?? smtpError.name,
      command: smtpError.command,
      responseCode: smtpError.responseCode,
      message: smtpError.message,
      response: smtpError.response,
    });
    return NextResponse.json({ error: "We couldn't send your request to our team. Your details are still here; please try again or contact sammas@spawnpointstudio.com." }, { status: 502 });
  } finally {
    transport.close();
  }
}
