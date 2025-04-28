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
    title: "Bitcoin and Bitcoin Cash",
    subtext:
      "Experience flexible Bitcoin CFD trading on MetaTrader — available on all your devices with consistently low spreads.",
  },
  {
    icon: <GroupIcon />,
    title: "Ethereum and Litecoin",
    subtext:
      "Trade leading altcoins like Ethereum and Litecoin against the US dollar with tight, competitive spreads.",
  },
  {
    icon: <GroupIcon />,
    title: "More cryptos",
    subtext:
      "We provide access to popular cryptocurrencies like Binance Coin, Cardano, Chainlink, Dogecoin, Polkadot, and Uniswap — all available as CFDs traded against the US dollar.",
  },
];

const CryptoBenefits = () => {
  return (
    <ReusableBenefitsSection
      title="Everything you need to trade smarter"
      benefits={benefitsData}
      rightContent={
        <div className="flex flex-col items-center">
          <Image
            src="/images/cryptoImage.png"
            alt="Crypto Image"
            width={600}
            height={336}
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

export default CryptoBenefits;
