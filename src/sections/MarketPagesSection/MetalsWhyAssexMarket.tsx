import Badge from "@/components/Badge";

import React from "react";
import { ChartIcon, WithdrawalIcon } from "../../../public/icons/svgs";
import BenefitCardV2 from "@/components/pageComponents/BenefitCardV2";

const MetalsWhyAssexMarket = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Why Assexmarkets?" />
        <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
          Why trade metal with Assexmarkets
        </h1>
        <p className="text-xl text-center mt-6 max-w-[879px] mx-auto">
          You can’t buy or sell an index directly, but at AssexMarkets, you can
          trade indices as CFDs. Our metals CFDs are based on the price of the
          underlying assets. Take advantage of competitive spreads when trading
          popular metals like the UK100 and DE40.
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
            description="Trade both rising and falling stock markets with low spreads that stay stable, even during high-impact stock market news.¹"
          />
          <BenefitCardV2
            icon={<ChartIcon />}
            title="Stop out Protection"
            description="Take on volatile markets with a unique protection feature that strengthens your positions and helps delay or avoid stop outs."
          />
        </div>
      </div>
    </section>
  );
};

export default MetalsWhyAssexMarket;
