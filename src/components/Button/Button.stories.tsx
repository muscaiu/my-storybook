import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      name: "button_text",
      defaultValue: "Button",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  chevron: "none",
  size: "medium",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  size: "medium",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  type: "white",
  chevron: "none",
  size: "large",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  type: "white",
  chevron: "none",
  size: "small",
  children: "Button",
};
