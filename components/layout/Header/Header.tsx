import { Container, HeaderWrapper, Logo, Nav, NavLink } from "./Header.style";
import Image from "next/image";

export function Header() {
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
      </Container>
    </HeaderWrapper>
  );
}
