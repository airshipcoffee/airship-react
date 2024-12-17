import { FC } from "react";

import Styles from "./Gauge.module.scss";

interface GaugeProps {
  label: string;
  measurement: number;
}

export const Gauge: FC<GaugeProps> = ({ label, measurement }) => (
  <figure className={Styles.gauge}>
    <div className={Styles.gauge__label}>{label}</div>
    <div className={Styles.gauge__indicator}>
      <div style={{ left: `calc(${20 * measurement - 10}% - 6px)` }}>
        <svg width={12} viewBox="0 0 20 20">
          <polygon points="0,0 20,0 10,20" fill="currentColor" />
        </svg>
      </div>
    </div>
    <div className={Styles.gauge__measurement}>
      {[1, 2, 3, 4, 5].map(() => (
        <span></span>
      ))}
    </div>
    <figcaption>
      This figure displays gauges indicating that this coffee has a {label} that
      is a {measurement} on a 5 point scale.
    </figcaption>
  </figure>
);
