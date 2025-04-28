"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../public/icons/ButtonIcons";
import { Spotlight } from "@/components/ui/Spotlight";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/star-background";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  const words = ["Best", "Optimal", "Ideal", "Winning", "Leading"];

  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-[120px] md:pt-[160px] lg:pt-[180px] bg-[#00CCB1]/10 text-[#1f0e3f] overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="font-secondary text-4xl md:text-5xl lg:text-[56px] max-w-6xl mx-auto font-bold leading-tight md:leading-[72px] tracking-tight"
        >
          With{" "}
          <span className="inline-block text-[#0dae94]">
            <FlipWords words={words} />
            Market
          </span>{" "}
          Conditions, Trade With{" "}
          <span className="text-[#0dae94]">Low Latency</span> and{" "}
          <span className="text-[#0dae94]">Tight Spread</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 md:mt-12 flex flex-wrap justify-center gap-x-6 gap-y-4 z-20"
        >
          <Button
            variant="primary"
            icon={<WhiteFlameButtonIcon />}
            text="Create a Live Account"
          />
          <Button
            variant="ghost"
            icon={<VideoButtonIcon />}
            text="Try a Free Demo"
          />
        </motion.div>

        <ShootingStars />
        <StarsBackground />
      </div>

      {/* Background image */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[661px] -mt-20 z-0">
        <Image
          src="/images/herobgImage.png"
          alt="Hero background"
          fill
          className="object-cover pointer-events-none select-none"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
