"use client";
import { motion } from "framer-motion";
import { CustomButton } from "@/components/ui/moving-border";
import { StepsHover } from "@/components/ui/steps-hover";
import React from "react";

type Step = {
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    title: "Create Account",
    description:
      "Join Assexmarkets today for seamless forex trading, advanced tools, and unrivaled speed to unlock your financial potential",
    image: "/images/create-account.svg",
  },
  {
    title: "First Deposit",
    description:
      "Make your first deposit with Assexmarkets and gain instant access to the world of lucrative forex trading opportunities",
    image: "/images/deposit.svg",
  },
  {
    title: "Start Trading",
    description:
      "Embark on your trading journey, where you’ll discover a seamless and powerful platform for profitable forex trading.",
    image: "/images/start-trading.svg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

export function StepsSection() {
  return (
    <section className="mt-20 sm:mt-30 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="flex flex-col-reverse sm:flex-row justify-between items-start gap-6 sm:gap-4 mb-12"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#1f0e3f] font-secondary max-w-none sm:max-w-xs">
              Register in 5 minutes with these 3 easy steps
            </h2>
            <p className="text-base sm:text-lg text-[#3F4550] max-w-full sm:max-w-[461px]">
              Get started fast—no hassle, no waiting. Just follow these three
              straightforward steps and you’re all set!
            </p>
          </div>
          <CustomButton className="bg-[#1f0e3f] text-white px-6 py-3 text-sm sm:text-base rounded-[48px] font-medium whitespace-nowrap">
            Get Started
          </CustomButton>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <StepsHover
                imageUrl={step.image}
                className="rounded-3xl"
                imageClassName="object-contain"
                childrenClassName="text-left"
              >
                <p className="font-secondary font-bold text-xl text-white line-clamp-2">
                  Step {index + 1}: {step.title}
                </p>
                <p className="font-normal text-sm text-white max-w-xs">
                  {step.description}
                </p>
              </StepsHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
