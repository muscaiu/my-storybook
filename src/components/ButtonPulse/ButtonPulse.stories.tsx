import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import ButtonPulse, { ButtonPulseProps } from "./ButtonPulse";

export default {
  title: "Components/ButtonPulse",
  component: ButtonPulse,
  argTypes: {
    children: {
      name: "button_text",
      defaultValue: "Button",
    },
  },
} as Meta;

const Template: Story<ButtonPulseProps> = (args) => <ButtonPulse {...args} />;

export const Pulse = Template.bind({});
Pulse.args = {
  size: "medium",
  children: "Pulse",
};
