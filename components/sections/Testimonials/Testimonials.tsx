import { Button } from "@/components/ui/Button/Button";
import { useState, useEffect } from "react";
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
  SliderWrapper,
  SliderContainer,
  Slide,
  ArrowButton,
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
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <Section>
      <Title>Hear From Clients Like Yours</Title>
      {isMobile ? (
        <SliderWrapper>
          <SliderContainer
            style={{ transform: `translateX(-${currentSlide * 122}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <Slide key={index}>
                <TestimonialCard $index={index}>
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
              </Slide>
            ))}
          </SliderContainer>
          <ArrowButton className="left" onClick={prevSlide}>
            &#8249;
          </ArrowButton>
          <ArrowButton className="right" onClick={nextSlide}>
            &#8250;
          </ArrowButton>
        </SliderWrapper>
      ) : (
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
      )}
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
