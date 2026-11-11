"use client";

import { useRef, useState } from "react";
import CampaignVideo from "./CampaignVideo";
import GlassIcon from "./GlassIcon";
import { offers, type CampaignMedia } from "./data";
import styles from "./campaign.module.css";

export default function GamingOffersSection({ media }: { media: CampaignMedia }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  return <section className={`${styles.section} ${styles.offers}`} id="offers" aria-labelledby="offers-title">
    <div className={styles.container}>
      <h2 id="offers-title">One offer,<br /><em>two ways into gaming</em></h2>
      <p className={styles.offersIntro}>Your Ramadan offer in two places at once, bought programmatically and reported every night. Point at a service to see it working.</p>
      <div className={styles.offerLayout}>
        <div className={styles.tabs} role="tablist" aria-label="Gaming channels" aria-orientation="vertical">
          {offers.map((offer, index) => <button key={offer.label} ref={element => { tabs.current[index] = element; }} type="button" role="tab" id={`offer-tab-${index}`} aria-controls={`offer-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1}
            onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}
            onKeyDown={event => {
              let next = index;
              if (["ArrowDown", "ArrowRight"].includes(event.key)) next = (index + 1) % offers.length;
              else if (["ArrowUp", "ArrowLeft"].includes(event.key)) next = (index + offers.length - 1) % offers.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = offers.length - 1;
              else return;
              event.preventDefault(); setActive(next); tabs.current[next]?.focus();
            }}><GlassIcon shape={offer.icon} /><span>{offer.label} <em>{offer.accent}</em></span></button>)}
        </div>
        <div className={styles.offerPanels}>
          {offers.map((offer, index) => <div key={offer.label} role="tabpanel" id={`offer-panel-${index}`} aria-labelledby={`offer-tab-${index}`} hidden={active !== index} tabIndex={0} className={styles.offerPanel}>
            {active === index && <>
              <div className={styles.offerMedia}><CampaignVideo src={"media" in offer ? media[offer.media] : undefined} poster={offer.poster} label={`${offer.label} ${offer.accent} campaign example`} /></div>
              <h3>{offer.title} <em>{offer.titleAccent}</em></h3>
              {offer.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </>}
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
