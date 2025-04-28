import React from "react";
import Image from "next/image";

type TradingPagesHeadingProps = {
  title: string;
  subtitle: string;
  highlight?: string | boolean; // can be string for word highlight or boolean for full title highlight
  endText?: string; // Optional suffix like "Accounts"
};

const TradingPagesHeading: React.FC<TradingPagesHeadingProps> = ({
  title,
  subtitle,
  highlight,
  endText = "Accounts",
}) => {
  const renderHeading = () => {
    // Case 1: Simulated — full title highlight
    if (typeof highlight === "boolean" && highlight) {
      return (
        <>
          <span className="text-[#0dae94]">{title}</span> {endText}
        </>
      );
    }

    // Case 2: highlight a word inside the title
    if (typeof highlight === "string") {
      return (
        <>
          {title} <span className="text-[#0dae94]">{highlight}</span> {endText}
        </>
      );
    }

    // Case 3: no highlight (e.g., PAMM)
    return <>{title}</>;
  };

  return (
    <div className="mt-[110px] text-center relative">
      <h1 className="font-secondary text-5xl font-bold text-[#1f0e3f]">
        {renderHeading()}
      </h1>

      <p className="mt-6 max-w-[709px] mx-auto text-lg whitespace-pre-line">
        {subtitle}
      </p>

      <div className="relative w-[311px] h-[8px] mx-auto mt-5">
        <Image
          src="/images/bar.png"
          alt="heading bar"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default TradingPagesHeading;
