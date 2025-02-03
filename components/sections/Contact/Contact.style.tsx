import styled from "styled-components";

export const Section = styled.section`
  padding: 8rem 0 3rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const Form = styled.form`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    button {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 1.25rem;
  font-size: 1rem;
  display: block;
  min-width: 300px;
`;

export const VisuallyHidden = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
