"use client";
import Badge from "@/components/Badge";
import React from "react";
import { CustomButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import {
  GiftIcon,
  RawSpreadIcon,
  StandardIcon,
} from "../../../public/icons/AccountTypesIcons";
import { PlanCard } from "@/components/PlanCard";
// import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const StandardTradingAccountTypes = () => {
  // const router = useRouter();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={0}
        >
          <Badge text="Standard Trading Accounts" />
          <h2
            className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px]
 font-bold text-[#1f0e3f]"
          >
            Reliable Trading for Every Trader
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Experience flexibility and simplicity with our Standard account
            types— designed for both beginners and seasoned traders.
          </p>
        </motion.div>

        {/* Plan Cards */}
        <motion.div
          className="flex justify-center flex-wrap  gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[...Array(2)].map((_, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              variants={containerVariants}
            >
              {index === 0 && (
                <PlanCard
                  title="Standard"
                  description="Our most popular account type with no commissions and tight spreads."
                  icon={<StandardIcon />}
                  benefits={[
                    "Forex, metals, cryptocurrencies, energies and indices",
                    "Maximum Leverage 1:Unlimited",
                    "Spread from 0.3 pips",
                    "Minimum Deposit $100",
                    "No commission",
                  ]}
                />
              )}
              {index === 1 && (
                <PlanCard
                  title="Standard Cent"
                  description="Great for beginners. Trade smaller lot sizes with all Standard benefits."
                  icon={<RawSpreadIcon />}
                  benefits={[
                    "Forex, metals, cryptocurrencies, energies and indices",
                    "Maximum Leverage 1:Unlimited",
                    "Spread from 0.3 pips",
                    "Minimum Deposit $10",
                    "No commission",
                  ]}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Demo Section */}
        <motion.div
          className="max-w-[449px] mx-auto mt-11"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={3}
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center">
            Want to explore before committing? Try our free demo with full
            features and flexibility.
          </p>
          <div className="mt-4 md:mt-10 flex justify-center">
            <CustomButton
              // onClick={() => router.push("/simulated-account-trading")}
              className="flex items-center gap-2 bg-[white] text-[#2D3139] rounded-[48px] font-medium border border-[#2D3139]/40"
            >
              <GiftIcon />
              Try free demo
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StandardTradingAccountTypes;
