import Badge from "@/components/Badge";

import React from "react";
import { ChartIcon, WithdrawalIcon } from "../../../public/icons/svgs";
import BenefitCardV2 from "@/components/pageComponents/BenefitCardV2";

const CryptoWhyAssexMarket = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-4 sm:px-6">
        <Badge text="Why Assexmarkets?" />
        <h1 className="font-secondary font-bold text-[32px]  text-[#191A15] mt-6">
          Why trade crypto with Assexmarkets
        </h1>
        <p className="text-base sm:text-xl text-center mt-4 sm:mt-6 max-w-3xl leading-relaxed">
          You can trade all the big names in crypto on MT5. You’ll enjoy
          customisable layouts, trade-through charts, a range of plug-ins, an
          intuitive interface and more. Available on live and demo trade
          accounts.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3 justify-items-center">
          <BenefitCardV2
            icon={<WithdrawalIcon />}
            title="Instant Withdrawals"
            description="Simplify withdrawals for quick access to your funds. Choose your favorite payment method, make a withdrawal request, and enjoy instant approval."
          />
          <BenefitCardV2
            icon={<ChartIcon />}
            title="Swap Free Trading"
            description="Keep your online trades running overnight with 0 charges, whether you are buying or shorting your cryptocurrency of choice."
          />
          <BenefitCardV2
            icon={<ChartIcon />}
            title="Stop Out Protection"
            description="Enjoy a unique market protection feature that strengthens your positions and helps delay or avoid stop outs, particularly during increased volatility."
          />
        </div>
      </div>
    </section>
  );
};

export default CryptoWhyAssexMarket;
