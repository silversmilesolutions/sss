import {
  Container,
  FeatureDescription,
  FeatureTitle,
  Grid,
  Section,
  Title,
} from "./WhyChooseUs.style";
import Image from "next/image";

const features = [
  {
    title: "Tailored for Dental Clinics",
    description:
      "We understand your specific needs and challenges as a dental clinic, offering solutions designed just for you",
  },
  {
    title: "Affordable and Scalable",
    description:
      "Our plans fit clinics of all sizes, with no hidden fees or long-term commitments",
  },
  {
    title: "SEO-Optimized Websites",
    description:
      "Rank higher on Google and attract more patients with our built-in SEO tools",
  },
  {
    title: "Fast and Easy Setup",
    description:
      "Launch your clinic's professional website in under 5 minutes with no technical skills required",
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer support to help you every step of the way",
  },
  {
    title: "Proven Results",
    description:
      "Clinics using our service see a 40% increase in patient bookings on average",
  },
];

export function WhyChooseUs() {
  return (
    <Section>
      <Image
        src="/thumbs-up.svg"
        alt="Thumbs Up"
        width={92}
        height={92}
        style={{ position: "absolute", left: "4rem", bottom: "0" }}
      />
      <Image
        src="/envelop-horn.svg"
        alt="Envelop Horn"
        width={92}
        height={92}
        style={{ position: "absolute", right: "10rem" }}
      />
      <Container>
        <Title>
          Why Dental Clinics
          <br />
          Choose Us
        </Title>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Grid>
            {features.map((feature, index) => (
              <div key={index}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </div>
            ))}
          </Grid>
          <div style={{ alignSelf: "flex-end" }}>
            <Image
              src="/why-choose-us.svg"
              alt="Why Choose Us"
              width={930}
              height={545}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
