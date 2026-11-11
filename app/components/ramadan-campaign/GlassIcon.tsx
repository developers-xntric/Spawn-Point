import styles from "./campaign.module.css";
import Image from "next/image";
import { asset } from "./data";

export type GlassShape = "square" | "triangle" | "cross" | "circle";

export default function GlassIcon({
  shape,
  className = "",
}: {
  shape: GlassShape;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`${styles.glassIcon} ${className}`}>
      <Image
        src={asset(`glass-${shape}.png`)}
        alt=""
        width={150}
        height={150}
        sizes="(max-width: 767px) 48px, 120px"
      />
    </span>
  );
}
