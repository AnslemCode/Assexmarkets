"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PaymentMethods = () => {
  return (
    <section className="px-4 sm:px-8 mt-16 sm:mt-26">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-7xl mx-auto"
      >
        {/* Centered Badge */}
        <div className="flex justify-center mb-6">
          <span className="text-[#0dae94] bg-[#e6f9f7] px-4 py-1 rounded-full font-semibold text-sm">
            Payment Method
          </span>
        </div>

        {/* Main Content */}
        <div className="relative bg-[#1f0e3f] text-white rounded-[48px] p-8 sm:p-16 flex flex-col sm:flex-row justify-between items-center overflow-visible">
          {/* Grid Background */}
          <div
            className={cn(
              "absolute inset-0 z-0 rounded-[48px]",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#3a2a61_1px,transparent_1px),linear-gradient(to_bottom,#3a2a61_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#2b1d4c_1px,transparent_1px),linear-gradient(to_bottom,#2b1d4c_1px,transparent_1px)]"
            )}
          />

          {/* Radial Fade Overlay */}
          <div className="pointer-events-none rounded-[48px] absolute inset-0 z-0 bg-[#1f0e3f] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          {/* Left Section */}
          <div className="max-w-xl z-10">
            <h2 className="font-secondary text-xl sm:text-[26px] font-medium mb-4">
              Payment Methods
            </h2>
            <p className="mb-10 max-w-[406px] sm:max-w-none font-medium leading-7">
              Assexmarkets offers a wide range of convenient payment methods,
              including bank transfers, credit/ debit cards and e-wallets,
              ensuring hassle-free deposits and withdrawals
            </p>

            {/* Logos */}
            <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
              <Image
                src="/icons/mastercard-icon.svg"
                alt="Mastercard"
                width={56}
                height={35}
              />
              <Image
                src="/icons/visa-icon.svg"
                alt="Visa"
                width={54}
                height={18}
              />
              <Image
                src="/icons/BankTransfer.svg"
                alt="Bank Transfer"
                width={56}
                height={34.8}
              />
              <Image
                src="/icons/Bitcoin.svg"
                alt="Bitcoin"
                width={42}
                height={42}
              />
              <Image
                src="/icons/maestro-icon.svg"
                alt="Maestro"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Payment Card Image (Hidden on Small Devices) */}
          <div className="absolute bottom-0 right-0 sm:right-[5%] w-[250px] sm:w-[400px] translate-y-[10%] z-0 sm:block hidden">
            <Image
              src="/images/card.png"
              alt="Payment Card"
              width={400}
              height={253}
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PaymentMethods;
