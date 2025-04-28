import TradingPagesHeading from "@/components/pageComponents/TradingPagesHeading";
import ReusableBenefitsSection from "@/sections/TradingPagesSection/SimulatedBenefits";
import SimulatedResponsiveSection from "@/sections/TradingPagesSection/SimulatedResponsiveSection";
import TradingPageCTA from "@/sections/TradingPagesSection/TradingPageCTA";
import React from "react";
import { CheckListIcon, GroupIcon } from "../../../public/icons/svgs";

const benefitsData = [
  {
    icon: <GroupIcon />,
    title: "Training",
    subtext: "Trade forex without risking your real money",
  },
  {
    icon: <GroupIcon />,
    title: "Test Strategy",
    subtext: "Test your strategies and EAs on a demo account before going live",
  },
  {
    icon: <GroupIcon />,
    title: "Test Environment",
    subtext:
      "Test your trading conditions like broker latency, swap rates, etc",
  },
  {
    icon: <CheckListIcon />,
    title: "Trading Platform",
    subtext:
      "Test your trading software, its functions and shortkeys before going live",
  },
];

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

const SimulatedAccountTradingPage = () => {
  return (
    <>
      <TradingPagesHeading
        title="Simulated"
        highlight={true}
        subtitle="The assexmarkets risk-free demo trading account offers you the benefit of sharpening your trading skills and strategies, as well as mastering Assexmarkets' unique trading tools without financial risk."
        endText="Trading Account"
      />
      <ReusableBenefitsSection
        title="Benefits of using an Assexmarkets Simulated Trading Account"
        benefits={benefitsData}
        // cards={accountCards}
      />
      <SimulatedResponsiveSection />
      <TradingPageCTA isSimulatedPage />
    </>
  );
};

export default SimulatedAccountTradingPage;
