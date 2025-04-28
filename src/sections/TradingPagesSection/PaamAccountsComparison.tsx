import PlanComparisonCard from "@/components/pageComponents/PlanComparisonCard";
import React from "react";

const PortfolioManagementAccountsComparison = () => {
  return (
    <section>
      <PlanComparisonCard
        planNames={["Social Pro", "Pro"]}
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
            Commission: "$2 per lot",
            "Maximum Leverage": "1:500",
            Instruments:
              "Forex, metals, cryptocurrencies, energies and indices",
            "Minimum Lot Size": "0.01",
            "Maximum Lot Size": "100",
            "Maximum number of positions": "200",
            "Hedged margin": "50%",
          },
          {
            "Minimum Deposit": "Depends on payment system",
            Spread: "From 1.0 pips",
            Commission: "None",
            "Maximum Leverage": "1:500",
            Instruments:
              "Forex, metals, cryptocurrencies, energies and indices",
            "Minimum Lot Size": "0.01",
            "Maximum Lot Size": "100",
            "Maximum number of positions": "200",
            "Hedged margin": "50%",
          },
        ]}
      />
    </section>
  );
};

export default PortfolioManagementAccountsComparison;
