import React from "react";
import Image from "next/image";

const MetalsWhatSection = () => {
  return (
    <section className="what-section flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 py-16 lg:py-24">
      {/* Left: Text */}
      <div className="w-full max-w-[527px]">
        <h2 className="font-secondary text-5xl font-bold text-[#0dae94] tracking-[-0.01em]">
          What is Metal Trading
        </h2>
        <p className="mt-4 text-lg leading-[28px] whitespace-pre-line">
          Metals trading involves buying and selling different metals like gold,
          silver, copper, platinum, and more within financial markets.
          {"\n\n"}These metals are traded as commodities on global exchanges,
          with their prices affected by factors such as supply and demand,
          geopolitical developments, and economic trends.
          {"\n\n"}Trading metals can occur in various ways, including physical
          trading where the actual metal is delivered, or through Contracts for
          Difference (CFDs), which offer the advantage of leverage.
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
      <div className="w-full lg:w-auto flex justify-center overflow-hidden">
        <div className="relative w-full max-w-[600px] aspect-[4/3] lg:aspect-[6/4] max-h-[400px] lg:max-h-[450px]">
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

export default MetalsWhatSection;
