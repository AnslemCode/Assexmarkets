import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import React from "react";
import { TrendIcon } from "../../../public/icons/svgs";

const WhyRawSpreadAccount = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Features" />
        <h1 className="font-secondary font-bold text-[32px] text-[#191A15] mt-6">
          Why Choose the Raw Spread Account?
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-3 justify-items-center">
          <BenefitCard
            icon={<TrendIcon />}
            title="Low, Transparent Commission"
            description="Pay a small, fixed commission per lot with no hidden fees or surprises."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Fast Execution"
            description="Execute your trades with minimal slippage and market-leading speed on the MetaTrader 5 platform."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Spreads from 0.0 Pips"
            description="Access the rawest pricing straight from liquidity providers with no markups added."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyRawSpreadAccount;
