"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { asset } from "./data";
import styles from "./campaign.module.css";

export default function CampaignVideo({ src, poster, label, priority = false }: { src?: string; poster: string; label: string; priority?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const manuallyPaused = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !motion.matches && !manuallyPaused.current && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.15 });
    const pause = () => { if (document.hidden || motion.matches) video.pause(); };
    observer.observe(video);
    document.addEventListener("visibilitychange", pause);
    motion.addEventListener("change", pause);
    return () => { observer.disconnect(); video.pause(); document.removeEventListener("visibilitychange", pause); motion.removeEventListener("change", pause); };
  }, [src]);

  return <div className={styles.media}>
    {src && !failed ? <>
      <video ref={ref} src={src} poster={asset(poster)} muted loop playsInline preload="none" aria-label={label} onError={() => setFailed(true)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      <button className={styles.playback} aria-label={`${playing ? "Pause" : "Play"} ${label}`} onClick={() => {
        const video = ref.current;
        if (!video) return;
        manuallyPaused.current = !video.paused;
        if (video.paused) void video.play().catch(() => {}); else video.pause();
      }}>{playing ? "Pause film" : "Play film"}</button>
    </> : <Image src={asset(poster)} alt={label} fill sizes="(max-width: 767px) 100vw, 75vw" priority={priority} />}
  </div>;
}
