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
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 px-4 text-center relative">
      <motion.h1
        className="font-secondary font-bold text-[#1f0e3f] leading-tight mx-auto"
        style={{
          fontSize: "clamp(1.25rem, 4vw, 2rem)", // Responsive font size
          maxWidth: "800px",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {renderTitle()}
      </motion.h1>

      <motion.p
        className="mt-4 md:mt-6 text-[#3c3c3c] max-w-[709px] mx-auto whitespace-pre-line"
        style={{
          fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
          lineHeight: "1.75rem",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
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
