import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import LeveragePlusAccountType from "@/sections/AccountTypesSection/LeveragePlusAccountType";
import LeveragePlusComparison from "@/sections/AccountTypesSection/LeveragePlusComparison";
import WhyLeveragePlusAccount from "@/sections/AccountTypesSection/WhyLeveragePlusAccount";
import FAQs, { FAQItem } from "@/sections/FAQs";
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
