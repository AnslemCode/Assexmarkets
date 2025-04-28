import React from "react";
import Image from "next/image";

const IndicesWhatSection = () => {
  return (
    <section className="what-section flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 py-16 lg:py-24">
      {/* Left: Text */}
      <div className="w-full max-w-[527px]">
        <h2 className="font-secondary text-5xl font-bold text-[#0dae94] tracking-[-0.01em]">
          What is Indices Trading
        </h2>
        <p className="mt-4 text-lg leading-[28px] whitespace-pre-line">
          Indices trading refers to buying and selling financial instruments
          that track the performance of a group of stocks or other financial
          assets, rather than individual securities.
          {"\n\n"}An index is essentially a measurement of the performance of a
          particular market, and indices trading involves trading on the
          direction of that market by buying or selling derivatives based on the
          index.
          {"\n\n"}For example, the S&P 500 index tracks the performance of the
          top 500 publicly traded companies in the United States.
          {"\n\n"}By trading S&P 500 futures contracts, traders can trade on
          whether they believe the overall value of those companies will go up
          or down.
          {"\n\n"}Indices trading can be done through a variety of financial
          instruments, including contracts for difference (CFDs) which allows
          for leveraged trading. At HFM, you can trade CFDs on major Indices,
          such as UK 100 and GER 40, with leverage and ultra-fast execution.
          {"\n\n"}You can choose between the MT4 and MT5 platforms and the HFM
          App to start trading CFDs on Indices.
        </p>
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-auto flex justify-center overflow-hidden h-[450px]">
        <div className="relative w-[600px] h-[450px]">
          <Image
            src="/images/IndicesAndMetalsImage.png"
            alt="What is the Trading Contest"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default IndicesWhatSection;
