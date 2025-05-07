import FAQs, { FAQItem } from "@/sections/FAQs";
import TradingHeaderSection from "@/sections/TradingPagesSection/TradingConditionsHeader";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";
import Image from "next/image";
import FloatingInfoRows from "@/components/pageComponents/FloatingInfoRow";
import { DualBulletPointSection } from "@/sections/TradingPagesSection/DualBulletPoint";
import ProtectionSteps from "@/sections/TradingPagesSection/ProtectionSteps";

const myFaqs: FAQItem[] = [
  {
    question: "How does AssexMarkets protect my personal information?",
    answer:
      "We use industry-standard encryption, secure servers, and compliance with data protection laws to keep your personal information safe and confidential.",
  },
  {
    question: "Are my funds safe with AssexMarkets?",
    answer:
      "Yes, client funds are held in segregated accounts and protected through risk management protocols and partnerships with trusted financial institutions.",
  },
  {
    question: "Is two-factor authentication (2FA) available?",
    answer:
      "Yes, 2FA is available to add an extra layer of security to your account, helping prevent unauthorized access even if your password is compromised.",
  },
  {
    question: "What is your policy on phishing and online fraud?",
    answer:
      "We actively monitor for fraudulent activity, educate users on phishing risks, and provide tools to report suspicious behavior. Always verify URLs and never share your login credentials.",
  },
];
const ClientProtection = () => {
  return (
    <>
      <TradingHeaderSection
        title="Client Protection"
        text="We are committed to providing a secure trading environment, with enhanced account safety and fund protection."
      />
      <FloatingInfoRows
        floatingText="We've got you covered"
        floatingTextSizeClass="text-xl md:text-[32px]"
        rows={[
          {
            title: "Regulations",
            text: "If you’ve been wondering, ‘Is Assexmarkets legit?’, you can be rest assured that we are a licensed broker, regulated by leading international governing bodies globally.",
            image: (
              <Image
                src="/images/worldImage.png"
                alt="Security"
                width={500}
                height={333}
                priority
                className="w-full h-auto max-w-[500px] object-contain mx-auto"
              />
            ),
          },
          {
            title: (
              <>
                Account <span className="text-[#0dae94]">Security</span>
              </>
            ),

            text: "Prevent unauthorized access to your secure trading accounts by choosing a security option – either phone or email – during your registration process",
            image: (
              <Image
                src="/images/shieldImage.png"
                alt="Goodbye"
                width={280}
                height={354}
                priority
                className="w-full h-auto max-w-[320px] object-contain mx-auto"
              />
            ),
          },
        ]}
      />

      <DualBulletPointSection
        leftSections={[
          {
            sectionTitle: "Platform Protection",
            sectionText:
              "Learn more about our safe and secure trading conditions and protection measures for a smooth trading experience.",
            bulletPoints: [
              {
                title: "Web Attack Protection",
                description:
                  "Our Web Application Firewall (WAF) protects our infrastructure and servers from web threats like SQL injection, XSS attacks, and blocks harmful traffic.",
              },
              {
                title: "Trading Platform Fault Tolerance",
                description:
                  "Our DDoS protection offers you seamless order execution, 24/7 access to your Personal Area, swift deposits and withdrawals, and uninterrupted servers’ operations.",
              },
              {
                title: "Zero Trust Approach",
                description:
                  "Our Zero Trust model assumes minimal trust for company IT components and includes features like user and device authentication, restricted access, and network monitoring.",
              },
              {
                title: "Bug Bounty Program",
                description:
                  "You gain an extra layer of security with our Bug Bounty program, where we invite external experts to examine our platforms and give reviews that help us improve our services.",
              },
              {
                title: "Cybersecurity Knowledge and Skills",
                description:
                  "Our Information Security Team are continuously updated on security technology and upgrade their skills through workshops and certifications.",
              },
            ],
          },
        ]}
        rightSections={[
          {
            sectionTitle: "Payment Protection",
            sectionText:
              "Read about our various premium payment security features to protect your payment transactions.",
            bulletPoints: [
              {
                title: "Segregated Accounts",
                description:
                  "We keep funds in segregated accounts in multiple tier-1 banks to ensure top security and peace of mind.",
              },
              {
                title: "Secure Withdrawal Transactions",
                description:
                  "Your withdrawals are safe and secure, protected by one-time password verification methods.",
              },
              {
                title: "PCI DSS Certified",
                description:
                  "We have successfully passed PCI DSS compliance requirements for cardholder data security.",
              },
              {
                title: "Secure Payments",
                description:
                  "We provide 3D Secure payments for all major credit cards such as Visa and Mastercard.",
              },
            ],
          },
          {
            sectionTitle: "Trading Protection",
            sectionText:
              "Trade confidently with advanced, personalized protection tools.",
            bulletPoints: [
              {
                title: "Negative Balance Protection",
                description:
                  "Trade confidently knowing you won’t owe your broker money; we prevent losses from exceeding your balance across all trading account types.",
              },
              {
                title: "Stop Out Protection",
                description:
                  "Enjoy this unique secure trading protection feature that strengthens your positions and helps delay or avoid stop outs, particularly during increased volatility.",
              },
            ],
          },
        ]}
      />

      {/* <DualBulletPointSection
        leftSection={{
          sectionTitle: "Platform Protection",
          sectionText:
            "Learn more about our safe and secure trading conditions and protection measures for a smooth trading experience.",
          bulletPoints: [
            {
              title: "Web Attack Protection",
              description:
                "Our Web Application Firewall (WAF) protects our infrastructure and servers from web threats like SQL injection, XSS attacks, and blocks harmful traffic.",
            },
            {
              title: "Trading Platform Fault Tolerance",
              description:
                "Our DDoS protection offers you seamless order execution, 24/7 access to your Personal Area, swift deposits and withdrawals, and uninterrupted servers’ operations.",
            },
            {
              title: "Zero Trust Approach",
              description:
                "Our Zero Trust model assumes minimal trust for company IT components and includes features like user and device authentication, restricted access, and network monitoring.",
            },
            {
              title: "Bug Bounty Program",
              description:
                "You gain an extra layer of security with our Bug Bounty program, where we invite external experts to examine our platforms and give reviews that help us improve our services.",
            },
            {
              title: "Cybersecurity Knowledge and Skills",
              description:
                "Our Information Security Team are continuously updated on security technology and upgrade their skills through workshops and certifications.",
            },
          ],
        }}
        rightSection={{
          sectionTitle: "Payment Protection",
          sectionText:
            "Read about our various premium payment security features to protect your payment transactions.",
          bulletPoints: [
            {
              title: "Segregated Accounts",
              description:
                "We keep funds in segregated accounts in multiple tier-1 banks to ensure top security and peace of mind.",
            },
            {
              title: "Secure Withdrawal Transactions",
              description:
                "Your withdrawals are safe and secure, protected by one-time password verification methods.",
            },
            {
              title: "PCI DSS Certified",
              description:
                "We have successfully passed PCI DSS compliance requirements for cardholder data security.",
            },
            {
              title: "Secure Payments",
              description:
                "We provide 3D Secure payments for all major credit cards such as Visa and Mastercard.",
            },
          ],
        }}
      />

      <DualBulletPointSection
        leftSection={{
          sectionTitle: "",
          sectionText: "",
          bulletPoints: [], // Optional: Leave blank if you want to center only one side
        }}
        rightSection={{
          sectionTitle: "Trading Protection",
          sectionText:
            "Trade confidently with advanced, personalized protection tools.",
          bulletPoints: [
            {
              title: "Negative Balance Protection",
              description:
                "Trade confidently knowing you won’t owe your broker money; we prevent losses from exceeding your balance across all trading account types.",
            },
            {
              title: "Stop Out Protection",
              description:
                "Enjoy this unique secure trading protection feature that strengthens your positions and helps delay or avoid stop outs, particularly during increased volatility.",
            },
          ],
        }}
      /> */}
      <ProtectionSteps />
      <FAQs faqItems={myFaqs} />
      <TradingPageCTA />
    </>
  );
};

export default ClientProtection;
