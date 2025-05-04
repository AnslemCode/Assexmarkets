import Badge from "@/components/Badge";
import React from "react";

interface StrategyTableRow {
  no: number;
  account: string;
  name: string;
  return?: string;
  daysOpened: number;
  minDeposit: string;
  gain: string;
  lastMonth: string;
  lastWeek: string;
  status: string;
  maxDrawdown: string;
}

interface StrategyTableSectionProps {
  badgeText: string;
  title: string;
  description: string;
  data: StrategyTableRow[];
}

const StrategyTableSection: React.FC<StrategyTableSectionProps> = ({
  badgeText,
  title,
  description,
  data,
}) => {
  return (
    <section className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <Badge text={badgeText} />
        <h2 className="font-secondary font-bold text-[32px] text-[#191A15] mt-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg mt-4 leading-relaxed text-[#4B5563] max-w-3xl mx-auto whitespace-pre-line">
          {description}
        </p>

        {/* Table */}
        <div className="mt-12 w-full overflow-x-auto">
          <div className="inline-block min-w-full shadow-lg border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF] text-[#1F0D3F] text-sm">
                  {[
                    "No",
                    "Account",
                    "Name",
                    "Return",
                    "Days Opened",
                    "Min. Deposit (USD)",
                    "Gain",
                    "Last Month",
                    "Last Week",
                    "Status",
                    "Max. Drawdown",
                  ].map((header) => (
                    <th key={header} className="px-4 py-5 whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => {
                  const isLastMonthNegative = parseFloat(row.lastMonth) < 0;
                  const isLastWeekNegative = parseFloat(row.lastWeek) < 0;

                  return (
                    <tr
                      key={idx}
                      className="border-t border-[#F3F4F6] text-sm sm:text-base text-[#191A15] transition-colors hover:bg-[#FAFAFA]"
                    >
                      <td className="px-4 py-5 whitespace-nowrap">{row.no}</td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.account}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.return ?? "--------"}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.daysOpened}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.minDeposit}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.gain}
                      </td>
                      <td
                        className={`px-4 py-5 whitespace-nowrap ${
                          isLastMonthNegative ? "text-red-600" : ""
                        }`}
                      >
                        {row.lastMonth}
                      </td>
                      <td
                        className={`px-4 py-5 whitespace-nowrap ${
                          isLastWeekNegative ? "text-red-600" : ""
                        }`}
                      >
                        {row.lastWeek}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.status}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.maxDrawdown}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyTableSection;
