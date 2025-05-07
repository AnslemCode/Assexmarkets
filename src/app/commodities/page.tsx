import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import FAQs, { FAQItem } from "@/sections/FAQs";
import CommoditiesTrading from "@/sections/MarketPagesSection/CommoditiesTrading";
import CommoditiesTradingInfo from "@/sections/MarketPagesSection/CommoditiesTradingInfo";
import CommoditiesWhyAssexMarket from "@/sections/MarketPagesSection/CommoditiesWhyAssexMarket";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "What commodities can I trade on AssexMarkets?",
    answer:
      "You can trade oil (WTI/Brent), natural gas, and agricultural commodities like wheat and corn through our CFDs.",
  },
  {
    question: "What are the trading hours for commodities?",
    answer:
      "Commodity trading hours vary by asset but typically run 23 hours a day, five days a week. Platform schedules will provide exact times.",
  },
  {
    question: "What leverage is available for commodities trading?",
    answer:
      "Leverage varies by commodity and account type. AssexMarkets provides competitive leverage options, which can amplify both gains and losses.",
  },
  {
    question: "What spreads does AssexMarkets offer on commodities?",
    answer:
      "We offer tight and competitive spreads on all major commodities. Raw Spread account holders enjoy some of the lowest available spreads.",
  },
];
const CommoditiesPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Trade Commodities with Confidence"
        subtitle={`A commodity is any physical good that can be bought or sold on the commodities market. Commodities work in a similar way to other financial markets.\n\nThe exchange value of commodities is often affected by changes in supply and demand of the goods being traded. Commodities can be traded in the physical market or as a derivative.\n\nWe offer competitive spreads on a range of commodities, including Brent Crude Oil and Natural Gas.`}
      />
      <CommoditiesTradingInfo />
      <CommoditiesWhyAssexMarket />
      <CommoditiesTrading />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default CommoditiesPage;
