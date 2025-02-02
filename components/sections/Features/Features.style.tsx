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
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const FeatureTitleMobile = styled.h3`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 14px;
`;

export const MobileIconWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const FeatureTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const FeatureImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 65px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 2rem;
  }
`;

export const FeatureDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 2.5rem;
  }
`;
