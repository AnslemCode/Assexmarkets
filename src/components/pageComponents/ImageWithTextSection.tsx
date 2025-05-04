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
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
      <div
        className={`max-w-7xl mx-auto flex flex-col-reverse items-center gap-12 md:gap-20 lg:flex-row ${
          imageOnLeft ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <motion.div
          className={`w-full lg:w-1/2 text-center ${
            imageOnLeft ? "lg:text-right" : "lg:text-left"
          }`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1f0d3f] mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">{description}</p>
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

        {/* Image Section */}
        <motion.div
          className={`w-full lg:w-1/2 flex ${
            imageOnLeft ? "justify-start" : "justify-end"
          }`}
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
