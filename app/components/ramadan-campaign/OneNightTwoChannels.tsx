"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassIcon from "./GlassIcon";
import { channels } from "./data";
import styles from "./campaign.module.css";

export default function OneNightTwoChannels() {
  const root = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = root.current,
      rail = track.current,
      windowElement = viewport.current;
    if (!section || !rail || !windowElement) return;
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)",
      () => {
        windowElement.scrollLeft = 0;
        const distance = () =>
          Math.max(0, rail.scrollWidth - windowElement.clientWidth);
        const tween = gsap.to(rail, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            id: "ramadan-channels",
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progress.current)
                progress.current.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
        trigger.current = tween.scrollTrigger ?? null;
        return () => {
          trigger.current = null;
          if (progress.current) progress.current.style.transform = "scaleX(0)";
        };
      },
      section,
    );
    let active = true;
    void document.fonts.ready.then(() => {
      if (active) ScrollTrigger.refresh();
    });
    return () => {
      active = false;
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className={styles.channels}
      id="how-it-works"
      aria-labelledby="channels-title"
    >
      <div className={styles.container}>
        <GlassIcon shape="cross" className={styles.channelCross} />
        <GlassIcon shape="circle" className={styles.channelCircle} />
        <div className={styles.sectionHeading}>
          <h2 id="channels-title">
            One night,
            <br />
            <em>two channels</em>
          </h2>
          <p>
            Your offer lives where the audience already is after iftar: as an
            overlay inside creators’ live streams on Twitch, YouTube and Kick,
            and on billboards and screens inside the games they play. Move
            across the night to open each hour.
          </p>
        </div>
        <div
          className={styles.channelViewport}
          ref={viewport}
          tabIndex={0}
          role="region"
          aria-label="The five stages of a Ramadan night. Use left and right arrow keys to explore."
          onKeyDown={(event) => {
            if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
            event.preventDefault();
            const direction = event.key === "ArrowRight" ? 1 : -1;
            const current = trigger.current;
            if (current)
              window.scrollTo({
                top: Math.max(
                  current.start,
                  Math.min(
                    current.end,
                    window.scrollY +
                      (direction * (current.end - current.start)) /
                        (channels.length - 1),
                  ),
                ),
                behavior: "instant",
              });
            else
              viewport.current?.scrollBy({
                left: direction * viewport.current.clientWidth,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              });
          }}
        >
          <div className={styles.channelTrack} ref={track}>
            {channels.map((channel, index) => (
              <article
                key={channel.title}
                className={`${styles.channelCard} ${index === 0 ? styles.firstCard : ""}`}
              >
                <span className={styles.outlineTitle} aria-hidden="true">
                  {channel.title}
                </span>
                <h3>{channel.title}</h3>
                <p>{channel.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.scrollProgress} aria-hidden="true">
          <span ref={progress} />
        </div>
        <p className={styles.swipeHint}>Swipe to explore the night →</p>
      </div>
    </section>
  );
}
