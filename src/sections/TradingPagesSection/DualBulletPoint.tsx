"use client";
import React, { ReactNode } from "react";
import { TickIcon } from "../../../public/icons/svgs";

interface BulletPoint {
  title: ReactNode;
  description: ReactNode;
}

interface SectionColumnProps {
  sectionTitle: string;
  sectionText: string;
  bulletPoints: BulletPoint[];
}

interface DualBulletPointSectionProps {
  generalTitle?: string;
  generalDescription?: string;
  leftSections: SectionColumnProps[];
  rightSections: SectionColumnProps[];
}
export const DualBulletPointSection: React.FC<DualBulletPointSectionProps> = ({
  generalTitle,
  generalDescription,
  leftSections,
  rightSections,
}) => {
  const renderSection = (section: SectionColumnProps, index: number) => (
    <div key={index} className="mb-12 w-full md:w-[592px]">
      <h2 className="font-secondary text-4xl font-bold text-[#0dae94]">
        {section.sectionTitle}
      </h2>
      <p className="mt-4 text-lg leading-7 max-w-[584px]">
        {section.sectionText}
      </p>

      <div className="mt-10 flex flex-col gap-6 w-[522px]">
        {section.bulletPoints.map((point, idx) => {
          const isLast = idx === section.bulletPoints.length - 1;
          return (
            <div
              key={idx}
              className={`${!isLast ? "pb-4 border-b border-[#9E9E9E]" : ""}`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 pt-1">
                  <TickIcon />
                </div>
                <div>
                  <div className="text-[22px] text-[#1f0d3f] font-semibold">
                    {point.title}
                  </div>
                  <p className="text-lg mt-4 leading-7">{point.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="mt-30">
      <div className="max-w-6xl mx-auto">
        {generalTitle && (
          <h1 className="font-secondary text-4xl font-bold text-center text-[#0dae94]">
            {generalTitle}
          </h1>
        )}
        {generalDescription && (
          <p className="text-lg text-center max-w-4xl mx-auto mt-4">
            {generalDescription}
          </p>
        )}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start gap-[14px]">
          <div className="flex flex-col gap-12 w-full md:w-[592px]">
            {leftSections.map(renderSection)}
          </div>
          <div className="flex flex-col gap-12 w-full md:w-[592px]">
            {rightSections.map(renderSection)}
          </div>
        </div>
      </div>
    </section>
  );
};
