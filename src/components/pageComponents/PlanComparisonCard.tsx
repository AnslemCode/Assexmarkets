import React from "react";

type PlanData = {
  [key: string]: string;
};

type PlanComparisonCardProps = {
  planNames: [string, string];
  parameters: string[];
  planValues: [PlanData, PlanData];
};

const PlanComparisonCard: React.FC<PlanComparisonCardProps> = ({
  planNames,
  parameters,
  planValues,
}) => {
  return (
    <div className="bg-[rgba(29,161,242,0.05)] rounded-[40px] px-20 py-25 flex flex-col gap-6 max-w-6xl mx-auto mt-10 w-full overflow-x-auto">
      {/* Header Row */}
      <div className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-4">
        <div></div>
        <div className="font-bold text-[30px] text-left text-[#1f0d3f]">
          {planNames[0]}
        </div>
        <div className="font-bold text-[30px] text-left text-[#1f0d3f]">
          {planNames[1]}
        </div>
      </div>

      {/* Comparison Rows */}
      {parameters.map((param, index) => (
        <div
          className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-4"
          key={index}
        >
          <div className="font-bold text-xl text-[#191A15]">{param}</div>
          <div className="text-lg text-left text-[#191A15]">
            {planValues[0][param]}
          </div>
          <div className="text-lg text-left text-[#191A15]">
            {planValues[1][param]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanComparisonCard;
