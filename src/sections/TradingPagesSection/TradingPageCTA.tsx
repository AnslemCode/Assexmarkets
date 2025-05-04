"use client";

import Button from "@/components/Button";
import Image from "next/image";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../../public/icons/ButtonIcons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TradingPageCTAProps {
  isSimulatedPage?: boolean;
}

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TradingPageCTA: React.FC<TradingPageCTAProps> = ({
  isSimulatedPage = false,
}) => {
  const title = isSimulatedPage
    ? "Explore Assexmarkets assets and markets"
    : "Trade with a trusted broker today";

  const description = isSimulatedPage
    ? "Learn to trade with our various assets from leading global financial markets with the same conditions as on live trading accounts."
    : "Trade confidently and securely with AssexMarkets today.";

  const imageSrc = isSimulatedPage
    ? "/images/simulatedPageImage.svg"
    : "/images/cta-graphic.png";

  const imageWidth = isSimulatedPage ? 708 : 520;
  const imageHeight = isSimulatedPage ? 346 : 390;

  return (
    <section className="relative w-full bg-[#1f0d3f] pb-12 lg:pb-0 pt-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#2e1d57_1px,transparent_1px),linear-gradient(to_bottom,#2e1d57_1px,transparent_1px)]"
        )}
      />
      {/* Radial Fade Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#1f0d3f] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Left Content */}
        <div className="text-white text-center md:text-left flex flex-col items-center md:items-start">
          <motion.h2
            className="font-secondary text-2xl sm:text-[32px] font-bold leading-tight"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            {title}
          </motion.h2>

          <motion.p
            className="md:text-lg mt-4 max-w-lg"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col md:flex-row justify-center md:justify-start gap-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Button
              icon={<WhiteFlameButtonIcon />}
              text="Create a Live Account"
              variant="primary"
            />
            <Button
              icon={<VideoButtonIcon />}
              text="Try a Free Demo"
              variant="ghost"
            />
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mx-auto"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={imageSrc}
            alt="CTA Graphic"
            width={imageWidth}
            height={imageHeight}
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TradingPageCTA;
