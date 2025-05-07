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
    text: (
      <>
        Download <span className="text-[#0dae94]">MT5</span> for your preferred
        device or use WebTrader
      </>
    ),
  },
  {
    step: "03",
    text: (
      <>
        <span className="text-[#0dae94]">Log in</span> & Start Trading with
        powerful tools at your fingertips
      </>
    ),
  },
];

const MT5GetStarted = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="MT5" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6">
          Get Started with MT5 Today
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center mt-6 max-w-3xl mx-auto">
          All trades are executed with top-tier security, transparency, and
          lightning speed.
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

export default MT5GetStarted;
