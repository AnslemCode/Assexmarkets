import FloatingInfoRows from "@/components/pageComponents/FloatingInfoRow";
import FAQs, { FAQItem } from "@/sections/FAQs";
import SecureInfoSection from "@/sections/TradingPagesSection/SecureInfoSection";
import TradingHeaderSection from "@/sections/TradingPagesSection/TradingConditionsHeader";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import Image from "next/image";
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
const Fee = () => {
  return (
    <>
      <TradingHeaderSection
        title="Assexmarkets Fees"
        text="Focus on trading, not on paying. We've created a trading environment that ensures the lowest possible costs for our clients"
      />
      <FloatingInfoRows
        floatingText="Fees."
        rows={[
          {
            title: (
              <>
                Zero <span className="text-[#0dae94]">Fees</span>
              </>
            ),
            text: "At AssexMarkets, we cover all third-party\n transaction fees—so every deposit and\n withdrawal is smoother, cleaner, and 100%\n transparent.\nYou focus on trading. We’ll handle the fees.",
            image: (
              <Image
                src="/images/zeroFees.png"
                alt="Security"
                width={600}
                height={600}
                // className="w-full h-auto object-contain max-h-[400px]"
              />
            ),
          },
          {
            title: (
              <>
                Say <span className="text-[#0dae94]">goodbye</span> to swaps
              </>
            ),

            text: "Keep more of your profits. No swap fees on most AssexMarkets instruments — including high-demand trades like crypto, gold, and major FX pairs.",
            image: (
              <Image
                src="/images/goodbye.png"
                alt="Goodbye"
                width={320}
                height={348}
                // className="w-full h-auto object-contain max-h-[420px]"
              />
            ),
          },
          {
            title: (
              <>
                Account for <span className="text-[#0dae94]">every</span> type
                of trader
              </>
            ),
            text: "Choose the one that will maximize your returns while minimizing your costs.",
            image: (
              <Image
                src="/images/Wallet.png"
                alt="Wallet"
                width={400}
                height={267}
                // className="w-full h-auto object-contain max-h-[380px]"
              />
            ),
          },
        ]}
      />
      <SecureInfoSection
        title="Commissions and Spreads"
        text="Learn more about commission and spreads for individual instruments"
        bulletPoints={[
          {
            title: "Currencies",
            description:
              "Trade the world’s largest market with spreads starting from 0 pips",
          },
          {
            title: "Commodities",
            description:
              "Diversify your portfolio and trade oil, natural gas and metals",
          },
          {
            title: "Stocks",
            description:
              "Trade stocks of the biggest names in the international stock market with low transaction costs",
          },
          {
            title: "Indices",
            description:
              "Capitalize on the biggest names in tech and other industries",
          },
          {
            title: "Cryptocurrency",
            description:
              "24/7 swap-free trading on top cryptocurrencies including Bitcoin, Ethereum, Litecoin",
          },
        ]}
        rightImage={
          <Image
            src="/images/priceTag.png"
            alt="Tag"
            width={376}
            height={376}
            className="object-contain mx-auto"
            priority
          />
        }
        rightText="Register in 5 minutes with just 3 easy steps"
      />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default Fee;
