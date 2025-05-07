"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { RazorFeatureSection } from "@/components/RazorComponent";
import { motion } from "framer-motion";
import PlatformTourCTA from "./PlatformTour";

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

const Feature = () => {
  return (
    <>
      <section className="px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 lg:gap-40"
        >
          {/* Text Content */}
          <div className="md:flex-1 text-center md:text-left">
            <h2 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#0dae94] mb-6 tracking-tight max-w-md mx-auto md:mx-0">
              Earn as a Professional trader
            </h2>
            <p className="font-primary text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Assexmarkets is an established ECN forex broker serving both
              individual and corporate clients. We offer all of our customers a
              comprehensive range of trading options, ASSEXMARKETS technical
              support, and consulting services, with the goal of making the
              trading process efficient, hassle-free, and above all highly
              profitable for you. From new account registration to money
              withdrawal, we make superior customer service our top priority.
            </p>
          </div>

          {/* Image */}
          <div className="md:flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none relative aspect-[500/425]">
            <DirectionAwareHover imageUrl="/images/copyTrading.png">
              <p className="font-secondary font-bold text-xl text-white drop-shadow-md">
                Earn as a Professional Trader
              </p>
              <p className="font-normal text-sm text-white">Use AssexMarkets</p>
            </DirectionAwareHover>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <PlatformTourCTA />

      {/* Feature Highlights */}
      <RazorFeatureSection />
    </>
  );
};

export default Feature;
