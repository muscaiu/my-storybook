import React from "react";
import ThemeProvider from "../src/styles/config/theme-provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  options: {
    storySort: {
      order: ["Intro", "Components"],
    },
  },
};

export const decorators = [
  (Story) => {
    console.log("Story:", Story);

    return (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    );
  },
];
