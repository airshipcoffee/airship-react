import type { Meta, StoryObj } from "@storybook/react";

import { Menu as Component } from "./Menu";

const meta = {
  title: "Components/Menu",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Menu: Story = {
  args: {
    items: [
      {
        text: "Shop",
      },
      {
        text: "Subscription",
      },
      {
        text: "Locations",
      },
      {
        text: "About",
      },
    ],
  },
};
