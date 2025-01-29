import styled from "styled-components";

export const Section = styled.section`
  padding: 22rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  padding-bottom: 1rem;
  gap: 22rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 1rem;
`;

export const StepsContainer = styled.div`
  display: flex;
  gap: 8rem;
  align-items: center;
  padding-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const StepsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Step = styled.li<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 3rem 1rem 1rem;
  border: 1px solid
    ${({ $isSelected, theme }) =>
      $isSelected ? theme.colors.brand.fourth : theme.colors.gray200};
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.brand.fourth : "transparent"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.primary + "20" : theme.colors.primary + "10"};
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
