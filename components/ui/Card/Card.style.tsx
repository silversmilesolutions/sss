import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
`;
