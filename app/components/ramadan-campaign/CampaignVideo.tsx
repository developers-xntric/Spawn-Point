"use client";

import styles from "./campaign.module.css";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { asset } from "./data";

export default function CampaignVideo({ src, poster, label, priority = false, autoPlay = false }: { src?: string; poster: string; label: string; priority?: boolean; autoPlay?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const manuallyPaused = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (autoPlay) {
      const syncMotionPreference = () => {
        if (motion.matches) video.pause();
        else void video.play().catch(() => {});
      };
      syncMotionPreference();
      motion.addEventListener("change", syncMotionPreference);
      return () => {
        video.pause();
        motion.removeEventListener("change", syncMotionPreference);
      };
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !motion.matches && !manuallyPaused.current && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.15 });
    const pause = () => { if (document.hidden || motion.matches) video.pause(); };
    observer.observe(video);
    document.addEventListener("visibilitychange", pause);
    motion.addEventListener("change", pause);
    return () => { observer.disconnect(); video.pause(); document.removeEventListener("visibilitychange", pause); motion.removeEventListener("change", pause); };
  }, [autoPlay, src]);

  return <div className={styles.media}>
    {src && !failed ? <>
      <video ref={ref} src={src} poster={asset(poster)} muted loop playsInline preload="none" aria-label={label} onError={() => setFailed(true)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    </> : <Image src={asset(poster)} alt={label} fill sizes="(max-width: 767px) 100vw, 75vw" priority={priority} />}
  </div>;
}
