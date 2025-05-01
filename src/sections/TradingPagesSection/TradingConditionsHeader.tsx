"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../../public/icons/ButtonIcons";
import Image from "next/image";

interface TradingHeaderSectionProps {
  title: string;
  text: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const TradingHeaderSection: React.FC<TradingHeaderSectionProps> = ({
  title,
  text,
}) => {
  return (
    <section className="relative w-full h-auto md:h-[432px] bg-[#00CCB1]/[0.02] rounded-[30px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgImage.png"
          alt="Background"
          fill
          className="object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#00CCB1]/[0.02]" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="font-secondary text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F0d3F] leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl max-w-[709px] mt-4 md:mt-6 text-[#1F0d3F]"
        >
          {text}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Button
            text="Create a Live Account"
            icon={<WhiteFlameButtonIcon />}
            variant="primary"
          />
          <Button
            variant="ghost"
            text="Try a Free Demo"
            icon={<VideoButtonIcon />}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TradingHeaderSection;
