import ImageWithTextSection from "@/components/pageComponents/ImageWithTextSection";

import React from "react";
import Image from "next/image";

const MetaTraderDetails = () => {
  const handleDownload = () => {
    console.log("Start Download");
    // Navigate or trigger an action here
  };

  return (
    <div>
      <ImageWithTextSection
        title="Usage of MetaTrader 5"
        description="Fundamental and technical analysis, trading signals, algorithmic trading - the trading platform provides an arsenal of tools that enhance the trading experience. The platform also has broadcasts of the latest financial news reports for traders to keep up-to-date on the markets.
With the trading signals and copy trading capability in MetaTrader 5, traders can follow the signals of successful traders and copy their trading strategies and orders, which will be automatically reproduced on your account."
        buttonText="Download MetaTrader5"
        buttonOnClick={handleDownload}
        imageComponent={
          <Image
            src="/images/MetaTraderLaptop.png"
            alt="Follower"
            width={624}
            height={468}
            className="max-w-full h-auto"
          />
        }
      />

      <ImageWithTextSection
        title="Mobile trading and MetaTrader 5"
        description="The trading terminal is not just for Windows, macOS and Linux powered desktops. Traders with busy schedules can also perform mobile trading on their iOS and Android smartphones and tablets. Equipped with all the integral trading tools, including trading orders, interactive charts and popular analytical tools, you can monitor your account and perform mobile trading in a single click."
        buttonText="Download MetaTrader5"
        buttonOnClick={handleDownload}
        imageOnLeft
        imageComponent={
          <Image
            src="/images/MetaTraderMobile.png"
            alt="Strategy Provider"
            width={640}
            height={480}
            className="max-w-full h-auto"
          />
        }
      />
    </div>
  );
};

export default MetaTraderDetails;
