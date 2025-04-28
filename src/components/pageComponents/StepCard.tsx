import React from "react";

interface StepCardProps {
  stepNumber: string;
  children: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, children }) => {
  return (
    <div className="flex flex-col items-start text-left gap-2 max-w-[286px] w-full">
      <span className="text-8xl leading-25 text-[#E5E7EB]">{stepNumber}</span>
      <div className="mt-10 text-lg font-medium text-[#676D79]">{children}</div>
    </div>
  );
};

export default StepCard;
