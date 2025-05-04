"use client";

import Badge from "@/components/Badge";
import PlatformInfoCard from "@/components/pageComponents/PlatformInfoCard";
import { motion } from "framer-motion";
import React from "react";

const SimulatedResponsiveSection = () => {
  return (
    <section className="my-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <Badge text="Responsiveness" />

        <motion.h1
          className="font-secondary font-bold text-[32px] text-[#191A15] mt-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Available on all platforms
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mt-4 text-[#4B4B4B]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hone your skills at home or on the go
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 justify-items-center w-full">
          <PlatformInfoCard
            title="Desktop & Web Platforms"
            description="Explore our wide range of platforms such as MetaTrader 4 and Metatrader 5, Metatrader WebTerminal, and the Assexmarkets Terminal to hone your demo trading skills."
            imageSrc="/images/sim-desktop.png"
            imageWidth={564}
            imageHeight={423}
            index={0}
          />

          <PlatformInfoCard
            title="Mobile Platform"
            description="Explore our wide range of platforms such as MetaTrader 4 and Metatrader 5, Metatrader WebTerminal, and the Assexmarkets Terminal to hone your demo trading skills."
            imageSrc="/images/sim-mobile.png"
            imageWidth={367}
            imageHeight={745}
            index={1}
          />
        </div>
      </div>
    </section>
  );
};

export default SimulatedResponsiveSection;
