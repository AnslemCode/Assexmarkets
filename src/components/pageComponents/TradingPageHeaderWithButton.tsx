"use client";
import React from "react";
import Image from "next/image";
import Button from "../Button";
import { WhiteFlameButtonIcon } from "../../../public/icons/ButtonIcons";

type TitlePart = {
  text: string;
  className?: string; // Custom style like text color or weight
};

type TradingPageHeaderProps = {
  title: string | TitlePart[]; // Single string or array of styled parts
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
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
    <div className="mt-[110px] text-center px-4 relative">
      <h1 className="font-secondary text-5xl font-bold text-[#1f0e3f] flex flex-wrap justify-center gap-2 leading-tight">
        {renderTitle()}
      </h1>

      <p className="mt-6 max-w-[902px] mx-auto text-lg whitespace-pre-line">
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

      <div className="mt-15">
        <Button
          icon={<WhiteFlameButtonIcon />}
          text={buttonText}
          onClick={onButtonClick}
          variant="primary"
          size="lg"
        />
      </div>
    </div>
  );
};
