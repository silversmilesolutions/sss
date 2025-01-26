import Link from "next/link";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
