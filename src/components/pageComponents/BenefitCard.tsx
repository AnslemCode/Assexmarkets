// components/BenefitCard.tsx
import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col h-full w-full max-w-[340px] sm:max-w-[300px] md:max-w-[373px] min-h-[276px] border border-[#E6E6E6] bg-white shadow-md hover:shadow-lg rounded-2xl px-8 py-8 md:py-12 text-center transition-shadow duration-300 ease-in-out">
      <div>
        <div className="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 mx-auto text-white rounded-full">
          {icon}
        </div>
        <h3 className="mt-7 text-base sm:text-lg md:text-xl font-semibold text-[#191A15]">
          {title}
        </h3>
      </div>
      <p className="mt-7 text-sm sm:text-base md:text-lg text-[#3F4550] leading-relaxed mx-auto">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
