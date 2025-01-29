import { useRef } from "react";
import { useButton } from "react-aria";
import { StyledButton } from "./Button.style";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  children,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    {
      onPress: onClick,
    },
    ref
  );

  return (
    <StyledButton ref={ref} {...buttonProps} variant={variant}>
      {children}
    </StyledButton>
  );
}
