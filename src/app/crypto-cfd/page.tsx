import CryptoBenefits from "@/components/marketsComponent/CryptoBenefits";
import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import FAQs, { FAQItem } from "@/sections/FAQs";
import CryptoConditions from "@/sections/MarketPagesSection/CryptoConditions";
import CryptoImage from "@/sections/MarketPagesSection/CryptoImage";
import CryptoTradingInfo from "@/sections/MarketPagesSection/CryptoTradingInfo";
import CryptoWhyAssexMarket from "@/sections/MarketPagesSection/CryptoWhyAssexMarket";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "Is crypto trading volatile?",
    answer:
      "Yes, cryptocurrency markets are highly volatile, offering significant profit opportunities but also greater risk. Always manage risk carefully.",
  },
  {
    question: "What is a cryptocurrency pair?",
    answer:
      "A crypto pair is a trading pair like BTC/USD or ETH/USDT where one cryptocurrency is traded against another asset or fiat currency.",
  },
  {
    question: "How much do I need to start trading crypto?",
    answer:
      "You can begin trading crypto with a small amount like $10. Choose a position size that fits your risk profile and trading goals.",
  },
  {
    question: "What is the best cryptocurrency to trade?",
    answer:
      "Popular choices include Bitcoin (BTC), Ethereum (ETH), and Litecoin (LTC), but the best crypto to trade depends on your strategy and market analysis.",
  },
];

const CryptoCFDPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Trade Crypto Swap-free"
        subtitle="Cryptos use distributed ledger technology, or blockchain, to maintain a public record of all transactions. Tokens or coins can be bought and sold and are stored in a digital wallet, either online through an exchange like Binance, or offline ‘in cold storage’ on a server."
      />
      <CryptoTradingInfo />
      <CryptoBenefits />
      <CryptoWhyAssexMarket />
      <CryptoImage />
      <CryptoConditions />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default CryptoCFDPage;
