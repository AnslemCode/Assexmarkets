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
    question: "What are the benefits of becoming a Strategy Provider?",
    answer:
      "As a Strategy Provider, you earn performance fees from followers, build credibility in the trading community, and expand your reach by showcasing successful strategies to a wider audience.",
  },
  {
    question: "How can I showcase my trading strategy effectively?",
    answer:
      "Maintain a transparent performance history, highlight your risk management techniques, and provide consistent updates to attract and retain followers.",
  },
  {
    question:
      "What are the steps to start offering my trading strategy to others?",
    answer:
      "Register as a Strategy Provider, set up your trading account, verify your performance metrics, and publish your strategy for others to follow.",
  },
  {
    question: "How do I set up a performance fee structure for my strategy?",
    answer:
      "You can configure your performance fee during the strategy creation process, choosing a percentage that reflects the value of your strategy while remaining competitive.",
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
