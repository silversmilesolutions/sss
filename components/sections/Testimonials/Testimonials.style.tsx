import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
  padding: 4rem 0 0 0;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const TestimonialCard = styled.div<{ $index?: number }>`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  border-top: 4px solid ${({ theme }) => theme.colors.brand.secondary};
  border-radius: ${({ $index }) =>
    $index === 0 ? "0 1rem 1rem 0" : $index === 1 ? "1rem" : "1rem 0 0 1rem"};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  position: absolute;
  top: -2.5rem;
`;

export const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
`;

export const Quote = styled.p`
  margin: 1rem;
`;

export const Rating = styled.div`
  color: ${({ theme }) => theme.colors.brand.third};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
