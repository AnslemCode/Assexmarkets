import React from "react";
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

const ImageWithTextSection: React.FC<ImageWithTextSectionProps> = ({
  title,
  description,
  buttonText,
  buttonOnClick,
  imageComponent,
  imageOnLeft = false,
}) => {
  const textContent = (
    <div className="w-full md:w-[419px] flex-shrink-0 flex flex-col justify-center px-4">
      <h2 className="font-secondary text-[40px] font-bold text-[#1f0d3f]">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-7 text-[#676D79]">{description}</p>
      <div className="mt-10">
        <Button
          onClick={buttonOnClick}
          text={buttonText}
          icon={<WhiteFlameButtonIcon />}
          variant="primary"
          size="lg"
        />
      </div>
    </div>
  );

  const imageContent = (
    <div className="flex-1 w-full flex justify-center items-center">
      {imageComponent}
    </div>
  );

  return (
    <section className="my-20 px-4 sm:px-6">
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-16 ${
          imageOnLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {textContent}
        {imageContent}
      </div>
    </section>
  );
};

export default ImageWithTextSection;
