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
    <div className="flex flex-col items-center gap-3 bg-white py-2 px-4 rounded-lg shadow-md">
      <div className="w-8 h-8">{icon}</div>
      <div className="mt-2">
        <h4 className="font-bold text-base text-[#191A15]">{title}</h4>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};
