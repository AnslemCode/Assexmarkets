"use client";
import Badge from "@/components/Badge";
import React from "react";
import { ChartIcon, WithdrawalIcon } from "../../../public/icons/svgs";
import BenefitCardV2 from "@/components/pageComponents/BenefitCardV2";
import { motion } from "framer-motion";

const MetalsWhyAssexMarket = () => {
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
          Why trade metal with Assexmarkets
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-xl text-center mt-6 max-w-[880px] mx-auto text-[#3F4550]"
        >
          You can’t buy or sell an index directly, but at AssexMarkets, you can
          trade indices as CFDs. Our metals CFDs are based on the price of the
          underlying assets. Take advantage of competitive spreads when trading
          popular metals like the UK100 and DE40.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full"
        >
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
            title="Stop out Protection"
            description="Take on volatile markets with a unique protection feature that strengthens your positions and helps delay or avoid stop outs."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MetalsWhyAssexMarket;
