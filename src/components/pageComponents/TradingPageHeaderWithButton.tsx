"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button";
import { WhiteFlameButtonIcon } from "../../../public/icons/ButtonIcons";
import { motion } from "framer-motion";

type TitlePart = {
  text: string;
  className?: string;
};

type TradingPageHeaderProps = {
  title: string | TitlePart[];
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const TradingPageHeaderWithButton: React.FC<TradingPageHeaderProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  const renderTitle = () => {
    if (typeof title === "string") {
      return <span>{title}</span>;
    }

    return title.map((part, index) => (
      <span key={index} className={part.className ? part.className : ""}>
        {part.text}{" "}
      </span>
    ));
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-[100px] text-center relative">
      <motion.h1
        className="font-secondary text-2xl sm:text-3xl font-bold text-[#1f0e3f] leading-tight flex flex-wrap justify-center gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {renderTitle()}
      </motion.h1>

      <motion.p
        className="mt-6 max-w-3xl mx-auto text-base sm:text-lg whitespace-pre-line"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>

      <motion.div
        className="relative w-[200px] sm:w-[280px] h-[6px] sm:h-[8px] mx-auto mt-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/images/bar.png"
          alt="heading bar"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.div
        className="mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button
          icon={<WhiteFlameButtonIcon />}
          text={buttonText}
          onClick={onButtonClick}
          variant="primary"
          size="md"
        />
      </motion.div>
    </section>
  );
};
