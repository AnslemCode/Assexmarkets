"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SupportedPaymentsSection = () => {
  return (
    <section className="mt-28 bg-[#1DA1F2]/5 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center text-[#1F0D3F]">
        {/* Title */}
        <motion.h2
          className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px]
 font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Supported Payment Methods
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Discover effortless funding at AssexMarkets, featuring reliable
          payment methods and globally recognized gateways for a smooth
          experience.
        </motion.p>

        {/* Payment Logos */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center items-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/icons/mastercard-icon.svg"
            alt="Mastercard"
            width={28}
            height={17.5}
            className="lg:w-[56px] lg:h-[35px]"
          />
          <Image
            src="/icons/blue-visa.svg"
            alt="Visa"
            width={27}
            height={9}
            className="lg:w-[54px] lg:h-full text-[#1DA1F2]"
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
        </motion.div>
      </div>
    </section>
  );
};

export default SupportedPaymentsSection;
