"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../public/icons/ButtonIcons";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/star-background";
import { FlipWords } from "@/components/ui/flip-words";
import { usePathname } from "next/navigation";

const Hero = () => {
  const pathname = usePathname();
  const words = ["Best", "Optimal", "Ideal", "Winning", "Leading"];

  return (
    <section
      key={pathname}
      className="relative min-h-screen text-white overflow-hidden flex flex-col justify-start pt-[100px] md:pt-[160px] lg:pt-[180px] bg-white"
    >
      {/* text-[#1f0e3f] */}
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none select-none brightness-[1.3]"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* White overlay above the video */}
      {/* <div className="absolute inset-0 z-[1] bg-white/80" /> */}

      {/* Optional overlays */}
      <ShootingStars />
      <StarsBackground />

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="font-secondary font-bold tracking-tight mx-auto leading-[1.4] text-balance"
          style={{
            fontSize: "clamp(1.25rem, 3vw, 40px)",
            maxWidth: "1085px",
          }}
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <Button
            variant="primary"
            icon={<WhiteFlameButtonIcon />}
            text="Create a Live Account"
            size="sm"
          />
          <Button
            variant="ghost"
            icon={<VideoButtonIcon />}
            text="Try a Free Demo"
            size="sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
