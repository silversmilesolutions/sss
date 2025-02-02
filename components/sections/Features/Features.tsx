import { Button } from "@/components/ui/Button/Button";
import {
  FeaturesSection,
  Grid,
  Title,
  FeatureCard,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
  MobileIconWrapper,
  FeatureImage,
  FeatureDetails,
  FeatureTitleMobile,
  ButtonContainer,
} from "./Features.style";
import Image from "next/image";

const features = [
  {
    title: "SEO",
    description:
      "SEO (Search Engine Optimization) is the practice of optimizing a website to improve its visibility in search engine results",
    icon: "/features/seo.svg",
  },
  {
    title: "Customizable Templates",
    description:
      "Customizable templates offer flexibility and personalization, allowing you to tailor designs to your unique needs",
    icon: "/features/customizable-templates.svg",
  },
  {
    title: "Email Marketing",
    description:
      "Email marketing is a digital strategy for promoting products or services by sending personalized messages to a targeted audience",
    icon: "/features/email-marketing.svg",
  },
  {
    title: "Social Media Marketing",
    description:
      "Social Media Marketing leverages platforms like Facebook, Instagram, and Twitter to promote brands, engage audiences, and drive traffic",
    icon: "/features/social-media-marketing.svg",
  },
  {
    title: "Analytics",
    description:
      "Analytics involves collecting, processing, and interpreting data to gain insights, identify trends, and support decision-making",
    icon: "/features/analytics.svg",
  },
  {
    title: "Scalability",
    description:
      "Scalability is a system's ability to handle increasing workloads or expand its capacity without compromising performance",
    icon: "/features/scalability.svg",
  },
];

export function Features() {
  return (
    <FeaturesSection>
      <MobileIconWrapper>
        <Image
          src="/horn.svg"
          alt="Features Horn"
          width={92}
          height={92}
          style={{ position: "absolute", top: "6rem", right: "4rem" }}
        />
        <Image
          src="/users.svg"
          alt="Features Users"
          width={92}
          height={92}
          style={{ position: "absolute", bottom: "4rem", left: "4rem" }}
        />
      </MobileIconWrapper>

      <Title>
        Everything You Need To
        <br />
        Succeed Online
      </Title>
      <Grid>
        {features.map((feature) => (
          <FeatureCard key={feature.title}>
            <FeatureImage>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={65}
                height={65}
                style={{ minWidth: "65px" }}
              />
              <FeatureTitleMobile>{feature.title}</FeatureTitleMobile>
            </FeatureImage>
            <FeatureDetails>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureContent>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureContent>
            </FeatureDetails>
          </FeatureCard>
        ))}
      </Grid>
      <ButtonContainer>
        <Button variant="primary">
          Get Started Today{" "}
          <img
            src="/arrow-right.svg"
            alt=""
            style={{ verticalAlign: "middle" }}
          />
        </Button>
      </ButtonContainer>
    </FeaturesSection>
  );
}
