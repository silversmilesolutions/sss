import { Button } from "@/components/ui/Button/Button";
import {
  ImageContainer,
  Section,
  Step,
  StepsContainer,
  StepsList,
  Title,
  TitleContainer,
  ImageWrapper,
  MobileStepContent,
  MobileOnlySpan,
} from "./SetupSteps.style";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    title: "Custom Branding",
    image: "/custom-branding.png",
  },
  {
    title: "Theming",
    image: "/theming.png",
  },
  {
    title: "CTAs Configuration",
    image: "/cta-configuration.png",
  },
  {
    title: "Layout Configuration",
    image: "/layout-configuration.png",
  },
  {
    title: "Pre-built Templates",
    image: "/prebuilt-templates.png",
  },
];

export function SetupSteps() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <Section>
      <TitleContainer>
        <Title>
          Set Up Your Clinic In Less
          <br />
          Than 5 Minutes
        </Title>
        <ImageWrapper>
          <Image
            src="/chart-icon.svg"
            alt="Chart Icon"
            width={92}
            height={92}
          />
        </ImageWrapper>
      </TitleContainer>

      <StepsContainer>
        <StepsList>
          {steps.map((step, index) => (
            <>
              <Step
                key={index}
                onClick={() => setSelectedStep(index)}
                $isSelected={selectedStep === index}
              >
                <span>{step.title}</span>
                <MobileOnlySpan>
                  {selectedStep === index ? "x" : "+"}
                </MobileOnlySpan>
              </Step>
              {selectedStep === index && (
                <MobileStepContent>
                  <p
                    style={{
                      marginBottom: "1rem",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Search Engine Optimization (SEO) is a vital component of
                    marketing strategies.
                  </p>
                  <Image
                    src={`/setup${steps[selectedStep].image}`}
                    alt={`Setup - ${steps[selectedStep].title}`}
                    width={600}
                    height={400}
                  />
                </MobileStepContent>
              )}
            </>
          ))}
        </StepsList>

        <ImageContainer>
          <ImageWrapper>
            <Image
              src={`/setup${steps[selectedStep].image}`}
              alt={`Setup - ${steps[selectedStep].title}`}
              width={600}
              height={400}
              priority={false}
              style={{ zIndex: "1" }}
            />
          </ImageWrapper>
          <Image
            src="/setup-design-element.svg"
            alt="Setup Design Element"
            width={132}
            height={132}
            style={{
              position: "absolute",
              top: "22rem",
              right: "26px",
              zIndex: "0",
            }}
          />
        </ImageContainer>
      </StepsContainer>

      <Button variant="primary">
        Try Free Now{" "}
        <img
          src="/arrow-right.svg"
          alt=""
          style={{ verticalAlign: "middle" }}
        />
      </Button>
    </Section>
  );
}
