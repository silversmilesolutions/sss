"use client";

import { Layout } from "@/components/layout/Layout/Layout";
import { Contact } from "@/components/sections/Contact/Contact";
import { Features } from "@/components/sections/Features/Features";
import { Hero } from "@/components/sections/Hero/Hero";
import { SetupSteps } from "@/components/sections/SetupSteps/SetupSteps";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SetupSteps />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </Layout>
  );
}
