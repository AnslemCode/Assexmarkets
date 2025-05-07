"use client";
import React from "react";
import { motion } from "framer-motion";
import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import {
  BirthdayWrapIcon,
  MedalIcon,
  TrendIcon,
} from "../../../public/icons/svgs";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Benefits = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <Badge text="Benefits" />
        </motion.div>

        <motion.h1
          className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          What’s in it for you?
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base text-center mt-6 max-w-3xl mx-auto text-[#3F4550]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          When you join the Assexmarkets Trading Contest, you’re not just
          trading — you’re stepping into a space where skill is recognized and
          rewarded. Whether you&apos;re in it for the thrill, the challenge, or
          the prizes, there&apos;s real value waiting for you.
        </motion.p>

        <div className="mt-10 lg:mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {[
            // card content mapped with animation
            {
              icon: <BirthdayWrapIcon />,
              title: "Real Rewards for Real Traders",
              description:
                "Top performers walk away with cash prizes, trading bonuses, and exclusive platform perks—because your skill deserves to be rewarded.",
            },
            {
              icon: <MedalIcon />,
              title: "Recognition & Status",
              description:
                "Climb the leaderboard and earn your place among the best. Get featured, celebrated, and seen by the Assexmarkets community.",
            },
            {
              icon: <TrendIcon />,
              title: "Sharpen Your Edge",
              description:
                "Compete in real market conditions and fine-tune your strategies under pressure. It’s the ultimate training ground to grow as a trader.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 3}
              className="w-full flex justify-center"
            >
              <BenefitCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
