import AccountTypes from "@/sections/AccountTypes";
import CallToAction from "@/sections/CallToAction";
import { CardScrollSection } from "@/sections/CardScroll";
import Feature from "@/sections/Feature";
import Features from "@/sections/Features";
import { StepsSection } from "@/sections/GetStarted";
// import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import PaymentMethods from "@/sections/PaymentMethods";
import Testimonial from "@/sections/Testimonial";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Feature />
      <CardScrollSection />
      <AccountTypes />
      <StepsSection />
      <PaymentMethods />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;
