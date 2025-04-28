import TradingInfoSection from "@/components/marketsComponent/TradingInfo";
import React from "react";

const ForexTradingInfo = () => {
  return (
    <TradingInfoSection
      badgeText="FX Trading"
      title="Popular Forex Pairs"
      description="Different margin rates may apply depending on the size of your position. As your position size increases, so does the incremental margin rate on a tiered basis."
      data={[
        {
          instrument: "EUR/USD",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "USD/JPY",
          sell: "140.716",
          buy: "140.748",
          spread: "0.3",
          change: "-0.1",
          high: "142.210",
          low: "140.459",
        },
        {
          instrument: "GBP/USD",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "AUD/USD",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "USD/CAD",
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

export default ForexTradingInfo;
