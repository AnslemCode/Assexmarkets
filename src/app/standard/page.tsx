import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import WhyStandardAccount from "@/sections/AccountTypesSection/WhyStandardAccount";
import FAQs, { FAQItem } from "@/sections/FAQs";
import StandardTradingAccountTypes from "@/sections/TradingPagesSection/StandardTradingAccountType";
import StandardTradingComparison from "@/sections/TradingPagesSection/StandardTradingComparison";
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

const StandardTradingAccountPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Standard"
        highlight="Trading"
        subtitle="Feature-rich, commission-free trading accounts that suit the needs of today’s traders. Sign up and experience the advantages of our most popular account."
        endText="Account"
      />
      <StandardTradingAccountTypes />
      <StandardTradingComparison />
      <WhyStandardAccount />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default StandardTradingAccountPage;
