"use client";
import { TradingPageHeaderWithButton } from "@/components/pageComponents/TradingPageHeaderWithButton";
import FAQs, { FAQItem } from "@/sections/FAQs";
import Benefits from "@/sections/TradingContest/Benefits";
import HowItWorks from "@/sections/TradingContest/HowItWorks";
import WhatSection from "@/sections/TradingContest/WhatSection";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
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
  {
    question: "Can I convert crypto to cash?",
    answer:
      "Yes. You can convert your crypto to fiat currency through exchanges or peer-to-peer platforms and withdraw to your bank account.",
  },
  {
    question: "What's the best time to trade crypto?",
    answer:
      "Crypto markets are open 24/7. Many traders watch for volume and volatility, often trading during high-activity times like US or Asian market hours.",
  },
];
const StandardTradingAccountPage = () => {
  return (
    <>
      <TradingPageHeaderWithButton
        title={[
          { text: "Ready to prove your " },
          { text: "trading ", className: "text-[#0dae94]" },
          { text: "skills and win " },
          { text: "big", className: "text-[#0dae94]" },
          { text: "?" },
        ]}
        subtitle={`Join our Assexmarkets Trading Contest — where strategy meets competition and top performers walk away with exciting rewards!\n Whether you're a seasoned trader or just sharpening your edge, this is your chance to test your skills, climb the leaderboard, and earn recognition in a high-stakes yet supportive trading environment.`}
        buttonText="Join Assexmarkets Trading Contest"
        onButtonClick={() => console.log("Button clicked! 🎯")}
      />
      <WhatSection />
      <Benefits />
      <HowItWorks />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default StandardTradingAccountPage;
