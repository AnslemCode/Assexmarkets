import ImageLeftBenefitsSection from "@/components/marketsComponent/ImageLeftBenefit";
import React from "react";
import { GroupIcon } from "../../../public/icons/svgs";
import Image from "next/image";

const MetalBenefits = () => {
  return (
    <ImageLeftBenefitsSection
      title="Benefits of Metal Trading"
      benefits={[
        {
          icon: <GroupIcon />,
          title: "Gold",
          subtext:
            "Considered a safe haven commodity, gold is commonly used to hedge against volatility in the US dollar. It is one of the most widely traded commodities in the world today.",
        },
        {
          icon: <GroupIcon />,
          title: "Silver",
          subtext:
            "Another popularly traded metal among commodities traders, silver is being increasingly used as a form of hedging against volatility in the currency markets.",
        },
      ]}
      leftContent={
        <Image
          src="/images/goldmint.png"
          alt="Gold mint"
          width={400}
          height={400}
          style={{ maxHeight: "400px", width: "auto", height: "auto" }}
          priority
        />
      }
    />
  );
};

export default MetalBenefits;
