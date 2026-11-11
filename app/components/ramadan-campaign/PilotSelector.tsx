"use client";

import Image from "next/image";
import { useState } from "react";
import { asset, categories } from "./data";
import GlassIcon from "./GlassIcon";
import styles from "./campaign.module.css";

export default function PilotSelector() {
  const [market, setMarket] = useState("Saudi Arabia");
  const [pilot, setPilot] = useState("Livestream + in-game");
  const [drop, setDrop] = useState("Night Meal");
  const combined = pilot === "Livestream + in-game";
  const referencePackage = combined && market === "Saudi Arabia";
  const subject = encodeURIComponent(`Ramadan Night Drops — ${market} — ${pilot} — ${drop}`);
  const choices = [
    { legend: "Market", value: market, values: ["Saudi Arabia", "UAE"], select: setMarket },
    { legend: "Pilot", value: pilot, values: ["Livestream", "Livestream + in-game"], select: setPilot },
    { legend: "Your drop", value: drop, values: categories.map(category => category.short), select: setDrop },
  ];
  return <section className={`${styles.section} ${styles.pilot}`} id="pilots" aria-labelledby="pilot-title">
    <div className={styles.container}>
      <GlassIcon shape="cross" className={styles.pilotCross} />
      <h2 id="pilot-title">Choose your <em>pilot</em></h2>
      <div className={styles.selectors}>{choices.map(choice => <fieldset key={choice.legend}>
        <legend>{choice.legend}</legend><div className={styles.choiceGroup}>{choice.values.map(value => <label key={value}><input type="radio" name={choice.legend} value={value} checked={choice.value === value} onChange={() => choice.select(value)} /><span>{value}</span></label>)}</div>
      </fieldset>)}</div>
      <div className={styles.pilotCard} aria-live="polite">
        <div className={styles.pilotDetails}>
          <h3>{combined ? "Combined gaming" : "Livestream"} pilot,<br />{market}</h3>
          {referencePackage ? <div className={styles.pilotFacts}><p>150,000 guaranteed livestream impressions</p><p>1,500 guaranteed clicks</p><p>1.75M guaranteed viewable in-game impressions, 2 to 4 weeks</p><p>{drop === "Night Meal" ? "The Night Meal: one evening window after iftar, in nights 1 to 20" : `${drop}: offer and timing agreed with your team`}</p></div> : <div className={styles.pilotFacts}><p>{pilot} in {market}</p><p>{drop}</p><p>Creator mix, delivery and timing agreed with your team.</p><p>Request a tailored pilot proposal.</p></div>}
          <p className={styles.limeNote}>Lead with the value of the offer: a strong, exclusive deal wins.</p>
        </div>
        <div className={styles.pilotPrice}><div><strong>{referencePackage ? "US$16,000" : "Let’s talk"}</strong><p>{referencePackage ? "In-stream and in-game, one market" : "A pilot tailored to your market and channel"}</p></div><a className={`${styles.cta} ${styles.darkCta}`} href={`mailto:sammas@spawnpointstudio.com?subject=${subject}`}>Book This Drop</a></div>
        <div className={styles.pilotCharacter} aria-hidden="true"><Image src={asset("character-pilot.png")} alt="" width={1024} height={1536} sizes="20vw" /></div>
      </div>
      <GlassIcon shape="triangle" className={styles.pilotTriangle} />
    </div>
  </section>;
}
