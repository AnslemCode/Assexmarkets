import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import FAQs, { FAQItem } from "@/sections/FAQs";
import CommoditiesTrading from "@/sections/MarketPagesSection/CommoditiesTrading";
import CommoditiesWhyAssexMarket from "@/sections/MarketPagesSection/CommoditiesWhyAssexMarket";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "What is a crypto wallet?",
    answer:
      "A crypto wallet is a secure digital wallet used to store, send, and receive cryptocurrencies. There are hot wallets (online) and cold wallets (offline).",
  },
  {
    question: "Is crypto trading safe?",
    answer:
      "Crypto trading involves risk due to market volatility. Use trusted platforms, enable two-factor authentication, and never invest more than you can afford to lose.",
  },
  {
    question: "How can I earn from holding coins?",
    answer:
      "You can earn passive income through staking, yield farming, or earning interest by lending your crypto on certain platforms.",
  },
  {
    question: "What are stablecoins?",
    answer:
      "Stablecoins are cryptocurrencies pegged to stable assets like the US Dollar to reduce volatility. Examples include USDT, USDC, and DAI.",
  },
];
const CommoditiesPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Trade Commodities with Confidence"
        subtitle={`A commodity is any physical good that can be bought or sold on the commodities market. Commodities work in a similar way to other financial markets.\n\nThe exchange value of commodities is often affected by changes in supply and demand of the goods being traded. Commodities can be traded in the physical market or as a derivative.\n\nWe offer competitive spreads on a range of commodities, including Brent Crude Oil and Natural Gas.`}
      />
      <CommoditiesWhyAssexMarket />
      <CommoditiesTrading />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default CommoditiesPage;
