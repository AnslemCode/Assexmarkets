import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import RawSpreadAccountType from "@/sections/AccountTypesSection/RawSpreadAccountType";
import RawSpreadComparison from "@/sections/AccountTypesSection/RawSpreadComparison";
import WhyRawSpreadAccount from "@/sections/AccountTypesSection/WhyRawSpreadAccount";
import FAQs, { FAQItem } from "@/sections/FAQs";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "What is the Raw Spread Account?",
    answer:
      "The Raw Spread account offers direct market access with ultra-low spreads starting from 0.0 pips, ideal for scalpers and high-frequency traders.",
  },
  {
    question: "What are the spreads like on this account?",
    answer:
      "Spreads can start from 0.0 pips, depending on market conditions, with a commission charged per trade.",
  },
  {
    question: "Is there a commission charged?",
    answer:
      "Yes, Raw Spread accounts charge a small commission per lot traded in exchange for tighter spreads.",
  },
  {
    question: "Who is the Raw Spread Account best suited for?",
    answer:
      "This account is ideal for experienced traders, scalpers, and those using algorithmic trading systems seeking the tightest spreads.",
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
