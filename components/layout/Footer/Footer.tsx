import {
  Container,
  Copyright,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialLink,
  SocialLinks,
} from "./Footer.style";
import Image from "next/image";

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Logo>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          SilverSmileSolutions
        </Logo>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Nav>
        <SocialLinks>
          <SocialLink href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i> FB
          </SocialLink>
          <SocialLink href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i> X
          </SocialLink>
          <SocialLink href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i> ID
          </SocialLink>
        </SocialLinks>
        <Copyright>
          &copy; 2025 SilverSmileSolutions. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
}
