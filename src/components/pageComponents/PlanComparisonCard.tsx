"use client";

import React from "react";
import { motion } from "framer-motion";

type PlanData = {
  [key: string]: string;
};

type PlanComparisonCardProps = {
  planNames: [string, string];
  parameters: string[];
  planValues: [PlanData, PlanData];
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const PlanComparisonCard: React.FC<PlanComparisonCardProps> = ({
  planNames,
  parameters,
  planValues,
}) => {
  const isSinglePlan = !planNames[1] && Object.keys(planValues[1]).length === 0;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[rgba(29,161,242,0.05)] rounded-[40px] px-4 sm:px-10 md:px-20 pt-10 pb-10 flex flex-col gap-6 max-w-7xl mx-auto mt-10 w-full overflow-x-auto"
    >
      {/* Header Row */}
      <motion.div
        variants={itemVariants}
        className={`grid items-center gap-4 text-left ${
          isSinglePlan ? "grid-cols-[1fr_1fr]" : "grid-cols-[1.2fr_1fr_1fr]"
        }`}
      >
        <div></div>
        <div className="font-bold text-sm md:text-base  text-[#1f0d3f]">
          {planNames[0]}
        </div>
        {!isSinglePlan && (
          <div className="font-bold text-sm md:text-base  text-[#1f0d3f]">
            {planNames[1]}
          </div>
        )}
      </motion.div>

      {/* Comparison Rows */}
      {parameters.map((param, index) => (
        <motion.div
          variants={itemVariants}
          className={`grid items-center gap-4 text-left ${
            isSinglePlan ? "grid-cols-[1fr_1fr]" : "grid-cols-[1.2fr_1fr_1fr]"
          }`}
          key={index}
        >
          <div className="font-secondary font-semibold text-sm md:text-base text-[#191A15]">
            {param}
          </div>
          <div className="text-sm md:text-base text-[#191A15]">
            {planValues[0][param]}
          </div>
          {!isSinglePlan && (
            <div className="text-sm md:text-base text-[#191A15]">
              {planValues[1][param]}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PlanComparisonCard;
