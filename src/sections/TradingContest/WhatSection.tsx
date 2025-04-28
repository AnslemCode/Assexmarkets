import React from "react";
import Image from "next/image";

const WhatSection = () => {
  return (
    <section className="what-section flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 py-16 lg:py-24">
      {/* Left: Image */}
      <div className="w-full lg:w-auto flex justify-center overflow-hidden h-[660px]">
        <div className="relative w-[600px] h-[900px] -translate-y-[322px]">
          <Image
            src="/images/yellow-man.png"
            alt="What is the Trading Contest"
            fill
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full max-w-[527px]">
        <h2 className="font-secondary text-5xl font-bold leading-14 text-[#0dae94]">
          What is the Trading Contest?
        </h2>
        <p className="mt-4 text-lg leading-[28px] whitespace-pre-line">
          The Trading Contest is a time-bound, high-energy competition where
          traders go head-to-head on a live leaderboard by executing real trades
          in the market. It’s more than just a challenge — it’s an opportunity
          to showcase your trading skills, test your strategies under pressure,
          and rise through the ranks in a competitive yet rewarding environment.
          {"\n\n"}Participants are ranked based on key performance metrics such
          as profitability, risk management, and trade volume. Whether
          you&apos;re aiming for the top spot or simply want to sharpen your
          skills, every trade counts.
          {"\n\n"}As you climb the leaderboard, you stand a chance to win cash
          prizes, trading bonuses, and exclusive platform perks like reduced
          spreads, VIP account access, or personal strategy consultations with
          top analysts.
        </p>
      </div>
    </section>
  );
};

export default WhatSection;
