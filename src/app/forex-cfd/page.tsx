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
