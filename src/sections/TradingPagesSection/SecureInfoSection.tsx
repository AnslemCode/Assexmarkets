"use client";
import React from "react";
import { motion } from "framer-motion";
import { TickIcon } from "../../../public/icons/svgs";

interface BulletPoint {
  title: React.ReactNode;
  description: string;
}

interface SecureInfoSectionProps {
  title: string;
  text: string;
  bulletPoints: BulletPoint[];
  rightImage: React.ReactNode;
  rightText: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const SecureInfoSection: React.FC<SecureInfoSectionProps> = ({
  title,
  text,
  bulletPoints,
  rightImage,
  rightText,
}) => {
  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-[14px]">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-secondary text-[32px] font-bold text-[#0dae94]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg leading-6 text-[#191A15] max-w-xl"
          >
            {text}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mt-10 flex flex-col gap-6"
          >
            {bulletPoints.map((point, index) => {
              const isLast = index === bulletPoints.length - 1;
              return (
                <div
                  key={index}
                  className={`${
                    !isLast ? "pb-4 border-b border-[#9E9E9E]" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <TickIcon />
                    </div>
                    <div>
                      <div className="text-[22px] text-[#1f0d3f] font-semibold">
                        {point.title}
                      </div>
                      <p className="text-lg mt-2">{point.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center mt-10 md:mt-0"
        >
          <div className="w-full max-w-full">{rightImage}</div>
          <p className="max-w-[507px] font-secondary font-medium text-[#191a15] text-[32px] mt-[50px] md:mt-[89px]">
            {rightText}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SecureInfoSection;
