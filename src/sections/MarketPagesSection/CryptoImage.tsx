import React from "react";
import Image from "next/image";

const CryptoImage: React.FC = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-center items-center">
        <Image
          src="/images/cryptoLaptop.png" // Replace with your actual image path
          alt="Crypto Laptop"
          width={800}
          height={600}
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default CryptoImage;
