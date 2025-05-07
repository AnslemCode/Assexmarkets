import FAQs, { FAQItem } from "@/sections/FAQs";
import CurrencyCalculatorHeader from "@/sections/TradingPagesSection/CurrencyCalculatorHeader";
import CurrencyConverter from "@/sections/TradingPagesSection/CurrencyConverter";
import CurrencyConverterSteps from "@/sections/TradingPagesSection/CurrencyConverterSteps";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";

const myFaqs: FAQItem[] = [
  {
    question: "What is the AssexMarkets Currency Converter?",
    answer:
      "The Currency Converter allows you to convert one currency to another using real-time exchange rates directly on our platform.",
  },
  {
    question: "How accurate are the exchange rates?",
    answer:
      "Our converter uses real-time market data from trusted providers to ensure the most accurate and up-to-date rates.",
  },
  {
    question: "Is there a limit to how many conversions I can perform?",
    answer:
      "No, you can perform unlimited conversions using the tool. It’s available anytime and completely free to use.",
  },
  {
    question: "Can I convert multiple currencies at once?",
    answer:
      "Currently, the converter handles one pair at a time, but you can perform multiple conversions sequentially for different currencies.",
  },
];
const CurrencyCalculator = () => {
  return (
    <>
      <CurrencyCalculatorHeader />
      <CurrencyConverter />
      <CurrencyConverterSteps />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default CurrencyCalculator;
