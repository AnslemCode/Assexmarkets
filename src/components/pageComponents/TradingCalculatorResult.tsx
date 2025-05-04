import React from "react";
import Badge from "@/components/Badge";

interface ResultRow {
  currency: string;
  margin: string;
  spreadCost: string;
  commission: string;
  swapShort: string;
  swapLong: string;
  pipValue: string;
}

interface TradingCalculatorResultsProps {
  badgeText: string;
  title: string;
  description: string;
  data: ResultRow[];
}

const TradingCalculatorResultComponent: React.FC<
  TradingCalculatorResultsProps
> = ({ badgeText, title, description, data }) => {
  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <Badge text={badgeText} />
        <h2 className="font-secondary font-bold text-2xl sm:text-[32px] text-[#191A15] mt-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg mt-4 leading-relaxed text-[#4B5563] max-w-3xl mx-auto whitespace-pre-line">
          {description}
        </p>

        <div className="mt-6 w-full overflow-x-auto">
          <div className="inline-block min-w-full shadow-lg border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF] text-[#1F0D3F] text-sm sm:text-base font-semibold">
                  {[
                    "Currency",
                    "Margin",
                    "Spread Cost",
                    "Commission",
                    "Swap Short",
                    "Swap Long",
                    "Pip Value",
                  ].map((header) => (
                    <th key={header} className="px-4 py-5 whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-[#F3F4F6] text-sm sm:text-base text-[#191A15] transition-colors hover:bg-[#FAFAFA]"
                  >
                    <td className="px-4 py-5 whitespace-nowrap underline">
                      {row.currency}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      {row.margin}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      {row.spreadCost}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      {row.commission}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      {row.swapShort}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      {row.swapLong}
                    </td>
                    {/* <td className="px-4 py-5 whitespace-nowrap">
                      {row.status === "Active" ? (
                        <span className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" /> Active
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600">
                          <XCircle className="w-4 h-4" /> Inactive
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap">
                      {row.dateJoined}
                    </td> */}
                    <td className="px-4 py-5 whitespace-nowrap">
                      {row.pipValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingCalculatorResultComponent;
