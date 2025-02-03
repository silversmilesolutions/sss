import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow: hidden;
  }
`;
