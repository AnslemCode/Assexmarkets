import ForexBenefits from "@/components/marketsComponent/ForexBenefits";
import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import FAQs, { FAQItem } from "@/sections/FAQs";
import ForexConditions from "@/sections/MarketPagesSection/ForexConditions";
import ForexTradingInfo from "@/sections/MarketPagesSection/ForexTradingInfo";
import HowToStartForex from "@/sections/MarketPagesSection/HowToStartForex";

import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "How do I get started with forex trading?",
    answer:
      "Create an account with AssexMarkets, complete verification, fund your account, and access the platform to start trading major, minor, and exotic currency pairs.",
  },
  {
    question: "What are the most traded forex pairs?",
    answer:
      "The most popular forex pairs include EUR/USD, GBP/USD, USD/JPY, and USD/CHF, known for high liquidity and tight spreads.",
  },
  {
    question: "How much do I need to start trading forex?",
    answer:
      "You can start trading forex with as little as $10 depending on the account type. However, we recommend starting with an amount you’re comfortable managing.",
  },
  {
    question: "When can I start trading forex?",
    answer:
      "Forex trading is available 24 hours a day, five days a week—from Sunday evening to Friday night—giving you flexible access to the markets.",
  },
];
const ForexCFDPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Forex Trading"
        subtitle="Forex trading is the buying or selling of one country’s currency in exchange for another. We offer forex trading as a CFD, which allows you to speculate on price movements in the forex markets."
      />
      <ForexTradingInfo />
      <ForexBenefits />
      <HowToStartForex />
      <ForexConditions />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default ForexCFDPage;
