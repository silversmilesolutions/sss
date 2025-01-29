import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem 0 4rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
`;
