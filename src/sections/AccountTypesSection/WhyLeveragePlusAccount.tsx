import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import React from "react";
import { TrendIcon } from "../../../public/icons/svgs";

const WhyLeveragePlusAccount = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Badge text="Features" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6">
          Why Choose the Leverage Standard Account?
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-3 justify-items-center">
          <BenefitCard
            icon={<TrendIcon />}
            title="High Leverage, Greater Flexibility"
            description="Trade with leverage of up to 1:1000, allowing you to control larger positions with a smaller investment."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Wide Range of Markets"
            description="Access forex, commodities, indices, energies, and cryptocurrencies — all through the world-class MT5 platform."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Optimal for Multiple Strategies"
            description="Ideal for swing traders, position traders, and aggressive intraday strategies aiming to maximize returns."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyLeveragePlusAccount;
