"use client";
import Badge from "@/components/Badge";
import React from "react";
import { CustomButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import {
  GiftIcon,
  RawSpreadIcon,
} from "../../../public/icons/AccountTypesIcons";
import { PlanCard } from "@/components/PlanCard";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const LeveragePlusAccountType = () => {
  return (
    <section className="mt-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={0}
        >
          <Badge text="Leverage Plus Account" />
          <h2 className="font-secondary text-[40px] font-bold text-[#1f0e3f]">
            Maximum Power with Leverage Plus
          </h2>
          <p className="text-xl leading-8">
            Designed for high-impact trading—access ultra-high leverage and raw
            pricing with speed and precision.
          </p>
        </motion.div>

        {/* Plan Card */}
        <motion.div
          className="flex justify-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={1}
        >
          <PlanCard
            title="Leverage Plus"
            description="Trade with extreme flexibility and control using high leverage and tight spreads."
            icon={<RawSpreadIcon />}
            benefits={[
              "Forex, metals, energies, indices",
              "Maximum Leverage 1:2000",
              "Spread from 0.0 pips",
              "Minimum Deposit $10",
              "Commission $3 per lot",
            ]}
          />
        </motion.div>

        {/* CTA Demo Section */}
        <motion.div
          className="max-w-[449px] mx-auto mt-11"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={2}
        >
          <p className="text-lg text-center leading-7">
            Want to explore before committing? Try our free demo with full
            features and flexibility.
          </p>
          <div className="mt-10 flex justify-center">
            <CustomButton className="flex items-center gap-2 bg-[white] text-[#2D3139] rounded-[48px] font-medium border border-[#2D3139]/40">
              <GiftIcon />
              Try free demo
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeveragePlusAccountType;
