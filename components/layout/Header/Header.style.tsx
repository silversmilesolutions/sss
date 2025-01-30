import Link from "next/link";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  padding-bottom: 1rem;
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  gap: 0.75rem;
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
  background-color: #f6f6f6;
  padding: 0.5rem 1rem;
  border-radius: 52px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    gap: 1rem;
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }
`;
