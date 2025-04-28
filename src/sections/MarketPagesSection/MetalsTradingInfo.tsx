import TradingInfoSection from "@/components/marketsComponent/TradingInfo";
import React from "react";

const MetalsTradingInfo = () => {
  return (
    <TradingInfoSection
      badgeText="Metal Trading"
      title="Popular Metals CFDs"
      description={`Take a look at the competitive spreads and margins of our most popular metal CFDs. Tiered margin rates may apply*.\n\n*Different margin rates may apply depending on the size of your position, as your position size increases so does the incremental margin rate on a tiered basis`}
      data={[
        {
          instrument: "Gold",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Silver",
          sell: "140.716",
          buy: "140.748",
          spread: "0.3",
          change: "-0.1",
          high: "142.210",
          low: "140.459",
        },
      ]}
    />
  );
};

export default MetalsTradingInfo;
