"use client";

import { motion } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Button from "@/components/Button";
import { WhiteFlameButtonIcon } from "../../public/icons/ButtonIcons";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PlatformTourCTA = () => {
  return (
    <section className="pt-16 md:pt-24 pb-10 md:pb-12 px-4 md:px-6">
      <motion.div
        layout
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-24 lg:gap-40"
      >
        <motion.div
          layout
          className="md:flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none relative aspect-[500/375]"
        >
          <DirectionAwareHover imageUrl="/images/monitor.png">
            <p className="font-secondary font-bold text-xl">
              Power of MetaTrader
            </p>
            <p className="font-normal text-sm">Take your trading further</p>
          </DirectionAwareHover>
        </motion.div>

        <motion.div
          layout
          className="md:flex-1 text-center md:text-left w-full"
        >
          <h2 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#1f0d3f] tracking-tight">
            Take advantage of MetaTrader
          </h2>
          <p className="font-primary text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            Our best-in-class bridging technology is combined with formidable
            tier one bank pricing to give you an even more powerful trading
            experience. Get free custom risk management EAs and proprietary
            indicators.
          </p>
          <div className="mt-8 md:mt-10 w-full md:w-auto">
            <Button
              icon={<WhiteFlameButtonIcon />}
              text="Take a Platform Tour"
              variant="primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PlatformTourCTA;
