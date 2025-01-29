import { Button } from "@/components/ui/Button/Button";
import {
  ImageContainer,
  Section,
  Step,
  StepsContainer,
  StepsList,
  Title,
  TitleContainer,
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
        <Image src="/chart-icon.svg" alt="Chart Icon" width={92} height={92} />
      </TitleContainer>

      <StepsContainer>
        <StepsList>
          {steps.map((step, index) => (
            <Step
              key={index}
              onClick={() => setSelectedStep(index)}
              $isSelected={selectedStep === index}
            >
              {step.title}
            </Step>
          ))}
        </StepsList>

        <ImageContainer>
          <Image
            src={`/setup${steps[selectedStep].image}`}
            alt={`Setup - ${steps[selectedStep].title}`}
            width={600}
            height={400}
            priority={false}
            style={{ zIndex: "1" }}
          />
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
