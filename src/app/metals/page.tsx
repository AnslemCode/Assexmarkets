import FAQs, { FAQItem } from "@/sections/FAQs";
import MetalBenefits from "@/sections/MarketPagesSection/MetalBenefits";
import MetalsPageHeader from "@/sections/MarketPagesSection/MetalsPageHeader";
import MetalsTradingInfo from "@/sections/MarketPagesSection/MetalsTradingInfo";
import MetalsWhatSection from "@/sections/MarketPagesSection/MetalsWhatSection";
import MetalsWhyAssexMarket from "@/sections/MarketPagesSection/MetalsWhyAssexMarket";
import MetalTrading from "@/sections/MarketPagesSection/MetalTrading";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "What metals can I trade on AssexMarkets?",
    answer:
      "You can trade gold, silver, platinum, and palladium on AssexMarkets with real-time pricing and tight spreads.",
  },
  {
    question: "What are the trading hours for metals?",
    answer:
      "Metals trading is generally open 23 hours a day from Monday to Friday. Specific hours may vary slightly by instrument and platform.",
  },
  {
    question: "What are the typical spreads for metals?",
    answer:
      "Spreads on metals depend on the market and account type, with Raw Spread accounts offering tighter spreads. Check our instrument specifications for more.",
  },
  {
    question: "How do economic events affect metals prices?",
    answer:
      "Metals prices can react strongly to inflation data, central bank decisions, and geopolitical tensions, often rising during uncertainty as safe-haven assets.",
  },
];
const MetalsPage = () => {
  return (
    <>
      <MetalsPageHeader />
      <MetalsTradingInfo />
      <MetalsWhatSection />
      <MetalBenefits />
      <MetalsWhyAssexMarket />
      <MetalTrading />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default MetalsPage;
