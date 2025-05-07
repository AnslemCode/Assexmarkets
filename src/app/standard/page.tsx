import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import WhyStandardAccount from "@/sections/AccountTypesSection/WhyStandardAccount";
import FAQs, { FAQItem } from "@/sections/FAQs";
import StandardTradingAccountTypes from "@/sections/TradingPagesSection/StandardTradingAccountType";
import StandardTradingComparison from "@/sections/TradingPagesSection/StandardTradingComparison";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "What instruments can I trade on the Cent account?",
    answer:
      "You can trade forex pairs, metals, and some CFDs on the Cent account with smaller lot sizes ideal for new traders.",
  },
  {
    question: "What are the advantages of the Cent account in forex?",
    answer:
      "Cent accounts allow you to trade with micro-lots, minimizing risk while gaining real-market experience with live trading conditions.",
  },
  {
    question: "On what platform is Cent account available?",
    answer:
      "The Cent account is available on MetaTrader 5, providing access to a full suite of trading tools and technical analysis features.",
  },
  {
    question: "What is the minimum deposit for the Cent account?",
    answer:
      "The minimum deposit is low—usually around $10—making it perfect for beginners or those who want to test strategies with minimal risk.",
  },
];

const StandardTradingAccountPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Standard"
        highlight="Trading"
        subtitle="Feature-rich, commission-free trading accounts that suit the needs of today’s traders. Sign up and experience the advantages of our most popular account."
        endText="Account"
      />
      <StandardTradingAccountTypes />
      <StandardTradingComparison />
      <WhyStandardAccount />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default StandardTradingAccountPage;
