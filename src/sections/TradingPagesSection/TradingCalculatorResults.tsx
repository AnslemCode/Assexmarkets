import TradingCalculatorResultComponent from "@/components/pageComponents/TradingCalculatorResult";
import { AlertCircle } from "lucide-react";
import React from "react";

const TradingCalculatorResults = () => {
  return (
    <div className="px-4 sm:px-6">
      <TradingCalculatorResultComponent
        badgeText="Result"
        title="Trading Calculator Results"
        description=""
        data={[
          {
            currency: "USD",
            margin: "16.20",
            spreadCost: "0.16",
            commission: "0.0",
            swapShort: "0.0",
            swapLong: "-0.43",
            pipValue: "0.01",
          },
          {
            currency: "EUR",
            margin: "16.20",
            spreadCost: "0.16",
            commission: "0.0",
            swapShort: "0.0",
            swapLong: "-0.43",
            pipValue: "0.01",
          },
          {
            currency: "GSP",
            margin: "16.20",
            spreadCost: "0.16",
            commission: "0.0",
            swapShort: "0.0",
            swapLong: "-0.43",
            pipValue: "0.01",
          },
          {
            currency: "USD",
            margin: "16.20",
            spreadCost: "0.16",
            commission: "0.0",
            swapShort: "0.0",
            swapLong: "-0.43",
            pipValue: "0.01",
          },
          {
            currency: "AUD",
            margin: "16.20",
            spreadCost: "0.16",
            commission: "0.0",
            swapShort: "0.0",
            swapLong: "-0.43",
            pipValue: "0.01",
          },
          {
            currency: "USD",
            margin: "16.20",
            spreadCost: "0.16",
            commission: "0.0",
            swapShort: "0.0",
            swapLong: "-0.43",
            pipValue: "0.01",
          },
          {
            currency: "CAD",
            margin: "16.20",
            spreadCost: "0.16",
            commission: "0.0",
            swapShort: "0.0",
            swapLong: "-0.43",
            pipValue: "0.01",
          },
        ]}
      />
      <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-4 max-w-6xl mx-auto">
        <AlertCircle className="text-red-500 w-6 h-6 mt-1 shrink-0" />
        <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
          <strong>Important Notice:</strong> This trading calculator serves as
          an educational tool only. The estimates provided should be used for
          planning purposes and not as the basis for final investment decisions.
          All calculations are approximations—actual trading outcomes will be
          determined at the moment your order executes. AssexMarkets cannot
          guarantee that calculator results will match exact market conditions
          during live trading.
        </p>
      </div>
    </div>
  );
};

export default TradingCalculatorResults;
