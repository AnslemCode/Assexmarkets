import Badge from "@/components/Badge";
import StepCard from "@/components/pageComponents/StepCard";
import React from "react";

const steps = [
  {
    step: "01",
    text: (
      <>
        Open an{" "}
        <span className="text-[#0dae94]">Assexmarkets Live Account</span> or try{" "}
        <span className="text-[#0dae94]">Demo</span>.
      </>
    ),
  },
  {
    step: "02",
    text: "Develop your trading strategy",
  },
  {
    step: "03",
    text: "Choose your trading platform",
  },
  {
    step: "04",
    text: "Select the currency pair you want to trade",
  },
  {
    step: "05",
    text: "Place your first trade",
  },
];

const HowToStartForex = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Trading Contest" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6">
          Forex CFD Trading
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center mt-4 sm:mt-6 max-w-3xl mx-auto">
          Trading Forex CFDs (Contracts for Difference) lets you speculate on
          the price movements of currency pairs without owning the underlying
          assets. At AssexMarkets, we make it simple, fast, and secure to get
          started — whether you&apos;re a beginner or ready to scale your
          strategy.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-10">
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

export default HowToStartForex;
