"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MetalsWhatSection = () => {
  return (
    <section className="mt-30">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 px-6 max-w-7xl mx-auto">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-[600px]"
        >
          <h2 className="font-secondary text-[32px] font-bold text-[#0dae94]">
            What is Metal Trading
          </h2>
          <p className="mt-4 md:text-lg leading-[28px] whitespace-pre-line text-[#3F4550]">
            Metals trading involves buying and selling different metals like
            gold, silver, copper, platinum, and more within financial markets.
            {"\n\n"}These metals are traded as commodities on global exchanges,
            with their prices affected by factors such as supply and demand,
            geopolitical developments, and economic trends.
            {"\n\n"}Trading metals can occur in various ways, including physical
            trading where the actual metal is delivered, or through Contracts
            for Difference (CFDs), which offer the advantage of leverage.
            {"\n\n"}At Assexmarkets, you can trade metal CFDs with leverage,
            allowing you to increase your position size and potentially enhance
            your trading opportunities.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-[600px] h-[350px] sm:h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden"
        >
          <Image
            src="/images/IndicesAndMetalsImage.png"
            alt="What is Indices Trading"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MetalsWhatSection;
