"use client";

import styles from "./campaign.module.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassIcon from "./GlassIcon";
import { channels } from "./data";

export default function OneNightTwoChannels() {
  const root = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const element = viewport.current;
    const rail = track.current;
    if (!element || !rail) return;

    const mobile = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;
    let interval: number | undefined;
    let resumeTimeout: number | undefined;

    const stopAutoplay = () => {
      if (interval !== undefined) window.clearInterval(interval);
      interval = undefined;
    };

    const startAutoplay = () => {
      stopAutoplay();
      if (
        !mobile.matches ||
        reducedMotion.matches ||
        !isVisible ||
        document.hidden
      ) {
        return;
      }

      interval = window.setInterval(() => {
        const cards = Array.from(rail.children) as HTMLElement[];
        if (cards.length < 2) return;

        const viewportLeft = element.getBoundingClientRect().left;
        const currentIndex = cards.reduce(
          (closestIndex, card, index) =>
            Math.abs(card.getBoundingClientRect().left - viewportLeft) <
            Math.abs(
              cards[closestIndex].getBoundingClientRect().left - viewportLeft,
            )
              ? index
              : closestIndex,
          0,
        );
        const nextCard = cards[(currentIndex + 1) % cards.length];
        const targetLeft =
          element.scrollLeft +
          nextCard.getBoundingClientRect().left -
          viewportLeft;

        element.scrollTo({
          left: targetLeft,
          behavior: "smooth",
        });
      }, 1500);
    };

    const pauseForInteraction = () => {
      stopAutoplay();
      if (resumeTimeout !== undefined) window.clearTimeout(resumeTimeout);
      resumeTimeout = window.setTimeout(startAutoplay, 5000);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (!isVisible && resumeTimeout !== undefined) {
        window.clearTimeout(resumeTimeout);
        resumeTimeout = undefined;
      }
      startAutoplay();
    });
    observer.observe(element);

    mobile.addEventListener("change", startAutoplay);
    reducedMotion.addEventListener("change", startAutoplay);
    document.addEventListener("visibilitychange", startAutoplay);
    element.addEventListener("pointerdown", pauseForInteraction);
    element.addEventListener("keydown", pauseForInteraction);

    return () => {
      stopAutoplay();
      if (resumeTimeout !== undefined) window.clearTimeout(resumeTimeout);
      observer.disconnect();
      mobile.removeEventListener("change", startAutoplay);
      reducedMotion.removeEventListener("change", startAutoplay);
      document.removeEventListener("visibilitychange", startAutoplay);
      element.removeEventListener("pointerdown", pauseForInteraction);
      element.removeEventListener("keydown", pauseForInteraction);
    };
  }, []);

  useEffect(() => {
    const element = viewport.current;
    const progressBar = progress.current;
    if (!element || !progressBar) return;

    const mobile = window.matchMedia("(max-width: 767px)");
    const updateProgress = () => {
      if (!mobile.matches) return;
      const maxScroll = element.scrollWidth - element.clientWidth;
      progressBar.style.transform = `scaleX(${
        maxScroll > 0 ? element.scrollLeft / maxScroll : 0
      })`;
    };

    const resizeObserver = new ResizeObserver(updateProgress);
    resizeObserver.observe(element);
    element.addEventListener("scroll", updateProgress, { passive: true });
    mobile.addEventListener("change", updateProgress);
    updateProgress();

    return () => {
      resizeObserver.disconnect();
      element.removeEventListener("scroll", updateProgress);
      mobile.removeEventListener("change", updateProgress);
    };
  }, []);

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
