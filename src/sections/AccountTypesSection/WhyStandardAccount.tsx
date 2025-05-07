import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import React from "react";
import { TrendIcon } from "../../../public/icons/svgs";

const WhyStandardAccount = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Badge text="Features" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6">
          Why Choose the Standard Account?
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-3 justify-items-center">
          <BenefitCard
            icon={<TrendIcon />}
            title="No Commissions"
            description="Enjoy commission-free trading. All costs are included in the spreads for full transparency."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Competitive Spreads"
            description="Access forex, commodities, indices, energies, and cryptocurrencies — all through the world-class MT5 platform."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="User-Friendly Setup"
            description="Designed for an easy start — open an account quickly and begin trading immediately without complex setups."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyStandardAccount;
