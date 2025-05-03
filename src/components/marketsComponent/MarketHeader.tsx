"use client";

import React from "react";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../../public/icons/ButtonIcons";

interface MarketHeaderProps {
  title: string;
  description?: string;
  bulletPoints?: string[];
  button1Text?: string;
  button2Text?: string;
  button1OnClick?: () => void;
  button2OnClick?: () => void;
  reverse?: boolean;
  imageElement: React.ReactNode;
}

const MarketHeader: React.FC<MarketHeaderProps> = ({
  title,
  description,
  bulletPoints,
  button1Text,
  button2Text,
  button1OnClick,
  button2OnClick,
  reverse = false,
  imageElement,
}) => {
  return (
    <section className="bg-[rgba(0,204,177,0.02)] px-4 sm:px-8 lg:px-26 py-20 lg:py-24">
      <div
        className={`mx-auto flex flex-col-reverse lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } items-center justify-between lg:gap-12 max-w-7xl`}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[747px]"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F0d3f] leading-tight">
            {title}
          </h2>

          {description && (
            <p className="text-lg leading-relaxed mt-6 text-[#3F4550] max-w-[709px]">
              {description}
            </p>
          )}

          {bulletPoints && (
            <ul className="max-w-[709px] list-disc list-inside text-lg mt-4 pl-5 space-y-2 text-[#3F4550]">
              {bulletPoints.map((point, index) => (
                <li key={index} className="ml-1">
                  {point}
                </li>
              ))}
            </ul>
          )}

          {/* Buttons (optional) */}
          {(button1Text || button2Text) && (
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
              {button1Text && (
                <Button
                  icon={<WhiteFlameButtonIcon />}
                  text={button1Text}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={button1OnClick}
                />
              )}
              {button2Text && (
                <Button
                  icon={<VideoButtonIcon />}
                  text={button2Text}
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={button2OnClick}
                />
              )}
            </div>
          )}
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-xl flex justify-center"
        >
          {imageElement}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketHeader;
