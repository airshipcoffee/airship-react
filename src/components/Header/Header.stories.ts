import type { Meta, StoryObj } from "@storybook/react";

import { Header as Component } from "./Header";

const meta = {
  title: "Components/Header",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {},
};
