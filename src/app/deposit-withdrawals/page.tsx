import FAQs, { FAQItem } from "@/sections/FAQs";
import SecureInfoSection from "@/sections/TradingPagesSection/SecureInfoSection";
import TradingHeaderSection from "@/sections/TradingPagesSection/TradingConditionsHeader";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import WhyChooseUs from "@/sections/TradingPagesSection/WhyChooseUs";
import Image from "next/image";

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
const DepositWithdrawalsPage = () => {
  return (
    <>
      <TradingHeaderSection
        title="Deposits and Withdrawals"
        text="Experience the ease and security of Assexmarkets’ deposits and withdrawals. Enjoy local, convenient, and safe payment methods, and seamless transactions."
      />
      <WhyChooseUs />
      <SecureInfoSection
        title="Your money is safe with us"
        text="As the biggest retail multi-asset broker in the world, we apply multiple layers of security to keep your funds safe and instantly available to you upon request."
        bulletPoints={[
          {
            title: (
              <>
                <span className="text-[#00CCB1]">Segregated</span> Accounts
              </>
            ),
            description:
              "We keep funds in segregated accounts in multiple tier-1 banks to ensure top security and peace of mind.",
          },
          {
            title: (
              <>
                <span className="text-[#00CCB1]">Secure</span> Withdrawal
                Transactions
              </>
            ),
            description:
              "Your withdrawals are safe and secure, protected by one-time password verification methods.",
          },
          {
            title: (
              <>
                PCI DSS <span className="text-[#00CCB1]">Certified</span>
              </>
            ),
            description:
              "We have successfully passed PCI DSS compliance requirements for cardholder data security.",
          },
          {
            title: (
              <>
                <span className="text-[#00CCB1]">Secure</span> Payments
              </>
            ),
            description:
              "We provide 3D Secure payments for all major credit cards such as Visa and Mastercard",
          },
        ]}
        rightImage={
          <Image
            src="/images/monitor.png"
            alt="Secure monitor"
            width={700}
            height={525}
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

export default DepositWithdrawalsPage;
