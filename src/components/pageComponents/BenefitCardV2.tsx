// components/BenefitCardV2.tsx
import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCardV2: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl px-6 py-8 sm:p-8 text-left max-w-sm w-full">
      <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#0dae94]/10 text-[#0dae94] rounded-full mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-[#191A15] mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-[#3F4550] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitCardV2;
