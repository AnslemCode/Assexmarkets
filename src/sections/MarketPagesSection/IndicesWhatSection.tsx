"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IndicesWhatSection = () => {
  return (
    <section className="section-padding">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-[600px]"
        >
          <h2 className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px] font-bold text-[#0dae94] text-center md:text-left">
            What is Indices Trading
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line text-[#3F4550] text-center md:text-left">
            Indices trading refers to buying and selling financial instruments
            that track the performance of a group of stocks or other financial
            assets, rather than individual securities.
            {"\n\n"}An index is essentially a measurement of the performance of
            a particular market, and indices trading involves trading on the
            direction of that market by buying or selling derivatives based on
            the index.
            {"\n\n"}For example, the S&P 500 index tracks the performance of the
            top 500 publicly traded companies in the United States.
            {"\n\n"}By trading S&P 500 futures contracts, traders can trade on
            whether they believe the overall value of those companies will go up
            or down.
            {"\n\n"}Indices trading can be done through a variety of financial
            instruments, including contracts for difference (CFDs) which allows
            for leveraged trading. At HFM, you can trade CFDs on major Indices,
            such as UK 100 and GER 40, with leverage and ultra-fast execution.
            {"\n\n"}You can choose between the MT4 and MT5 platforms and the HFM
            App to start trading CFDs on Indices.
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

export default IndicesWhatSection;
