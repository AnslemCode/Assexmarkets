import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import { WhiteFlameButtonIcon } from "../../../public/icons/ButtonIcons";

interface ImageWithTextSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonOnClick?: () => void;
  imageComponent: React.ReactNode;
  imageOnLeft?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ImageWithTextSection: React.FC<ImageWithTextSectionProps> = ({
  title,
  description,
  buttonText,
  buttonOnClick,
  imageComponent,
  imageOnLeft = false,
}) => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div
        className={`max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 ${
          imageOnLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-start text-center md:text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-secondary text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f0d3f] leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
          <div className="mt-8">
            <Button
              onClick={buttonOnClick}
              text={buttonText}
              icon={<WhiteFlameButtonIcon />}
              variant="primary"
              size="lg"
            />
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {imageComponent}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageWithTextSection;
