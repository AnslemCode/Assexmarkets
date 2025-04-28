import TradingInfoSection from "@/components/marketsComponent/TradingInfo";
import React from "react";

const CryptoTradingInfo = () => {
  return (
    <TradingInfoSection
      badgeText="Crypto Trading"
      title="Popular Cryptocurrencies"
      description={`Cryptocurrencies are a digital form of currency that can be traded and used to pay for things. Their value is determined by supply and demand – which makes them highly speculative and unpredictable.\n\nSee the table below for some of the cryptocurrencies we offer.`}
      data={[
        {
          instrument: "Bitcoin",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Bitcoin Cash",
          sell: "140.716",
          buy: "140.748",
          spread: "0.3",
          change: "-0.1",
          high: "142.210",
          low: "140.459",
        },
        {
          instrument: "Ether",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Litecoin",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Binance Coin",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Cardano",
          sell: "1.15095",
          buy: "1.15119",
          spread: "0.9",
          change: "0.3",
          high: "1.15743",
          low: "1.13933",
        },
        {
          instrument: "Solano",
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

export default CryptoTradingInfo;
