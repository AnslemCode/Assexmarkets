import TradingInfoSection from "@/components/marketsComponent/TradingInfo";
import React from "react";

const IndicesTradingInfo = () => {
  return (
    <TradingInfoSection
      badgeText="Indices Trading"
      title="Popular Indices"
      description={`Take a look at the spreads and margins of our most popular indices.\n\nTiered margin rates may apply*`}
      data={[
        {
          instrument: "Australian 200",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "China 50",
          sell: "140.716",
          buy: "140.748",
          spread: "0.3",
          change: "-0.1",
          high: "142.210",
          low: "140.459",
        },
        {
          instrument: "Europe 50",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "UK 100",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "US Wall St 30",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "US Nas 100",
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

export default IndicesTradingInfo;
