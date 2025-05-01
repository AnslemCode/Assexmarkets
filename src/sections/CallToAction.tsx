"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../public/icons/ButtonIcons";
import { useRouter } from "next/navigation";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CallToAction = () => {
  const router = useRouter();
  return (
    <section className="bg-[#1DA1F2]/5 py-12 px-4 sm:px-8 md:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-secondary text-[#1f0e3f]"
        >
          Join over 100k+ users to trade with a trusted broker today
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-lg sm:text-xl mb-12">
          Trade confidently and securely with AssexMarkets today.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            text="Register now"
            icon={<WhiteFlameButtonIcon />}
            variant="primary"
            // className="w-full sm:w-auto"
            size="lg"
          />
          <Button
            onClick={() => router.push("/simulated-account-trading")}
            text="Try a free Demo"
            icon={<VideoButtonIcon />}
            variant="ghost"
            // className="w-full sm:w-auto"
            size="lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
