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
