import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import React from "react";
import { TrendIcon } from "../../../public/icons/svgs";

const WhatWeOffer = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Features" />
        <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
          What We Offer
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-3 justify-items-center">
          <BenefitCard
            icon={<TrendIcon />}
            title="Multiple Account Types"
            description="We offer account types like Standard, Raw Spread, and Leverage Plus to suit every trading style — from beginner to advanced."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="High Leverage Options"
            description="Trade with leverage up to 1:1000 while staying in control using advanced tools for smarter risk management."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Advanced Trading Tools"
            description="Create, test, and automate your strategies directly within MetaTrader 5 using MetaEditor and Expert Advisors."
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
