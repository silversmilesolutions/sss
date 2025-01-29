import styled from "styled-components";

export const FeaturesSection = styled.section`
  padding: 4rem 0;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 500;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primaryGray};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

export const FeatureDescription = styled.p`
  font-size: 14px;
`;
