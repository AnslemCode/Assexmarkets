"use client";
import { TradingPageHeaderWithButton } from "@/components/pageComponents/TradingPageHeaderWithButton";
import FAQs, { FAQItem } from "@/sections/FAQs";
import CopyTradingAccountTypes from "@/sections/TradingPagesSection/CopyTradingAccountTypes";
import CopyTradingImage from "@/sections/TradingPagesSection/CopyTradingImage";
// import ProTradingAccountTypes from "@/sections/TradingPagesSection/CopyTradingAccountTypes";
import CopyTradingTypes from "@/sections/TradingPagesSection/CopyTradingTypes";
// import ProTradingComparison from "@/sections/TradingPagesSection/ProTradingComparison";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a form of digital or virtual currency that uses cryptography for security and operates independently of a central bank.",
  },
  {
    question: "How do I buy crypto?",
    answer:
      "You can buy cryptocurrencies through exchanges like Coinbase, Binance, or Kraken using your debit/credit card or bank transfer.",
  },
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
];

const ProTradingAccountPage = () => {
  return (
    <>
      <TradingPageHeaderWithButton
        title={[
          { text: "Trade Smarter " },
          { text: "Together ", className: "text-[#0dae94]" },
          { text: "Using " },
          { text: "Copy Trading ", className: "text-[#0dae94]" },
        ]}
        subtitle="Copy Trading is an effective tool that allows traders of all experience levels to replicate the trades of others, called Strategy Providers, in real time. This approach enables beginners to learn from seasoned professionals while giving experienced traders the opportunity to diversify their portfolios by following multiple strategies."
        buttonText="Join Copy Trading"
        onButtonClick={() => console.log("Button clicked! 🎯")}
      />
      <CopyTradingImage />
      <CopyTradingAccountTypes />
      <CopyTradingTypes />
      {/* <ProTradingComparison /> */}
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default ProTradingAccountPage;
