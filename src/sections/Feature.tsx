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
      <section className="pt-16 md:pt-24 pb-8 md:pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 md:gap-24 lg:gap-40"
        >
          {/* Text Content */}
          <div className="md:flex-1 text-center md:text-left">
            <h2 className="font-secondary font-bold text-2xl sm:text-[32px] text-[#0dae94] mb-6 tracking-tight max-w-md mx-auto md:mx-0">
              Earn as a Professional trader
            </h2>
            <p className="font-primary text-base sm:text-lg leading-[28px] max-w-xl mx-auto md:mx-0">
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
          <div className="md:flex-1 w-full max-w-md sm:max-w-lg md:max-w-none relative aspect-[500/425]">
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
