import { FC } from "react";

import Styles from "./ProductCard.module.scss";
import { Gauge } from "../Gauge/Gauge";
import { USDollar } from "../../utils/currency";

export enum TasteProfile {
  SWEET_AND_BALANCED = "Sweet & Balanced",
  FRUITY_AND_FLORAL = "Fruity & Floral",
  HERBS_AND_SPICE = "Herbs & Spice",
  DARK_AND_ROASTY = "Dark & Roasty",
}

export const RoastNames = {
  1: "Light",
  2: "Medium Light",
  3: "Medium",
  4: "Medium Dark",
  5: "Dark",
};

export interface ProductCardProps {
  name: string;
  tastingNotes: string[];
  roast: 1 | 2 | 3 | 4 | 5;
  profile: TasteProfile;
  basePrice: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  name,
  tastingNotes,
  roast,
  profile,
  basePrice,
}) => (
  <article className={Styles.productCard}>
    <header>
      <h3 className={Styles.productCard__name}>{name}</h3>
    </header>
    <section className={Styles.productCard__content}>
      <div>
        <p>{tastingNotes.join(" • ")}</p>
        <Gauge label={`${RoastNames[roast]} Roast`} measurement={roast} />
      </div>
      <p className={Styles.productCard__base_price}>
        From {USDollar.format(basePrice)}
      </p>
    </section>
  </article>
);
