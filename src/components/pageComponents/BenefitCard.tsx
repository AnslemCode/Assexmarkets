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
    <div className="border border-[#E6E6E6] bg-white shadow-md hover:shadow-lg rounded-2xl px-6 sm:px-8 py-8 text-center w-full max-w-fit transition-shadow duration-300 ease-in-out">
      <div className="flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 mx-auto text-white rounded-full">
        {icon}
      </div>
      <h3 className="mt-8 text-lg sm:text-xl font-semibold text-[#191A15]">
        {title}
      </h3>
      <p className="mt-7 sm:text-lg text-[#3F4550] leading-relaxed max-w-[309px]">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
