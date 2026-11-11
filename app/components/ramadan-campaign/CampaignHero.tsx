"use client";

import styles from "./campaign.module.css";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CampaignVideo from "./CampaignVideo";
import GlassIcon from "./GlassIcon";
import { asset } from "./data";

export default function CampaignHero({ film }: { film?: string }) {
  const root = useRef<HTMLElement>(null);
  const filmFrame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = root.current;
    const frame = filmFrame.current;
    if (!section || !frame) return;
    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const icons = section.querySelectorAll<HTMLElement>("[data-float]");
        icons.forEach((icon, i) => {
          gsap.to(icon, {
            y: -12,
            duration: 2.8 + i * 0.35,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          gsap.to(icon.firstElementChild, {
            rotation: 360,
            duration: 55 + i * 9,
            repeat: -1,
            ease: "none",
          });
        });
      },
      section,
    );
    mm.add(
      "(min-width: 768px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)",
      () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            id: "ramadan-film",
            trigger: section,
            start: "bottom bottom",
            end: () => `+=${window.innerHeight * 1.4}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        timeline.to({}, { duration: 0.12 });
        timeline.to(
          section.querySelectorAll("[data-hero-art]"),
          { opacity: 0, duration: 0.3, ease: "none" },
          0.12,
        );
        timeline.to(
          frame,
          {
            width: "100%",
            height: () =>
              Math.min(window.innerHeight, (window.innerWidth * 9) / 16),
            top: () => {
              const height = Math.min(
                window.innerHeight,
                (window.innerWidth * 9) / 16,
              );
              const pinOffset = Math.max(
                0,
                section.offsetHeight - window.innerHeight,
              );
              return pinOffset + (window.innerHeight - height) / 2;
            },
            borderRadius: 0,
            duration: 0.88,
            ease: "none",
          },
          0.12,
        );
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
      id="films"
      className={styles.hero}
      aria-labelledby="campaign-title"
    >
      <div className={styles.heroPattern} aria-hidden="true" />
      <div className={styles.heroGlow} aria-hidden="true" />
      <h1 id="campaign-title" className={styles.heroTitle} data-hero-art>
        <span>Ramadan</span>
        <span>
          <em>Night</em> Drops
        </span>
      </h1>
      <p className={styles.heroIntro} data-hero-art>
        Ramadan offer, dropped into the live streams and games the UAE and KSA
        play after iftar. Bought programmatically, measured every night.
      </p>
      <div className={styles.heroCharacter} data-hero-art>
        <Image
          src={asset("hero-cutout.png")}
          alt="Spawn Point gaming character"
          width={764}
          height={699}
          priority
          sizes="(max-width: 767px) 62vw, 40vw"
        />
      </div>
      <div className={styles.heroSquare} data-float data-hero-art>
        <GlassIcon shape="square" />
      </div>
      <div className={styles.heroTriangle} data-float data-hero-art>
        <GlassIcon shape="triangle" />
      </div>
      <div className={styles.heroCircle} data-float data-hero-art>
        <GlassIcon shape="circle" />
      </div>
      <div className={styles.heroCross} data-float data-hero-art>
        <GlassIcon shape="cross" />
      </div>
      <div className={styles.filmFrame} ref={filmFrame} data-video-frame>
        <CampaignVideo
          src={film}
          poster="film-reference.png"
          label="Ramadan Night Drops campaign film"
          priority
          autoPlay
        />
      </div>
      <div className={styles.heroLeftHand} data-hero-art aria-hidden="true">
        <Image
          src={asset("hero-hand-left.png")}
          alt=""
          width={159}
          height={129}
          priority
          sizes="9vw"
        />
      </div>
      <div className={styles.heroRightHand} data-hero-art aria-hidden="true">
        <Image
          src={asset("hero-hand-right.png")}
          alt=""
          width={121}
          height={81}
          priority
          sizes="7vw"
        />
      </div>
    </section>
  );
}
