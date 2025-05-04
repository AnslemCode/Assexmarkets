"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfoRow {
  title: React.ReactNode;
  text: string;
  image: React.ReactNode;
}

interface FloatingInfoRowsProps {
  floatingText: string;
  rows: InfoRow[];
  floatingTextSizeClass?: string;
  floatingTextPositionClass?: string;
}

const FloatingInfoRows: React.FC<FloatingInfoRowsProps> = ({
  floatingText,
  rows,
  floatingTextSizeClass,
  floatingTextPositionClass,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="relative mt-20 sm:mt-24 overflow-visible px-4 sm:px-6"
    >
      <div className="relative z-10 max-w-7xl mx-auto bg-[#FAFCFD] rounded-3xl px-4 sm:px-8 md:px-20 py-16 md:py-[108px] flex flex-col gap-24 sm:gap-28">
        {/* Floating Text */}
        <div
          className={`absolute ${
            floatingTextPositionClass ?? "-top-8 sm:-top-10 right-2 sm:right-6"
          }`}
        >
          <div
            className={`text-[#191A15] font-black rotate-[12deg] pointer-events-none select-none whitespace-nowrap ${
              floatingTextSizeClass ??
              "text-[32px] sm:text-5xl md:text-[90px] leading-snug md:leading-[200px]"
            }`}
          >
            {floatingText}
          </div>
        </div>

        {rows.map((row, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center justify-between ${
                isEven ? "" : "md:flex-row-reverse"
              } gap-12 md:gap-20`}
            >
              {/* Text Block */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-[32px] font-bold text-[#1f0d3f] leading-tight">
                  {row.title}
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed">
                  {row.text}
                </p>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="w-full max-w-[400px]">{row.image}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default FloatingInfoRows;
