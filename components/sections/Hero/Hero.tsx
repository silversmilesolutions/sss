import { Button } from "@/components/ui/Button/Button";
import {
  ButtonGroup,
  HeroSection,
  Subtitle,
  Title,
  HeroWrapper,
} from "./Hero.style";

export function Hero() {
  return (
    <HeroWrapper>
      <HeroSection>
        <div>
          <Title>
            Empowering{" "}
            <span style={{ position: "relative" }}>
              Clinics
              <img
                src="/clinics-design-element.svg"
                alt="Decorative underline"
                style={{
                  position: "absolute",
                  left: "8px",
                  top: "76%",
                }}
              />
            </span>{" "}
            To Thrive In A Digital World
          </Title>
        </div>
        <Subtitle>
          Search Engine Optimization (SEO) is a vital component of marketing
          strategies. It involves optimizing websites to rank higher in
          users&apos; results and increase organic traffic
        </Subtitle>
        <ButtonGroup>
          <Button variant="primary">
            Try Free
            <img
              src="/arrow-right.svg"
              alt=""
              style={{ marginLeft: "8px", verticalAlign: "middle" }}
            />
          </Button>
          <Button variant="secondary">
            <img
              src="/play-icon.svg"
              alt=""
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            Watch Video
          </Button>
        </ButtonGroup>
        <img
          src="/hero-image.png"
          alt="Hero image"
          width={840}
          style={{ position: "absolute", top: "26.5rem" }}
        />
      </HeroSection>
    </HeroWrapper>
  );
}
