import type { Meta, StoryObj } from "@storybook/react";

import { ProductCard as Component, TasteProfile } from "./ProductCard";

const meta = {
  title: "Components/Product Card",
  component: Component,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {
  args: {
    name: "Night Moves",
    tastingNotes: ["Dark Chocolate", "Molasses", "Black Cherry"],
    roast: 5,
    profile: TasteProfile.DARK_AND_ROASTY,
    basePrice: 12,
  },
};
