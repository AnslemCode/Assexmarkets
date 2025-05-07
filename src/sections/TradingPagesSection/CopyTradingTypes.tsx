import ImageWithTextSection from "@/components/pageComponents/ImageWithTextSection";

import React from "react";
import Image from "next/image";

const CopyTradingTypes = () => {
  const handleFollowerClick = () => {
    console.log("Start Following clicked");
    // Navigate or trigger an action here
  };

  const handleProviderClick = () => {
    console.log("Become a Provider clicked");
    // Navigate or trigger an action here
  };
  return (
    <div>
      <ImageWithTextSection
        title="Follower"
        description="When you follow a Strategy Provider, their trades are automatically replicated in your account in real-time, allowing you to benefit from their trading strategies without having to manage the trades yourself. However, it’s important to remember that you retain full control over your account. You can customize settings such as the amount of capital to allocate, adjust risk management preferences, and stop copying the Strategy Provider at any time."
        buttonText="Become a Follower"
        buttonOnClick={handleFollowerClick}
        imageComponent={
          <Image
            src="/images/copyTradingRight.png"
            alt="Follower"
            width={702}
            height={560}
            className="w-full object-cover rounded-none"
          />
        }
      />

      <ImageWithTextSection
        title="Strategy Provider"
        description="Become a Strategy Provider and share your proven trading strategies with a global community of traders. By allowing others to copy your trades, you not only build a loyal following but also earn performance fees based on your successful results. This is a unique opportunity to turn your trading skills into a rewarding venture, gain recognition, and inspire others while generating additional income. Take control of your trading journey, grow your influence, and get rewarded for your consistent performance. Start today and lead the way in the world of copy trading!"
        buttonText="Become a Strategy Provider"
        buttonOnClick={handleProviderClick}
        imageOnLeft
        imageComponent={
          <Image
            src="/images/copyTradingLeft.png"
            alt="Strategy Provider"
            width={610}
            height={560}
            className="w-full object-cover rounded-none"
          />
        }
      />
    </div>
  );
};

export default CopyTradingTypes;
