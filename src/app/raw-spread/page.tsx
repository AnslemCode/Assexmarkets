import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import RawSpreadAccountType from "@/sections/AccountTypesSection/RawSpreadAccountType";
import RawSpreadComparison from "@/sections/AccountTypesSection/RawSpreadComparison";
import WhyRawSpreadAccount from "@/sections/AccountTypesSection/WhyRawSpreadAccount";
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

const RawSpreadPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Raw Spread"
        highlight={true}
        subtitle="At AssexMarkets, our Raw Spread Account is designed for traders who demand the tightest spreads and the most transparent trading conditions. Whether you're scalping, day trading, or executing large-volume strategies, this account gives you direct access to interbank rates with no markups — just a small, competitive commission."
        endText="Account"
      />
      <RawSpreadAccountType />
      <RawSpreadComparison />
      <WhyRawSpreadAccount />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default RawSpreadPage;
