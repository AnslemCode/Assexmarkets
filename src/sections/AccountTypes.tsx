"use client";
import Badge from "@/components/Badge";
import React from "react";
import {
  StandardIcon,
  ProIcon,
  GiftIcon,
} from "../../public/icons/AccountTypesIcons";
import { motion } from "framer-motion";
import { PlanCard } from "@/components/PlanCard";
import { CustomButton } from "@/components/ui/moving-border";
// import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AccountTypes = () => {
  // const router = useRouter();
  return (
    <section className="mt-36 px-4">
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
          <Badge text="Account Types" />
          <h2 className="font-secondary text-3xl sm:text-4xl font-bold text-[#1f0e3f]">
            Simple and Trustworthy
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8">
            Choose the Right Account for Your Trading Style.
            <br /> From beginner-friendly options to pro-level execution, we
            offer accounts tailored to every level of trader.
          </p>
        </motion.div>

        {/* Plan Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 mt-10 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              variants={containerVariants}
            >
              {index === 0 && (
                <PlanCard
                  title="Standard"
                  description="Suits all trading styles and designed for all types of traders"
                  icon={<StandardIcon />}
                  benefits={[
                    "Forex, metals, cryptocurrencies, energies and indices",
                    "Leverage Up to 1:500",
                    "Spread from 0.2 pips",
                    "Minimum Deposit $1",
                    "Minimum Trade size 0.01lots",
                  ]}
                />
              )}
              {index === 1 && (
                <PlanCard
                  title="Pro"
                  description="Zero commission and ultra low spread account designed for instant execution"
                  icon={<ProIcon />}
                  isPro
                  benefits={[
                    "Forex, metals, cryptocurrencies, energies and indices",
                    "Leverage Up to 1:100",
                    "Spread from 0.1 pips",
                    "Minimum Deposit $500",
                    "Minimum Trade size 0.01lots",
                    "No commission",
                  ]}
                />
              )}
              {index === 2 && (
                <PlanCard
                  title="Raw Spread"
                  description="Lowest spreads with fixed commission per lot"
                  icon={<ProIcon />}
                  benefits={[
                    "Forex, metals, cryptocurrencies, energies and indices",
                    "Leverage Up to 1:100",
                    "Spread from 3 pips",
                    "Minimum Deposit $500",
                    "Minimum Trade size 0.01lots",
                    "Commission up to $3.50 each side lot",
                  ]}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Demo Section */}
        <motion.div
          className="max-w-lg mx-auto mt-11"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={4}
        >
          <p className="text-base sm:text-lg leading-relaxed sm:leading-7 text-center">
            Not ready to register yet? Try the free demo. Same features, same
            flexibility. It also includes full preview.
          </p>
          <div className="mt-6 sm:mt-10 flex justify-center">
            <CustomButton
              // onClick={() => {
              //   router.push("/simulated-account-trading");
              // }}
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

export default AccountTypes;
