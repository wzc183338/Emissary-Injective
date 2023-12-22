import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({
  children,
  variant,
  radiuslg,
  xl,
  lg,
  sm,
  width,
  hasIcon,
  onClick,
  className,
  type,
}) => {
  return (
    <StyledButton
      variant={variant}
      radiuslg={radiuslg}
      xl={xl}
      lg={lg}
      sm={sm}
      width={width}
      hasIcon={hasIcon}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
