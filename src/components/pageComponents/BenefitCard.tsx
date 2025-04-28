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
    <div className="bg-white shadow-md rounded-2xl p-6 text-center max-w-sm w-full">
      <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 text-white  rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#191A15]">{title}</h3>
      <p className="text-base text-[#3F4550]">{description}</p>
    </div>
  );
};

export default BenefitCard;
