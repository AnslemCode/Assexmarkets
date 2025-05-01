"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TradingPagesHeadingProps = {
  title: string;
  subtitle: string;
  highlight?: string | boolean;
  endText?: string;
};

const TradingPagesHeading: React.FC<TradingPagesHeadingProps> = ({
  title,
  subtitle,
  highlight,
  endText = "Accounts",
}) => {
  const renderHeading = () => {
    if (typeof highlight === "boolean" && highlight) {
      return (
        <>
          <span className="text-[#0dae94]">{title}</span> {endText}
        </>
      );
    }

    if (typeof highlight === "string") {
      return (
        <>
          {title} <span className="text-[#0dae94]">{highlight}</span> {endText}
        </>
      );
    }

    return <>{title}</>;
  };

  return (
    <div className="mt-24 md:mt-32 px-4 text-center relative">
      {/* Title */}
      <motion.h1
        className="font-secondary text-3xl md:text-5xl font-bold text-[#1f0e3f] leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {renderHeading()}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 md:mt-6 text-base md:text-lg max-w-[709px] mx-auto text-[#3c3c3c] whitespace-pre-line"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {subtitle}
      </motion.p>

      {/* Bar Image */}
      <motion.div
        className="relative w-[200px] md:w-[311px] h-[6px] md:h-[8px] mx-auto mt-4 md:mt-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Image
          src="/images/bar.png"
          alt="heading bar"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
};

export default TradingPagesHeading;
