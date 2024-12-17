import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: "Dark", value: "#230903" },
        { name: "Light", value: "#ffffff" },
      ],
      default: "Light",
    },
  },
};

export default preview;
