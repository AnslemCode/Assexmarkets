"use client";
import FAQs, { FAQItem } from "@/sections/FAQs";
import MetaTraderDetails from "@/sections/PlatformSection/MetaTraderDetails";
import MT5GetStarted from "@/sections/PlatformSection/MT5GetStarted";
import MT5KeyFeatures from "@/sections/PlatformSection/MT5KeyFeatures";
import MT5WhyAssexMarket from "@/sections/PlatformSection/MT5WhyAssexMarket";
import MT5WhyTrade from "@/sections/PlatformSection/MT5WhyTrade";
import MT5Header from "@/sections/PlatformSection/PlatformHeader";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "How do I download MetaTrader 5?",
    answer:
      "You can download MetaTrader 5 directly from the AssexMarkets website or from the official MetaTrader site for desktop and mobile devices.",
  },
  {
    question: "Can I open a demo account on MetaTrader 5?",
    answer:
      "Yes, MetaTrader 5 allows you to open a demo account to practice trading with real market conditions using virtual funds.",
  },
  {
    question: "What are the system requirements for MetaTrader 5?",
    answer:
      "MetaTrader 5 runs on Windows, macOS, iOS, and Android. It requires minimal hardware, with internet access and a basic CPU for optimal performance.",
  },
  {
    question: "What trade execution modes does MetaTrader 5 support?",
    answer:
      "MetaTrader 5 supports multiple execution modes including Instant, Market, and Request execution, allowing flexible trading strategies.",
  },
];
const MetaTrader5Page = () => {
  return (
    <>
      <MT5Header />
      <MetaTraderDetails />
      <MT5WhyTrade />
      <MT5KeyFeatures />
      <MT5WhyAssexMarket />
      <MT5GetStarted />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default MetaTrader5Page;
