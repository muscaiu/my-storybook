import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import ButtonDisco, { ButtonDiscoProps } from "./ButtonDisco";

export default {
  title: "Components/ButtonDisco",
  component: ButtonDisco,
  argTypes: {
    children: {
      name: "button_text",
      defaultValue: "Button",
    },
  },
} as Meta;

const Template: Story<ButtonDiscoProps> = (args) => <ButtonDisco {...args} />;

export const Disco = Template.bind({});
Disco.args = {
  size: "medium",
  children: "Disco",
};
