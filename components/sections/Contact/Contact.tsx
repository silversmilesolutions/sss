import { useRef } from "react";
import {
  Container,
  Form,
  Input,
  Section,
  Subtitle,
  Title,
  VisuallyHidden,
} from "./Contact.style";
import { Button } from "@/components/ui/Button/Button";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Section>
      <Container>
        <div>
          <Title>
            Do You Need Any
            <br />
            Project?
          </Title>
          <Subtitle>debbie.baker@example.com</Subtitle>
        </div>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <VisuallyHidden htmlFor="email">Email</VisuallyHidden>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            aria-label="Email"
          />
          <Button variant="primary">Contact Us</Button>
        </Form>
      </Container>
    </Section>
  );
}
