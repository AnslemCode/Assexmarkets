import FloatingInfoRows from "@/components/pageComponents/FloatingInfoRow";
import FAQs, { FAQItem } from "@/sections/FAQs";
import SecureInfoSection from "@/sections/TradingPagesSection/SecureInfoSection";
import TradingHeaderSection from "@/sections/TradingPagesSection/TradingConditionsHeader";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import Image from "next/image";
import React from "react";

const myFaqs: FAQItem[] = [
  {
    question: "Is AssexMarkets free to use?",
    answer:
      "Opening and maintaining an account with AssexMarkets is completely free. However, trading may incur spreads, swaps, and commissions depending on the account type.",
  },
  {
    question: "Does AssexMarkets charge deposit or withdrawal fees?",
    answer:
      "AssexMarkets does not charge internal deposit fees. Some withdrawal methods may include a small processing fee, depending on your chosen provider.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. All our fees, including spreads, commissions, and swaps, are transparently displayed on our platform. We believe in full transparency.",
  },
  {
    question: "Are demo accounts completely free?",
    answer:
      "Yes, demo accounts are 100% free and provide access to real market conditions using virtual funds, perfect for practice and testing strategies.",
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
                className="w-full h-auto max-w-[300px] md:max-w-[500px] lg:max-w-[600px] mx-auto object-contain"
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
                className="w-full h-auto max-w-[280px] md:max-w-[320px] lg:max-w-[348px] mx-auto object-contain"
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
                className="w-full h-auto max-w-[300px] md:max-w-[360px] lg:max-w-[400px] mx-auto object-contain"
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
            priority
            className="w-full h-auto max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[376px] object-contain mx-auto"
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
