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
