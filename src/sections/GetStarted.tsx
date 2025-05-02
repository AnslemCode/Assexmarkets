"use client";
import { motion } from "framer-motion";
import { CustomButton } from "@/components/ui/moving-border";
import Image from "next/image";
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
      "Join Assexmarkets today for seamless forex trading, advanced tools, and unrivaled speed to unlock your financial potential.",
    image: "/images/create-account.svg",
  },
  {
    title: "First Deposit",
    description:
      "Make your first deposit with Assexmarkets and gain instant access to the world of lucrative forex trading opportunities.",
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
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export function StepsSection() {
  return (
    <section className="mt-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f0e3f] font-secondary">
              Register in 5 minutes with these 3 easy steps
            </h2>
            <p className="text-base sm:text-lg text-[#3F4550]">
              Get started fast—no hassle, no waiting. Just follow these three
              straightforward steps and you’re all set!
            </p>
          </div>
          <CustomButton className="bg-[#1f0e3f] text-white px-6 py-3 text-sm sm:text-base rounded-full font-medium whitespace-nowrap">
            Get Started
          </CustomButton>
        </motion.div>

        {/* Steps Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-[430px] mb-6 relative">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-2xl"
                />
              </div>
              <h3 className="font-secondary font-bold text-xl text-[#1f0e3f] mb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-sm text-[#3F4550]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
