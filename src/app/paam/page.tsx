import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import FAQs, { FAQItem } from "@/sections/FAQs";
import PaamDetails from "@/sections/TradingPagesSection/PaamDetails";
import PaamStrategies from "@/sections/TradingPagesSection/PaamStrategies";
import PaamWhyOpen from "@/sections/TradingPagesSection/PaamWhyOpen";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "What is a PAAM account?",
    answer:
      "A PAAM account allows investors to allocate funds to a professional trader who manages trades on their behalf, with profits and losses distributed proportionally.",
  },
  {
    question: "Who can become a fund manager?",
    answer:
      "Experienced traders with a consistent track record and verified credentials can apply to become fund managers on the PAAM platform.",
  },
  {
    question: "How are profits and losses shared?",
    answer:
      "Profits and losses are shared among investors based on the percentage of funds they contribute to the PAAM account.",
  },
  {
    question: "Can I invest in more than one manager?",
    answer:
      "Yes, you can diversify your investments by allocating funds to multiple fund managers, each with different trading styles.",
  },
];
// Percentage Allocation Asset Management (PAMM)
const PercentageAllocationAssetManagement = () => {
  return (
    <>
      <TradingPagesHeading
        title="Percentage Allocation Asset Management (PAMM)"
        subtitle="Accounts that meet the needs of Portfolio Managers.Use these accounts for trading in Funds created in the Portfolio Management feature."
      />
      <PaamDetails />
      <PaamStrategies />
      <PaamWhyOpen />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default PercentageAllocationAssetManagement;
