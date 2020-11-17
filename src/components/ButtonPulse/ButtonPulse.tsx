import React from "react";

import { ButtonPulseContainer } from "./ButtonPulse.style";

export type ButtonPulseSize = "small" | "medium" | "large";
export type ButtonPulseChevron = "left" | "right" | "none";

export interface ButtonPulseProps {
  id?: string;
  children: React.ReactNode;
  size?: ButtonPulseSize;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonPulse = (props: ButtonPulseProps) => {
  const { onClick, className, disabled, size } = props;

  const classNames = className ? className.split(" ") : [];
  classNames.push(size || "medium");

  const buttonProps = { onClick, className: classNames.join(" "), disabled };

  return (
    <ButtonPulseContainer {...buttonProps}>
      {props.children}
    </ButtonPulseContainer>
  );
};

export default ButtonPulse;
