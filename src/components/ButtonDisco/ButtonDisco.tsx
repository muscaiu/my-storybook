import React from "react";

import { ButtonDiscoContainer } from "./ButtonDisco.style";

export type ButtonDiscoSize = "small" | "medium" | "large";
export type ButtonDiscoChevron = "left" | "right" | "none";

export interface ButtonDiscoProps {
  id?: string;
  children: React.ReactNode;
  size?: ButtonDiscoSize;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonDisco = (props: ButtonDiscoProps) => {
  const { onClick, className, disabled, size } = props;

  const classNames = className ? className.split(" ") : [];
  classNames.push(size || "medium");

  const buttonProps = { onClick, className: classNames.join(" "), disabled };

  return (
    <ButtonDiscoContainer {...buttonProps}>
      {props.children}
    </ButtonDiscoContainer>
  );
};

export default ButtonDisco;
