"use client";
import React from "react";
import { motion } from "framer-motion";

export type BenefitItem = {
  icon: React.ReactNode;
  title: string;
  subtext: string;
};

type ReusableBenefitsProps = {
  title: string;
  benefits: BenefitItem[];
  rightContent?: React.ReactNode;
};

const ReusableBenefitsSection = ({
  title,
  benefits,
  rightContent,
}: ReusableBenefitsProps) => {
  return (
    <section className="mt-20 px-4">
      <div className="max-w-7xl mx-auto bg-[#1DA1F2]/10 rounded-[40px] px-6 sm:px-10 md:px-[50px] pt-[40px] md:pt-[55px] pb-[30px] md:pb-[45px]">
        {/* Title */}
        <motion.h1
          className="text-[#1F0d3F] text-center font-bold text-2xl sm:text-3xl md:text-4xl max-w-3xl mx-auto leading-tight md:leading-[65px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>

        {/* Content Grid */}
        <div className="mt-10 md:mt-[50px] flex flex-col-reverse lg:flex-row gap-10 lg:gap-[80px] items-start">
          {/* Left - Benefits List */}
          <div className="flex flex-col gap-8 w-full max-w-[500px] mx-auto lg:mx-0">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-[15px] flex items-center justify-center w-14 h-14 min-w-[56px] shadow-md">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1F0d3F]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#3c3c3c] leading-relaxed">
                    {benefit.subtext}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Flexible Content */}
          {rightContent && (
            <motion.div
              className="w-full flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="max-w-[500px] w-full">{rightContent}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReusableBenefitsSection;
