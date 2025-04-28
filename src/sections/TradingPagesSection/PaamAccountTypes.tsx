"use client";
import Badge from "@/components/Badge";
import React from "react";
import { CustomButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import {
  GiftIcon,
  ProIcon,
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

const PortfolioManagementAccountTypes = () => {
  // const router = useRouter();

  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={0}
        >
          <Badge text="Portfolio Management Accounts" />
          <h2 className="font-secondary text-[40px] font-bold text-[#1f0e3f]">
            Smarter Investment, Expertly Managed
          </h2>
          <p className="text-xl leading-8">
            Let professionals manage your portfolio while you focus on your
            financial goals. Choose the account that fits your needs.
          </p>
        </motion.div>

        {/* Plan Cards */}
        <motion.div
          className="flex justify-center flex-wrap gap-8 mt-16"
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
                  title="Social Pro"
                  description="Instant execution account, with zero commission & low spread (for Lot allocation)"
                  icon={<StandardIcon />}
                  benefits={[
                    "Forex, metals, cryptocurrencies, energies and indices",
                    "Maximum Leverage 1:200",
                    "Spread from 0.6 pips",
                    "Minimum Deposit $500",
                    "No commission",
                  ]}
                />
              )}
              {index === 1 && (
                <PlanCard
                  title="Pro"
                  description="Tailored for high-net-worth clients seeking personalized portfolio services."
                  icon={<ProIcon />}
                  benefits={[
                    "Forex, metals, cryptocurrencies, energies and indices",
                    "Maximum Leverage 1:200",
                    "Spread from 0.4 pips",
                    "Deposit Not Applicable",
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
          <p className="text-lg text-center leading-7">
            Curious about managed investing? Explore our platform risk-free with
            a fully featured demo.
          </p>
          <div className="mt-10 flex justify-center">
            <CustomButton
              // onClick={() => router.push("/demo-portfolio-management")}
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

export default PortfolioManagementAccountTypes;
