import Badge from "@/components/Badge";
import { ArrowDown, ArrowUp } from "lucide-react";

interface TableDataRow {
  instrument: string;
  sell: string;
  buy: string;
  spread: string;
  change: string;
  high: string;
  low: string;
}

interface TradingInfoSectionProps {
  badgeText: string;
  title: string;
  description: string;
  data: TableDataRow[];
}

const TradingInfoSection: React.FC<TradingInfoSectionProps> = ({
  badgeText,
  title,
  description,
  data,
}) => {
  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 text-center">
        <Badge text={badgeText} />
        <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
          {title}
        </h1>
        <p className="text-xl mt-6 max-w-3xl whitespace-pre-line">
          {description}
        </p>

        {/* Table Section */}
        <div className="mt-16 w-full overflow-x-auto">
          <div className="shadow-xl overflow-hidden border border-[#E5E7EB] bg-white">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF] font-semibold text-[#1f0d3f] text-sm">
                  <th className="px-4 py-6 font-medium">Instrument</th>
                  <th className="px-4 py-6 font-medium">Sell</th>
                  <th className="px-4 py-6 font-medium">Buy</th>
                  <th className="px-4 py-6 font-medium">Spread</th>
                  <th className="px-4 py-6 font-medium">% Change</th>
                  <th className="px-4 py-6 font-medium">Today High</th>
                  <th className="px-4 py-6 font-medium">Today Low</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => {
                  const changeValue = parseFloat(row.change);
                  const isPositive = changeValue >= 0;

                  return (
                    <tr
                      key={idx}
                      className="border-t border-[#F3F4F6] text-sm text-[#191A15] transition-colors hover:bg-[#F9FAFB]"
                    >
                      <td className="px-4 py-6 font-medium whitespace-nowrap underline">
                        {row.instrument}
                      </td>
                      <td className="px-4 py-6 whitespace-nowrap">
                        {row.sell}
                      </td>
                      <td className="px-4 py-6 whitespace-nowrap">{row.buy}</td>
                      <td className="px-4 py-6 whitespace-nowrap">
                        {row.spread}
                      </td>
                      <td className="px-4 py-6 flex items-center gap-1 whitespace-nowrap">
                        {isPositive ? (
                          <ArrowUp className="text-green-500 w-4 h-4" />
                        ) : (
                          <ArrowDown className="text-red-500 w-4 h-4" />
                        )}
                        <span
                          className={
                            isPositive ? "text-green-600" : "text-red-600"
                          }
                        >
                          {row.change}%
                        </span>
                      </td>
                      <td className="px-4 py-6 whitespace-nowrap">
                        {row.high}
                      </td>
                      <td className="px-4 py-6 whitespace-nowrap">{row.low}</td>
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

export default TradingInfoSection;
