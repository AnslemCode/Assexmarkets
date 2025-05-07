"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const aboutSections = [
  {
    title: "Who are we",
    text: `AssexMarkets is a next-generation online brokerage firm providing access to global financial markets through the powerful MetaTrader 5 (MT5) platform. We offer a wide range of trading instruments — including forex, commodities, indices, energies, and cryptocurrencies — all backed by reliable infrastructure and transparent trading conditions.
Founded with a vision to simplify trading without sacrificing power, our platform caters to both retail and institutional clients looking for speed, efficiency, and clarity in every trade.`,
    image: "/images/cheerfulman.png",
    imageWidth: 800,
    imageHeight: 533,
    reverse: false,
  },
  {
    title: "Our Mission",
    text: `At AssexMarkets, our mission is to empower traders of all levels by providing access to the global financial markets through fair, transparent, and innovative trading solutions.
We aim to break down barriers to entry by offering cutting-edge technology, flexible account options, and top-tier execution, all supported by a dedicated client-first approach.
Our goal is not just to facilitate trades — but to build a platform where traders can grow, adapt, and succeed with confidence in an ever-evolving market landscape.`,
    image: "/images/dartboard.png",
    imageWidth: 320,
    imageHeight: 270,
    reverse: true,
  },
  {
    title: "Trust and Transparency",
    text: `We are committed to providing a secure and transparent trading environment. While AssexMarkets is an independent brokerage, we take steps to ensure the protection of client funds and the integrity of trading activities. We encourage all traders to exercise due diligence and trade responsibly.`,
    image: "/images/handshake.png",
    imageWidth: 280,
    imageHeight: 256,
    reverse: false,
  },
];

const AboutUsSection = () => {
  return (
    <section className="mt-10 lg:mt-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {aboutSections.map((section, index) => {
          // const aspectRatio = section.imageWidth / section.imageHeight;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`max-w-6xl mx-auto flex flex-col-reverse items-center gap-12 md:gap-20 lg:flex-row lg:justify-between ${
                section.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div
                className={`w-full lg:w-1/2 ${
                  section.reverse
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h2
                  className="text-base sm:text-xl md:text-2xl lg:text-[32px]
 font-bold text-[#0dae94] mb-4 leading-tight"
                >
                  {section.title}
                </h2>
                <p className="whitespace-pre-line text-sm sm:text-base md:text-lg leading-loose">
                  {section.text}
                </p>
              </div>

              <div
                className={`w-full lg:w-1/2 flex justify-center ${
                  section.reverse ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                <div
                  className={`
    w-full 
    ${
      section.imageWidth / section.imageHeight > 1
        ? "aspect-video"
        : "aspect-square"
    } 
    max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] 
    relative
  `}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUsSection;
