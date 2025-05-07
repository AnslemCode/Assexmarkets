import Badge from "@/components/Badge";
import StepCard from "@/components/pageComponents/StepCard";
import React from "react";

const steps = [
  {
    step: "01",
    text: "Keep your Personal Area private, never share access and personal documents. Don’t let anyone use your name to create an Assexmarkets account or share your security information.",
  },
  {
    step: "02",
    text: "Only conduct financial activities within the Assexmarkets Personal Area and avoid transferring funds to unknown accounts.",
  },
  {
    step: "03",
    text: "Avoid suspicious links, never share sensitive info unexpectedly, and contact AssexMarkets via live chat or email if you suspect fraud.",
  },
];

const ProtectionSteps = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Protection" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6">
          Take steps to protect yourself
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center mt-6 max-w-[612px] mx-auto">
          Enhance your security by familiarizing yourself with practices that
          help prevent unauthorized account activities, scams, and fraud
          attempts.
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

export default ProtectionSteps;
