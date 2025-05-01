import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import ContactInfo from "@/sections/CompanySection/ContactInfo";
import WhatWeOffer from "@/sections/CompanySection/WhatWeOffer";
import AboutUsSection from "@/sections/CompanySection/WhyUs";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="About Us"
        subtitle="At AssexMarkets, we believe that financial markets should be accessible, transparent, and empowering for everyone — from first-time traders to seasoned professionals. That’s why we’ve built a platform that combines cutting-edge technology, robust tools, and client-focused support to help traders succeed in today’s fast-moving global economy."
      />
      <AboutUsSection />
      <WhatWeOffer />
      <ContactInfo />
      <TradingPageCTA />
    </>
  );
};

export default AboutUsPage;
