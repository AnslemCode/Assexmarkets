import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import ReusableBenefitsSection from "@/sections/TradingPagesSection/SimulatedBenefits";
import SimulatedResponsiveSection from "@/sections/TradingPagesSection/SimulatedResponsiveSection";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";
import { CheckListIcon, GroupIcon } from "../../../public/icons/svgs";
import Image from "next/image";

const benefitsData = [
  {
    icon: <GroupIcon />,
    title: "Real Profit Potential",
    subtext:
      "Unlike demo accounts, live trading allows you to earn actual returns on your investments.",
  },
  {
    icon: <GroupIcon />,
    title: "True Market Experience",
    subtext:
      "Engage with live market conditions, including spreads, slippage, volatility, and execution speeds—giving you a genuine trading experience.",
  },
  {
    icon: <GroupIcon />,
    title: "Access to Full Features",
    subtext:
      "Enjoy all the tools, indicators, and support available on the platform, tailored for real-time decision-making.",
  },
  {
    icon: <CheckListIcon />,
    title: "Customized Support and Insights",
    subtext:
      "Live account holders often get enhanced customer service, trading signals, or market insights to support decision-making.",
  },
];

// type CardItem = {
//   title: string;
//   description: string;
// };

// const DemoLiveCard = ({ title, description }: CardItem) => (
//   <div className="bg-[#F9FAFB] rounded-xl p-6 w-full">
//     <h4 className="text-xl font-semibold mb-2 text-[#1F0d3F]">{title}</h4>
//     <p className="text-sm text-[#4B5563]">{description}</p>
//   </div>
// );

// const accountCards = [
//   {
//     title: "Demo Account",
//     description:
//       "Perfect for beginners and strategy testing without financial risk.",
//   },
//   {
//     title: "Live Account",
//     description:
//       "Trade real markets with real money and full access to features.",
//   },
// ];

const LiveAccountTradingPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Live"
        highlight={true}
        subtitle="The Assexmarkets live trading account gives you the opportunity to apply your trading skills in real market conditions, harness powerful Assexmarkets tools, and work toward real profits—all with the full support of our expert platform and services."
        endText="Account Trading"
      />
      <ReusableBenefitsSection
        title="Benefits of using an Assexmarkets Live Trading Account"
        benefits={benefitsData}
        rightContent={
          <Image
            src="/images/TradingAccount.png"
            alt="Live Account Image"
            width={600}
            height={505}
            className=""
          />
        }
      />
      <SimulatedResponsiveSection />
      <TradingPageCTA isSimulatedPage />
    </>
  );
};

export default LiveAccountTradingPage;
