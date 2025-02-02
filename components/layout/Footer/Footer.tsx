import {
  Container,
  Copyright,
  FooterOverlay,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialLink,
  SocialLinks,
  FooterContainer,
  SocialLinksContainer,
} from "./Footer.style";
import Image from "next/image";

export function Footer() {
  return (
    <FooterWrapper>
      <FooterOverlay></FooterOverlay>
      <Container>
        <FooterContainer>
          <Logo>
            <Image src="/logo.svg" alt="Logo" width={25} height={25} />
            &nbsp; SilverSmileSolutions
          </Logo>
          <Nav>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </Nav>
        </FooterContainer>
        <SocialLinksContainer>
          <Copyright>
            &copy; SilverSmileSolutions 2025 | All rights reserved
          </Copyright>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <Image
                src="/social/fb.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <Image
                src="/social/insta.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <Image src="/social/x.svg" alt="Twitter" width={30} height={30} />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <Image
                src="/social/linkedin.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </SocialLink>
          </SocialLinks>
        </SocialLinksContainer>
      </Container>
    </FooterWrapper>
  );
}
