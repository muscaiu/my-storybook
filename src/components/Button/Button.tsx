import React from "react";

import { ButtonContainer } from "./Button.style";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "primary" | "secondary" | "white" | "pulse" | "disco";
export type ButtonChevron = "left" | "right" | "none";

export interface ButtonProps {
  id?: string;
  children: React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  chevron?: ButtonChevron;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  outlined?: boolean;
}

const Button = (props: ButtonProps) => {
  const { onClick, className, disabled, size, type, chevron, outlined } = props;

  const classNames = className ? className.split(" ") : [];
  classNames.push(size || "medium");
  classNames.push(type || "primary");

  if (outlined) {
    classNames.push("outline");
  }

  if (chevron !== "none") {
    classNames.push("chevron");
  }

  const buttonProps = { onClick, className: classNames.join(" "), disabled };

  return <ButtonContainer {...buttonProps}>{props.children}</ButtonContainer>;
};

export default Button;
