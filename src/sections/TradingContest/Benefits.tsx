import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import React from "react";
import {
  BirthdayWrapIcon,
  MedalIcon,
  TrendIcon,
} from "../../../public/icons/svgs";

const Benefits = () => {
  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Benefits" />
        <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
          What’s in it for you?
        </h1>
        <p className="text-xl text-center mt-6 max-w-[790px] mx-auto">
          When you join the Assexmarkets Trading Contest, you’re not just
          trading — you’re stepping into a space where skill is recognized and
          rewarded. Whether you&apos;re in it for the thrill, the challenge, or
          the prizes, there&apos;s real value waiting for you.
        </p>
        <div className="mt-25 grid gap-10 md:grid-cols-3 justify-items-center">
          <BenefitCard
            icon={<BirthdayWrapIcon />}
            title="Real Rewards for Real Traders"
            description="Top performers walk away with cash prizes, trading bonuses, and exclusive platform perks—because your skill deserves to be rewarded."
          />
          <BenefitCard
            icon={<MedalIcon />}
            title="Recognition & Status"
            description="Climb the leaderboard and earn your place among the best. Get featured, celebrated, and seen by the Assexmarkets community."
          />
          <BenefitCard
            icon={<TrendIcon />}
            title="Sharpen Your Edge"
            description="Compete in real market conditions and fine-tune your strategies under pressure. It’s the ultimate training ground to grow as a trader."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
