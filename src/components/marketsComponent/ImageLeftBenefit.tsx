import React from "react";

export type BenefitItem = {
  icon: React.ReactNode;
  title: string;
  subtext: string;
};

type ImageLeftBenefitsProps = {
  title: string;
  benefits: BenefitItem[];
  leftContent?: React.ReactNode; // ← now left-hand content (e.g., image)
};

const ImageLeftBenefitsSection = ({
  title,
  benefits,
  leftContent,
}: ImageLeftBenefitsProps) => {
  return (
    <section className="mt-30">
      <div className="max-w-7xl mx-auto bg-[#1DA1F2]/5 rounded-[60px] px-[50px] pt-[55px] pb-[26px]">
        <h1 className="text-[#1F0d3F] text-center font-bold text-4xl max-w-3xl mx-auto leading-[65px]">
          {title}
        </h1>
        <div className="mt-[50px] pt-8 pb-[42px] flex gap-[100px] items-center flex-wrap lg:flex-nowrap">
          {/* Left - Flexible Content (e.g., Image) */}
          <div className="flex-1 w-full md:w-auto flex justify-center">
            {leftContent}
          </div>

          {/* Right - Benefits */}
          <div className="flex flex-col gap-10 w-full max-w-[440px]">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-[30px]">
                <div className="bg-white rounded-[15px] flex items-center justify-center w-15 h-15 min-w-[60px] shadow-md">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1F0d3F]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2">{benefit.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLeftBenefitsSection;
