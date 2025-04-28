import React from "react";
import Image from "next/image";

type PlatformInfoCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
};

const PlatformInfoCard: React.FC<PlatformInfoCardProps> = ({
  title,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className="bg-white shadow-xl rounded-[40px] pt-[76px] px-6 text-center w-[564px]">
      <h3 className="text-2xl font-bold text-[#191A15]">{title}</h3>
      <p className="text-lg mt-5 max-w-xs mx-auto">{description}</p>

      <div className="mt-25">
        <Image
          src={imageSrc}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default PlatformInfoCard;
