"use client";

import styles from "./campaign.module.css";

import Image from "next/image";
import { useEffect, useRef } from "react";
import CampaignHero from "./CampaignHero";
import GamingOffersSection from "./GamingOffersSection";
import OneNightTwoChannels from "./OneNightTwoChannels";
import PilotSelector from "./PilotSelector";
import GlassIcon from "./GlassIcon";
import { asset, categories, proof, type CampaignMedia } from "./data";

function Header() {
  return (
    <header className={styles.campaignHeader}>
      <a
        href="#top"
        className={styles.brand}
        aria-label="Spawn Point campaign home"
      >
        <Image
          src={asset("campaign-logo.svg")}
          alt="Spawn Point"
          width={123}
          height={86}
          priority
        />
      </a>
      <nav className={styles.campaignNav} aria-label="Campaign navigation">
        {[
          ["The Films", "films"],
          ["How It Works", "how-it-works"],
          ["What We Drop", "offers"],
          ["Results", "results"],
          ["Pilots", "pilots"],
        ].map(([label, id]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
      <a href="#pilots" className={styles.headerCta}>
        Book A Pilot
      </a>
    </header>
  );
}

function Results() {
  return (
    <section className={styles.results} aria-labelledby="audience-title">
      <div className={styles.container}>
        <h2 id="audience-title">
          The night
          <br />
          <em>moved online</em>
        </h2>
        <div className={styles.audienceGrid}>
          <div className={styles.resultLead}>
            <strong data-count="33.7" data-suffix="M">33.7<span className={styles.metricSuffix} data-count-suffix>M</span></strong>
            <p>
              Gamers across the GCC in 2023, and still growing: 38.9 million are
              forecast by 2028. After iftar they go straight to the streams, the
              games and the creators they follow.
            </p>
            <span className={styles.source}>
              Source: Niko Partners × Saudi Esports Federation, 2024
            </span>
          </div>
          <div className={styles.audienceChart}>
            <p>
              Gaming app installs during Ramadan 2025, against the 2025 average.
            </p>
            <span className={styles.source}>
              Source: Adjust, Ramadan app trends 2026
            </span>
            <div className={styles.columns} data-columns>
              <div className={styles.column}>
                <Image
                  src={asset("saudi-column.svg")}
                  alt=""
                  width={390}
                  height={673}
                />
                <div>
                  <strong data-count="32" data-prefix="+" data-suffix="%">+32%</strong>
                  <span>Saudi Arabia</span>
                </div>
              </div>
              <div className={styles.column}>
                <Image
                  src={asset("uae-column.svg")}
                  alt=""
                  width={390}
                  height={478}
                />
                <div>
                  <strong data-count="24" data-prefix="+" data-suffix="%">+24%</strong>
                  <span>UAE</span>
                </div>
              </div>
            </div>
            <Image
              className={styles.standingCharacter}
              src={asset("character-standing.png")}
              alt=""
              width={650}
              height={1000}
              sizes="25vw"
            />
          </div>
        </div>
        <GlassIcon shape="square" className={styles.resultSquare} />
        <GlassIcon shape="triangle" className={styles.resultTriangle} />
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className={styles.categories} aria-labelledby="categories-title">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <h2 id="categories-title">
            A drop for
            <br />
            <em>your category</em>
          </h2>
          <p>
            One offer, one market, one checkout path, built around your real
            priority. Offer values are agreed with you and funded by you.
          </p>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((item) => (
            <article className={styles.categoryCard} key={item.name}>
              <Image
                src={asset(item.image)}
                alt=""
                width={560}
                height={430}
                sizes="(max-width: 1023px) 44vw, 21vw"
              />
              <h3>{item.name}</h3>
              <small>{item.sector}</small>
              <p>{item.text}</p>
              <i>{item.action}</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const hours = [
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
  "12am",
  "1am",
  "2am",
  "3am",
];
const clicks = [310, 640, 980, 1240, 1120, 860, 540, 320, 170];

function Dashboard() {
  return (
    <section
      className={styles.dashboard}
      id="results"
      aria-labelledby="report-title"
    >
      <div className={styles.container}>
        <GlassIcon shape="cross" className={styles.dashboardCross} />
        <div className={styles.dashboardHeading}>
          <h2 id="report-title">
            What you see, <em>every night</em>
          </h2>
          <div className={styles.reportIntro}>
            <p>
              Valid impressions, clicks and code use from the streams. Viewable
              impressions and reach from the games. Orders, net sales, CPA and
              ROAS when your data is connected. A daily read by creator, game
              and market.
            </p>
            <p>
              We guarantee delivery and clicks, not sales, ROAS or profit. What
              we need from you: one offer and its terms, unique codes or links
              per creator, daily order data with no customer names, and creative
              approvals.
            </p>
          </div>
        </div>
        <div className={styles.dashboardStage}>
          <Image
            src={asset("character-reclining.png")}
            className={styles.dashboardCharacter}
            alt=""
            width={1024}
            height={341}
            sizes="55vw"
          />
          <GlassIcon shape="triangle" className={styles.dashboardTriangle} />
          <div className={styles.dashboardFrame}>
            <h3>Night 12 · Saudi Arabia</h3>
            <div className={styles.dashboardMetrics}>
              {[
                ["Ad views", "412,000"],
                ["Clicks", "6,180"],
                ["Engagement", "3.2%"],
                ["Tracked purchases", "1,284"],
              ].map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong data-count={value.replace(/[^0-9.]/g, "")} data-prefix={value.startsWith("+") ? "+" : ""} data-suffix={value.replace(/[0-9.]/g, "")}>{value}</strong>
                </article>
              ))}
            </div>
            <p className={styles.chartCaption}>
              Clicks by hour, Riyadh time. They peak at 10pm, two hours after
              the drop opens.
            </p>
            <div
              className={styles.hourChart}
              role="img"
              aria-label={hours
                .map((hour, index) => `${hour}: ${clicks[index]} clicks`)
                .join(", ")}
            >
              {hours.map((hour, index) => (
                <div className={styles.hour} key={hour} aria-hidden="true">
                  <b>{clicks[index].toLocaleString("en-US")}</b>
                  <i style={{ height: `${(clicks[index] / 1240) * 72}%` }} />
                  <span>{hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.proofGrid}>
          <article className={styles.proofLead}>
            <strong>Proof, not promises</strong>
            <p>
              Results from Spawn Point studio&apos;s credentials, anonymised
              evidence of experience, not a forecast for Ramadan Night Drops.
            </p>
          </article>
          {proof.map(([value, label, detail]) => (
            <article key={label}>
              <strong data-count={value.replace(/[^0-9.]/g, "")} data-prefix={value.startsWith("+") ? "+" : ""} data-suffix={value.replace(/[0-9.]/g, "")}>{value}</strong>
              <div>
                <p>{label}</p>
                <small>{detail}</small>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.proofNotes}>
          <p>
            Across 75+ campaigns we have activated 30+ gaming platforms and
            1,200+ creators, with 1.1B+ verified gaming impressions.
          </p>
          <p>
            In the wider market, a published Domino&apos;s Pizza Days livestream
            campaign reached 800K+ video views at a 4.52% click-through rate
            across 321 streamers. That is a public case study, market not
            disclosed, and not a Spawn Point result.
          </p>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <>
      <section className={styles.steps}>
        <div className={styles.container}>
          <h2>
            Four steps to <em>your first drop</em>
          </h2>
          <p>
            In the wider market, a published Domino&apos;s Pizza Days livestream
            campaign reached 800K+ video views at a 4.52% click-through rate
            across 321 streamers. That is a public case study, market not
            disclosed, and not a Spawn Point result.
          </p>
          <a
            href="mailto:sammas@spawnpointstudio.com?subject=Ramadan%20Night%20Drops%20brief"
            className={styles.cta}
          >
            Send Your Brief
          </a>
          <GlassIcon shape="circle" className={styles.closingCircle} />
        </div>
      </section>
      <footer className={styles.campaignFooter}>
        <div className={styles.container}>
          <div className={styles.footerContacts}>
            {[
              [
                "website-icon.svg",
                "https://spawnpointstudio.com",
                "spawnpointstudio.com",
              ],
              ["phone-icon.svg", "tel:+971566161405", "+971 56 616 1405"],
              [
                "email-icon.svg",
                "mailto:sammas@spawnpointstudio.com",
                "sammas@spawnpointstudio.com",
              ],
            ].map(([icon, href, label]) => (
              <a href={href} key={icon}>
                <Image src={asset(icon)} alt="" width={55} height={55} />
                {label}
              </a>
            ))}
          </div>
          <Image src="/Spawnpoint_name.svg" alt="Spawn Point" width={620} height={80} className={styles.footerWord} />
          <small>© ALL RIGHTS RESERVED, SPAWNPOINTSTUDIO 2026</small>
          <a href="#top" className={styles.backToTop} aria-label="Back to top">
            <Image
              src={asset("back-to-top.svg")}
              alt=""
              width={55}
              height={55}
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default function RamadanCampaignPage({
  media,
}: {
  media: CampaignMedia;
}) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const scope = root.current; if (!scope) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return; const element = entry.target as HTMLElement; const target = Number(element.dataset.count); const prefix = element.dataset.prefix || ""; const suffix = element.dataset.suffix || ""; const suffixElement = element.querySelector<HTMLElement>("[data-count-suffix]"); const valueNode = suffixElement?.previousSibling; const start = performance.now();
      const render = (now: number) => { const progress = Math.min(1, (now - start) / 1500); const value = target * (1 - Math.pow(1 - progress, 3)); const formattedValue = `${prefix}${target % 1 ? value.toFixed(1) : Math.round(value).toLocaleString("en-US")}`; if (suffixElement && valueNode) valueNode.textContent = formattedValue; else element.textContent = `${formattedValue}${suffix}`; if (progress < 1) requestAnimationFrame(render); }; requestAnimationFrame(render);
    }), { threshold: 0.45 }); scope.querySelectorAll("[data-count]").forEach(element => observer.observe(element));
    const columnObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { const element = entry.target as HTMLElement; element.dataset.reveal = "false"; requestAnimationFrame(() => { element.dataset.reveal = "true"; }); } }), { threshold: 0.3 }); scope.querySelectorAll("[data-columns]").forEach(element => columnObserver.observe(element)); return () => { observer.disconnect(); columnObserver.disconnect(); };
  }, []);
  return (
    <main ref={root} id="top" className={styles.page}>
      <Header />
      <CampaignHero film={media.film} />
      <Results />
      <OneNightTwoChannels />
      <GamingOffersSection media={media} />
      <Categories />
      <Dashboard />
      <PilotSelector />
      <Closing />
    </main>
  );
}
