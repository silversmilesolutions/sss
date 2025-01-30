import { useState } from "react";
import {
  Container,
  HeaderWrapper,
  Logo,
  Nav,
  NavLink,
  MobileMenuButton,
  MobileNav,
} from "./Header.style";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <Logo>
          <Image src="/logo.svg" alt="Logo" width={24} height={32} />
          SilverSmileSolutions
        </Logo>
        <Nav>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </Nav>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Image src="/hamburger.svg" alt="Menu" width={36} height={36} />
        </MobileMenuButton>
        <MobileNav $isOpen={isMobileMenuOpen}>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </MobileNav>
      </Container>
    </HeaderWrapper>
  );
}
