"use client";
import Badge from "@/components/Badge";
import { InfoBox } from "@/components/pageComponents/InfoBox";
import Image from "next/image";
import {
  CardIcon,
  CupIcon,
  GlobeIcon,
  RadarIcon,
} from "../../../public/icons/svgs";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 text-center">
        <Badge text="Why Choose Us" />
        <h1 className="font-secondary font-bold text-[32px] sm:text-[40px] text-[#191A15] mt-6">
          Smooth trading journey from sign-up to success
        </h1>
        <p className="text-lg sm:text-xl mt-6 max-w-3xl">
          Benefit from our unrivaled payments ecosystem: seamless deposits via
          global and local payment systems, 24/7 access and hassle-free release
          of funds.
        </p>

        {/* Responsive Grid Layout */}
        <div className="relative mt-20 w-full flex flex-col items-center lg:flex-row lg:justify-center lg:gap-8">
          <div className="relative w-[320px] sm:w-[500px] lg:w-[640px]">
            <Image
              src="/images/Wallet.png"
              alt="Platform overview"
              width={640}
              height={427}
              className="w-full h-auto"
            />

            {/* Desktop Positioning: Absolute InfoBoxes */}
            <div className="hidden lg:block">
              <motion.div
                className="absolute top-0 left-[-220px] w-80"
                variants={boxVariants}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <InfoBox
                  icon={<CardIcon />}
                  title="Payment methods for your convenience"
                  description="Global, local and secure payment methods for seamless deposits and withdrawals."
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-[-220px] w-80"
                variants={boxVariants}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <InfoBox
                  icon={<CupIcon />}
                  title="Forget about withdrawal fees"
                  description="We pay your third-party transaction fees so you don't have to."
                />
              </motion.div>

              <motion.div
                className="absolute top-0 right-[-220px] w-80"
                variants={boxVariants}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <InfoBox
                  icon={<RadarIcon />}
                  title="Your money is yours"
                  description="Access your funds any day, any time with our instant withdrawal feature."
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-[-220px] w-80"
                variants={boxVariants}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <InfoBox
                  icon={<GlobeIcon />}
                  title="Trade globally with AssexMarkets"
                  description="Take your trading to the next level with AssexMarkets — the platform designed for ambitious traders who want more than just local wins."
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Stacked InfoBoxes */}
          <div className="flex flex-col gap-6 mt-12 lg:hidden">
            <InfoBox
              icon={<CardIcon />}
              title="Payment methods for your convenience"
              description="Global, local and secure payment methods for seamless deposits and withdrawals."
            />
            <InfoBox
              icon={<CupIcon />}
              title="Forget about withdrawal fees"
              description="We pay your third-party transaction fees so you don't have to."
            />
            <InfoBox
              icon={<RadarIcon />}
              title="Your money is yours"
              description="Access your funds any day, any time with our instant withdrawal feature."
            />
            <InfoBox
              icon={<GlobeIcon />}
              title="Trade globally with AssexMarkets"
              description="Take your trading to the next level with AssexMarkets — the platform designed for ambitious traders who want more than just local wins."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
