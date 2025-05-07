import FAQs, { FAQItem } from "@/sections/FAQs";
import TradingCalculatorForm from "@/sections/TradingPagesSection/TradingCalculatorForm";
import TradingCalculatorHeader from "@/sections/TradingPagesSection/TradingCalculatorHeader";
import TradingCalculatorResults from "@/sections/TradingPagesSection/TradingCalculatorResults";
import TradingCalculatorSteps from "@/sections/TradingPagesSection/TradingCalculatorSteps";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";

const myFaqs: FAQItem[] = [
  {
    question: "What is the Trading Calculator?",
    answer:
      "The Trading Calculator helps you estimate trade metrics like margin, pip value, and potential profit/loss before placing a trade.",
  },
  {
    question: "How does the Trading Calculator work?",
    answer:
      "Enter values such as instrument, volume, leverage, and account currency to calculate results instantly using real-time data.",
  },
  {
    question: "Is the Trading Calculator free to use?",
    answer:
      "Yes, our Trading Calculator is completely free and available to all users on the AssexMarkets website.",
  },
  {
    question: "Can I use the Trading Calculator for all instruments?",
    answer:
      "Yes, it supports all major instruments available on the platform including forex, commodities, indices, and metals.",
  },
];
const TradingCalculator = () => {
  return (
    <>
      <TradingCalculatorHeader />
      <TradingCalculatorForm />
      <TradingCalculatorResults />
      <TradingCalculatorSteps />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default TradingCalculator;
