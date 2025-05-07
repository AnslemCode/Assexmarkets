import Badge from "@/components/Badge";
import StepCard from "@/components/pageComponents/StepCard";
import React from "react";

const steps = [
  {
    step: "01",
    text: (
      <>
        Select your <span className="text-[#0dae94]">base currency,</span> then
        choose up to five currencies to convert to.
      </>
    ),
  },
  {
    step: "02",
    text: (
      <>
        Enter the <span className="text-[#0dae94]">amount </span>
        you want to convert from the base currency.
      </>
    ),
  },
  {
    step: "03",
    text: "The currency converter will automatically calculate and display the exchange rates for your chosen currencies.",
  },
];

const CurrencyConverterSteps = () => {
  return (
    <section className="mt-12 sm:mt-20 lg:mt-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Currency Converter" />
        <h1 className="font-secondary font-bold text-base sm:text-[32px] text-center text-[#191A15] max-w-[270px] sm:max-w-none mt-6 leading-snug sm:leading-[42px]">
          How to use the Assexmarkets currency converter
        </h1>
        <p className="text-sm sm:text-xl text-center mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed sm:leading-[32px]">
          The AssexMarkets Currency Converter gives you real-time exchange rates
          at your fingertips, making international transactions straightforward
          and precise. This essential tool helps you instantly convert between
          any currency pair, allowing you to make informed financial decisions
          whether you&apos;re trading, traveling, or conducting business across
          borders. Follow our simple instructions to harness its full potential.
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

export default CurrencyConverterSteps;
