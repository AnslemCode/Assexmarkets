"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type PlatformInfoCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  index: number; // ← new for stagger animation
};

const PlatformInfoCard: React.FC<PlatformInfoCardProps> = ({
  title,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
  index,
}) => {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-[30px] pt-16 px-6 sm:px-8 text-center w-full max-w-[500px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-[#191A15]">{title}</h3>
      <p className="text-base sm:text-lg mt-4 text-[#4B4B4B] max-w-xs mx-auto leading-relaxed">
        {description}
      </p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="object-contain mx-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default PlatformInfoCard;
