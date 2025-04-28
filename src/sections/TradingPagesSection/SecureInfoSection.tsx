"use client";
import React from "react";
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

const SecureInfoSection: React.FC<SecureInfoSectionProps> = ({
  title,
  text,
  bulletPoints,
  rightImage,
  rightText,
}) => {
  return (
    <section className="mt-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-[14px]">
        {/* Left Side */}
        <div className="w-full md:w-[592px]">
          <h2 className="font-secondary text-4xl font-bold text-[#0dae94]">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-6 max-w-[584px]">{text}</p>

          <div className="mt-10 flex flex-col gap-6 w-[432px]">
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
                      <p className="text-lg mt-4 leading-6">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-full">{rightImage}</div>
          <p className="max-w-[507px] font-secondary font-medium text-[#191a15] text-3xl mt-[89px]">
            {rightText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecureInfoSection;
