import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import React from "react";
import { TrendIcon } from "../../../public/icons/svgs";

const MT5KeyFeatures = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Features" />
        <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
          Key <span className="text-[#0dae94]">Features</span>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-3 justify-items-center">
          <BenefitCard
            icon={<TrendIcon />}
            title="MetaEditor"
            description="On MetaTrader 5, you can use MetaEditor to develop trading robots and indicators, which appear instantly on the platform for immediate use. This streamlines strategy testing and deployment."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Hedging System"
            description="In MetaTrader 5 with Exness, you can experience trading using the hedging mode system. Hedging allows you to open multiple positions, even exact opposite positions, for a trading instrument."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Indicators & Analytical Object Tools"
            description="Enhance your trading experience with 38 built-in indicators, 22 analytical tools and 46 graphical objects when you trade financial instruments in the trading platform."
          />
        </div>
      </div>
    </section>
  );
};

export default MT5KeyFeatures;
