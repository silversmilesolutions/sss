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
} from "./Footer.style";
import Image from "next/image";

export function Footer() {
  return (
    <FooterWrapper>
      <FooterOverlay></FooterOverlay>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "1000px",
            borderBottom: "1px solid #d0d0d0",
          }}
        >
          <Logo>
            <Image src="/logo.svg" alt="Logo" width={25} height={25} />
            &nbsp; SilverSmileSolutions
          </Logo>
          <Nav>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </Nav>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "1000px",
            paddingTop: "1rem 0",
          }}
        >
          <Copyright>
            &copy; SilverSmileSolutions 2025 | All rights reserved
          </Copyright>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <Image
                src="/social/fb.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <Image
                src="/social/insta.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <Image src="/social/x.svg" alt="Twitter" width={20} height={20} />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <Image
                src="/social/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </SocialLink>
          </SocialLinks>
        </div>
      </Container>
    </FooterWrapper>
  );
}
