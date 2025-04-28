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
import Button from "@/components/Button";
import { WhiteFlameButtonIcon } from "../../../public/icons/ButtonIcons";
// import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const CopyTradingAccountTypes = () => {
  //   const router = useRouter();
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
          <Badge text="Copy Trading Accounts" />
          <h2 className="font-secondary text-[40px] font-bold text-[#1f0e3f]">
            Built for Performance and Precision
          </h2>
          <p className="text-xl leading-8">
            Elevate your trading with tailored account types that offer
            ultra-low spreads, high leverage, and professional-grade execution.
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
                  title="Follower"
                  description="Select, Follow and Track."
                  icon={<StandardIcon />}
                  benefits={[
                    "Copy a variety of trading strategies",
                    "Learn from experienced traders",
                    "Profit as they profit",
                    "Diversify your portfolio by following multiple Strategy Providers",
                    "Access real-time trade updates and notifications",
                  ]}
                  customButton={
                    <Button
                      variant="primary"
                      text="Become a Follower"
                      icon={<WhiteFlameButtonIcon />}
                      onClick={() => console.log("Custom button clicked")}
                    />
                  }
                />
              )}
              {index === 1 && (
                <PlanCard
                  title="Strategy Provider"
                  description="Plan, Trade and Earn."
                  icon={<RawSpreadIcon />}
                  benefits={[
                    "Showcase Your Trading Expertise",
                    "Grow a Loyal Follower Base",
                    "Get Rewarded for Your Success",
                    "Expand Your Influence",
                    "Access Advanced Trading Tools",
                    "Enjoy Flexible Trading Conditions",
                  ]}
                  customButton={
                    <Button
                      variant="primary"
                      text="Become a Strategy Provider"
                      icon={<WhiteFlameButtonIcon />}
                      onClick={() => console.log("Custom button clicked")}
                      // className="w-full bg-yellow-300 text-black hover:bg-yellow-400"
                    />
                  }
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Demo Section */}
        <motion.div
          className="max-w-[460px] mx-auto mt-11"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          custom={4}
        >
          <p className="text-lg text-center leading-7">
            Not ready to register yet? Try the free demo. Same features, same
            flexibility. It also includes full preview.
          </p>
          <div className="mt-10 flex justify-center">
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

export default CopyTradingAccountTypes;
