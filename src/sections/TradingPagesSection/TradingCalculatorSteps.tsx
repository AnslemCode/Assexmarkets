import Badge from "@/components/Badge";
import StepCard from "@/components/pageComponents/StepCard";
import React from "react";

const steps = [
  {
    step: "01",
    text: (
      <>
        Choose your{" "}
        <span className="text-[#0dae94]">Assexmarkets account type</span> and
        specify your account&apos;s{" "}
        <span className="text-[#0dae94]">leverage</span> and{" "}
        <span className="text-[#0dae94]">currency</span>.
      </>
    ),
  },
  {
    step: "02",
    text: (
      <>
        Select your desired trading{" "}
        <span className="text-[#0dae94]">instrument </span>
        from the available list.
      </>
    ),
  },
  {
    step: "03",
    text: (
      <>
        Determine your trade&apos;s <span className="text-[#0dae94]">lot </span>
        size and proceed to calculate by clicking the{" "}
        <span className="text-[#0dae94]">&apos;Calculate&apos;</span> button.
      </>
    ),
  },
];

const TradingCalculatorSteps = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Trading Calculator" />
        <h1 className="font-secondary font-bold text-[32px]  text-[#191A15] mt-6">
          How to use the Assexmarkets trading calculator
        </h1>
        <p className="sm:text-xl text-center mt-4 sm:mt-6 max-w-3xl mx-auto">
          The AssexMarkets Trading Calculator is a powerful tool designed to
          help you plan your trades more effectively by providing instant
          calculations for key trading metrics. Follow this simple guide to make
          the most of this resource.
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

export default TradingCalculatorSteps;
