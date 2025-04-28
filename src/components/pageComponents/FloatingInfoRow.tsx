"use client";
import React from "react";

interface InfoRow {
  title: React.ReactNode;
  text: string;
  image: React.ReactNode;
}

interface FloatingInfoRowsProps {
  floatingText: string;
  rows: InfoRow[];
  floatingTextSizeClass?: string;
  floatingTextPositionClass?: string;
}

const FloatingInfoRows: React.FC<FloatingInfoRowsProps> = ({
  floatingText,
  rows,
  floatingTextSizeClass,
  floatingTextPositionClass,
}) => {
  return (
    <section className="relative mt-32 overflow-visible">
      <div className="relative z-10 max-w-6xl px-20 py-[108px] mx-auto flex flex-col gap-[100px] bg-[#FAFCFD] rounded-3xl">
        {/* Floating Text - inside top-right of the content card */}
        <div
          className={`absolute ${
            floatingTextPositionClass ?? "-top-12 md:-top-18 right-8"
          }`}
        >
          <div
            className={`text-[#191A15] font-black rotate-[12deg] pointer-events-none select-none whitespace-nowrap ${
              floatingTextSizeClass ?? "text-[90px] leading-[200px]"
            }`}
          >
            {floatingText}
          </div>
        </div>

        {rows.map((row, index) => {
          const isEven = index % 2 === 0;
          const gapClass = isEven ? "md:gap-x-[150px]" : "md:gap-x-[200px]";

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between ${gapClass} min-h-[300px]`}
            >
              {isEven ? (
                <>
                  {/* Text Left */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-[40px] font-bold text-[#1f0d3f] w-[514px] leading-12">
                      {row.title}
                    </h2>
                    <p className="mt-4 text-lg leading-6 whitespace-pre-line">
                      {row.text}
                    </p>
                  </div>
                  {/* Image Right */}
                  <div className="w-full md:w-1/2 flex justify-end">
                    {row.image}
                  </div>
                </>
              ) : (
                <>
                  {/* Image Left */}
                  <div className="w-full md:w-1/2 flex justify-start">
                    {row.image}
                  </div>
                  {/* Text Right */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-[40px] font-bold text-[#1f0d3f] w-[514px] leading-12">
                      {row.title}
                    </h2>
                    <p className="mt-4 text-lg leading-6 whitespace-pre-line">
                      {row.text}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FloatingInfoRows;
