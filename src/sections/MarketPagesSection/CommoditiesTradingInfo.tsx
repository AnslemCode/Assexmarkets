import TradingInfoSection from "@/components/marketsComponent/TradingInfo";
import React from "react";

const CommoditiesTradingInfo = () => {
  return (
    <TradingInfoSection
      badgeText="Commodities Trading"
      title="Popular Commodities"
      description={`Tiered margin rates may apply*.\n\n*Different margin rates may apply depending on the size of your position, as your position size increases so does the incremental margin rate on a tiered basis`}
      data={[
        {
          instrument: "Brent Crude Oil",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Corn",
          sell: "140.716",
          buy: "140.748",
          spread: "0.3",
          change: "-0.1",
          high: "142.210",
          low: "140.459",
        },
        {
          instrument: "Copper",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Natural Gas",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Soybeans",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Sugar",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "West Texas Oil",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Wheat",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
      ]}
    />
  );
};

export default CommoditiesTradingInfo;
