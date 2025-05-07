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
    <section className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <Badge text={badgeText} />
        <h2
          className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px]
 text-[#191A15] mt-6"
        >
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed  mt-4 text-[#4B5563] max-w-3xl mx-auto whitespace-pre-line">
          {description}
        </p>

        {/* Table Section */}
        <div className="mt-12 w-full overflow-x-auto">
          <div className="inline-block min-w-full shadow-lg border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF] text-[#1F0D3F] text-sm sm:text-base font-semibold">
                  {[
                    "Instrument",
                    "Sell",
                    "Buy",
                    "Spread",
                    "% Change",
                    "Today High",
                    "Today Low",
                  ].map((header) => (
                    <th key={header} className="px-4 py-5 whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => {
                  const changeValue = parseFloat(row.change);
                  const isPositive = changeValue >= 0;

                  return (
                    <tr
                      key={idx}
                      className="border-t border-[#F3F4F6] text-sm sm:text-base text-[#191A15] transition-colors hover:bg-[#FAFAFA]"
                    >
                      <td className="px-4 py-5 font-medium underline text-blue-700 whitespace-nowrap">
                        {row.instrument}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.sell}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">{row.buy}</td>
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.spread}
                      </td>
                      <td className="px-4 py-5 flex items-center gap-1 text-sm sm:text-base whitespace-nowrap">
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
                      <td className="px-4 py-5 whitespace-nowrap">
                        {row.high}
                      </td>
                      <td className="px-4 py-5 whitespace-nowrap">{row.low}</td>
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
