import Badge from "@/components/Badge";
import StepCard from "@/components/pageComponents/StepCard";
import React from "react";

const steps = [
  {
    step: "01",
    text: (
      <>
        Register for the Contest through your{" "}
        <span className="text-[#0dae94]">Assexmarkets</span> dashboard.
      </>
    ),
  },
  {
    step: "02",
    text: (
      <>
        Trade on a{" "}
        <span className="text-[#0dae94]">Trade on a Live Account</span> – no
        simulations, no shortcuts.
      </>
    ),
  },
  {
    step: "03",
    text: "Climb the Leaderboard based on your trading performance.",
  },
  {
    step: "04",
    text: "Win Prizes and bragging rights at the end of the contest period!",
  },
];

const HowItWorks = () => {
  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Trading Contest" />
        <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
          How it works
        </h1>
        <p className="text-xl text-center mt-6 max-w-[879px] mx-auto">
          Trading Forex CFDs (Contracts for Difference) lets you speculate on
          the price movements of currency pairs without owning the underlying
          assets. At AssexMarkets, we make it simple, fast, and secure to get
          started — whether you&apos;re a beginner or ready to scale your
          strategy.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-20">
          {steps.map((item, index) => (
            <StepCard key={index} stepNumber={item.step}>
              <p className="">{item.text}</p>
            </StepCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
