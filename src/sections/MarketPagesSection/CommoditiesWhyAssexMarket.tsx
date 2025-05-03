"use client";
import Badge from "@/components/Badge";
import React from "react";
import { ChartIcon, WithdrawalIcon } from "../../../public/icons/svgs";
import BenefitCardV2 from "@/components/pageComponents/BenefitCardV2";
import { motion } from "framer-motion";

const CommoditiesWhyAssexMarket = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge text="Why Assexmarkets?" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-secondary font-bold text-3xl sm:text-4xl md:text-5xl text-[#191A15] mt-6 text-center"
        >
          Why trade commodities with Assexmarkets
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-xl text-center mt-6 max-w-[880px] mx-auto text-[#3F4550]"
        >
          You can trade all the big names in crypto on MT5. You’ll enjoy
          customisable layouts, trade-through charts, a range of plug-ins, an
          intuitive interface and more. Available on live and demo trade
          accounts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default CommoditiesWhyAssexMarket;
