import FAQs, { FAQItem } from "@/sections/FAQs";
import IndicesPageHeader from "@/sections/MarketPagesSection/IndicesHeader";
import IndiceTrading from "@/sections/MarketPagesSection/IndicesTrading";
import IndicesTradingInfo from "@/sections/MarketPagesSection/IndicesTradingInfo";
import IndicesWhatSection from "@/sections/MarketPagesSection/IndicesWhatSection";
import IndicesWhyAssexMarket from "@/sections/MarketPagesSection/IndicesWhyAssexMarket";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "Is index trading volatile?",
    answer:
      "Yes, index trading can be volatile, especially during economic events, but it generally offers diversified exposure and can reduce individual stock risk.",
  },
  {
    question: "How does CFD trading on indices work?",
    answer:
      "CFD trading lets you speculate on the price movement of stock indices without owning the underlying assets, using leverage for potential gains or losses.",
  },
  {
    question: "What are some popular indices available on AssexMarkets?",
    answer:
      "Popular indices include the S&P 500, NASDAQ 100, FTSE 100, DAX 30, and Nikkei 225, all available for trading as CFDs.",
  },
  {
    question: "Is leverage available for indices?",
    answer:
      "Yes, AssexMarkets offers competitive leverage for index CFDs. Leverage varies by instrument and region, so check platform details.",
  },
];

const IndicesPage = () => {
  return (
    <>
      <IndicesPageHeader />
      <IndicesTradingInfo />
      <IndicesWhatSection />
      <IndicesWhyAssexMarket />
      <IndiceTrading />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default IndicesPage;
