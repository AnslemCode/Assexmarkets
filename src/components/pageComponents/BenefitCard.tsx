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
    <div className="border border-[#E6E6E6] bg-white shadow-md hover:shadow-xl rounded-2xl px-12 py-8 text-center max-w-sm w-full">
      <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 text-white  rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#191A15]">{title}</h3>
      <p className="text-base text-[#3F4550]">{description}</p>
    </div>
  );
};

export default BenefitCard;
