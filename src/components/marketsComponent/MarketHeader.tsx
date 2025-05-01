"use client";
import React from "react";
import Button from "@/components/Button";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../../public/icons/ButtonIcons";

interface MarketHeaderProps {
  title: string;
  description?: string;
  bulletPoints?: string[];
  button1Text: string;
  button2Text: string;
  reverse?: boolean;
  imageElement: React.ReactNode;
}

const MarketHeader: React.FC<MarketHeaderProps> = ({
  title,
  description,
  bulletPoints,
  button1Text,
  button2Text,
  reverse = false,
  imageElement,
}) => {
  return (
    <section className="bg-[rgba(0,204,177,0.02)] px-4 sm:px-8 lg:px-26 py-20 lg:py-24 min-h-[553px]">
      <div
        className={`mx-auto flex flex-col-reverse lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } items-center justify-between gap-12`}
      >
        {/* Left Content */}
        <div className="w-full max-w-[747px]">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F0d3f] leading-tight">
            {title}
          </h2>

          {description && (
            <p className="text-lg leading-relaxed mt-8 max-w-[709px]">
              {description}
            </p>
          )}

          {bulletPoints && (
            <ul className="max-w-[709px] list-disc list-inside text-lg mt-4 pl-5 space-y-2 leading-relaxed">
              {bulletPoints.map((point, index) => (
                <li key={index} className="ml-1">
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              icon={<WhiteFlameButtonIcon />}
              text={button1Text}
              variant="primary"
              size="lg"
            />
            <Button
              icon={<VideoButtonIcon />}
              text={button2Text}
              variant="ghost"
              size="lg"
            />
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full max-w-xl flex justify-center">
          {imageElement}
        </div>
      </div>
    </section>
  );
};

export default MarketHeader;
