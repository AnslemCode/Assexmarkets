import React from "react";
import Image from "next/image";

const CopyTradingImage: React.FC = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-center items-center">
        <Image
          src="/images/copyTradingImage.png" // Replace with your actual image path
          alt="Copy Trading"
          width={800}
          height={600}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default CopyTradingImage;
