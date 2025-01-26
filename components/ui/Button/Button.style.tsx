import styled from "styled-components";

export const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  padding: 0.75rem 3rem;
  border-radius: 2rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;

  ${({ theme, variant }) =>
    variant === "primary"
      ? `
    background: ${theme.colors.brand.primary};
    color: white;
    &:hover {
      background: ${theme.colors.brand.primary};
    }
  `
      : `
    background: ${theme.colors.white};
    color: ${theme.colors.text};
    &:hover {
      background: ${theme.colors.text};
      color: ${theme.colors.white};
    }
  `}
`;
