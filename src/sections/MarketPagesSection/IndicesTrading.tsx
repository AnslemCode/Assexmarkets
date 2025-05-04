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
    text: "Find an index you want to trade",
  },
  {
    step: "05",
    text: "Open and monitor your position",
  },
];

const IndiceTrading = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Indices Trading" />
        <h1 className="font-secondary font-bold text-[32px] text-[#191A15] mt-6">
          How to start trading Indices CFDs
        </h1>
        <p className="sm:text-xl text-center mt-4 sm:mt-6 max-w-3xl mx-auto">
          Get exposure to global markets by trading the world’s leading stock
          indices — without owning the underlying assets. Follow this simple
          step-by-step process to begin trading Index CFDs with AssexMarkets.
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

export default IndiceTrading;
