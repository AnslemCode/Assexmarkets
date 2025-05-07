import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import LeveragePlusAccountType from "@/sections/AccountTypesSection/LeveragePlusAccountType";
import LeveragePlusComparison from "@/sections/AccountTypesSection/LeveragePlusComparison";
import WhyLeveragePlusAccount from "@/sections/AccountTypesSection/WhyLeveragePlusAccount";
import FAQs, { FAQItem } from "@/sections/FAQs";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "What is the Leverage Plus Account?",
    answer:
      "The Leverage Plus account offers higher leverage options, allowing traders to control larger positions with less capital.",
  },
  {
    question: "What is the minimum lot size I can trade?",
    answer:
      "You can trade micro-lots (0.01 lots) on the Leverage Plus account, ideal for managing risk while benefiting from leverage.",
  },
  {
    question: "How many open trades can I have at once?",
    answer:
      "You can open multiple trades simultaneously, subject to margin availability and risk limits set by the platform.",
  },
  {
    question: "Is high leverage risky?",
    answer:
      "Yes, while high leverage can amplify profits, it also increases the risk of losses. Use risk management and trade responsibly.",
  },
];

const LeveragePlusPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Leverage Plus"
        highlight={true}
        subtitle="The Leverage Plus Account at AssexMarkets is built for traders who want to maximize their market exposure with minimal upfront capital. Perfect for those who seek bigger opportunities with smarter risk management, Leverage Plus combines flexible margin requirements with the advanced capabilities of MetaTrader 5."
        endText="Account"
      />
      <LeveragePlusAccountType />
      <LeveragePlusComparison />
      <WhyLeveragePlusAccount />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default LeveragePlusPage;
