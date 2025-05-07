"use client";
import { motion } from "framer-motion";
import React from "react";

interface StepCardProps {
  stepNumber: string;
  children: React.ReactNode;
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StepCard: React.FC<StepCardProps> = ({ stepNumber, children }) => {
  return (
    <motion.div
      variants={item}
      className="flex flex-col items-start text-left gap-4 max-w-xs w-full"
    >
      <span className="text-[64px] md:text-[80px] leading-none text-[#E5E7EB] font-bold">
        {stepNumber}
      </span>
      <div className="mt-4 text-sm sm:text-base md:text-lg font-medium text-[#676D79]">
        {children}
      </div>
    </motion.div>
  );
};

export default StepCard;
