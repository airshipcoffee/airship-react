import type { Meta, StoryObj } from "@storybook/react";

import { ProductList as Component } from "./ProductList";
import { TasteProfile } from "../ProductCard/ProductCard";

const meta = {
  title: "Components/Product List",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductList: Story = {
  args: {
    products: [
      {
        name: "Night Moves",
        tastingNotes: ["Dark Chocolate", "Molasses", "Black Cherry"],
        roast: 4,
        profile: TasteProfile.DARK_AND_ROASTY,
        basePrice: 12,
      },
      {
        name: "Buffalo Blend",
        tastingNotes: ["Vanilla", "Brown Sugar", "Caramel"],
        roast: 2,
        profile: TasteProfile.SWEET_AND_BALANCED,
        basePrice: 12,
      },
      {
        name: "Black Bear Blend",
        tastingNotes: ["Smoked Plums", "Dark Chocolate", "Roasted Walnuts"],
        roast: 3,
        profile: TasteProfile.DARK_AND_ROASTY,
        basePrice: 12,
      },
      {
        name: "Ho-Ho-Holiday Blend",
        tastingNotes: ["Roasted Pecan", "Fruitcake", "Cocoa"],
        roast: 3,
        profile: TasteProfile.DARK_AND_ROASTY,
        basePrice: 13,
      },
      {
        name: "Colombia - Sugar Cane Decaf",
        tastingNotes: ["Brown Sugar", "Toffee", "Plum"],
        roast: 3,
        profile: TasteProfile.SWEET_AND_BALANCED,
        basePrice: 12,
      },
      {
        name: "Costa Rica Laguna Anaerobic",
        tastingNotes: ["Strawberry", "Lemon", "Sugar Cane"],
        roast: 1,
        profile: TasteProfile.FRUITY_AND_FLORAL,
        basePrice: 18,
      },
      {
        name: "Palestina Gesha Natural",
        tastingNotes: ["Red Cherry", "Cranberry", "Vanilla"],
        roast: 1,
        profile: TasteProfile.FRUITY_AND_FLORAL,
        basePrice: 25,
      },
      {
        name: "Costa Rica Hermanos Robles",
        tastingNotes: ["Black Cherry", "Lime", "Milk Chocolate"],
        roast: 2,
        profile: TasteProfile.FRUITY_AND_FLORAL,
        basePrice: 16,
      },
      {
        name: "Ethiopia - Kochere",
        tastingNotes: ["Floral", "Chocolate", "Blueberry"],
        roast: 1,
        profile: TasteProfile.FRUITY_AND_FLORAL,
        basePrice: 14,
      },
      {
        name: "Colombia Passionfruit",
        tastingNotes: ["Passionfruit", "Lychee", "Lime"],
        roast: 3,
        profile: TasteProfile.FRUITY_AND_FLORAL,
        basePrice: 18,
      },
      {
        name: "Santa Cruz Nicaragua COE",
        tastingNotes: ["Mango", "Raisin", "Chocolate"],
        roast: 3,
        profile: TasteProfile.FRUITY_AND_FLORAL,
        basePrice: 24,
      },
      {
        name: "Black Apple Espresso",
        tastingNotes: ["Juicy Orange", "Red Cherry", "Dark Chocolate"],
        roast: 4,
        profile: TasteProfile.HERBS_AND_SPICE,
        basePrice: 13,
      },
      {
        name: "Peru - Lima Norte",
        tastingNotes: ["Golden Delicious Apple", "Macadamia Nut", "Cocoa"],
        roast: 3,
        profile: TasteProfile.HERBS_AND_SPICE,
        basePrice: 11,
      },
      {
        name: "Sumatra Lake Toba Caldera",
        tastingNotes: ["Dark Chocolate", "Pine", "Brown Sugar"],
        roast: 4,
        profile: TasteProfile.HERBS_AND_SPICE,
        basePrice: 13,
      },
    ],
  },
};
