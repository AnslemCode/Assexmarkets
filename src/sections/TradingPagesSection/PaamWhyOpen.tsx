"use client";
import React from "react";
import { motion } from "framer-motion";
import Badge from "@/components/Badge";
import BenefitCard from "@/components/pageComponents/BenefitCard";
import { TrendIcon } from "../../../public/icons/svgs";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const PaamWhyOpen = () => {
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
          Why Open a PAAM Account?
        </motion.h1>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {[
            // card content mapped with animation
            {
              icon: <TrendIcon />,
              title: "Expert Management",
              description:
                "Let skilled traders manage your funds while you benefit from their experience.",
            },
            {
              icon: <TrendIcon />,
              title: "Automated Profit Distribution",
              description:
                "Earnings are calculated and shared automatically based on your investment.",
            },
            {
              icon: <TrendIcon />,
              title: "Full Transparency",
              description:
                "Monitor manager performance and trading history in real-time.",
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

export default PaamWhyOpen;
