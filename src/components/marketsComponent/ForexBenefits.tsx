"use client";
import ReusableBenefitsSection from "@/sections/TradingPagesSection/SimulatedBenefits";
import Image from "next/image";
import React from "react";
import { GroupIcon } from "../../../public/icons/svgs";
import Button from "../Button";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../../public/icons/ButtonIcons";

const benefitsData = [
  {
    icon: <GroupIcon />,
    title: "Pricing",
    subtext:
      "Our pricing engine aggregates live incoming prices from our tier one banks and liquidity providers, and dynamically selects the best bid and offer for each instrument in real time.",
  },
  {
    icon: <GroupIcon />,
    title: "Cost of Trading",
    subtext:
      "Fairness and transparency are at the heart of everything we do. We are upfront about our charges and fees, so you always know exactly how much you are paying when you trade with us.",
  },
  {
    icon: <GroupIcon />,
    title: "Funding and Withdrawals",
    subtext:
      "It is simple and straightforward to deposit and withdraw funds to and from your Assexmarkets trading account. Funds can be deposited using a number of methods, including credit and debit card and bank wire transfer.",
  },
];

const ForexBenefits = () => {
  return (
    <ReusableBenefitsSection
      title="Benefits of FX trading with Assexmarkets"
      benefits={benefitsData}
      rightContent={
        <div className="flex flex-col items-center">
          <Image
            src="/images/metaTraderMonitor.png"
            alt="Meta Trader Monitor"
            width={600}
            height={450}
            className=""
          />
          <div className="flex gap-4 mt-12">
            <Button
              icon={<WhiteFlameButtonIcon />}
              text="Create a Live Account"
              variant="primary"
            />
            <Button
              icon={<VideoButtonIcon />}
              text="Try a Free Demo"
              variant="ghost"
            />
          </div>
        </div>
      }
    />
  );
};

export default ForexBenefits;
