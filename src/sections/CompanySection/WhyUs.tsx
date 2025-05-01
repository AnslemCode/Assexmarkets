import React from "react";
import Image from "next/image";

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
    text: `We are committed to providing a secure and transparent trading environment. While AssexMarkets is an independent brokerage, we take steps to ensure the protection of client funds and the integrity of trading activities.

We encourage all traders to exercise due diligence and trade responsibly.`,
    image: "/images/handshake.png",
    imageWidth: 280,
    imageHeight: 256,
    reverse: false,
  },
];

const AboutUsSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex flex-col gap-[120px] px-6 py-16 lg:py-24">
        {aboutSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              section.reverse ? "lg:flex-row-reverse" : ""
            } items-center justify-center gap-10 lg:gap-41`}
          >
            {/* Text */}
            <div className="w-full max-w-[527px] text-center lg:text-left">
              <h2 className="font-secondary text-5xl font-bold leading-[1.2] text-[#0dae94] whitespace-nowrap">
                {section.title}
              </h2>
              <p className="mt-4 text-lg leading-[28px] whitespace-pre-line">
                {section.text}
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={section.image}
                alt={section.title}
                width={section.imageWidth}
                height={section.imageHeight}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
