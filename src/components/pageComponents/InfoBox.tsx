import { ReactNode } from "react";

type InfoBoxProps = {
  icon: ReactNode; // Instead of string for src
  title: string;
  description: string;
};

export const InfoBox: React.FC<InfoBoxProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md">
      <div className="w-8 h-8">{icon}</div>
      <div>
        <h4 className="font-semibold text-base text-[#191A15]">{title}</h4>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};
