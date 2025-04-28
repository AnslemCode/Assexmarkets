import React from "react";
import clsx from "clsx";
import Badge from "@/components/Badge";
import { CheckCircle } from "../../public/icons/AccountTypesIcons";

interface PlanCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon?: React.ReactNode;
  cta?: React.ReactNode;
  highlight?: boolean;
  highlightLabel?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  benefits,
  icon,
  cta,
  highlight = false,
  highlightLabel = "🌟 Best Value",
}) => {
  return (
    <div
      className={clsx(
        "relative w-[352px] min-h-[700px] rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ease-in-out",
        "bg-white shadow-lg hover:bg-[#F3FFFD] hover:shadow-xl hover:border-[#00CCB1] hover:border-2",
        highlight &&
          "border-2 border-[#00CCB1] shadow-[0_0_60px_0_rgba(0,204,177,0.3)]"
      )}
    >
      {/* Highlight Badge */}
      {highlight && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00CCB1] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md z-10">
          {highlightLabel}
        </div>
      )}

      {/* Icon */}
      {icon && <div className="absolute top-0 right-0">{icon}</div>}

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Badge */}
        <div className="my-6">
          <Badge text={title} />
        </div>

        {/* Description */}
        <div className="mt-12 mb-16">
          <p className="text-lg text-[#3F4550]">{description}</p>
        </div>

        {/* CTA */}
        {cta && <div className="w-full mt-auto mb-8">{cta}</div>}

        {/* Benefits */}
        <ul className="space-y-3">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-lg text-[#3F4550] leading-snug"
            >
              <span className="flex-shrink-0 mt-[2px]">
                <CheckCircle />
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
