import styled from "styled-components";

export const HeroWrapper = styled.div`
  background-image: url("/hero-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0 0 2rem 2rem;
  min-height: 596px;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  max-width: 800px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 720px;
  margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 26.5rem;
  width: 840px;
  content: url("/hero-image.png");

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 34rem;
    width: 64%;
    content: url("/hero-mobile-image.png");
  }
`;
