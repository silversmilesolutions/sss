import { useRef } from "react";
import { useButton } from "react-aria";
import { CardWrapper, Description, IconWrapper, Title } from "./Card.style";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

export function Card({ icon, title, description, onClick }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { buttonProps } = useButton(
    {
      onPress: onClick,
      elementType: "div",
    },
    ref
  );

  return (
    <CardWrapper
      ref={ref}
      {...(onClick ? buttonProps : {})}
      role={onClick ? "button" : undefined}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardWrapper>
  );
}
