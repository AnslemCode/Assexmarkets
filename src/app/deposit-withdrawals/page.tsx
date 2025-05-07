import FAQs, { FAQItem } from "@/sections/FAQs";
import SecureInfoSection from "@/sections/TradingPagesSection/SecureInfoSection";
import SupportedPaymentsSection from "@/sections/TradingPagesSection/SupportedPaymentMethods";
import TradingHeaderSection from "@/sections/TradingPagesSection/TradingConditionsHeader";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import WhyChooseUs from "@/sections/TradingPagesSection/WhyChooseUs";
import Image from "next/image";

const myFaqs: FAQItem[] = [
  {
    question: "What are instant deposits and withdrawals?",
    answer:
      "Instant deposits and withdrawals allow you to fund or withdraw from your trading account within minutes using supported payment methods, ensuring fast and seamless access to your capital.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "AssexMarkets supports various payment methods including bank transfers, credit/debit cards, e-wallets, and local payment providers for convenience and global accessibility.",
  },
  {
    question: "Are there any fees for deposits or withdrawals?",
    answer:
      "Most deposits are free of charge, but some withdrawal methods may include minimal processing fees depending on your payment provider. Check our funding page for detailed breakdowns.",
  },
  {
    question: "Can I withdraw money from a Demo account?",
    answer:
      "No, demo accounts are for practice only and use virtual funds. You can’t deposit or withdraw real money from them.",
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
      <SupportedPaymentsSection />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default DepositWithdrawalsPage;
