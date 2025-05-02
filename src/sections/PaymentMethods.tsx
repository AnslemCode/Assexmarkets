"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Card animation
const cardAnimation = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
  },
};

const PaymentMethods = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 mt-24 sm:mt-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto"
      >
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="text-[#0dae94] bg-[#e6f9f7] px-4 py-1 rounded-full font-semibold text-sm">
            Payment Method
          </span>
        </div>

        {/* Main Card */}
        <div className="relative bg-[#1f0e3f] text-white rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-8 pb-28 lg:pb-20 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center overflow-visible">
          {/* Grid background */}
          <div
            className={cn(
              "absolute inset-0 z-0 rounded-[inherit]",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#3a2a61_1px,transparent_1px),linear-gradient(to_bottom,#3a2a61_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#2b1d4c_1px,transparent_1px),linear-gradient(to_bottom,#2b1d4c_1px,transparent_1px)]"
            )}
          />

          {/* Radial overlay */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-[#1f0e3f] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-[inherit]" />

          {/* Text section */}
          <div className="z-10 text-center lg:text-left max-w-xl">
            <h2 className="font-secondary text-xl sm:text-2xl md:text-[26px] font-medium mb-4">
              Payment Methods
            </h2>
            <p className="mb-0 lg:mb-10 font-medium leading-7 max-w-[420px] mx-auto lg:mx-0">
              Assexmarkets offers a wide range of convenient payment methods,
              including bank transfers, credit/debit cards, and e-wallets,
              ensuring hassle-free deposits and withdrawals.
            </p>

            {/* Logos */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center mt-6">
              <Image
                src="/icons/mastercard-icon.svg"
                alt="Mastercard"
                width={28}
                height={17.5}
                className="lg:w-[56px] lg:h-[35px]"
              />
              <Image
                src="/icons/visa-icon.svg"
                alt="Visa"
                width={27}
                height={9}
                className="lg:w-[54px] lg:h-full"
              />
              <Image
                src="/icons/BankTransfer.svg"
                alt="Bank Transfer"
                width={28}
                height={17.4}
                className="lg:w-[56px] lg:h-[34.8px]"
              />
              <Image
                src="/icons/Bitcoin.svg"
                alt="Bitcoin"
                width={21}
                height={21}
                className="lg:w-[42px] lg:h-[42px]"
              />
              <Image
                src="/icons/maestro-icon.svg"
                alt="Maestro"
                width={20}
                height={20}
                className="lg:w-[40px] lg:h-[40px]"
              />
            </div>
          </div>

          {/* Animated card image */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:block absolute bottom-0 left-1/2 lg:left-auto lg:right-[5%] translate-x-[-50%] lg:translate-x-0 translate-y-[30%] sm:translate-y-[50%] lg:translate-y-[10%] z-0 w-[200px] sm:w-[300px] lg:w-[400px]"
          >
            <Image
              src="/images/card.png"
              alt="Payment Card"
              width={400}
              height={250}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PaymentMethods;
