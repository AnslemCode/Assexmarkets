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
      <div className="max-w-7xl mx-auto rounded-[40px] bg-[#1DA1F2]/5 px-6 sm:px-12 py-8 lg:py-12">
        {/* Title */}
        <h2 className="text-[#1F0D3F] text-center font-bold text-[32px] leading-tight max-w-4xl mx-auto">
          {title}
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-20">
          {/* Left Content (Image or Custom Component) */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <div className="max-h-[400px] w-auto">{leftContent}</div>
          </div>

          {/* Right Benefits List */}
          <div className="w-full lg:w-[60%] flex flex-col gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="min-w-[60px] min-h-[60px] bg-white rounded-xl flex items-center justify-center shadow-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F0D3F]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#4a4a4a] mt-2 leading-relaxed">
                    {benefit.subtext}
                  </p>
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
