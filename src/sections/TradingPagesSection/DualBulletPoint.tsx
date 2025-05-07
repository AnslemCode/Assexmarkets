"use client";

import React, { ReactNode } from "react";
import { TickIcon } from "../../../public/icons/svgs";
import { motion } from "framer-motion";

interface BulletPoint {
  title: ReactNode;
  description: ReactNode;
}

interface SectionColumnProps {
  sectionTitle: string;
  sectionText: string;
  bulletPoints: BulletPoint[];
}

interface DualBulletPointSectionProps {
  generalTitle?: string;
  generalDescription?: string;
  leftSections: SectionColumnProps[];
  rightSections: SectionColumnProps[];
}

const animationVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
    },
  }),
};

export const DualBulletPointSection: React.FC<DualBulletPointSectionProps> = ({
  generalTitle,
  generalDescription,
  leftSections,
  rightSections,
}) => {
  const renderSection = (
    section: SectionColumnProps,
    index: number,
    sectionIndex: number
  ) => (
    <motion.div
      key={index}
      className="mb-12 w-full"
      custom={sectionIndex}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants}
    >
      <h2
        className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px]
 font-bold text-[#0dae94] text-center md:text-left"
      >
        {section.sectionTitle}
      </h2>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-center md:text-left leading-relaxed">
        {section.sectionText}
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {section.bulletPoints.map((point, idx) => {
          const isLast = idx === section.bulletPoints.length - 1;
          return (
            <div
              key={idx}
              className={`${!isLast ? "pb-4 border-b border-[#9E9E9E]" : ""}`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 pt-1">
                  <TickIcon />
                </div>
                <div>
                  <div className="text-base sm:text-xl md:text-2xl text-[#1f0d3f] font-semibold">
                    {point.title}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {generalTitle && (
          <motion.h1
            className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px] font-bold text-center text-[#0dae94]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {generalTitle}
          </motion.h1>
        )}
        {generalDescription && (
          <motion.p
            className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {generalDescription}
          </motion.p>
        )}

        <div className="mt-10 md:mt-16 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-[14px]">
          <div className="flex flex-col gap-12 w-full md:w-[592px]">
            {leftSections.map((section, i) => renderSection(section, i, i))}
          </div>
          <div className="flex flex-col gap-12 w-full md:w-[592px]">
            {rightSections.map((section, i) =>
              renderSection(section, i, leftSections.length + i)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
