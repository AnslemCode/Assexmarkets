"use client";
import React from "react";
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

const TradingHeaderSection: React.FC<TradingHeaderSectionProps> = ({
  title,
  text,
}) => {
  return (
    <section className="relative w-full h-[432px] bg-[#00CCB1]/[0.02] rounded-[30px] overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <h1 className="font-secondary text-5xl font-bold text-[#1F0d3F]">
          {title}
        </h1>
        <p className="text-lg max-w-[709px] mt-6">{text}</p>

        <div className="mt-15 flex flex-col sm:flex-row gap-4">
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
        </div>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgImage.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#00CCB1]/[0.02]" />
      </div>
    </section>
  );
};

export default TradingHeaderSection;
