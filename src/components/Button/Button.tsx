import React from "react";

// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { ButtonContainer } from "./Button.style";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "primary" | "secondary" | "white";
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

  return (
    <ButtonContainer {...buttonProps}>
      {/* {chevron === "left" && <ChevronLeftIcon className="icon-chevron-left" />} */}
      {props.children}
      {/* {chevron === "right" && (
        <ChevronRightIcon className="icon-chevron-right" />
      )} */}
    </ButtonContainer>
  );
};

export default Button;
