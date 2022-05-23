import React, { ReactNode } from "react";
import styled from "styled-components";

// interface StyledButtonProps {
//   size: string;
//   //   children: string;
//   //   variant: string;
// }<StyledButtonProps>
// padding: ${(props) => props.size};
const StyledButton = styled.button`
  background: ${(props) => props.color};
  padding: 1rem;
  color: white;
`;

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  size?: "small" | "medium" | undefined;
}

const Button = (props: ButtonProps) => {
  const { size = "medium" } = props; //untuk deklarasi props undefined
  let buttonColor;
  let buttonSize;

  if (props.variant === "primary") {
    buttonColor = "blue";
  }
  if (props.variant === "secondary") {
    buttonColor = "red";
  }

  if (props.size === "small") {
    buttonSize = "0.5rem";
  }
  if (props.size === "medium") {
    buttonSize = "1rem";
  }

  return <StyledButton color={buttonColor}>{props.children}</StyledButton>;
};

export default Button;
