import type { Meta, StoryObj } from "@storybook/react";

import { Gauge as Component } from "./Gauge";

const meta = {
  title: "Components/Gauge",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Guage: Story = {
  args: {
    label: "Medium Bold",
    measurement: 4,
  },
};
