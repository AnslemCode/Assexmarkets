import Badge from "@/components/Badge";

import React from "react";
import { ChartIcon, WithdrawalIcon } from "../../../public/icons/svgs";
import BenefitCardV2 from "@/components/pageComponents/BenefitCardV2";

const MT5WhyAssexMarket = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Why?" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6">
          Why AssexMarkets?
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center mt-6 max-w-[879px] mx-auto">
          ​AssexMarkets offers a comprehensive trading experience on the
          MetaTrader 5 (MT5) platform, catering to both novice and experienced
          traders. Here are some reasons why traders might choose AssexMarkets
          for MT5
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3 justify-items-center">
          <BenefitCardV2
            icon={<ChartIcon />}
            title="Fast Execution"
            description="MetaTrader 5 is built for speed and stability — essential features during periods of high market volatility when price movements can be fast and unpredictable."
          />
          <BenefitCardV2
            icon={<WithdrawalIcon />}
            title="Low and Stable Spreads"
            description="Trade both rising and falling stock markets with low spreads that stay stable, even during high-impact stock market news."
          />
          <BenefitCardV2
            icon={<ChartIcon />}
            title="Stop Out Protection"
            description="Take on volatile markets with a unique protection feature that strengthens your positions and helps delay or avoid stop outs."
          />
        </div>
      </div>
    </section>
  );
};

export default MT5WhyAssexMarket;
