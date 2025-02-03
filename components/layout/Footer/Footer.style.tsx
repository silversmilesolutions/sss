import Link from "next/link";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2rem 0 0 0;
  position: relative;
`;

export const FooterOverlay = styled.div`
  background: linear-gradient(
    to top,
    ${({ theme }) => `${theme.colors.brand.secondary}1A`},
    transparent
  );
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 500px;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-around;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 52px;
  z-index: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const SocialLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d0d0d0;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 1000px;
    flex-direction: row;
  }
`;

export const SocialLinksContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 1000px;
    justify-content: space-between;
    min-width: 1000px;
  }
`;
