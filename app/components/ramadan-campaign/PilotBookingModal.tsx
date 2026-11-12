"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { asset } from "./data";
import { markets, pilotOptions, validateBooking, type Booking, type BookingErrors } from "./booking";

type Props = { markets: string[]; pilots: string[]; drop: string; onClose: () => void };
const border = "rounded-[5px] bg-[linear-gradient(120deg,#bbfc00,rgba(187,252,0,0.22)_48%,#bbfc00)] p-px shadow-[0_10px_30px_rgba(0,0,0,0.12)] focus-within:ring-2 focus-within:ring-[#bbfc00]";
const input = "h-10 md:h-14 w-full min-w-0 rounded-[4px] border-0 bg-[#173863]/95 px-5 text-[12px] md:text-[16px] text-white placeholder:text-white focus:outline-none";

export default function PilotBookingModal({ markets: selectedMarkets, pilots, drop, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const successTitle = useRef<HTMLHeadingElement>(null);
  const inFlight = useRef(false);
  const [values, setValues] = useState<Booking>({ fullName: "", email: "", mobile: "", brand: "", markets: selectedMarkets, pilots: pilots.map(pilot => pilot === "Livestream" ? pilotOptions[0] : pilotOptions[1]), drop });
  const [errors, setErrors] = useState<BookingErrors>({});
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => { if (success) successTitle.current?.focus(); }, [success]);

  function update(key: Exclude<keyof Booking, "pilots" | "markets">, value: string) {
    setValues(current => ({ ...current, [key]: value }));
    setErrors(current => ({ ...current, [key]: undefined }));
    setError("");
  }

  function togglePilot(option: string) {
    setValues(current => {
      const selected = current.pilots.includes(option);
      if (selected && current.pilots.length === 1) return current;
      return { ...current, pilots: selected ? current.pilots.filter(pilot => pilot !== option) : [...current.pilots, option] };
    });
    setErrors(current => ({ ...current, pilots: undefined }));
    setError("");
  }

  function toggleMarket(option: string) {
    setValues(current => {
      const selected = current.markets.includes(option);
      if (selected && current.markets.length === 1) return current;
      return { ...current, markets: selected ? current.markets.filter(market => market !== option) : [...current.markets, option] };
    });
    setErrors(current => ({ ...current, markets: undefined }));
    setError("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const normalized = { ...values, pilots: values.pilots.map(pilot => pilot.trim()) };
    const issues = validateBooking(normalized);
    setErrors(issues);
    if (Object.keys(issues).length) {
      dialog.current?.querySelector<HTMLInputElement>(`[name="${Object.keys(issues)[0]}"]`)?.focus();
      return;
    }
    inFlight.current = true;
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/campaign-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalized),
        signal: AbortSignal.timeout(45000),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        if (result?.errors) setErrors(result.errors);
        throw new Error(result?.error || "We couldn't send your request. Please try again.");
      }
      setSuccess(true);
    } catch (failure) {
      setError(failure instanceof Error && failure.name === "TimeoutError"
        ? "The request timed out. Please try again or contact sammas@spawnpointstudio.com."
        : failure instanceof TypeError ? "Connection lost. Check your internet connection and try again."
        : failure instanceof Error ? failure.message : "We couldn't send your request. Please try again.");
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }

  return createPortal(
    <dialog ref={dialog} tabIndex={-1} aria-labelledby={success ? "booking-success-title" : "booking-title"}
      onKeyDown={event => {
        if (event.key !== "Tab") return;
        const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), [tabindex="0"]'))
          .filter(element => !(element instanceof HTMLInputElement) || element.type !== "radio" || element.checked);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first) { event.preventDefault(); event.currentTarget.focus(); return; }
        if (!focusable.includes(document.activeElement as HTMLElement) || (event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        }
      }}
      onCancel={event => { event.preventDefault(); if (!inFlight.current) onClose(); }}
      onClick={event => { if (event.target === event.currentTarget && !inFlight.current) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose(); } }}
      className="fixed inset-0 m-auto max-h-[90dvh] 2xl:max-h-[92dvh] w-[calc(100%-24px)] max-w-[1471px] overflow-x-hidden overflow-y-auto rounded-[20px] border-0 bg-[#031347] p-0 text-white shadow-2xl backdrop:bg-[#01091e]/80 backdrop:backdrop-blur-sm sm:w-[calc(100%-48px)] [font-family:RBNo31,Arial,sans-serif]">
      <div className="relative isolate flex min-h-[560px] flex-col justify-center overflow-hidden px-5 py-10 sm:min-h-[620px] sm:px-10 sm:py-12 xl:min-h-[550px] 2xl:min-h-[680px] lg:px-16 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Exported vectors retain their intrinsic dimensions; wrappers place their centers as in Figma. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("booking-pattern.svg")} alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("booking-glow.svg")} alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-40" />
        </div>
        <button type="button" onClick={onClose} disabled={sending} aria-label="Close booking popup" className="absolute top-1 md:top-3 md:right-3 right-1 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full text-3xl text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#bbfc00] disabled:opacity-40 sm:top-5 sm:right-5">&times;</button>
        {success ? <div className="flex w-full items-center justify-center" role="status">
          <h2 id="booking-success-title" ref={successTitle} tabIndex={-1} className="sr-only">Thank you! Your request has been sent.</h2>
          {videoError ? <p className="text-center text-2xl">Thank you! Your request has been sent. Our team will be in touch.</p> : <video src={asset("thank.webm")} autoPlay muted playsInline onError={() => setVideoError(true)} aria-label="Thank you for your submission" className="h-[62dvh] w-[120%] max-w-none object-contain sm:h-auto sm:w-full sm:max-w-[1100px]" />}
        </div> : <div className="mx-auto w-full max-w-[1100px]">
          <h2 id="booking-title" className="mb-7 text-center text-[25px] leading-none font-extrabold italic tracking-[0.02em] uppercase sm:mb-8 md:text-[46px] lg:mb-10 2xl:text-[50px]">Ready For Your <span className="text-[#bbfc00]">First Drop?</span></h2>
          <form onSubmit={submit} noValidate aria-busy={sending} className="text-[15px] italic tracking-[0.02em]">
            <fieldset disabled={sending} className="min-w-0 space-y-2 border-0 p-0 md:space-y-5">
              <legend className="sr-only">Your contact details and campaign choices</legend>
              <div className="grid gap-2 md:grid-cols-3 md:gap-5">
                {([{ key: "fullName", label: "Full Name *", type: "text", autoComplete: "name", max: 120 }, { key: "email", label: "Work Email *", type: "email", autoComplete: "email", max: 254 }, { key: "mobile", label: "Mobile / WhatsApp number", type: "tel", autoComplete: "tel", max: 30 }] as const).map(field => <div key={field.key}>
                  <label htmlFor={`booking-${field.key}`} className="sr-only">{field.label}</label>
                  <div className={border}><input id={`booking-${field.key}`} name={field.key} type={field.type} autoComplete={field.autoComplete} maxLength={field.max} required={field.key !== "mobile"} placeholder={field.label} value={values[field.key]} onChange={event => update(field.key, event.target.value)} aria-invalid={!!errors[field.key]} aria-describedby={errors[field.key] ? `booking-${field.key}-error` : undefined} className={input} /></div>
                  {errors[field.key] && <p id={`booking-${field.key}-error`} className="mt-2 text-sm text-red-200 not-italic">{errors[field.key]}</p>}
                </div>)}
              </div>
              <div>
                <label htmlFor="booking-brand" className="sr-only">Brand(s) you&apos;re interested in promoting</label>
                <div className={border}><input id="booking-brand" name="brand" autoComplete="organization" maxLength={200} placeholder="Brand(s) you're interested in promoting" value={values.brand} onChange={event => update("brand", event.target.value)} aria-invalid={!!errors.brand} aria-describedby={errors.brand ? "booking-brand-error" : undefined} className={input} /></div>
                {errors.brand && <p id="booking-brand-error" className="mt-2 text-sm text-red-200 not-italic">{errors.brand}</p>}
              </div>
              <div className="space-y-3">
                {([{ key: "pilots", label: "Which pilots are you interested in?", options: pilotOptions }, { key: "markets", label: "Target Market", options: markets }] as const).map(group => <fieldset key={group.key} className="flex min-w-0 flex-wrap items-center gap-3 border-0 p-0 lg:gap-5">
                  <legend className="sr-only">{group.label}</legend>
                  <span aria-hidden="true">{group.label}</span>
                  <div className="flex flex-wrap gap-1.5 md:gap-2.5">
                    {group.options.map(option => { const selected = group.key === "pilots" ? values.pilots.includes(option) : values.markets.includes(option); return <label key={option} className="relative cursor-pointer">
                      <input type="checkbox" name={group.key} value={option} checked={selected} onChange={() => group.key === "pilots" ? togglePilot(option) : toggleMarket(option)} className="peer sr-only" />
                      <span className={`flex min-h-10 items-center justify-center gap-2 rounded-full border px-2 md:px-5 py-2.5 text-[10px] md:text-[15px] leading-none peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#bbfc00] ${selected ? "border-[#bbfc00] bg-[#bbfc00] text-[#032862]" : "border-[#bbfc00]/30 bg-white/5 text-white hover:bg-white/10"}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {selected && <img src={asset("booking-check-dark.svg")} alt="" className="shrink-0" />}{option}
                      </span>
                    </label>; })}
                  </div>
                  {errors[group.key] && <p className="w-full text-sm text-red-200">{errors[group.key]}</p>}
                </fieldset>)}
                <div className="flex flex-wrap items-center gap-3 lg:gap-5">
                  <span>Your Drop</span>
                  <span className="flex md:min-h-[37px] items-center justify-center gap-1.5 rounded-full border border-[#bbfc00] bg-[#bbfc00] px-2 md:px-5 py-2 text-[10px] md:text-[15px] leading-none text-[#032862]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset("booking-check-dark.svg")} alt="" className="shrink-0" />{values.drop}
                  </span>
                </div>
              </div>
              {error && <p role="alert" className="text-base text-red-500 not-italic">{error}</p>}
              <div className="flex justify-center"><button type="submit" disabled={sending} className="flex h-12 md:mt-0 mt-6 w-[120px] md:w-[180px] cursor-pointer items-center justify-center bg-[#bbfc00] px-6 text-[16px] font-semibold text-[#031347] not-italic transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60 [font-family:CampaignBody,Arial,sans-serif]">{sending ? "Sending..." : "Submit"}</button></div>
            </fieldset>
          </form>
        </div>}
      </div>
    </dialog>, document.body,
  );
}
