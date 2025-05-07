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
    question: "Who can participate in the Trading Contest?",
    answer:
      "Anyone with an eligible trading account on AssexMarkets can join the Trading Contest, subject to the specific rules and terms outlined for each contest.",
  },
  {
    question: "How do I join the contest?",
    answer:
      "Simply register for the contest via your dashboard or the Trading Contest page and ensure your account meets the entry requirements.",
  },
  {
    question: "What type of account do I need to participate?",
    answer:
      "Typically, a live trading account is required. Specific contests may allow demo accounts; check the contest rules for details.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Most contests are free to join, but some premium contests may charge a nominal entry fee. Always review the contest terms before registering.",
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
