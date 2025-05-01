import PlanComparisonCard from "@/components/pageComponents/PlanComparisonCard";
import React from "react";

const RawSpreadComparison = () => {
  return (
    <section>
      <PlanComparisonCard
        planNames={["Raw Spread", ""]}
        parameters={[
          "Minimum Deposit",
          "Spread",
          "Commission",
          "Maximum Leverage",
          "Instruments",
          "Minimum Lot Size",
          "Maximum Lot Size",
          "Maximum number of positions",
          "Hedged margin",
        ]}
        planValues={[
          {
            "Minimum Deposit": "Depends on payment system",
            Spread: "From 0.0 pips",
            Commission: "$3.5 per lot per side",
            "Maximum Leverage": "1:500",
            Instruments:
              "Forex, metals, cryptocurrencies, energies and indices",
            "Minimum Lot Size": "0.01",
            "Maximum Lot Size": "100",
            "Maximum number of positions": "200",
            "Hedged margin": "50%",
          },
          {},
        ]}
      />
    </section>
  );
};

export default RawSpreadComparison;
