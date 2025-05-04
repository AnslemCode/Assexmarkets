import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const WhatSection = () => {
  return (
    <section className="mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-4 sm:px-6">
        {/* Left: Image */}
        <motion.div
          className="w-full lg:w-auto flex justify-center overflow-hidden h-[500px] sm:h-[660px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-[320px] sm:w-[480px] md:w-[540px] lg:w-[600px] h-[600px] sm:h-[800px] lg:h-[900px] -translate-y-[100px] sm:-translate-y-[180px] lg:-translate-y-[322px]">
            <Image
              src="/images/yellow-man.png"
              alt="What is the Trading Contest"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full max-w-2xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-secondary text-[32px] font-bold text-[#0dae94] leading-tight">
            What is the Trading Contest?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            The Trading Contest is a time-bound, high-energy competition where
            traders go head-to-head on a live leaderboard by executing real
            trades in the market. It’s more than just a challenge — it’s an
            opportunity to showcase your trading skills, test your strategies
            under pressure, and rise through the ranks in a competitive yet
            rewarding environment.
            {"\n\n"}Participants are ranked based on key performance metrics
            such as profitability, risk management, and trade volume. Whether
            you&apos;re aiming for the top spot or simply want to sharpen your
            skills, every trade counts.
            {"\n\n"}As you climb the leaderboard, you stand a chance to win cash
            prizes, trading bonuses, and exclusive platform perks like reduced
            spreads, VIP account access, or personal strategy consultations with
            top analysts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatSection;
