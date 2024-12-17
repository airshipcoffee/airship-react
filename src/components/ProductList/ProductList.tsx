import { FC } from "react";
import {
  ProductCard,
  ProductCardProps,
  TasteProfile,
} from "../ProductCard/ProductCard";
import classNames from "classnames";

import Styles from "./ProductList.module.scss";

export interface ProductListProps {
  products: ProductCardProps[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  const productsByProfile: Record<TasteProfile, ProductCardProps[]> =
    products.reduce(
      (r, p) => ({
        ...r,
        [p.profile]: [...(r[p.profile] ?? []), p],
      }),
      {} as Record<TasteProfile, ProductCardProps[]>
    );
  return (
    <section>
      {Object.entries(productsByProfile).map(([profile, products]) => (
        <section
          className={classNames(Styles.productList__section, {
            [Styles["productList__sectionList--dark-and-roasty"]]:
              profile === TasteProfile.DARK_AND_ROASTY,
            [Styles["productList__sectionList--sweet-and-balanced"]]:
              profile === TasteProfile.SWEET_AND_BALANCED,
            [Styles["productList__sectionList--herbs-and-spice"]]:
              profile === TasteProfile.HERBS_AND_SPICE,
            [Styles["productList__sectionList--fruity-and-floral"]]:
              profile === TasteProfile.FRUITY_AND_FLORAL,
          })}
        >
          <header className={Styles.productList__sectionHeader}>
            <h2>{profile}</h2>
          </header>
          <section className={Styles.productList__sectionList}>
            {products.map((product) => (
              <ProductCard {...product} />
            ))}
          </section>
        </section>
      ))}
    </section>
  );
};
