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
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SocialLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;
