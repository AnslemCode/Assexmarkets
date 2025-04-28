import Badge from "@/components/Badge";
import PlatformInfoCard from "@/components/pageComponents/PlatformInfoCard";
import React from "react";

const SimulatedResponsiveSection = () => {
  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Responsiveness" />
        <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
          Available on all platforms
        </h1>
        <p className="text-xl mt-6">Hone your skills at home or on the go</p>
        <div className="mt-16 grid gap-16 md:grid-cols-2 justify-items-center">
          <PlatformInfoCard
            title="Desktop & Web Platforms"
            description="Explore our wide range of platforms such as MetaTrader 4 and Metatrader 5, Metatrader WebTerminal, and the Assexmarkets Terminal to hone your demo trading skills."
            imageSrc="/images/sim-desktop.png"
            imageWidth={564}
            imageHeight={423}
          />

          <PlatformInfoCard
            title="Mobile Platform"
            description="Explore our wide range of platforms such as MetaTrader 4 and Metatrader 5, Metatrader WebTerminal, and the Assexmarkets Terminal to hone your demo trading skills."
            imageSrc="/images/sim-mobile.png"
            imageWidth={367}
            imageHeight={745}
          />
        </div>
      </div>
    </section>
  );
};

export default SimulatedResponsiveSection;
