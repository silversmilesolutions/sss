import { Button } from "@/components/ui/Button/Button";
import {
  Avatar,
  ButtonWrapper,
  Name,
  Quote,
  Rating,
  Role,
  Section,
  TestimonialCard,
  TestimonialsWrapper,
  Title,
} from "./Testimonials.style";
import Image from "next/image";

const testimonials = [
  {
    name: "Theresa Webb",
    role: "CEO",
    quote:
      "Search Engine Optimization strategies Search Engine on Optimization on component Search Engine",
    rating: 5,
    avatar: "/testimonials/user-1.svg",
  },
  {
    name: "Jane Cooper",
    role: "Web Designer",
    quote:
      "Dental & Seo is a crucial aspect of promoting dental practices online. By combining dental",
    rating: 5,
    avatar: "/testimonials/user-2.svg",
  },
  {
    name: "Ralph Edwards",
    role: "Marketing Assistant",
    quote:
      "By combining dental expertise with SEO strategies businesses can reach a wider audience",
    rating: 5,
    avatar: "/testimonials/user-3.svg",
  },
];

export function Testimonials() {
  return (
    <Section>
      <Title>Hear From Clients Like Yours</Title>
      <TestimonialsWrapper>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} $index={index}>
            <Image
              src="/testimonials/quote.svg"
              alt="Quote"
              width={182}
              height={100}
              style={{ position: "absolute", top: "4rem", opacity: "5%" }}
            />
            <Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              width={80}
              height={80}
            />
            <Name>{testimonial.name}</Name>
            <Role>{testimonial.role}</Role>
            <Quote>{testimonial.quote}</Quote>
            <Rating>{"★".repeat(testimonial.rating)}</Rating>
          </TestimonialCard>
        ))}
      </TestimonialsWrapper>
      <ButtonWrapper>
        <Button variant="primary">
          Be Our Next Success Story{" "}
          <img
            src="/arrow-right.svg"
            alt=""
            style={{ verticalAlign: "middle" }}
          />
        </Button>
      </ButtonWrapper>
    </Section>
  );
}
